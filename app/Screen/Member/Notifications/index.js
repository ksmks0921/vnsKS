import React from 'react'
import { StatusBar, Switch } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/Notifications/Style'

export default class extends React.Component {
    render() {
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#1e4072" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('MemberSettings')
                        }} />
                        <Text style={Styles.title}>Notifications</Text>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.condition}>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Lorem ipsum dolor sit amet</Text>
                            <Text style={Styles.settingsList}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Ut enim ad minim veniam</Text>
                            <Text style={Styles.settingsList}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Duis aute irure dolor in reprehenderit</Text>
                            <Text style={Styles.settingsList}>In voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Excepteur sint occaecat cupidatat non proident</Text>
                            <Text style={Styles.settingsList}>Sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Volutpat maecenas volutpat blandit</Text>
                            <Text style={Styles.settingsList}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec euismod eros.</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Lorem ipsum dolor sit amet</Text>
                            <Text style={Styles.settingsList}></Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                </View>
            </Content>

        </Container >
    }
}