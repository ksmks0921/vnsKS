import React from 'react'
import { StatusBar, Switch } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/Policy/Style'

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
                        <Text style={Styles.title}>History and Privacy</Text>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.condition}>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Clear watch history</Text>
                            <Text style={Styles.settingsList}>clear this accounts watch history from all devices.</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Clear search history</Text>
                            <Text style={Styles.settingsList}>Clear searches made with this account from all devices</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <Text style={Styles.settingsDesc}>Pause watch history</Text>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <Text style={Styles.settingsDesc}>Pause search history</Text>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                </View>
            </Content>

        </Container >
    }
}