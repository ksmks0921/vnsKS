// import React from 'react'
// import { StatusBar, TouchableOpacity, ImageBackground, Share, Image, FlatList } from 'react-native'
// import { Container, Header, Switch, Content, Icon, Text, Card, Button, View } from 'native-base'

// import NavigationService from '@Service/Navigation'
// import Modal from 'react-native-modalbox'
// import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
// import Spinner from 'react-native-loading-spinner-overlay';

// import ModalShare from './../Home/ModalShare'
// import ModalMemberAccount from './../Home/ModalMemberAccount'

// import Style from '@Theme/Style'
// import Styles from '@Screen/Public/Library/Style'
// import UserData from '../../../Constants/Constants'
// import api from '../../../Constants/Api'
// import BottomTab from '../PublicComponent/BottomTab';

// export default class extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isDisabled: false,
//             isOpen: false,
//             switch_status: true,
//             spinner: false,
//             subscribe_status: true,
//             videoData: global.videoData,
//             detailShow: false,
//             avatarSource: global.avatar,
//             spinner: false,
//         }
//     }

//     componentDidMount(){
//         this.setState({spinner: true});

//         console.log("===componentWillMount of watch_list===");
//         global.active_page = 5;

//         api.signIn(UserData).then((res)=>{
//             console.log('sinIn_response_for watch_later____');
//             console.log(res.result[0].authormeta.watch_later);

//             var getWatch_laterId = res.result[0].authormeta.watch_later;
           
//             var unFilteredWatchLaterData = [];
//             for (const key in getWatch_laterId) {
//                 if (getWatch_laterId.hasOwnProperty(key)) {
//                     const element = getWatch_laterId[key];
//                     console.log("===data of watchLaterID===" + element);

//                     global.feedData.map((data, index)=>{
//                         if(element == data.channel_id){
//                             unFilteredWatchLaterData[key] = data;
//                         }
//                     });
//                 }
//             }
//             console.log("===watchLaterData===");
//             console.log(unFilteredWatchLaterData);

//             var filteredWatchLaterData = unFilteredWatchLaterData.filter(function (el) {
//                 return el != null;
//             });
    
//             global.watchLaterData = filteredWatchLaterData;
//             this.setState({watchLaterData: filteredWatchLaterData});
//             console.log("===filtered watch_later data===");
//             console.log(global.watchLaterData);
//             this.setState({spinner: false});
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }

//     // componentDidMount(){
//     //     global.active_page = 5;
//     // }

//     _videoPlay(item){
//         global.videoData = item;
//         global.channelDetail = global.watchLaterData;
//         global.watchLater = 1;
//         NavigationService.navigate('PublicDetail');
//     }
    
//     render() {
//         console.log("===Detail_render===");
//         return <Container>
//             <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
//             <Spinner visible={this.state.spinner}/>
//             <Header style={Style.navigation}>
//                 <StatusBar backgroundColor='#171841' animated barStyle='light-content' />
//                 <View style={Style.navigationBar}>
//                     <View style={Style.navLeft}>
//                         <Icon name='arrow-back' type='MaterialIcons' style={Style.navIcon} onPress={() => {
//                             NavigationService.navigate('PublicHome')
//                         }} />
//                     </View>
//                     <View style={Style.navMiddle}>
//                         {/* <Text style={Style.navMiddleDesc}>VNS Watch List</Text> */}
//                     </View>
//                     <TouchableOpacity style={Style.navRight} onPress={() => {NavigationService.navigate('PublicProfile')}}>
//                         <Image source={{ uri: this.state.avatarSource }} style={Style.headerImg} />
//                     </TouchableOpacity>
//                 </View>
//             </Header>
//             <View style={Styles.detailImg} >
//                 <Text style={{fontSize: 20}}>Watch Later Playlist</Text>
//                 <Text style={{fontSize: 18}}> </Text>
//                 <TouchableOpacity onPress={() => this._videoPlay(this.state.watchLaterData[0])} style={{alignItems: 'flex-end'}}>
//                     <Image style={{width: 70, height: 70}} source={require('@Asset/images/videoPlay.png')} />
//                 </TouchableOpacity>
//             </View>
//             <Content contentContainerStyle={Style.layoutDefault}>
//                 <View style={Styles.videoInfoDetails}>
//                     <FlatList
//                         data={this.state.watchLaterData}
//                         showsHorizontalScrollIndicator={false}
//                         renderItem={({ item, separators }) => (
//                             <View style={Styles.videoCaption}>
//                                 <TouchableOpacity onPress={() => this._videoPlay(item)}>
//                                     <Image source={{ uri: item.image }} style={Styles.videoImg} />
//                                 </TouchableOpacity>
//                                 <View style={Styles.videoDetails}>
//                                     <Text style={Styles.videoDescript}>{item.title}</Text>
//                                     <Text style={Styles.videoView}>{item.channel_name}</Text>
//                                 </View>
//                                 <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.videoIcon} onPress={() => this.refModalShare.open(item)} />
//                             </View>
//                         )}
//                     />
//                 </View>
//             </Content>
//             <BottomTab/>
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
import { StatusBar, TouchableOpacity, ImageBackground, Share, Image, FlatList } from 'react-native'
import { Container, Header, Switch, Content, Icon, Text, Card, Button, View } from 'native-base'
import Modal from 'react-native-modalbox'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import Spinner from 'react-native-loading-spinner-overlay';

import NavigationService from '@Service/Navigation'
import Style from '@Theme/Style'
import Styles from '@Screen/Public/Library/Style'

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
            switch_status: true,
            spinner: false,
            subscribe_status: true,
            videoData: global.videoData,
            detailShow: false,
            avatarSource: global.avatar,
            spinner: false,
            watchLaterData: global.feedData
        }
    }

    componentDidMount(){
        global.active_page = 5;
        var unFilteredWatchLater_data =[];
        global.feedData.map((feedDatas, index)=>{
            if(feedDatas.watchLater_status){
                unFilteredWatchLater_data[index]= feedDatas
            }
        })
        var filteredWatchLater_data = unFilteredWatchLater_data.filter(function (el) {
            return el != null;
        });

        console.log("filteredsubscribedChannel_data", filteredWatchLater_data)

        this.setState({watchLaterData: filteredWatchLater_data});
        global.watchLaterData =filteredWatchLater_data;
    }

    // componentDidMount(){
    //     global.active_page = 5;
    // }

    _videoPlay(item){
        global.videoData = item;
        global.channelDetail = global.watchLaterData;
        global.watchLater = 1;
        NavigationService.navigate('PublicDetail');
        // this.props.navigation.replace('PublicDetail');
    }
    
    render() {
        console.log("===WatchList_render===");
        return <Container>
            <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
            <Spinner visible={this.state.spinner}/>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor='#171841' animated barStyle='light-content' />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type='MaterialIcons' style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                    </View>
                    <View style={Style.navMiddle}>
                        <Text style={Style.navMiddleDesc}>VNS Watch List</Text>
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
            <ModalShare
                ref={(c) => { this.refModalShare = c }}
            />

            <ModalMemberAccount
                ref={(c) => { this.refModalMemberAccount = c }}
            />
        </Container >
    }
}