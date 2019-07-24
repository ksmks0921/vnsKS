import React from 'react'
import { StatusBar, TouchableOpacity, Share, TextInput, Image, FlatList, Alert } from 'react-native'
import { Container, Header, Content, Icon, Text, Tab, Tabs, ScrollableTab, TabHeading, View,  } from 'native-base'
import firebase from 'react-native-firebase';

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'

import NOTIFY from './Notify'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Inbox/Style'
import ModalMemberAccount from './../Home/ModalMemberAccount'
import BottomTab from '../PublicComponent/BottomTab';

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
            avatarSource: global.avatar,
            notifyData: global.notifyData
        }
        console.log("notification constructor")
    }


    // async componentDidMount() {
    //     this.createNotificationListeners(); //add this line
    //     this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
    //         // Process your token as required
    //         console.log("ANUJ",fcmToken);
    //     });
    // }

    // componentWillUnmount() {
    //     this.onTokenRefreshListener();
    //     this.notificationListener;
    //     this.notificationOpenedListener;
    // }

    // async createNotificationListeners() {
    //     /*
    //     * Triggered when a particular notification has been received in foreground
    //     * */
    //     const channel = new firebase.notifications.Android.Channel('fcm_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
    //       .setDescription('Demo app description')
    //       .setSound('sampleaudio.mp3');
    //     firebase.notifications().android.createChannel(channel);
    
    //     this.notificationListener = firebase.notifications().onNotification((notification) => {
    //         const { title, body } = notification;
    //         console.log('onNotification:');
    //         console.log(notification)
            

    //       this.showAlert(title, body);
    //       // alert('message');
            
    //       const localNotification = new firebase.notifications.Notification({
    //         sound: 'default',
    //         show_in_foreground: true,
    //       })
    //         .setNotificationId(notification.notificationId)
    //         .setTitle(notification.title)
    //         .setSubtitle(notification.subtitle)
    //         .setBody(notification.body)
    //         // .setData(notification.data)
    //         .android.setChannelId('fcm_default_channel') // e.g. the id you chose above
    //         .android.setSmallIcon('@drawable/ic_launcher') // create this icon in Android Studio
    //         .android.setColor('#000000') // you can set a color here
    //         .android.setPriority(firebase.notifications.Android.Priority.High);
            
    
    //       firebase.notifications()
    //         .displayNotification(localNotification)
    //         .catch(err => console.error(err));
    
    
    //       console.log("this.notificationListener = firebase.notifications().onNotification((notification) => {")
    //     });
    
    
        
    
    //     /*
    //     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    //     * */
    //     this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
    //       const { title, body } = notificationOpen.notification;
    //       console.log('onNotificationOpened:');
    
    //       Alert.alert('Your child is present Today');
    //     });
    
    //     /*
    //     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    //     * */
    //     const notificationOpen = await firebase.notifications().getInitialNotification();
    //     if (notificationOpen) {
    //       const { title, body } = notificationOpen.notification;
    //       console.log('getInitialNotification:');
    //      this.props.navigation.navigate('Attendance');
    //     }
    //     /*
    //     * Triggered for data only payload in foreground
    //     * */
    //     this.messageListener = firebase.messaging().onMessage((message) => {
    //      var text=JSON.stringify(message);
    //       var text1 = JSON.parse(text)._data.gcm_message;
    //       var text2=JSON.parse(text1).title;
    //       var text3=JSON.parse(text1).body;
         
        
    //       console.log(JSON.stringify(message));
    //       const notification = new firebase.notifications.Notification()
    //       .setNotificationId('notificationId')
    //       .setTitle(text2)
    //       .setBody(text3)
    //       .setData({
    //         key1: 'value1',
    //         key2: 'value2',
    //       });
    //       notification
    //       .android.setChannelId('channelId')
    //       .android.setSmallIcon('ic_launcher');
    //       firebase.notifications().displayNotification(notification);
    
    //     console.log("==============================")
    //     });
    
    //     console.log("+++++++++++++++++++++++++++++++end+++++++++++++++++++++++++++++++++")
    // }

    // showAlert(title, body) {
    //     var notify = []
    //         notify =[
    //             {
    //                 logoimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsD7p9yIGzTnr_gKo4_-QbjehZoG13lHuXP2mWT6zb4P4D4OzE',
    //                 video:'https://img.timesnownews.com/morning_headlines_1545018459__rend_16_9.jpg?d=640x360',
    //                 desc: 'This segment of DNA brings to you analysis of top news of the day.',
    //                 time:'15 hours ago',
    //             }
    //         ]

    //         this.setState({notify, notify});
    //     Alert.alert(
    //       title, body,
    //       [
    //           { text: 'OK', onPress: () => console.log('OK Pressed') },
    //       ],
    //       { cancelable: false },
    //     );
    // }
    componentDidMount(){
        console.log("===componentwillmount_inbox===");
        global.inboxPage = true;
        console.log("global.inboxPage===", global.inboxPage);
        global.badgeCount = false;
        global.badgeNum = 0;
        console.log("global.badgeNum====" + global.badgeNum)
        global.active_page = 4;

    }
    componentWillUnmount(){
        console.log("===componentwillUnmount_inbox===");
        console.log("global.badgeNum====" + global.badgeNum)
        global.inboxPage = false;
        console.log("global.inboxPage===", global.inboxPage)

    }

    onShare = () => {
        Share.share({
            message:
                'React Native | A framework for building native apps using React',
        })
    }

    _goToDetails(item){
        var videoData =[];
        global.feedData.map((data, index)=>{
            if(item.post_id == data.id ){
                videoData = data;
            }
        });
        console.log("===videoData===", videoData);
        if(videoData.length == 0){
            Alert.alert(
                'Sorry!',
                "Video doesn't exist",
                [
                    {text: 'OK', onPress: () =>  console.log("Video doesn't exist")},
                ],
                {cancelable: false},
            );
            
        }else{
            global.videoData = videoData;
            console.log("===global.videoData===");
            console.log(global.videoData);
            global.watchLater = 0;
            global.channel_id =videoData.channel_id;
            NavigationService.navigate('PublicDetail');
        }
    }

    _goToChannel(item){
        var channel_id = "";
        global.feedData.map((data, index)=>{
            if(item.post_id == data.id ){
                channel_id = data.channel_id;
            }
        });
        console.log("===channel_id===" + channel_id);
        if(channel_id == ""){
            Alert.alert(
                'Sorry!',
                "Company doesn't exist",
                [
                    {text: 'OK', onPress: () =>  console.log("Video doesn't exist")},
                ],
                {cancelable: false},
            );
            
        }else{
            global.channel_id = channel_id;
            NavigationService.navigate('PublicChannel');
            console.log('//////////////////////////////////////////home_channel_id'+global.channel_id)
        }
    }

    render() {
        console.log("render of notification======")
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#370190" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                    </View>
                    <View style={Style.navMiddle}>
                        <Text style={Style.navMiddleDesc}>Notification</Text>
                    </View>
                    <TouchableOpacity style={Style.navRight} onPress={() => {this.props.navigation.replace('PublicProfile')}}>
                        <Image source={{ uri: this.state.avatarSource }} style={Style.headerImg} />
                    </TouchableOpacity>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layoutDefault}>
                <FlatList
                    data={this.state.notifyData}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, separators }) => (
                        <View style={Styles.notifyInfo}>
                             <TouchableOpacity onPress={() => this._goToChannel(item)}>
                                <Image source={{ uri: item.logoimage }} style={Styles.notifyLogo} />
                            </TouchableOpacity>
                            <View style={Styles.notifyDetails}>
                                <Text style={Styles.notifyDesc}>{item.desc}</Text>
                                <Text style={Styles.notifyTime}>{ item.time.split(" ")[1] + "  "+ item.time.split(" ")[0].split("-")[2] + "/" + item.time.split(" ")[0].split("-")[1] + "/" + item.time.split(" ")[0].split("-")[0]  }</Text>
                            </View>
                            <TouchableOpacity onPress={() => this._goToDetails(item)}>
                                <Image source={{ uri: item.video }} style={Styles.notifyVideo} />
                            </TouchableOpacity>
                            <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.videoIcon} onPress={() => this.refs.modal1.open()} />
                        </View>
                    )}
                />
            </Content>
      
           <BottomTab/>
            <Modal
                ref={'modal1'}
                position={'bottom'}
                isOpen={this.state.isOpen}
                onClosed={() =>
                    this.setState({
                        isOpen: false
                    })
                }
                isDisabled={this.state.isDisabled}
                style={Styles.modal1} >
                <View>
                    <TouchableOpacity style={Styles.accountRow} onPress={() => this.refs.modal1.close()} >
                        <Icon name='eye-off' type="MaterialCommunityIcons" style={Styles.acIcon} />
                        <Text style={Styles.modalDesc}>Hide this notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.accountRow} onPress={() => this.refs.modal1.close()}>
                        <Icon name='toggle-switch' type="MaterialCommunityIcons" style={Styles.acIcon} />
                        <Text style={Styles.modalDesc}>Turn off all current notification</Text>
                    </TouchableOpacity>
                 
                </View>
            </Modal>
            <ModalMemberAccount
                ref={(c) => { this.refModalMemberAccount = c }}
            />
        </Container >
    }
}