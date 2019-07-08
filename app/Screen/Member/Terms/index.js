import React from 'react'
import { StatusBar, Switch, CheckBox } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/Terms/Style'

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
                        <Text style={Styles.title}>Terms & Privacy policy</Text>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.condition}>
                    <Text style={Styles.termsDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam enim vel arcu facilisis congue.
                             Sed rutrum malesuada mi, vitae accumsan lorem luctus non.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
                    <View style={Styles.settingsInfo}>
                        <CheckBox checked={true} style={Styles.conditionChange} />
                        <Text style={Styles.settingsDesc}>I agree the terms & conditions</Text>
                    </View>
                </View>
            </Content>

        </Container >
    }
}