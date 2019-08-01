import React from 'react'
import { StatusBar, TouchableOpacity, Share, ImageBackground, TextInput, Picker, Image, Alert, AsyncStorage, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'
import ImagePicker from 'react-native-image-picker'
import Spinner from 'react-native-loading-spinner-overlay';

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Profile/Style'

import api from '../../../Constants/Api'
import UserData from '../../../Constants/Constants'
import UserUpdateData from '../../../Constants/UserUpdateData'


import USER_KEY from '../../../Constants/UserKey'

const options = {
    title: 'Select Avatar',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library'
}

export default class extends React.Component {
    constructor() {
        console.log("===profile constructor===");
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
            spinner: false,
            firstName:global.firstName,
            lastName: global.lastName,
            email: global.email,
            password:  "",
            c_password: "",
            avatarSource: global.avatar,
            TextInputDiableHolder: false
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }
    open() {
        this.refModalMemberAccount.open()
    }
    close() {
        this.setState({
            isOpen: false
        })
    }

    image_picker=()=>{
        console.log("===image_picker===");
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
           
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                // let source = { uri: response.uri };
                let source = response;
                console.log("===source===");
                console.log(source);
                console.log("image_picker response");
                console.log(response);
              // You can also display the image using data:
            //   let source = { uri: 'data:image/jpeg;base64,' + response.data };
           
                this.setState({avatarSource: 'data:image/jpeg;base64,' + source.data});
                console.log("===avata_source===");
                console.log(this.state.avatarSource);
            }
        });
    }

    _profileUpdate(){
        if(this.state.TextInputDiableHolder){
            if(this.state.password==this.state.c_password){
                this.setState({spinner: true});

                console.log("===profile_update===");
                console.log("===first_name==="+ this.state.firstName);
                console.log("===last_name==="+ this.state.lastName);
                console.log("email___"+ this.state.email);
                console.log("password____"+ this.state.password);
                console.log("===session_id==="+ global.session_id);

                UserUpdateData.firstName = this.state.firstName;
                UserUpdateData.lastName = this.state.lastName;
                UserUpdateData.email = this.state.email;
                UserUpdateData.password = this.state.password;
                UserUpdateData.session_id= global.session_id;
                UserUpdateData.avatar = this.state.avatarSource;
                console.log('===updated UserUpdateData===');
                console.log(UserUpdateData);
                api.profileUpdate(UserUpdateData).then((res)=>{
                    console.log('profileUpdate_response____');
                    console.log(res);
                    
                    if(res.respond==1){

                        api.signIn(UserData).then((res)=>{
                            console.log('sinIn_response____');
                            console.log(res);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                        
                        console.log("update Success!!!!!!!!");
                        global.avatar = this.state.avatarSource;

                        UserData.firstName = this.state.firstName;
                        UserData.lastName = this.state.lastName;
                        UserData.email = this.state.email;
                        if(this.state.password==""){
                            UserData.password = global.password;
                        }else{
                            UserData.password = this.state.password;
                        }
                        UserData.session_id= global.session_id;
                        UserData.avatar = this.state.avatarSource;
                        
                        console.log("===UserData after updated API===")
                        console.log(UserData);

                        global.firstName = this.state.firstName;
                        global.lastName = this.state.lastName;
                        global.email = this.state.email;
                        if(this.state.password==""){
                        
                        }else{
                            global.password = this.state.password;
                        }
                    
                        global.avatar = this.state.avatarSource;
                        
                        Alert.alert(
                            'Success!',
                            res.message,
                            [
                                {text: 'OK', onPress: () =>  this.setState({spinner: false})},
                            ],
                            {cancelable: false},
                        );
                        
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
                    {text: 'OK', onPress: () =>  console.log("Password doesn't mismatch")},
                    ],
                    {cancelable: false},
                );
            }
        }else{
            this.setState({TextInputDiableHolder: true});
        }
    }

    log_out(){
        AsyncStorage.removeItem(USER_KEY);
        this.props.navigation.replace("PublicSignIn");
    }

    render() {
        return <Container>
        <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
        <Content contentContainerStyle={Style.layoutDefault}>
            <Spinner
                visible={this.state.spinner}
                textContent={'Updating...'}
                textStyle={{ color: '#06D65D'}}
            />
            <View style={{flex: 1}}>
                <KeyboardAvoidingView  style={{flex: 1}} behavior="padding"  enabled   keyboardVerticalOffset={50} >
                    <ImageBackground source={require('@Asset/images/background.png')} style={Styles.backgroundImg} >
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                            <TouchableOpacity style={Styles.backArrow} onPress={() => {NavigationService.navigate('Drawer')}}>
                                <Icon name='close' type="MaterialIcons" style={Styles.backArrowIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginTop:5, marginRight: 10}} onPress={()=>this.log_out()}>
                                <Text style={{color: '#FFF'}}>Log out</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={Styles.account}>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity onPress={this.image_picker}>
                                <Image source={{uri: this.state.avatarSource}} style={Styles.memberImg} />
                            </TouchableOpacity>
                        </View>
                        <Text style={Styles.accountTitle}>{this.state.firstName} {this.state.lastName}</Text>
                    </View>
                    <View style={Styles.memberForm}>
                        <View style={Styles.profile_block}>
                            <Text style={{color: "#838c9c"}}>FIRST NAME</Text>
                            <TextInput  style={Styles.profile_TextInput} editable={this.state.TextInputDiableHolder} value={this.state.firstName}  onChangeText={(TextInputValue) => this.setState({firstName: TextInputValue})} />
                        </View>
                        <View style={Styles.profile_block}>
                            <Text style={{color: "#838c9c"}}>LAST NAME</Text>
                            <TextInput  style={Styles.profile_TextInput} editable={this.state.TextInputDiableHolder}  value={this.state.lastName}  onChangeText={(TextInputValue) => this.setState({lastName: TextInputValue})} />
                        </View>
                        <View style={Styles.profile_block}>
                            <Text style={{color: "#838c9c"}}>EMAIL/USERNAME</Text>
                            <TextInput  style={Styles.profile_TextInput} editable={this.state.TextInputDiableHolder} keyboardType="email-address"  value={this.state.email}  onChangeText={(TextInputValue) => this.setState({email: TextInputValue})} />
                        </View>
                        <View style={Styles.profile_block}>
                            <Text style={{color: "#838c9c"}}>PASSWORD</Text>
                            <TextInput  style={Styles.profile_TextInput} editable={this.state.TextInputDiableHolder} secureTextEntry={true}  value={this.state.password}  onChangeText={(TextInputValue) => this.setState({password: TextInputValue})} />
                        </View >
                        <View style={Styles.profile_block}> 
                            <Text style={{color: "#838c9c"}}>CONFIRM PASSWORD</Text>
                            <TextInput  style={Styles.profile_TextInput} editable={this.state.TextInputDiableHolder} secureTextEntry={true}  value={this.state.c_password}  onChangeText={(TextInputValue) => this.setState({c_password: TextInputValue})} />
                        </View>
                    
                        <TouchableOpacity style={Styles.updateButton} onPress={()=>this._profileUpdate()}>
                            <Text style={{color: "#FFF"}}>{this.state.TextInputDiableHolder? "UPDATE" : "EDIT"}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView> 
            </View>
        </Content>
        </Container>
    }
}