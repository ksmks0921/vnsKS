import React from 'react'
import { StatusBar, TouchableOpacity, Share, TextInput, Image, FlatList } from 'react-native'
import { Container, Header, Content, Icon, Text, Tab, Tabs, ScrollableTab, TabHeading, View } from 'native-base'

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'

import NOTIFY from './Notify'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Inbox/Style'
import ModalMemberAccount from './../Home/ModalMemberAccount'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
        }
    }
    onShare = () => {
        Share.share({
            message:
                'React Native | A framework for building native apps using React',
        })
    }
    render() {
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
                    <TouchableOpacity style={Style.navRight} onPress={() => {NavigationService.navigate('PublicProfile')}}>
                        <Image source={{ uri: "https://vns2.quickflik.co.uk/wp-content/uploads/2019/06/SI-Capital-Why-use-a-broker-150x150.png" }} style={Style.headerImg} />
                    </TouchableOpacity>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layoutDefault}>
                <FlatList
                    data={NOTIFY}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, separators }) => (
                        <View style={Styles.notifyInfo}>
                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate('PublicChannel')
                            }}>
                                <Image source={{ uri: item.logoimage }} style={Styles.notifyLogo} />
                            </TouchableOpacity>
                            <View style={Styles.notifyDetails}>
                                <Text style={Styles.notifyDesc}>{item.desc}</Text>
                                <Text style={Styles.notifyTime}>{item.time}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate('PublicDetail')
                            }}>
                                <Image source={{ uri: item.video }} style={Styles.notifyVideo} />
                            </TouchableOpacity>
                            <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.videoIcon} onPress={() => this.refs.modal1.open()} />
                        </View>
                    )}
                />
            </Content>
      
            <View style={Style.footerBg}>
                <View style={Style.fTab}>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon name="home" type="FontAwesome" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Feed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicTrending')
                    }}>
                        <Icon name='ios-flame' type='Ionicons' style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicSubscription')
                    }}>
                        <Icon name="subscriptions" type="MaterialIcons" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Subscription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicInbox')
                    }}>
                        <Icon name="mail" type="Entypo" style={Style.iconActive} />
                        <Text style={Style.textActive}>Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicLibrary')
                    }}>
                        <Icon name="video-library" type="MaterialIcons" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Watch List</Text>
                    </TouchableOpacity>
                </View>
            </View>
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