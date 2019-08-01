import React from 'react';
import { StatusBar, TouchableOpacity, ImageBackground, Share, Image, FlatList } from 'react-native'
import { Container, Header, Switch, Content, Icon, Text, Card, Button, View } from 'native-base'
import NavigationService from '@Service/Navigation'

import NOTIFY from './Notify'
import api from '../../../Constants/Api'
import UserData from '../../../Constants/Constants'


import Style from '@Theme/Style'
import Styles from '@Screen/LeftMenuDetail/Companies/Style'

export default class extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
        }
    }
    componentWillMount(){
        this._getSubscribe();
    }
    
    _getSubscribe(){
       
        api.signIn(UserData).then((res)=>{
            console.log('sinIn_response_companies____');
            
            global.subscribe_channel_id =  res.result[0].authormeta.subscribe_channel_id;
            console.log("subscribe_channel_id of companies====");
            console.log(global.subscribe_channel_id)

            var channel_data = [];

            var subscribe_channel_id = res.result[0].authormeta.subscribe_channel_id;
            
            global.channel_data.map((data, index)=>{
                var subscribe_status = true;
                for (const key in subscribe_channel_id) {
                    if (subscribe_channel_id.hasOwnProperty(key)) {
                        const element = subscribe_channel_id[key];
                        console.log("===data of SubscribeDataID===" + element);
    
                        if(element== data.channel_id){
                            subscribe_status = false;
                        }
                    }
                }
                channel_data[ index] = {
                    channel_id: data.channel_id,
                    logo: data.logo,
                    channel_name: data.channel_name,
                    image: data.image,
                    subscribe_status: subscribe_status
                };
            });
        
            global.channel_data = channel_data;
            console.log("===channel_data of companies===");
            console.log(global.channel_data);
            this.setState({channel_data: channel_data});

        })
        .catch((error) => {
            console.log(error);
        })
       
    }

    _subscribe(item){
        // this.state.channel_data.map((data, index)=>{
        //     if(data.channel_id == item.channel_id){
        //         data.subscribe_status = !item.subscribe_status;
               
        //     }
        // });
        // item.subscribe_status = !item.subscribe_status;
        // console.log("button_click===");
        // console.log(this.state.channel_data);
        // this.setState({channel_data: this.state.channel_data});
        // global.channel_data = this.state.channel_data;
        
        var channel_id = item.channel_id;
        console.log('===id===' + channel_id);
        var user_id = global.user_id;
        console.log("===user_id===" + global.user_id)
        api.subscribe(channel_id, user_id).then((res)=>{
            console.log('subscribe_response____');
            console.log(res);
           this._getSubscribe();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    _goToChannel(item){
        global.channel_id =item.channel_id;
        NavigationService.navigate('PublicChannel');
        console.log('//////////////////////////////////////////home_channel_id'+global.channel_id)
    }
    render() {
        console.log("==================companies render======================")
        return<Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#171841" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                        <Text style={Styles.title}>Companies</Text>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.videoInfoDetails}>
                    <FlatList
                        data={global.channel_data}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <View style={Styles.videoCaption}>
                                <TouchableOpacity onPress={() => this._goToChannel(item)}>
                                    <Image source={{ uri: item.logo }} style={Styles.videoImg} />
                                </TouchableOpacity>
                                <View style={Styles.videoDetails}>
                                    <Text style={Styles.videoDescript}>{item.channel_name}</Text>
                                    {/* <Text style={Styles.videoView}>{item.view}</Text> */}
                                </View>
                                {/* <TouchableOpacity style={Styles.subscribe_button}>
                                    <Text style={{color: '#ffffff', fontSize: 12}}>SUBSCRIBE</Text>
                                </TouchableOpacity> */}
                                {console.log(item)}
                                <TouchableOpacity style={item.subscribe_status? Styles.subscribe_button: Styles.unsubscribe_button} onPress={() => this._subscribe(item)}>
                                    {item.subscribe_status?
                                        <Text style={{color: '#ffffff', fontSize: 12}}>SUBSCRIBE</Text>
                                        :                                
                                        <Text style={{color: '#ffffff', fontSize: 12}}>UNSUBSCRIBE</Text>
                                    }
                                </TouchableOpacity>
                                {/* <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.videoIcon} onPress={() => this.refModalShare.open()} /> */}
                            </View>
                        )}
                    />
                </View>
            </Content>
        </Container >
   }
}