import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, FlatList,ScrollView } from 'react-native'
import { Container, Header, Content, Icon, Text, Tab, Tabs, ScrollableTab, TabHeading, View, Card } from 'native-base'

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'

import BOD from './BOD'
import VIDEOS from './Videos'

import api from '../../../Constants/Api'
import UserData from '../../../Constants/Constants'


import Style from '@Theme/Style'
import Styles from '@Screen/Public/Channel/Style'
import ModalShare from './../Home/ModalShare'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
        }
    }

    componentWillMount(){
        console.log("===componentWillMount===");
        //-----------------------get subscribe_status--------------------------//
        api.signIn(UserData).then((res)=>{
            console.log('sinIn_response_channel____');
            
            global.subscribe_channel_id =  res.result[0].authormeta.subscribe_channel_id;
            console.log("subscribe_channel_id of Details====");
            console.log(global.subscribe_channel_id)

            var subscribe_channel_id = res.result[0].authormeta.subscribe_channel_id;
            
            var subscribe_status = true;
            for (const key in subscribe_channel_id) {
                if (subscribe_channel_id.hasOwnProperty(key)) {
                    const element = subscribe_channel_id[key];
                    console.log("===data of SubscribeDataID===" + element);

                    if(element== global.channel_id){
                        subscribe_status = false;
                    }
                }
            }
            this.setState({subscribe_status: subscribe_status});
        })
        .catch((error) => {
            console.log(error);
        })
        //---------------------------------------------------------------------//
        //------------------------more Video data--------------------------//
            var channelVideo = [];
            var post_id = global.channel_id;
            var channel_id = global.channel_id;
            var channel_name = "";
            var channel_image ="https://image.shutterstock.com/image-vector/question-mark-icon-vector-design-260nw-1404789851.jpg";
            var channel_logo = "https://image.shutterstock.com/image-vector/question-mark-icon-vector-design-260nw-1404789851.jpg";
            
            global.channel_data.map((data, index)=>{
                if(channel_id == data.channel_id){
                    channel_name = data.channel_name;
                    channel_image = data.image;
                    channel_logo = data.logo;
                }
            });
            global.channel_image = channel_image;
            global.channel_logo = channel_logo;
            global.channel_name = channel_name;

            console.log("===channel_id==="+channel_id);
            console.log("===channel_logo==="+global.channel_logo)

            global.feedData.map((data, index)=>{
                if(channel_id == data.channel_id){
                    channelVideo[ index] = {
                        realchannel_id: data.realchannel_id,
                        channel_id: data.channel_id,
                        video: data.video,
                        image: data.image,
                        logo: data.logo,
                        title: data.title,
                        tags: data.tags + " ",
                        views: data.views,
                        time: data.time,
                        channelVideo: "",
                        aboutData: ""
                    };
                }
            });

            var filtered = channelVideo.filter(function (el) {
                return el != null;
            });
            console.log('/////////////////////////filtered');
            console.log(filtered);
            global.channelVideo =filtered;
            this.setState({channelVideo: global.channelVideo});
            console.log("===global.channelVideo===");
            console.log(global.channelVideo);
        //--------------------------------------------------------------//
        
        //------------------ get about data ----------------------------//
        console.log("===post_id===" + post_id);
        api.getAboutData(post_id).then((res)=>{

            console.log('getAboutdata_response____');
            var unFiltered_aboutData = res.result[0].post_content;
            var aboutData = unFiltered_aboutData.replace(/<p>/g,'').replace(/<\/p>/g,'');
            
            console.log("===aboutData===" + aboutData);  
            this.setState({aboutData: aboutData});

            //---------------- get Bod data -------------------------------//
            if(res.result[0].postmeta.actor_id){
                var search_actorId = res.result[0].postmeta.actor_id;
                var bodData = [];
                for (const key in search_actorId) {
                    if (search_actorId.hasOwnProperty(key)) {
                        const actor_id = search_actorId[key];
                        console.log("===search_actorId===" + actor_id);
                        
                        api.getBodData(actor_id).then((res)=>{
                            console.log('getBodData_response____');
                            global.bodDataAvator = res.result[0].post_title;
                            global.bodDataAvatorName = res.result[0].featuredimage;
                            console.log("===bodDataAvator==="+ global.bodDataAvator);
                            console.log("===bodDataAvatorName==="+ global.bodDataAvatorName);

                            bodData[key] = {
                                bodDataAvator: res.result[0].featuredimage,
                                bodDataAvatorName: res.result[0].post_title
                            };
                        console.log(res)
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                    }
                }

                console.log("===bodData===");
                console.log(bodData);
                this.setState({bodData: bodData});
                
            }else{
                this.setState({boadData: []});
            }
            //------------------------------------------------------------//
        })
        .catch((error) => {
            console.log(error);
        })
    }

    _subscribe(){
        this.setState({subscribe_status: !this.state.subscribe_status});
        var channel_id = global.channel_id;
        console.log('===id===' + global.channel_id);
        var user_id = global.user_id;
        console.log("===user_id===" + global.user_id)
        api.subscribe(channel_id, user_id).then((res)=>{
            console.log('subscribe_response____');
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    _goToDetails(item){
        global.videoData = item;
        console.log("global.videoData");
        console.log(global.videoData);
        global.watchLater = 0;
        global.channel_id =item.channel_id;
        NavigationService.navigate('PublicDetail');
    }

    render() {
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                        <Text style={Styles.title}>{global.channel_name}</Text>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layoutDefault}>
                <ScrollView>
                    <View style={Styles.channel}>
                        <Image source={{ uri: global.channel_image }} style={Styles.channelImg} />
                        <View style={Styles.header_logo}>
                            <Image source={{ uri: global.channel_logo }} style={Styles.channelLogo} />
                            <TouchableOpacity style={this.state.subscribe_status? Styles.subscribe_button: Styles.unsubscribe_button} onPress={() => this._subscribe()}>
                                {this.state.subscribe_status?
                                    <Text style={{color: '#ffffff', fontSize: 12}}>SUBSCRIBE</Text>
                                    :                                
                                    <Text style={{color: '#ffffff', fontSize: 12}}>UNSUBSCRIBE</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#171841' }}
                        renderTabBar={() => <ScrollableTab style={{ backgroundColor: "#FFF" }} />}>
                        <Tab heading heading="VNS"
                            tabStyle={Styles.tabStyle}
                            textStyle={Styles.textStyle}
                            activeTabStyle={Styles.activeTabStyle}
                            activeTextStyle={Styles.activeTextStyle}>

                            <Content contentContainerStyle={Style.layoutDefault}>
                                <FlatList
                                        data={this.state.channelVideo}
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item, separators }) => (
                                            <View>
                                                <TouchableOpacity onPress={() => this._goToDetails(item)}>
                                                    <View style={Styles.channel}>
                                                        <Image source={{ uri: item.image }} style={Styles.channelImg} />
                                                    </View>
                                                </TouchableOpacity>
                                                <View style={Styles.channelInfo}>
                                                    <View style={Styles.subscribe}>
                                                        <Image source={{ uri: item.logo }} style={Styles.channelLogo_info} />
                                                        
                                                        {/* <View style={Styles.subscribeInfo}>
                                                            <Text style={Styles.subscribeView}>14,935 subscribers</Text>
                                                        </View>
                                                        <Icon name='play-video' type="Foundation" style={Styles.subscribeIcon} /> */}
                                                        <View style={{marginLeft: 15}}>
                                                            <Text style={{fontSize: 15}}>{item.title}</Text>
                                                            <Text style={{fontSize: 12, color: '#b7bac9'}}>{item.channel_name} {item.time}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        )}
                                    />
                            </Content>
                        </Tab>
                        <Tab heading="ABOUT"
                            tabStyle={Styles.tabStyle}
                            textStyle={Styles.textStyle}
                            activeTabStyle={Styles.activeTabStyle}
                            activeTextStyle={Styles.activeTextStyle}>

                            <Content contentContainerStyle={Style.layoutDefault}>
                                <View style={{paddingLeft: '5%', paddingRight: '5%'}}>
                                    <Text style={{fontSize: 17, marginBottom: 5, marginTop: 25}}>{this.state.aboutData}</Text>

                                    {/* <Text style={{fontSize: 17, marginBottom: 5, marginTop: 25}}>ECR Minerals</Text> */}
                                    {/* <Text style={{marginBottom: 15}}>
                                        ECR Mineral plc ("the Company") is a mineral exploration and development company incorporated in England & Wales. ECR's wholly owned Australian subsidiary Mercator Gold Australia Pty Ltd has 100% ownership of the Avoca, Bailieston, Moormbool and Timor gold exploration licences in Central Victoria, Australia.
                                    </Text>
                                    <Text style={{marginBottom: 15}}>
                                        Exploration for gold in Victoria is ECR's current focus. A map of the Victorian licences can be viewed here. For the latest updates, please see our regulatory announcements.
                                    </Text>
                                    <Text style={{marginBottom: 15}}>
                                        ECR has earned a 25% interest in the Danglay epithermal gold project, an advanced exploration project located in a prolific gold and copper mining district in the north of the Philippines. An Nl43-101 technical report was coompleted in respect of the Danglay project in December 2015
                                    </Text> */}
                                </View>
                            </Content>
                        </Tab>
                        <Tab heading="BOD"
                            tabStyle={Styles.tabStyle}
                            textStyle={Styles.textStyle}
                            activeTabStyle={Styles.activeTabStyle}
                            activeTextStyle={Styles.activeTextStyle}>

                            <Content contentContainerStyle={Style.layoutDefault}>
                                <FlatList
                                    data={this.state.bodData}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, separators }) => (
                                        <View style={Styles.videoCaption}>
                                            <TouchableOpacity onPress={() => {
                                                NavigationService.navigate('PublicDetail')
                                            }}>
                                                <Image source={{ uri: item.bodDataAvator }} style={Styles.videoImg} />
                                            </TouchableOpacity>
                                            <View style={Styles.videoDetails}>
                                                <Text style={Styles.videoDescript}>{item.bodDataAvatorName}</Text>
                                                {/* <Text style={Styles.videoView}>{item.view}</Text> */}
                                            </View>
                                            
                                        </View>
                                    )}
                                />
                            </Content>
                        </Tab>
                        <Tab heading="MORE INFO"
                            tabStyle={Styles.tabStyle}
                            textStyle={Styles.textStyle}
                            activeTabStyle={Styles.activeTabStyle}
                            activeTextStyle={Styles.activeTextStyle}>

                            <Content contentContainerStyle={Style.layoutDefault}>
                                <View style={Styles.about}>
                                    <Text style={Styles.aboutDesc}>Buy ECR Minerals plc for GBp</Text>
                                    <Text style={Styles.aboutDesc}>Current Price 0.92 </Text>
                                    <Text style={Styles.aboutDesc}>High 0.99 Low 0.92 </Text>
                                    <Text style={Styles.aboutDesc}>52 Week Range 0.60_ 1.18</Text>
                                    <Text style={Styles.aboutDesc}>Market Cap 4.10M</Text>
                                    <Text style={Styles.aboutDesc}>Outstanding Shares 445.84M</Text>
                                    <Text style={Styles.aboutDesc}>Open 0.99</Text>
                                    <Text style={Styles.aboutDesc}>Close 0.98</Text>
                                    <Text style={Styles.aboutDesc}>Volume 1.07M</Text>

                                </View>
                            </Content>
                        </Tab>
                    </Tabs>
                </ScrollView>  
            </Content>
            <View style={Style.footerBg}>
                <View style={Style.fTab}>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon name="home" type="FontAwesome" style={Style.iconActive} />
                        <Text style={Style.textActive}>Feed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicTrending')
                    }}>
                        <Icon name='ios-flame' type='Ionicons' style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicSubscription')
                    }}>
                        <Icon name="subscriptions" type="MaterialIcons" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Subscriptions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicInbox')
                    }}>
                        <Icon name="mail" type="Entypo" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicLibrary')
                    }}>
                        <Icon name="video-library" type="MaterialIcons" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Watch List</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container >
        
    }
}