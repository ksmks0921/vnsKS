import React from 'react'
import {AsyncStorage, View } from 'react-native'
import firebase from 'react-native-firebase';
import api from '../../../Constants/Api'

export default class extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    console.log("===constructor_Notification===")
    this.state = {
    }
  }
  componentWillMount(){
    console.log("===componentWillMount of Notification===")
    this.props.navigation.replace('Drawer');
    
  }

  async componentDidMount() {
    console.log("componentDidmount_Notification====");

    global.active_page = 1;
    console.log("global.badgeNum===================================================" + global.badgeNum)

    global.inboxPage = false;
    console.log("global.inboxPage===", global.inboxPage)

    AsyncStorage.removeItem('fcmToken');
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log("fcmToken_from_AsyncStorage==="+ fcmToken);
    if (fcmToken) {
      console.log("===fcmToken  exist===");
      var notifyCategory = "1";
      this.getNotifyData(notifyCategory);
    }else{
      console.log("===fcmToken doesn't exist===");
      this.checkPermission();
    }
    this.createNotificationListeners(); 
    // this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
    //     // Process your token as required
    //     console.log("ANUJ",fcmToken);
    // });

  }

  componentWillUnmount() {
      // this.onTokenRefreshListener();
      this.notificationListener;
      this.notificationOpenedListener;
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
          var notifyCategory = "0";
          console.log("global.badgeNum before notification=== "+ global.badgeNum);
          
          global.badgeCount = true;
          this.getNotifyData(notifyCategory);
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


        //   firebase.notifications().getBadge()
        //   .then( count => {
        //     count++
        //     firebase.notifications().setBadge(count)
        //  })
        //  .then(() => {
        //    console.log('Doing great', count)
        //  })
        //  .catch( error => {
        //    console.log('fail to count')
        //  })


        console.log("this.notificationListener = firebase.notifications().onNotification((notification) => {")
      });


      

      /*
      * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
      * */
      this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
        console.log('onNotificationOpened:');
        // Alert.alert('Your child is present Today');
        var notifyCategory = "2";
        this.getNotifyData(notifyCategory);
        // this.props.navigation.navigate('PublicInbox');
      });

      /*
      * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
      * */
      const notificationOpen = await firebase.notifications().getInitialNotification();
      if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        console.log('getInitialNotification:');
        var notifyCategory = "2";
        
        this.getNotifyData(notifyCategory);
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

  //-----DeviceToken Register-----
  register_deviceToken(fcmToken){
    api.registerDdeviceToken(fcmToken).then((res)=>{
      console.log('registerDdeviceToken_response____');
      console.log(res.respond);
      if(res.respond==1){
        console.log("  DeviceToken register success!!!:");
        var notifyCategory = "1";
        this.getNotifyData(notifyCategory);

      }else{
        console.log("faild:  DeviceToken register ");
      }
    })
    .catch((error) => {
        console.log(error);
    })
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
      var notifyCategory = "1";
      this.getNotifyData(notifyCategory);
    }else{
      console.log("===fcmToken doesn't exist===");
      this.checkPermission();
    }

    this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
        // Process your token as required
        console.log("ANUJ",fcmToken);
    });
  }

  //------get notifyData -----
  getNotifyData(notifyCategory){
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
        if(notifyCategory=="0"){
          console.log("global.badgeNum==="+ global.badgeNum)
          global.badgeNum += 1; 
          // this.setState({refresh: true});
        }
        if(notifyCategory=="2" || global.inboxPage){
            this.props.navigation.replace('PublicInbox');
          }
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

  render() {
    return (
        <View>
            
        </View>
    );
}

//----------------------------------------------Notification end------------------------------------------//
}
