import React from 'react';
import NavigationService from '@Service/Navigation'

import {  TouchableOpacity, ImageBackground, StatusBar, Image, KeyboardAvoidingView, TextInput, Alert, AsyncStorage } from 'react-native';
import { Container, Content, Text, View, Icon } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';


import Style from '@Theme/Style'
import Styles from '@Screen/Public/SignIn/Style'

import api from '../../../Constants/Api'
import UserData from '../../../Constants/Constants'
import USER_KEY from '../../../Constants/UserKey'
import { callback_notification } from '../PublicComponent/callBack'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: 'www',
            password: '1234',
            hidePassword: true,
            spinner: false,
            isloading: false,
        };
        console.log("SignIN constructor______");
    }
    componentWillMount(){
        
    }

    componentDidMount(){
        console.log("===didmount  signIN===");
        // AsyncStorage.removeItem(USER_KEY);
        this.setState({spinner: true});
        
        AsyncStorage.getItem(USER_KEY)
        .then(res => {
            this.setState({spinner: false});
             if (res) {
                console.log('User exists!');
                var user_data = JSON.parse(res); 
                
                this.setState({password: user_data.password});
                this.setState({email: user_data.email});
                console.log("email: " + this.state.email + "    password: " + this.state.password);
                this._signIn();
            } else {
                console.log("user doesn't exist");
                this.setState({isloading: true}); 
            }
        })  
    }

    _signIn = async() => {
        this.setState({spinner: true});
        global.badgeCount = false;
        global.badgeNum = 0;
        console.log("signIn__");
        console.log("email___"+ this.state.email);
        console.log("password____"+ this.state.password);

        UserData.email = this.state.email;
        UserData.password = this.state.password;
        console.log('UserData_____');
        console.log(UserData);
        

        api.signIn(UserData).then((res)=>{
            console.log('sinIn_response____');
            console.log(res);
            if(res.respond==1){
                console.log("signIn Success!!!!!!!!");
                
    
                // global.badgeNum = 0;
                // callback_notification();

                global.user_id = res.result[0].ID;
                global.firstName = res.result[0].first_name;
                global.lastName = res.result[0].last_name;
                global.email = res.result[0].user_email;
                UserData.userName = res.result[0].user_email;
                global.password = this.state.password;
                global.avatar = res.result[0].avatar + '?' + new Date();
                global.session_id = res.result[0].session_id;


                console.log("===user_id===" + global.user_id);
                if(res.result[0].authormeta.subscribe_channel_id){
                    global.subscribe_channel_id =  res.result[0].authormeta.subscribe_channel_id;
                }else{
                    global.subscribe_channel_id = [];
                }
                console.log("subscribe_channel_id");
                console.log(global.subscribe_channel_id);
                this._allLogo();

                AsyncStorage.setItem(USER_KEY, JSON.stringify(UserData));

            }else{
                Alert.alert(
                    'Error!',
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

    _allLogo(){
        api.getAllLogo().then((res)=>{

            console.log('getAllLogo_response____');
            global.allLogo = res.result;
            console.log("global.allLogo______")
            console.log(global.allLogo);

            //-------------get channel data------------//
                
                var channel_data = [];
                var subscribe_channel_id = global.subscribe_channel_id;
                
                global.allLogo.map((data, index)=>{
                    var subscribe_status = false;
                    for (const key in subscribe_channel_id) {
                        if (subscribe_channel_id.hasOwnProperty(key)) {
                            const element = subscribe_channel_id[key];
                            console.log("===data of SubscribeDataID===" + element);

                            if(element== data.ID){
                                subscribe_status = true;
                            }
                        }
                    }

                    channel_data[ index] = {
                        channel_id: data.ID,
                        logo: data.postmeta.channel_thumb,
                        channel_name: data.post_title,
                        image: data.featuredimage,
                        subscribe_status: subscribe_status
                    };
                });
            
                global.channel_data = channel_data;
                console.log("===channel_data===");
                console.log(global.channel_data);
            //-----------------------------------------//
            this._feedData();
            
        })
        .catch((error) => {
            console.log(error);
        })
    }

    _feedData(){
        api.getFeedData().then((res)=>{
            
            console.log('getAllData_response____');
            global.allFeedData = res.result;
            console.log("global.feedAllData______")
            console.log(global.allFeedData);
            this._feedDataFilter();
            
        })
        .catch((error) => {
            console.log(error);
        })
    }

    _feedDataFilter(){
        var feedData = [];
        global.allFeedData.map((data,index)=>{
            console.log("length____________________"+ data.tags.length);
            if(data.tags.length!=0){
                var tags = data.tags[0].name;
                data.tags.map((tag, index) => {
                    if(index==0){
                        tags = tags;
                    }else{
                        tags = tags + " & "+  tag.name
                    }
                });
                console.log("tags_____________________________"+ tags);
            }else{
                var tags ="";
            }
           
            var logo = "https://image.shutterstock.com/image-vector/question-mark-icon-vector-design-260nw-1404789851.jpg"
            var realchannel_id = [];
            var channel_id = "0";
            var channel_name = "";
            if(data.postmeta.channel_id){
                console.log("===data.postmeta.channel_id[0]==="+data.postmeta.channel_id[0])
                global.allLogo.map((logos, index)=>{
                
                    if(data.postmeta.channel_id[0] == logos.ID){
                        console.log("===logoID==="+logos.ID)
                        logo = logos.postmeta.channel_thumb;
                        realchannel_id = data.postmeta.channel_id;
                        channel_id = data.postmeta.channel_id[0];
                        channel_name = logos.post_title,
                        console.log('===logo==='+ logo);
                    }else{
                        
                    }
                });
            }
            console.log('=============logo out of loop============'+ logo)
            console.log("===channel_id===");
            console.log(channel_id);
            console.log("===realchannel_id===");
            console.log(realchannel_id);
            feedData[ index] = {
                id: data.ID,
                realchannel_id: realchannel_id,
                channel_id: channel_id,
                video: data.postmeta.tm_video_file? data.postmeta.tm_video_file : "https://www.youtube.com/embed/" + data.postmeta.tm_video_url.split("=")[1],
                // video: data.postmeta.tm_video_file,
                image: data.featuredimage,
                logo: logo,
                title: data.post_title,
                tags: tags + " ",
                channel_name: channel_name,
                views: data.postmeta._video_network_views + " Views",
                time: data.post_date_unformatted.split(" ")[0].split("-")[2] + "/" + data.post_date_unformatted.split(" ")[0].split("-")[1] + "/" + data.post_date_unformatted.split(" ")[0].split("-")[0],
                detail: data.post_content.replace(/<p>/g,'').replace(/<\/p>/g,''),
                likes: data.likes,
                searchKeyword: channel_name + data.post_title,
            };
        });
        this.setState({spinner: false});
        global.feedData = feedData;
        console.log('===filtered_feedData===');
        console.log(global.feedData);
        // this.props.navigation.replace('PublicNotification');

        
        // this.props.navigation.replace('Drawer');
        // NavigationService.navigate('Drawer');
        this.getNotifyData();
    }

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
            this.props.navigation.replace('Drawer');
            
          }else{
            console.log("faild:  getNotifyData response ");
          }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        console.log("===render signIn===")
        if(this.state.isloading){
        return <Container>
            <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
            <Content contentContainerStyle={Style.layoutDefault}>
                <Spinner
                    visible={this.state.spinner}
                    // textContent={'Updating...'}
                    // textStyle={{ color: '#06D65D'}}
                />
                <ImageBackground source={require('@Asset/images/bg-main.jpg')} style={{flex: 1, paddingLeft: '10%', paddingRight: '10%'}} >
                    <KeyboardAvoidingView  style={{flex: 1}} behavior="padding"  enabled   keyboardVerticalOffset={50} >
                        <View style={{flex: 1, }}>  
                            <View style={{flex: 0.7, alignItems: 'center', justifyContent: 'center', }}>
                                <Image style={{}} source={require('@Asset/images/logo-vns.png')} />
                            </View>
                            <View style={{flex: 0.3,}}>
                                <TextInput  style={Style.login_TextInput} placeholder="USERNAME/EMAIL"  placeholderTextColor='#b0aeae' value={this.state.email} keyboardType="email-address" onChangeText={(TextInputValue) => this.setState({email: TextInputValue})} />
                                <TextInput secureTextEntry={true}  style={Style.login_TextInput}  placeholder="PASSWORD"  placeholderTextColor='#b0aeae' value={this.state.password} onChangeText={(text) => this.setState({password: text})} />
                            </View>
                        </View>
                    </KeyboardAvoidingView>  
                    <View style={{flex: 1, }}>     
                        <View style={{flex: 1, justifyContent: "center", }} >
                            <TouchableOpacity style={Styles.LoginButton} onPress={() => this._signIn()}>
                                <Text style={{fontSize: 13, color: 'white'}}>SIGN IN</Text>
                            </TouchableOpacity>
                        </View>    
                        <View style={Style.hadAccount_view}>
                            <View style={Style.hadAccount}>
                                <View style={Style.hadAccount_des}>
                                    <Text style={Style.hadAccountDes_text}>Don't have an account. only sign in once! </Text>
                                </View>
                                <TouchableOpacity style={Style.hadAccount_button} onPress={() => {NavigationService.navigate('PublicSignUp')}}>
                                    <Text style={Style.hadAccountBtn_des}>Sign Up.</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                      
                </ImageBackground>
            </Content>   
        </Container>
        }else{
            return<Container>
                <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
                <Content contentContainerStyle={Style.layoutDefault}>
                    <Spinner
                        visible={this.state.spinner}
                        textContent={'Loading...'}
                        textStyle={{ color: '#FFF'}}
                    />
                    <ImageBackground source={require('@Asset/images/bg-main.jpg')} style={{flex: 1, paddingLeft: '10%', paddingRight: '10%', paddingTop: '40%', alignItems: 'center'}} >
                        <Image style={{}} source={require('@Asset/images/logo-vns.png')} />
                    </ImageBackground>
                </Content>
            </Container>
        }
    }
}