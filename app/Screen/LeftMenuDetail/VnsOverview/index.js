import React from 'react';
import { StatusBar, TouchableOpacity, ImageBackground, Share, Image, FlatList } from 'react-native'
import { Container, Header, Switch, Content, Icon, Text, Card, Button, View } from 'native-base'
import NavigationService from '@Service/Navigation'

import NOTIFY from './Notify'
import ModalShare from './../../Public/Home/ModalShare'
import ModalMemberAccount from './../../Public/Home/ModalMemberAccount'



import Style from '@Theme/Style'
import Styles from '@Screen/LeftMenuDetail/VnsOverview/Style'

export default class extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
         
        }
    }

    componentWillMount(){
        var unFilteredVnsOverviewData =[];
        global.feedData.map((data, index)=>{
            if(data.channel_id == 414){
                unFilteredVnsOverviewData[index] = data;
            }
        });
        console.log("===unFilteredVnsOverviewData===");
        console.log(unFilteredVnsOverviewData);
        var filteredVnsOverviewData = unFilteredVnsOverviewData.filter(function (el) {
            return el != null;
        });
        this.setState({vnsOverviewlData: filteredVnsOverviewData});
        console.log("===filteredVnsOverviewData===");
        console.log(this.state.vnsOverviewlData);
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
        return<Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#370190" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                        <Text style={Styles.title}>VNS Overview</Text>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View >
                    <FlatList
                        data={this.state.vnsOverviewlData}
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
                </View>
                {/* <View style={Styles.videoInfoDetails}>
                    <FlatList
                        data={NOTIFY}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <View style={Styles.videoCaption}>
                                <TouchableOpacity onPress={() => {
                                    NavigationService.navigate('PublicChannel')
                                }}>
                                    <Image source={{ uri: item.logoimage }} style={Styles.videoImg} />
                                </TouchableOpacity>
                                <View style={Styles.videoDetails}>
                                    <Text style={Styles.videoDescript}>{item.desc}</Text>
                                    <Text style={Styles.videoView}>{item.view}</Text>
                                </View>
                                <TouchableOpacity style={Styles.subscribe_button}>
                                    <Text style={{color: '#ffffff', fontSize: 12}}>SUBSCRIBE</Text>
                                </TouchableOpacity>
                                <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.videoIcon} onPress={() => this.refModalShare.open()} />
                            </View>
                        )}
                    />
                </View> */}
            </Content>
            <ModalShare
                ref={(c) => { this.refModalShare = c }}
            />

            <ModalMemberAccount
                ref={(c) => { this.refModalMemberAccount = c }}
            />
        </Container >
   }
}