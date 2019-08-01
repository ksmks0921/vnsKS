import React from 'react'
import { StatusBar, TouchableOpacity, Image, FlatList, ImageBackground, TextInput, Alert, AsyncStorage } from 'react-native'
import { Container, Header, Content, Icon, Text, Card, Button, View, Badge } from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay';
import firebase from 'react-native-firebase';

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import TRENDING from './Trending'
import VIDEO from './Video'
import NEWS from './News'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'
import ModalShare from './ModalShare'
import ModalMemberAccount from './ModalMemberAccount'

import api from '../../../Constants/Api'

import BottomTab from '../PublicComponent/BottomTab'


export default class extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    console.log("===constructor_home===")
       

    this.state = {
      isDisabled: false,
      isOpen: false,
      id: false,
      spinner: false,
      feedData: global.feedData,
      searchKeyword: "",
      avatarSource: global.avatar,
    }
  }
  componentWillMount(){
    console.log("===componentWillMount of Home===")
  }
  
  async componentDidMount() {
    console.log("componentDidmount_Home====");
    global.active_page = 1;
    console.log("global.badgeNum===================================================" + global.badgeNum)

    global.inboxPage = false;
    console.log("global.inboxPage===", global.inboxPage)
    
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log("fcmToken_from_AsyncStorage==="+ fcmToken);
    if (fcmToken) {
      console.log("===fcmToken  exist===");
      
    }else{
      console.log("===fcmToken doesn't exist===");
      this.checkPermission();
    }

    this.createNotificationListeners(); 
    this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
        // Process your token as required
        console.log("ANUJ",fcmToken);
    });
  }

  componentWillUnmount() {
      this.onTokenRefreshListener();
      this.notificationListener;
      this.notificationOpenedListener;
  }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  //3
  async getToken() {
    var fcmToken = await firebase.messaging().getToken();
    console.log('fcmToken:', fcmToken);
    await AsyncStorage.setItem('fcmToken', fcmToken);
    this.register_deviceToken(fcmToken);
  }

  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    const channel = new firebase.notifications.Android.Channel('fcm_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
      .setDescription('Demo app description')
      .setSound('sampleaudio.mp3');
    firebase.notifications().android.createChannel(channel);

    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        console.log('onNotification:');
        console.log(notification);
        
        console.log("global.badgeNum before notification=== "+ global.badgeNum);
        
        global.badgeCount = true;
        this.getNotifyData();
      // alert('message');
        
      const localNotification = new firebase.notifications.Notification({
        sound: 'default',
        show_in_foreground: true,
      })
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        .setSubtitle(notification.subtitle)
        .setBody(notification.body)
        // .setData(notification.data)
        .android.setChannelId('fcm_default_channel') // e.g. the id you chose above
        .android.setSmallIcon('@drawable/ic_launcher') // create this icon in Android Studio
        .android.setColor('#000000') // you can set a color here
        .android.setPriority(firebase.notifications.Android.Priority.High)
        .android.setAutoCancel(true); // To remove notification when tapped on it

      firebase.notifications()
        .displayNotification(localNotification)
        .catch(err => console.error(err));
    });

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
      console.log('onNotificationOpened:');
      // Alert.alert('Your child is present Today');
      
      this.props.navigation.replace('PublicInbox');
      // this.getNotifyData(notifyCategory);
      // this.props.navigation.navigate('PublicInbox');
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      console.log('getInitialNotification:');
      
      // this.getNotifyData(notifyCategory);
      // this.props.navigation.replace('Attendance');
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
    var text=JSON.stringify(message);
      var text1 = JSON.parse(text)._data.gcm_message;
      var text2=JSON.parse(text1).title;
      var text3=JSON.parse(text1).body;
    
    
      console.log(JSON.stringify(message));
      const notification = new firebase.notifications.Notification()
      .setNotificationId('notificationId')
      .setTitle(text2)
      .setBody(text3)
      .setData({
        key1: 'value1',
        key2: 'value2',
      });
      notification
      .android.setChannelId('channelId')
      .android.setSmallIcon('ic_launcher');
      firebase.notifications().displayNotification(notification);

    console.log("==============================")
    });

    console.log("+++++++++++++++++++++++++++++++end+++++++++++++++++++++++++++++++++")
} 

  //-----DeviceToken Register-----
  register_deviceToken(fcmToken){
    api.registerDdeviceToken(fcmToken).then((res)=>{
      console.log('registerDdeviceToken_response____');
      console.log(res.respond);
      if(res.respond==1){
        console.log("  DeviceToken register success!!!:");
        
        this.getNotifyData();

      }else{
        console.log("faild:  DeviceToken register ");
      }
    })
    .catch((error) => {
        console.log(error);
    })
  }

  //------get notifyData -----
  getNotifyData(){
    api.getNotifyData().then((res)=>{
      console.log('getNotifyData_response____');
      console.log(res.respond);
      if(res.respond==1){
        console.log("  getNotifyData response success!!!:");
        console.log("etNotifyData_response",res.result);
        var notifyData = [];
        res.result.map((data, index)=>{
          notifyData[index] = {
            post_id: data.post_id,
            logoimage: data.icon,
            video: data.bigimage,
            desc: data.message,
            time: data.starttime
          };
        });
        
        
        global.notifyData = notifyData;
        console.log(" global.notifyData",  global.notifyData);
        // if(notifyCategory=="0"){
        //   console.log("global.badgeNum==="+ global.badgeNum)
        //   global.badgeNum += 1; 
        //   // this.setState({refresh: true});
        // }
        // console.log("notifyCategory================"+ notifyCategory);
        // if(notifyCategory=="2" || global.inboxPage){
        //     this.props.navigation.replace('PublicInbox');
        //   }
        // if(global.inboxPage){
        //   this.props.navigation.replace('PublicInbox');
        // }
        
      }else{
        console.log("faild:  getNotifyData response ");
      }
    })
    .catch((error) => {
        console.log(error);
    })
  }

//----------------------------------------------Notification end------------------------------------------//
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

  searchFilterFunction = text => {
    this.setState({
        searchKeyword: text,
    });
    const newData = global.feedData.filter(item => {
        const itemData = `${item.searchKeyword.toUpperCase()} `;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
    this.setState({
        feedData: newData,
    });
  };

  componentWillUnmount(){
    this._isMounted = false;
  }

  render() {
    console.log("===render_Home===");
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#171841' animated barStyle='light-content' />
        <View style={Style.navigationBar}>
          <TouchableOpacity style={Style.navLeft} onPress={() => this.props.navigation.openDrawer()}>
            <Image source={require('@Asset/images/menu.png')} />
          </TouchableOpacity>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleDesc}>VISUAL NEWS SERVICES</Text>
          </View>
          <TouchableOpacity style={Style.navRight} onPress={() => {this.props.navigation.replace('PublicProfile')}}>
            <Image source={{ uri: this.state.avatarSource }} style={Style.headerImg} />
          </TouchableOpacity>
        </View>
      </Header>
      <Content contentContainerStyle={Style.layoutDefault}>
        <Spinner
          visible={this.state.spinner}
          // textContent={'Searching...'}
          // textStyle={{ color: '#06D65D'}}
        />
        <Image source={require('@Asset/images/background.png')} style={Styles.bgMain} />
        <View>
          <View style={Styles.searchForm}>
            <TextInput  placeholder='search here' placeholderTextColor='rgba(0,0,0,0.2)' style={Styles.searchInput} value={this.state.searchKeyword} onChangeText={text => this.searchFilterFunction(text)} />
            <Icon name='search' type='MaterialIcons' style={Styles.searchIcon} />
          </View>
        </View>
        <View>
          <FlatList
            data={this.state.feedData}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, separators }) => (
              <View style={Styles.searchVideo}>
                <TouchableOpacity onPress={() => this._goToDetails(item)}>
                  <View style={Styles.videoBot} />
                  <Image source={{ uri: item.image }} style={Styles.videoImg} />
                </TouchableOpacity>
                <View style={Styles.videoReviews}>
                  <TouchableOpacity onPress={() => this._goToChannel(item)}>
                    <Image source={{ uri: item.logo }} style={Styles.logoImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._goToDetails(item)} style={Styles.videoDesc}>
                    <Text style={Styles.videoDesc}>{item.title}</Text>
                  </TouchableOpacity>
                  <Icon name='dots-vertical' type='MaterialCommunityIcons' style={Styles.videoShare} onPress={() => this.refModalShare.open(item)} />
                </View>
                <View style={Styles.videoComments}>
                  <Text style={Styles.videoDetails}>{item.channel_name}</Text>
                  <Text style={Styles.dot}>-</Text>
                  <Text style={Styles.videoDetails}>{item.views}</Text>
                  <Text style={Styles.dot}>-</Text>
                  <Text style={Styles.videoDetails}>{item.time}</Text>
                </View>
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
    </Container>
  }
}

// myhome.navigationOptions = {
//   title: "myHome"
// };
