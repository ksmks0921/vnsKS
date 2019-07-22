import firebase from 'react-native-firebase';
import api from '../../../Constants/Api'
import BottomTab from './BottomTab'


export function callback_notification() {
    
    const channel = new firebase.notifications.Android.Channel('fcm_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
        .setDescription('Demo app description')
        .setSound('sampleaudio.mp3');
    firebase.notifications().android.createChannel(channel);
    

    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        console.log('onNotification:');
        console.log(notification);
        
        global.badgeNum ++;
        global.badgeCount = true;
        var notifyCategory = "1";
        getNotifyData(notifyCategory);;

        let bottomTab = new BottomTab()
        bottomTab.refreshPage()
        
        
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
        console.log("global.badgeNum === "+ global.badgeNum);
        
       
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
    const notificationOpen = firebase.notifications().getInitialNotification();
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

export function callback2() {

}

function getNotifyData(notifyCategory){
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
      if(notifyCategory=="2"){
        // this.props.navigation.replace('PublicInbox');
      }

    }else{
      console.log("faild:  getNotifyData response ");
    }
  })
  .catch((error) => {
      console.log(error);
  })
}
