import React from 'react'
import { StatusBar, TouchableOpacity, Image, Switch } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/WatchList/Style'

export default class extends React.Component {
    render() {
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#1e4072" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navRightIcon} onPress={() => { NavigationService.navigate('PublicHome') }}/>
                        <Text style={Styles.title}>Time Watched</Text>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layoutDefault}>
                <View>
                    <Text style={Styles.videoPlaylist}>Tools to manage your time</Text>
                </View>
                <View style={Styles.condition}>
                    <View style={Styles.playInfo}>
                        <Text style={Styles.playDesc}>Auto play next video</Text>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.playInfo}>
                        <Text style={Styles.playDesc}>Remind me to take a break</Text>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.playInfo}>
                        <Text style={Styles.playDesc}>Disable sounds & vibrations</Text>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.playInfo}>
                        <Text style={Styles.playDesc}>Scheduled digest</Text>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                </View>

              </Content>

            <View style={Style.footerBg}>
                <View style={Style.fTab}>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon name="home" type="FontAwesome" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Home</Text>
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
                        <Icon name="mail" type="Entypo" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Inbox</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicLibrary')
                    }}>
                        <Icon name="video-library" type="MaterialIcons" style={Style.iconActive} />
                        <Text style={Style.textActive}>Library</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container >
    }
}