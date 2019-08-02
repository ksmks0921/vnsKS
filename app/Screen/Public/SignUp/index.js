import React from 'react';
import NavigationService from '@Service/Navigation'

import { Text, View, TouchableOpacity, ImageBackground, StatusBar, Image, KeyboardAvoidingView, TextInput, Alert, AsyncStorage } from 'react-native';
import { Container, Content } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';


import Style from '@Theme/Style'
import Styles from '@Screen/Public/SignUp/Style'

import api from '../../../Constants/Api'
import UserData from '../../../Constants/Constants'
import USER_KEY from '../../../Constants/UserKey'


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            c_password: '',
            hidePassword: true,
            spinner: false,
        };
    }

    _signUp = async() => {
        this.setState({spinner: true});
        console.log("signIn__");
        console.log("firstName____"+this.state.firstName);
        console.log("lasttName____"+this.state.lastName);
        console.log("userName_____"+this.state.userName);
        console.log("email___"+ this.state.email);
        console.log("password____"+ this.state.password);
        console.log("c_password____"+ this.state.c_password);

        if(this.state.password==this.state.c_password){
            console.log("Password=============c_password");

            UserData.firstName = this.state.firstName;
            UserData.lastName = this.state. lastName;
            UserData.userName = this.state.email;
            UserData.email = this.state.email;
            UserData.password = this.state.password;
            
            console.log('UserData_____');
            console.log(UserData);
            

            api.signUp(UserData).then((res)=>{
                console.log('sinUp_response____');
                console.log(res);
                if(res.respond == 1){
                    console.log("signUp Success!!!!!!!!!");
                    
                    global.user_id = res.result[0].ID;
                    console.log("===user_id===" + global.user_id);

                    global.firstName = res.result[0].first_name;
                    global.lastName = res.result[0].last_name;
                    global.email = res.result[0].user_email;
                    UserData.userName = res.result[0].user_email;
                    global.password = this.state.password;
                    global.avatar = res.result[0].avatar + '?' + new Date();
                    global.session_id = res.result[0].session_id;

                    global.subscribe_channel_id =  [];
                    
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
        }else{
            Alert.alert(
                'Error!',
                "Password doesn't mismatch",
                [
                {text: 'OK', onPress: () =>  this.setState({spinner: false})},
                ],
                {cancelable: false},
            );
        }
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
                    var subscribe_status = true;
                    for (const key in subscribe_channel_id) {
                        if (subscribe_channel_id.hasOwnProperty(key)) {
                            const element = subscribe_channel_id[key];
                            console.log("===data of SubscribeDataID===" + element);

                            if(element== data.ID){
                                subscribe_status = false;
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
                watchLater_status: false,

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
        return <Container>
            <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
            <Content contentContainerStyle={Style.layoutDefault}>
                <Spinner
                    visible={this.state.spinner}
                    // textContent={'Updating...'}
                    // textStyle={{ color: '#06D65D'}}
                />
                <ImageBackground source={require('@Asset/images/bg-main.jpg')} style={Styles.backgournd} >
                    <KeyboardAvoidingView  style={{flex: 1}} behavior="padding"  enabled   keyboardVerticalOffset={50} >
                        <View style={{flex: 3, }}>  
                            <View style={Styles.logo}>
                                <Image style={{}} source={require('@Asset/images/logo-vns.png')} />
                            </View>
                            <View style={{flex: 2,}}>
                                <TextInput  style={Style.login_TextInput} placeholder="FIRST NAME"  placeholderTextColor='#b0aeae' value={this.state.firstName}  onChangeText={(TextInputValue) => this.setState({firstName: TextInputValue})} />
                                <TextInput  style={Style.login_TextInput} placeholder="LAST NAME"  placeholderTextColor='#b0aeae' value={this.state.lastName}  onChangeText={(TextInputValue) => this.setState({lastName: TextInputValue})} />
                                {/* <TextInput  style={Style.login_TextInput} placeholder="USERNAME"  placeholderTextColor='rgba(0,0,0,0.2)' value={this.state.userName}  onChangeText={(TextInputValue) => this.setState({userName: TextInputValue})} /> */}
                                <TextInput  style={Style.login_TextInput} placeholder="EMAIL"  placeholderTextColor='#b0aeae' value={this.state.email} keyboardType="email-address" onChangeText={(TextInputValue) => this.setState({email: TextInputValue})} />
                                <TextInput secureTextEntry={true}  style={Style.login_TextInput}  placeholder="PASSWORD"  placeholderTextColor='#b0aeae' value={this.state.password}  onChangeText={(TextInputValue) => this.setState({password: TextInputValue})} />
                                <TextInput secureTextEntry={true}  style={Style.login_TextInput}  placeholder="CONFIRM PASSWORD"  placeholderTextColor='#b0aeae' value={this.state.c_password}  onChangeText={(TextInputValue) => this.setState({c_password: TextInputValue})} />
                            </View>
                        </View>

                        <View style={{flex: 1.5, }}>     
                            <View style={{flex: 1, justifyContent: "center", }} >
                                <TouchableOpacity style={Styles.LoginButton} onPress={() => this._signUp()}>
                                    <Text style={{fontSize: 13, color: 'white'}}>SIGN IN</Text>
                                </TouchableOpacity>
                            </View>    
                            <View style={Style.hadAccount_view}>
                                <View style={Style.hadAccount}>
                                    <View style={Style.hadAccount_des}>
                                        <Text style={Style.hadAccountDes_text}>I have an account. Let me </Text>
                                    </View>
                                    <TouchableOpacity style={Style.hadAccount_button} onPress={() => {NavigationService.navigate('PublicSignIn')}}>
                                        <Text style={Style.hadAccountBtn_des}>Sign In.</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView> 

                </ImageBackground>
            </Content>   
        </Container>
    }
}