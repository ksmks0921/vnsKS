import React from 'react'
import { StatusBar, TouchableOpacity, Share, ImageBackground, TextInput, Picker, Image } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
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

    render() {
        return <Modal
            ref={(c) => { this.refModalMemberAccount = c }}
            position={'bottom'}
            isOpen={this.state.isOpen}
            onClosed={() =>
                this.setState({
                    isOpen: false
                })
            }
            isDisabled={this.state.isDisabled}
            style={Styles.modalMemberAccount} >
            <View>
                <ImageBackground source={require('@Asset/images/background.png')} style={Styles.backgroundImg} >
                    <TouchableOpacity style={Styles.backArrow} onPress={() => this.refModalMemberAccount.close()}>
                        <Icon name='close' type="MaterialIcons" style={Styles.backArrowIcon} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={Styles.account}>
                    <Image source={{ uri: "https://vns2.quickflik.co.uk/wp-content/uploads/2019/06/SI-Capital-Why-use-a-broker-150x150.png" }} style={Styles.memberImg} />
                    <Text style={Styles.accountTitle}>VNS</Text>
                </View>
                <View style={Styles.memberForm}>
                    <TouchableOpacity style={Styles.memberList} onPress={() => {
                        NavigationService.navigate('MemberNotifications')
                    }}>
                        <Icon name='pencil-square-o' type="FontAwesome" style={Styles.accountIcons} />
                        <Text style={Styles.accountDesc}>Notifications Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.memberList} onPress={() => {
                        NavigationService.navigate('MemberHome')
                    }}>
                        <Icon name='user-circle-o' type="FontAwesome" style={Styles.accountIcons} />
                        <Text style={Styles.accountDesc}>Profile</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={Styles.memberList} onPress={() => {
                        NavigationService.navigate('MemberWatchList')
                    }}>
                        <Icon name='back-in-time' type="Entypo" style={Styles.accountIcons} />
                        <Text style={Styles.accountDesc}>Time watched</Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity style={Styles.memberList} onPress={() => {
                        NavigationService.navigate('MemberSettings')
                    }}>
                        <Icon name='settings-outline' type="MaterialCommunityIcons" style={Styles.accountIcons} />
                        <Text style={Styles.accountDesc}>Settings</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={Styles.memberList} onPress={() => {
                        NavigationService.navigate('MemberTerms')
                    }}>
                        <Icon name='lock-outline' type="MaterialIcons" style={Styles.accountIcons} />
                        <Text style={Styles.accountDesc}>Terms & privacy policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.memberList} onPress={() => {
                        NavigationService.navigate('PublicHelp')
                    }}>
                        <Icon name='help-outline' type="MaterialIcons" style={Styles.accountIcons} />
                        <Text style={Styles.accountDesc}>Help & Feedback</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.memberList} onPress={() => {
                        NavigationService.navigate('PublicSignIn')
                    }}>
                        <Icon name='back-in-time' type="Entypo" style={Styles.accountIcons} />
                        <Text style={Styles.accountDesc}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    }
}