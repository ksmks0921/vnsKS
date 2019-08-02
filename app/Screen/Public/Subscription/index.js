// import React from 'react'
// import { StatusBar, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
// import { Container, Header, Content, Icon, Text, Card, Button, View } from 'native-base'

// import NavigationService from '@Service/Navigation'
// import Modal from 'react-native-modalbox'

// import SUBSCRIPTION from './Subscription'
// import VIDEO from './Video'
// import NEWS from './News'

// import Style from '@Theme/Style'
// import Styles from '@Screen/Public/Subscription/Style'
// import ModalShare from './../Home/ModalShare'
// import ModalMemberAccount from './../Home/ModalMemberAccount'
// import UserData from '../../../Constants/Constants'
// import api from '../../../Constants/Api'
// import BottomTab from '../PublicComponent/BottomTab';

// export default class extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isDisabled: false,
//             isOpen: false,
//             subscribeVideo: [],
//             avatarSource: global.avatar
//         }
//     }
//     componentWillMount(){
//         console.log("===componentWillMount of subscription===");
//         console.log("UserData===");
//         console.log(UserData);
//         api.signIn(UserData).then((res)=>{
//             console.log('sinIn_response_for subscritbe channelId____');
//             // console.log(res.result[0].authormeta.subscribe_channel_id);

//             if(res.result[0].authormeta.subscribe_channel_id){
//                 var getSubscribeId = res.result[0].authormeta.subscribe_channel_id;
//                 var unFilteredSubscribeId = [];
//                 var unFiltered_subscribedChannel_data = [];
//                 for (const key in getSubscribeId) {
//                     if (getSubscribeId.hasOwnProperty(key)) {
//                         const element = getSubscribeId[key];
//                         console.log("===data of SubscribeDataID===" + element);

//                         global.feedData.map((data, index)=>{
//                             if(element == data.channel_id){
//                                 unFilteredSubscribeId[key] = data;
//                                 if(data){
//                                     global.channel_data.map((channel_data, index)=>{
//                                         if(channel_data.channel_id == element){
//                                             unFiltered_subscribedChannel_data[index] = channel_data
//                                         }
//                                     });
//                                 }
//                             }
//                         });
//                     }
//                 }
//                 console.log("===subscribedchannel_data===");
//                 console.log(unFiltered_subscribedChannel_data);

//                 var filtered_subscribedChannel_data = unFiltered_subscribedChannel_data.filter(function (el) {
//                     return el != null;
//                 });

//                 global.subscribed_channelData = filtered_subscribedChannel_data;
//                 this.setState({subscribed_channelData: subscribed_channelData});
//                 console.log("===subscribed_channelData===");
//                 console.log(global.subscribed_channelData);
//                 this.state.selectedsbscribelId = global.subscribed_channelData[0].channel_id;
//             }else{
//                 this.state.selectedsbscribelId =[];
//             }
//                 this._getVideoData(this.state.selectedsbscribelId);
            
                
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//         //----------------------- get subscribeId------------------------//
//         // var getSubscribeId = global.allFeedData[0].author[0].authormeta.subscribe_channel_id;
//         // var unFilteredSubscribeId = [];
//         // var unFiltered_subscribedChannel_data = [];
//         // for (const key in getSubscribeId) {
//         //     if (getSubscribeId.hasOwnProperty(key)) {
//         //         const element = getSubscribeId[key];
//         //         console.log("===data of SubscribeDataID===" + element);

//         //         global.feedData.map((data, index)=>{
//         //             if(element == data.channel_id){
//         //                 unFilteredSubscribeId[key] = data;
//         //                 if(data){
//         //                     global.channel_data.map((channel_data, index)=>{
//         //                         if(channel_data.channel_id == element){
//         //                             unFiltered_subscribedChannel_data[index] = channel_data
//         //                         }
//         //                     });
//         //                 }
//         //             }
//         //         });
//         //     }
//         // }
        
//     }

//     componentDidMount(){
//         global.active_page = 3;
//     }
//     //------------------------get Video data----------------------------//
//     _getVideoData(selectedsbscribelId){
//         console.log("===this.state.selectedsbscribelId===" + this.state.selectedsbscribelId);
//         var channelVideo = [];
//         var post_id = selectedsbscribelId;
//         var channel_id = selectedsbscribelId;
//         var channel_name = "";
//         var channel_image ="https://image.shutterstock.com/image-vector/question-mark-icon-vector-design-260nw-1404789851.jpg";
//         var channel_logo = "https://image.shutterstock.com/image-vector/question-mark-icon-vector-design-260nw-1404789851.jpg";
        
//         global.channel_data.map((data, index)=>{
//             if(channel_id == data.channel_id){
//                 channel_name = data.channel_name;
//                 channel_image = data.image;
//                 channel_logo = data.logo;
//             }
//         });
//         global.channel_image = channel_image;
//         global.channel_logo = channel_logo;
//         global.channel_name = channel_name;

//         console.log("===channel_id==="+channel_id);
//         console.log("===channel_logo==="+global.channel_logo)

//         global.feedData.map((data, index)=>{
//             if(channel_id == data.channel_id){
//                 channelVideo[ index] = {
//                     realchannel_id: data.realchannel_id,
//                     channel_id: data.channel_id,
//                     video: data.video,
//                     image: data.image,
//                     logo: data.logo,
//                     title: data.title,
//                     tags: data.tags + " ",
//                     views: data.views,
//                     time: data.time,
//                     channelVideo: "",
//                     aboutData: ""
//                 };
//             }
//         });

//         var filtered = channelVideo.filter(function (el) {
//             return el != null;
//         });
//         console.log('/////////////////////////filtered');
//         console.log(filtered);
//         global.channelVideo =filtered;
//         this.setState({channelVideo: global.channelVideo});
//         console.log("===global.channelVideo===");
//         console.log(global.channelVideo);
//     }
//     //--------------------------------------------------------------//

//     _channelSelect(item){
//         global.selectedsbscribelId = item.channel_id;
//         this.setState({selectedsbscribelId: global.selectedsbscribelId});
//         this._getVideoData(item.channel_id);
//         // global.subscribeId.map((data, index)=>{
//         //     if(this.state.selectedsbscribelId == data.channel_id){
//         //         this.state({subscribeVideo: data});
//         //     }
//         // });
//     }

//     _goToDetails(item){
//         global.videoData = item;
//         console.log("global.videoData");
//         console.log(global.videoData);
//         global.watchLater = 0;
//         global.channel_id =item.channel_id;
//         NavigationService.navigate('PublicDetail');
//     }
    
//     _goToChannel(item){
//         global.channel_id =item.channel_id;
//         NavigationService.navigate('PublicChannel');
//         console.log('//////////////////////////////////////////home_channel_id'+global.channel_id)
//     }

//     render() {
//         return <Container>
//             <Header style={Style.navigation}>
//                 <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
//                 <View style={Style.navigationBar}>
//                     <View style={Style.navLeft}>
//                         <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
//                             NavigationService.navigate('PublicHome')
//                         }} />
//                     </View>
//                     <View style={Style.navMiddle}>
//                         <Text style={Style.navMiddleDesc}>Subscription</Text>
//                     </View>
//                     <TouchableOpacity style={Style.navRight} onPress={() => {NavigationService.navigate('PublicProfile')}}>
//                         <Image source={{ uri: this.state.avatarSource }} style={Style.headerImg} />
//                     </TouchableOpacity>
//                 </View>
//             </Header>

//             <Content contentContainerStyle={Style.layoutDefault}>
//                 <View style={{height: 110}}>
//                     <FlatList
//                         data={this.state.subscribed_channelData}
//                         horizontal
//                         showsHorizontalScrollIndicator={false}
//                         renderItem={({ item, separators }) => (
//                             <TouchableOpacity onPress={() => this._channelSelect(item)}>
//                                 <View style={Styles.subscripDetails}>
//                                     <Image source={{ uri: item.logo }} style={Styles.subscripImg} />
//                                     <Text style={Styles.subscripDesc}>{item.channel_name}</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         )}
//                     />
//                 </View>  
//                 <View style={{marginTop: 0}}>
//                     <FlatList
//                         data={this.state.channelVideo}
//                         showsHorizontalScrollIndicator={false}
//                         renderItem={({ item, separators }) => (
//                             <View style={Styles.searchVideo}>
//                                 <TouchableOpacity onPress={() => this._goToDetails(item)}>
//                                     <View style={Styles.videoBot} />
//                                     <Image source={{ uri: item.image }} style={Styles.videoImg} />                                    
//                                 </TouchableOpacity>
//                                 <View style={Styles.videoReviews}>
//                                     <TouchableOpacity onPress={() => this._goToChannel(item)}>
//                                         <Image source={{ uri: item.logo }} style={Styles.logoImg} />
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => this._goToDetails(item)} style={Styles.videoDesc}>
//                                         <Text style={Styles.videoDesc}>{item.title}</Text>
//                                     </TouchableOpacity>
//                                     <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.videoShare} onPress={() => this.refModalShare.open(item)} />
//                                 </View>
//                                 <View style={Styles.videoComments}>
//                                     <Text style={Styles.videoDetails}>{item.channel_name}</Text>
//                                     <Text style={Styles.dot}>-</Text>
//                                     <Text style={Styles.videoDetails}>{item.views}</Text>
//                                     <Text style={Styles.dot}>-</Text>
//                                     <Text style={Styles.videoDetails}>{item.time}</Text>
//                                 </View>
//                             </View>
//                         )}
//                     />
//                 </View>
//             </Content>
//             <BottomTab/>
//             {/* <View style={Style.footerBg}>
//                 <View style={Style.fTab}>
//                     <TouchableOpacity style={Style.fIcons} onPress={() => {
//                         NavigationService.navigate('PublicHome')
//                     }}>
//                         <Icon name="home" type="FontAwesome" style={Style.iconInactive} />
//                         <Text style={Style.textInactive}>Feed</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={Style.fIcons} onPress={() => {
//                         NavigationService.navigate('PublicTrending')
//                     }}>
//                         <Icon name='ios-flame' type='Ionicons' style={Style.iconInactive} />
//                         <Text style={Style.textInactive}>Trending</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={Style.fIcons} onPress={() => {
//                         NavigationService.navigate('PublicSubscription')
//                     }}>
//                         <Icon name="subscriptions" type="MaterialIcons" style={Style.iconActive} />
//                         <Text style={Style.textActive}>Subscription</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={Style.fIcons} onPress={() => {
//                         this.props.navigation.replace('PublicInbox')
//                     }}>
//                         <Icon name="mail" type="Entypo" style={Style.iconInactive} />
//                         <Text style={Style.textInactive}>Nottification</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={Style.fIcons} onPress={() => {
//                         NavigationService.navigate('PublicLibrary')
//                     }}>
//                         <Icon name="video-library" type="MaterialIcons" style={Style.iconInactive} />
//                         <Text style={Style.textInactive}>Watch List</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View> */}

//             <ModalShare
//                 ref={(c) => { this.refModalShare = c }}
//             />
//             <ModalMemberAccount
//                 ref={(c) => { this.refModalMemberAccount = c }}
//             />
//         </Container >
//     }
// }

import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { Container, Header, Content, Icon, Text, Card, Button, View } from 'native-base'

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'

import SUBSCRIPTION from './Subscription'
import VIDEO from './Video'
import NEWS from './News'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Subscription/Style'
import ModalShare from './../Home/ModalShare'
import ModalMemberAccount from './../Home/ModalMemberAccount'
import UserData from '../../../Constants/Constants'
import api from '../../../Constants/Api'
import BottomTab from '../PublicComponent/BottomTab';

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
            subscribeVideo: [],
            avatarSource: global.avatar,
            subscribedChannel_data: global.channel_data
            
        }
    }
    componentDidMount(){
        global.active_page = 3;
        var unFilteredsubscribedChannel_data =[];
        global.channel_data.map((data, index)=>{
            if(!data.subscribe_status){
                unFilteredsubscribedChannel_data[index] = data;
            }
        })
        // console.log("subscribedChannel_data in subscribe Page", subscribedChannel_data)
        var filteredsubscribedChannel_data = unFilteredsubscribedChannel_data.filter(function (el) {
            return el != null;
        });

        console.log("filteredsubscribedChannel_data", filteredsubscribedChannel_data)

        this.setState({subscribedChannel_data: filteredsubscribedChannel_data})
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

    render() {
        console.log("===subscription render===")
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                    </View>
                    <View style={Style.navMiddle}>
                        <Text style={Style.navMiddleDesc}>Subscription</Text>
                    </View>
                    <TouchableOpacity style={Style.navRight} onPress={() => {NavigationService.navigate('PublicProfile')}}>
                        <Image source={{ uri: this.state.avatarSource }} style={Style.headerImg} />
                    </TouchableOpacity>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={{marginTop: 20}}>
                {console.log("global.channel_data in Subscription page",global.channel_data )}
                    <FlatList
                        data={this.state.subscribedChannel_data}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                                <TouchableOpacity style={index%2==0? Styles.companyItem_gray : Styles.companyItem} onPress={() => this._goToChannel(item)}>
                                    <Image source={{ uri: item.logo }} style={Styles.subscripImg} />
                                    <Text style={Styles.subscripDesc}>{item.channel_name}</Text>
                                </TouchableOpacity>
                            
                        )}
                    />

                </View>
                <View style={{marginTop: 0}}>
                </View>
            </Content>
            <BottomTab/>
            <ModalShare
                ref={(c) => { this.refModalShare = c }}
            />
            <ModalMemberAccount
                ref={(c) => { this.refModalMemberAccount = c }}
            />
        </Container >
    }
}