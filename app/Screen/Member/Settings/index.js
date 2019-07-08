import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { Container, Header, Content, Icon, Text, Tab, Tabs, ScrollableTab, TabHeading, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/Settings/Style'

export default class extends React.Component {
    render() {
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#1e4072" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                        <Text style={Styles.title}>Settings</Text>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.settingsList}>
                    <Text style={Styles.settingsDesc} onPress={() => { NavigationService.navigate('MemberGeneral') }}>General</Text>
                    <Text style={Styles.settingsDesc} onPress={() => { NavigationService.navigate('MemberAutoPlay') }}>Autoplay</Text>
                    {/* <Text style={Styles.settingsDesc} onPress={() => { NavigationService.navigate('MemberDownloads') }}>Downloads</Text> */}
                    <Text style={Styles.settingsDesc} onPress={() => { NavigationService.navigate('MemberPolicy') }}>History and Privacy</Text>
                    <Text style={Styles.settingsDesc} onPress={() => { NavigationService.navigate('MemberNotifications') }}>Notifications</Text>
                </View>
            </Content>

        </Container >
    }
}