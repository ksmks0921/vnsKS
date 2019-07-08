import React from 'react'
import { StatusBar, Switch } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/AutoPlay/Style'

export default class extends React.Component {
    render() {
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('MemberSettings')
                        }} />
                        <Text style={Styles.title}>Autoplay</Text>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.condition}>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Autoplay next video</Text>
                            <Text style={Styles.settingsList}>Orci a scelerisque purus semper eget duis at tellus.</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                    <View style={Styles.settingsInfo}>
                        <View style={Styles.settingsView}>
                            <Text style={Styles.settingsDesc}>Autoplay on Home</Text>
                            <Text style={Styles.settingsList}>Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.</Text>
                        </View>
                        <Switch value={true} style={Styles.conditionChange} />
                    </View>
                </View>
            </Content>

        </Container >
    }
}