import React from 'react'
import { StatusBar, TouchableOpacity, ImageBackground, Share, Image, FlatList } from 'react-native'
import { Container, Header, Switch, Content, Icon, Text, Card, Button, View } from 'native-base'

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import ModalShare from './../Home/ModalShare'
import ModalMemberAccount from './../Home/ModalMemberAccount'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Library/Style'
import UserData from '../../../Constants/Constants'
import api from '../../../Constants/Api'
import BottomTab from '../PublicComponent/BottomTab';

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
            switch_status: true,
            spinner: false,
            subscribe_status: true,
            videoData: global.videoData,
            detailShow: false,
            avatarSource: global.avatar,
        }
    }

    componentWillMount(){
        console.log("===componentWillMount of watch_list===");
        // var watch_later = global.allFeedData[0].author[0].authormeta.watch_later;
        // var unFilteredWatchLaterData = [];
        // for (const key in watch_later) {
        //     if (watch_later.hasOwnProperty(key)) {
        //         const element = watch_later[key];
        //         console.log("===data of listID===" + element);

        //         global.feedData.map((data, index)=>{
        //             if(element == data.id){
        //                 unFilteredWatchLaterData[key] = data;
        //             }
        //         });
        //     }
        // }
        // console.log("watchLaterData");
        // console.log(unFilteredWatchLaterData)

        // var filteredWatchLaterData = unFilteredWatchLaterData.filter(function (el) {
        //     return el != null;
        // });

        // global.watchLaterData = filteredWatchLaterData;
        // this.setState({watchLaterData: filteredWatchLaterData});
        // console.log("===filtered watch_later data===");
        // console.log(global.watchLaterData);

        api.signIn(UserData).then((res)=>{
            console.log('sinIn_response_for watch_later____');
            console.log(res.result[0].authormeta.watch_later);

            var getWatch_laterId = res.result[0].authormeta.watch_later;
           
            var unFilteredWatchLaterData = [];
            for (const key in getWatch_laterId) {
                if (getWatch_laterId.hasOwnProperty(key)) {
                    const element = getWatch_laterId[key];
                    console.log("===data of watchLaterID===" + element);

                    global.feedData.map((data, index)=>{
                        if(element == data.channel_id){
                            unFilteredWatchLaterData[key] = data;
                        }
                    });
                }
            }
            console.log("===watchLaterData===");
            console.log(unFilteredWatchLaterData);

            var filteredWatchLaterData = unFilteredWatchLaterData.filter(function (el) {
                return el != null;
            });
    
            global.watchLaterData = filteredWatchLaterData;
            this.setState({watchLaterData: filteredWatchLaterData});
            console.log("===filtered watch_later data===");
            console.log(global.watchLaterData);
                
        })
        .catch((error) => {
            console.log(error);
        })
    }

    componentDidMount(){
        global.active_page = 5;
    }

    _videoPlay(item){
        global.videoData = item;
        global.channelDetail = global.watchLaterData;
        global.watchLater = 1;
        NavigationService.navigate('PublicDetail');
    }
    
    render() {
        console.log("===Detail_render===");
        return <Container>
            <StatusBar backgroundColor="#370190" animated barStyle="light-content" />
            <Header style={Style.navigation}>
                <StatusBar backgroundColor='#370190' animated barStyle='light-content' />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type='MaterialIcons' style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                    </View>
                    <View style={Style.navMiddle}>
                        {/* <Text style={Style.navMiddleDesc}>VNS Watch List</Text> */}
                    </View>
                    <TouchableOpacity style={Style.navRight} onPress={() => {NavigationService.navigate('PublicProfile')}}>
                        <Image source={{ uri: this.state.avatarSource }} style={Style.headerImg} />
                    </TouchableOpacity>
                </View>
            </Header>
            <View style={Styles.detailImg} >
                <Text style={{fontSize: 20}}>Watch Later Playlist</Text>
                <Text style={{fontSize: 18}}> </Text>
                <TouchableOpacity onPress={() => this._videoPlay(this.state.watchLaterData[0])} style={{alignItems: 'flex-end'}}>
                    <Image style={{width: 70, height: 70}} source={require('@Asset/images/videoPlay.png')} />
                </TouchableOpacity>
            </View>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.videoInfoDetails}>
                    <FlatList
                        data={this.state.watchLaterData}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <View style={Styles.videoCaption}>
                                <TouchableOpacity onPress={() => this._videoPlay(item)}>
                                    <Image source={{ uri: item.image }} style={Styles.videoImg} />
                                </TouchableOpacity>
                                <View style={Styles.videoDetails}>
                                    <Text style={Styles.videoDescript}>{item.title}</Text>
                                    <Text style={Styles.videoView}>{item.channel_name}</Text>
                                </View>
                                <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.videoIcon} onPress={() => this.refModalShare.open(item)} />
                            </View>
                        )}
                    />
                </View>
            </Content>
            <BottomTab/>
            {/* <View style={Style.footerBg}>
                <View style={Style.fTab}>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon name='home' type='FontAwesome' style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Feed</Text>
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
                        <Icon name='subscriptions' type='MaterialIcons' style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Subscription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        this.props.navigation.replace('PublicInbox')
                    }}>
                        <Icon name='mail' type='Entypo' style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicLibrary')
                    }}>
                        <Icon name='video-library' type='MaterialIcons' style={Style.iconActive} />
                        <Text style={Style.textActive}>Watch List</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            <ModalShare
                ref={(c) => { this.refModalShare = c }}
            />

            <ModalMemberAccount
                ref={(c) => { this.refModalMemberAccount = c }}
            />
        </Container >
    }
}