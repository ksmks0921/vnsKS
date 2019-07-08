import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { Container, Header, Content, Icon, Text, Card, Button, View } from 'native-base'

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'

import VIDEO from './Video'
import NEWS from './News'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Trending/Style'
import ModalShare from './../Home/ModalShare'
import ModalMemberAccount from './../Home/ModalMemberAccount'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
            trendingData: global.feedData
        }
    }

    _goToDetails(item){
        global.videoData = item;
        console.log("global.videoData");
        console.log(global.videoData);
        global.watchLater = 0;
        global.channel_id =item.channel_id;
        NavigationService.navigate('PublicDetail');
      }
    
    _goToChannel(item){
        global.channel_id =item.channel_id;
        NavigationService.navigate('PublicChannel');
        console.log('//////////////////////////////////////////home_channel_id'+global.channel_id)
    }

    render() {
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor='#370190' animated barStyle='light-content' />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                    </View>
                    <View style={Style.navMiddle}>
                        <Text style={Style.navMiddleDesc}>Trending VNS</Text>
                    </View>
                    <TouchableOpacity style={Style.navRight} onPress={() => {NavigationService.navigate('PublicProfile')}}>
                        <Image source={{ uri: 'https://vns2.quickflik.co.uk/wp-content/uploads/2019/06/SI-Capital-Why-use-a-broker-150x150.png' }} style={Style.headerImg} />
                    </TouchableOpacity>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layoutDefault}>
                <View>
                    <FlatList
                        data={this.state.trendingData}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <View style={Styles.searchVideo}>
                                <TouchableOpacity onPress={() => this._goToDetails(item)}>
                                    <View style={Styles.videoBot} />
                                    <Image source={{ uri: item.image }} style={Styles.videoImg} />
                                </TouchableOpacity>
                                <View style={Styles.videoReviews}>
                                <TouchableOpacity onPress={() => this._goToChannel(item)}>
                                        <Image source={{ uri: item.logo }} style={Styles.logoImg} />
                                    </TouchableOpacity>
                                    <Text style={Styles.videoDesc}>{item.title}</Text>
                                    <Icon name='dots-vertical' type='MaterialCommunityIcons' style={Styles.videoShare} onPress={() => this.refModalShare.open(item)} />
                                </View>
                                <View style={Styles.videoComments}>
                                    <Text style={Styles.videoDetails}>{item.channel_name}</Text>
                                    <Text style={Styles.dot}>-</Text>
                                    <Text style={Styles.videoDetails}>{item.views}</Text>
                                    <Text style={Styles.dot}>-</Text>
                                    <Text style={Styles.videoDetails}>{item.time}</Text>
                                </View>
                            </View>
                        )}
                    />

                    {/* <Text style={Styles.videoTitle}>Breaking News</Text>
                    <FlatList
                        data={NEWS}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <View style={Styles.newsLayout}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        NavigationService.navigate('PublicDetail')
                                    }}>
                                        <View style={Styles.newsBot} />
                                        <Image source={{ uri: item.image }} style={Styles.newsVideo} />
                                    </TouchableOpacity>
                                    <View style={Styles.newsDetails}>
                                        <Text style={Styles.breakingNews}>{item.news}</Text>
                                        <View style={Styles.videoComment}>
                                            <Text style={Styles.videoDetails}>{item.views}</Text>
                                            <Text style={Styles.dot}>-</Text>
                                            <Text style={Styles.videoDetails}>{item.duration}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    /> */}
                </View>
            </Content>

            <View style={Style.footerBg}>
                <View style={Style.fTab}>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon name='home' type='FontAwesome' style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Feed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicTrending')
                    }}>
                        <Icon name='ios-flame' type='Ionicons' style={Style.iconActive} />
                        <Text style={Style.textActive}>Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicSubscription')
                    }}>
                        <Icon name='subscriptions' type='MaterialIcons' style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Subscription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicInbox')
                    }}>
                        <Icon name='mail' type='Entypo' style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicLibrary')
                    }}>
                        <Icon name='video-library' type='MaterialIcons' style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Watch List</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ModalShare
                ref={(c) => { this.refModalShare = c }}
            />
            <ModalMemberAccount
                ref={(c) => { this.refModalMemberAccount = c }}
            />
        </Container >
    }
}
