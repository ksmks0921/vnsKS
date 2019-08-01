import React from 'react';
import { StatusBar, TouchableOpacity, ImageBackground, Share, Image, FlatList } from 'react-native'
import { Container, Header, Switch, Content, Icon, Text, Card, Button, View } from 'native-base'
import NavigationService from '@Service/Navigation'
import Style from '@Theme/Style'
import Styles from '@Screen/LeftMenuDetail/HowItWork/Style'

export default class extends React.Component {
   render() {
        return<Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                        <Text style={Styles.title}>How It Works</Text>
                    </View>
                </View>
            </Header>
            <ImageBackground source={{ uri: "https://vns2.quickflik.co.uk/wp-content/uploads/2019/04/New-Project-5.png" }} style={Styles.detailImg} >
                
            </ImageBackground>
        
            <View style={{paddingLeft: '10%', paddingRight: '10%', alignItems: 'center'}}>
                <Text style={{marginTop: 30, fontSize: 20}}>What is Visual News Service</Text>
                <Text style={{marginTop: 20, textAlign: 'center'}}>VNS has been develop to enhance the current level of disseminated information</Text>
                <Text style={{textAlign: 'center'}}>The market is always in anticipation of news and VNS works with listed companies internatioanlly to provide shareholders both current and propective - reltable and accesible market releases</Text>
            </View>
        </Container >
   }
}