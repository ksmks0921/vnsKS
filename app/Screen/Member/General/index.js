import React from 'react'
import { StatusBar, Switch } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/General/Style'

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
                        <Text style={Styles.title}>General</Text>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.condition}>
                    <View style={Styles.settingsInfo}>
                        <View>
                            <Text style={Styles.settingsDesc}>Dui accumsan sit amet nulla. </Text>
                            <Text style={Styles.settingsList}>Off</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View>
                            <Text style={Styles.settingsDesc}>Arcu non odio euismod lacinia.</Text>
                            <Text style={Styles.settingsList}>on</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View>
                            <Text style={Styles.settingsDesc}>Ut sem viverra aliquet</Text>
                            <Text style={Styles.settingsList}>Eget sit amet tellus cras adipiscing.</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View>
                            <Text style={Styles.settingsDesc}>Uploads</Text>
                            <Text style={Styles.settingsList}>Tuis ipsum suspendisse ultrices gravida.</Text>
                        </View>
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View>
                            <Text style={Styles.settingsDesc}>Placerat orci nulla</Text>
                            <Text style={Styles.settingsList}>Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. </Text>
                        </View>
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View>
                            <Text style={Styles.settingsDesc}>Sit amet purus gravida quis blandit.</Text>
                            <Text style={Styles.settingsList}>Off</Text>
                        </View>
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View>
                            <Text style={Styles.settingsDesc}>Sit amet porttitor</Text>
                            <Text style={Styles.settingsList}>Scelerisque fermentum dui faucibus in ornare.</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View>
                            <Text style={Styles.settingsDesc}>Aliquam sem et tortor</Text>
                            <Text style={Styles.settingsList}>on</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                </View>
            </Content>

        </Container >
    }
}