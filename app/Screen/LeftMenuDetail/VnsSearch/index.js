import React from 'react';
import { StatusBar, TouchableOpacity, ImageBackground, Share, Image, FlatList, TextInput } from 'react-native'
import { Container, Header, Switch, Content, Icon, Text, Button,   Tab, Tabs, ScrollableTab, TabHeading, View, Card } from 'native-base'
import NavigationService from '@Service/Navigation'
import Style from '@Theme/Style'
import Styles from '@Screen/LeftMenuDetail/VnsSearch/Style'

import VNS from './VNS'
import VIDEOS from './Videos'
import api from '../../../Constants/Api'
import UserData from '../../../Constants/Constants'

export default class extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: '',
            channel_data: global.channel_data,
            feedData: global.feedData,
        };
    }

    componentWillMount(){
        this._isMounted = true;
        this._getSubscribe();
        global.select = [];
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    
    _getSubscribe(){
       
        api.signIn(UserData).then((res)=>{
            console.log('sinIn_response_companies____');
            
            global.subscribe_channel_id =  res.result[0].authormeta.subscribe_channel_id;
            console.log("subscribe_channel_id of companies====");
            console.log(global.subscribe_channel_id)

            var channel_data = [];

            var subscribe_channel_id = res.result[0].authormeta.subscribe_channel_id;
            
            global.channel_data.map((data, index)=>{
                var subscribe_status = true;
                for (const key in subscribe_channel_id) {
                    if (subscribe_channel_id.hasOwnProperty(key)) {
                        const element = subscribe_channel_id[key];
                        console.log("===data of SubscribeDataID===" + element);
    
                        if(element== data.channel_id){
                            subscribe_status = false;
                        }
                    }
                }
                channel_data[ index] = {
                    channel_id: data.channel_id,
                    logo: data.logo,
                    channel_name: data.channel_name,
                    image: data.image,
                    subscribe_status: subscribe_status
                };
            });
        
            global.channel_data = channel_data;
            console.log("===channel_data of companies===");
            console.log(global.channel_data);
            this.setState({channel_data: channel_data});

        })
        .catch((error) => {
            console.log(error);
        })
       
    }

    _subscribe(item){
        // this.state.channel_data.map((data, index)=>{
        //     if(data.channel_id == item.channel_id){
        //         data.subscribe_status = !item.subscribe_status;
               
        //     }
        // });
        // item.subscribe_status = !item.subscribe_status;
        // console.log("button_click===");
        // console.log(this.state.channel_data);
        // this.setState({channel_data: this.state.channel_data});
        // global.channel_data = this.state.channel_data;
        
        var channel_id = item.channel_id;
        console.log('===id===' + channel_id);
        var user_id = global.user_id;
        console.log("===user_id===" + global.user_id)
        api.subscribe(channel_id, user_id).then((res)=>{
            console.log('subscribe_response____');
            console.log(res);
           this._getSubscribe();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    _removeSearchKeyword(){
        this.setState({searchKeyword: ''});
    }

    _goToDetails(item){
        global.videoData = item;
        console.log("global.videoData");
        console.log(global.videoData);
        global.watchLater = 0;
        global.channel_id =item.channel_id;
        NavigationService.navigate('PublicDetail');
    }
    
    _goToChannel(item){
        global.channel_id =item.channel_id;
        NavigationService.navigate('PublicChannel');
        console.log('//////////////////////////////////////////home_channel_id'+global.channel_id)
    }

    _search(){
        console.log("global.select====")
        console.log(+ global.select)
        console.log("active" + global.select.i)
        
            if(global.select.i==1){
                this._companySearch();
                
            }else{
                this._videoSearch();
            }
    }

    _videoSearch(){
        this.setState({spinner: true});
        console.log("searchKeywork===" + this.state.searchKeyword);
    
        api.videoSearch(this.state.searchKeyword).then((res)=>{
            console.log('videoSearch_response____');
            console.log(res);
            if(res.respond==1){
                this.setState({spinner: false});
        
                console.log("videoSearch Success!!!!!!!!");
                var unFilteredSearchVideoData = [];
                res.result.map((data, index)=>{
                    global.feedData.map((feedData, index)=>{
                        if(data.ID == feedData.id){
                            unFilteredSearchVideoData[index] = feedData;
                        }
                    });  
                });
                console.log("unFilteredSearchVideoData===");
                console.log(unFilteredSearchVideoData);
        
                var filteredSearchVideoData = unFilteredSearchVideoData.filter(function (el) {
                    return el != null;
                });
        
                this.setState({feedData: filteredSearchVideoData});
                console.log("searchVideoData===");
                console.log(this.state.feedData);
        
            }else{
                Alert.alert(
                    'Sorry!',
                    res.message,
                    [
                        {text: 'OK', onPress: () =>  this.setState({spinner: false})},
                    ],
                    {cancelable: false},
                );
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    _companySearch(){
      this.setState({spinner: true});
      console.log("searchKeywork===" + this.state.searchKeyword);
  
        api.companySearch(this.state.searchKeyword).then((res)=>{
            console.log('companySearch_response____');
            console.log(res);
            if(res.respond==1){
                this.setState({spinner: false});
        
                console.log("companySearch Success!!!!!!!!");
                var unFilteredSearchCompanyData = [];
                res.result.map((data, index)=>{
                    global.channel_data.map((channel_data, index)=>{
                        if(data.ID == channel_data.channel_id){
                            unFilteredSearchCompanyData[index] = channel_data;
                        }
                    });  
                });
                console.log("unFilteredSearchCompanyData===");
                console.log(unFilteredSearchCompanyData);
        
                var filteredSearchCompanyData = unFilteredSearchCompanyData.filter(function (el) {
                    return el != null;
                });
        
                this.setState({channel_data: filteredSearchCompanyData});
                console.log("searchcompanyData===");
                console.log(this.state.channel_data);
        
            }else{
                Alert.alert(
                    'Sorry!',
                    res.message,
                    [
                        {text: 'OK', onPress: () =>  this.setState({spinner: false})},
                    ],
                    {cancelable: false},
                );
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        return<Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#370190" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                        <Text style={Styles.title}>VNS Search</Text>
                    </View>
                </View>
            </Header>

            <View style={{paddingLeft: '10%', paddingRight: '10%',}}>
                <View style={{ flexDirection: 'row', height: 30, borderWidth: 0.5, borderRadius: 10, borderColor:"#b7bac9", justifyContent: 'space-between', marginTop: 20, marginBottom: 20 }}>
                    <View style={{flexDirection: 'row', height: 30, width: '70%'}}>
                        <Icon name='search' type='MaterialIcons' style={Styles.searchIcon} />
                        <TextInput  placeholder='Company Name/Ticker Code' placeholderTextColor='rgba(0,0,0,0.2)' onChangeText={(text) => this.setState({searchKeyword: text})} value={this.state.searchKeyword}  style={Styles.searchInput} />
                    </View>
                    <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginRight: 5, display: this.state.searchKeyword=="" ?'none':'flex'  }} onPress={()=>this._removeSearchKeyword()}>
                        <Image source={require('@Asset/images/searchCloseImg.png')} style={{width: 15, height: 15}}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{height: 30, backgroundColor: '#f20c14', alignItems: 'center', justifyContent: 'center', }} onPress={() => this._search()}>
                    <Text style={{color: '#FFF', fontSize: 15}}>Search</Text>
                </TouchableOpacity>
            </View>
            
            
        
            <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f20c14' }} onChangeTab={(i, ref)=> global.select=i}
                renderTabBar={() => <ScrollableTab style={{ backgroundColor: "#FFF" }} />}>
                <Tab heading heading="VNS"
                    tabStyle={Styles.tabStyle}
                    textStyle={Styles.textStyle}
                    activeTabStyle={Styles.activeTabStyle}
                    activeTextStyle={Styles.activeTextStyle}>

                    <Content contentContainerStyle={Style.layoutDefault}>
                        <FlatList
                            data={this.state.feedData}
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
                                            <TouchableOpacity onPress={() => this._goToChannel(item)}>
                                                <Image source={{ uri: item.logo }} style={Styles.channelLogo_info} />
                                            </TouchableOpacity>
                                            {/* <View style={Styles.subscribeInfo}>
                                                <Text style={Styles.subscribeView}>14,935 subscribers</Text>
                                            </View>
                                            <Icon name='play-video' type="Foundation" style={Styles.subscribeIcon} /> */}
                                            <View style={{marginLeft: 15}}>
                                                <Text style={{fontSize: 15}}>{item.title}</Text>
                                                <Text style={{fontSize: 12, color: '#b7bac9'}}>{item.channel_name} {item.views}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </Content>
                </Tab>
                
                <Tab heading="Companies"
                    tabStyle={Styles.tabStyle}
                    textStyle={Styles.textStyle}
                    activeTabStyle={Styles.activeTabStyle}
                    activeTextStyle={Styles.activeTextStyle}>

                    <Content contentContainerStyle={Style.layoutDefault}>
                        <View style={Styles.videoInfoDetails}>
                            <FlatList
                                data={this.state.channel_data}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, separators }) => (
                                    <View style={Styles.videoCaption}>
                                        <TouchableOpacity onPress={() => this._goToChannel(item)}>
                                            <Image source={{ uri: item.logo }} style={Styles.videoImg} />
                                        </TouchableOpacity>
                                        <View style={Styles.videoDetails}>
                                            <Text style={Styles.videoDescript}>{item.channel_name}</Text>
                                            {/* <Text style={Styles.videoView}>{item.view}</Text> */}
                                        </View>
                                        <TouchableOpacity style={item.subscribe_status? Styles.subscribe_button: Styles.unsubscribe_button} onPress={() => this._subscribe(item)}>
                                            {item.subscribe_status?
                                                <Text style={{color: '#ffffff', fontSize: 12}}>SUBSCRIBE</Text>
                                                :                                
                                                <Text style={{color: '#ffffff', fontSize: 12}}>UNSUBSCRIBE</Text>
                                            }
                                        </TouchableOpacity>
                                        {/* <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.videoIcon} onPress={() => this.refModalShare.open()} /> */}
                                    </View>
                                )}
                            />
                        </View>
                    </Content>
                </Tab>
            </Tabs>

            {/* <ModalShare
                ref={(c) => { this.refModalShare = c }}
            /> */}
        </Container >
    }
}