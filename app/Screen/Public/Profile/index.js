import React from 'react'
import { StatusBar, TouchableOpacity, Share, ImageBackground, TextInput, Picker, Image, Alert, AsyncStorage } from 'react-native'
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
import USER_KEY from '../../../Constants/UserKey'

const options = {
    title: 'Select Avatar',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library'
}

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
            spinner: false,
            firstName: global.userData.first_name,
            lastName: global.userData.last_name,
            email: global.userData.user_email,
            password:  "",
            c_password: "",
            avatarSource: 'https://vns2.quickflik.co.uk/wp-content/uploads/2019/06/SI-Capital-Why-use-a-broker-150x150.png'
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
        this.setState({spinner: true});
        if(this.state.password==this.state.c_password){

            console.log("===profile_update===");
            console.log("===first_name==="+ this.state.firstName);
            console.log("===last_name==="+ this.state.lastName);
            console.log("email___"+ this.state.email);
            console.log("password____"+ this.state.password);
            console.log("===session_id==="+ global.session_id);

            UserData.firstName = this.state.firstName;
            UserData.lastName = this.state.lastName;
            UserData.email = this.state.email;
            UserData.password = this.state.password;
            UserData.session_id= global.session_id;
            console.log('===updated UserData===');
            console.log(UserData);
            api.profileUpdate(UserData).then((res)=>{
                console.log('profileUpdate_response____');
                console.log(res);
                
                if(res.respond==1){
                    
                    console.log("update Success!!!!!!!!");
                    global.userData = UserData;
                    console.log("===global.userData after update===");
                    console.log(global.userData);
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
                {text: 'OK', onPress: () =>  this.setState({spinner: false})},
                ],
                {cancelable: false},
            );
        }
    }

    render() {
        return <Container>
        <StatusBar backgroundColor="#370190" animated barStyle="light-content" />
        <Content contentContainerStyle={Style.layoutDefault}>
            <Spinner
                visible={this.state.spinner}
                textContent={'Updating...'}
                textStyle={{ color: '#06D65D'}}
            />
            <View>
                <ImageBackground source={require('@Asset/images/background.png')} style={Styles.backgroundImg} >
                    <TouchableOpacity style={Styles.backArrow} onPress={() => {NavigationService.navigate('PublicHome')}}>
                        <Icon name='close' type="MaterialIcons" style={Styles.backArrowIcon} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={Styles.account}>
                    <TouchableOpacity onPress={this.image_picker}>
                        <Image source={{uri: this.state.avatarSource}} style={Styles.memberImg} />
                    </TouchableOpacity>
                    <Text style={Styles.accountTitle}>{this.state.firstName} {this.state.lastName}</Text>
                </View>
                <View style={Styles.memberForm}>
                    <View style={Styles.profile_block}>
                        <Text style={{color: "#838c9c"}}>FIRST NAME</Text>
                        <TextInput  style={Styles.profile_TextInput}  value={this.state.firstName}  onChangeText={(TextInputValue) => this.setState({firstName: TextInputValue})} />
                    </View>
                    <View style={Styles.profile_block}>
                        <Text style={{color: "#838c9c"}}>LAST NAME</Text>
                        <TextInput  style={Styles.profile_TextInput}  value={this.state.lastName}  onChangeText={(TextInputValue) => this.setState({lastName: TextInputValue})} />
                    </View>
                    <View style={Styles.profile_block}>
                        <Text style={{color: "#838c9c"}}>EMAIL/USERNAME</Text>
                        <TextInput  style={Styles.profile_TextInput} keyboardType="email-address"  value={this.state.email}  onChangeText={(TextInputValue) => this.setState({email: TextInputValue})} />
                    </View>
                    <View style={Styles.profile_block}>
                        <Text style={{color: "#838c9c"}}>PASSWORD</Text>
                        <TextInput  style={Styles.profile_TextInput} secureTextEntry={true}  value={this.state.password}  onChangeText={(TextInputValue) => this.setState({password: TextInputValue})} />
                    </View >
                    <View style={Styles.profile_block}> 
                        <Text style={{color: "#838c9c"}}>CONFIRM PASSWORD</Text>
                        <TextInput  style={Styles.profile_TextInput} secureTextEntry={true}  value={this.state.c_password}  onChangeText={(TextInputValue) => this.setState({c_password: TextInputValue})} />
                    </View>
                
                    <TouchableOpacity style={Styles.updateButton} onPress={()=>this._profileUpdate()}>
                        <Text style={{color: "#FFF"}}>UPDATE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Content>
        </Container>
    }
}