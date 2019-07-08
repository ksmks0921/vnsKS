import React from 'react'
import { StatusBar, Switch } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/Downloads/Style'

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
                        <Text style={Styles.title}>Downloads</Text>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.condition}>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Video quality</Text>
                            <Text style={Styles.settingsList}>Arcu dictum varius duis at consectetur lorem donec. </Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Download over Wi-Fi only</Text>
                            <Text style={Styles.settingsList}>Erat velit scelerisque in dictum non consectetur a erat nam.</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Delete all downloads</Text>
                            <Text style={Styles.settingsList}>Off</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                </View>
            </Content>

        </Container >
    }
}