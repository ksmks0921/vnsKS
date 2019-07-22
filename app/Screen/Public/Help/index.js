import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge, List, ListItem } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Help/Style'


//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#9253C8" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='close' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                        <Text style={Styles.title}>Help</Text>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.help}>
                    <Text style={Styles.helpDesc}>How Can we help you?</Text>
                    <View style={Styles.helpRow}>
                        <TextInput placeholder="Describe your issue" style={Styles.desc}/>
                        <Icon name='arrow-forward' type="MaterialIcons" style={Styles.forwardIcon} />
                    </View>
                    <View style={Styles.helpSend}>
                        <Icon name='feedback' type="MaterialIcons" style={Styles.sendIcon} />
                        <Text style={Styles.helpFeedback}>Send Feedback</Text>
                    </View>
                </View>
            </Content>

        </Container>
    }
}