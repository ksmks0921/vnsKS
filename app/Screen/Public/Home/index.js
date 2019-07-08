import React from 'react'
import { StatusBar, TouchableOpacity, Image, FlatList, ImageBackground, TextInput, Alert } from 'react-native'
import { Container, Header, Content, Icon, Text, Card, Button, View } from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay';

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import TRENDING from './Trending'
import VIDEO from './Video'
import NEWS from './News'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'
import ModalShare from './ModalShare'
import ModalMemberAccount from './ModalMemberAccount'

import api from '../../../Constants/Api'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isDisabled: false,
      isOpen: false,
      id: false,
      spinner: false,
      feedData: global.feedData,
      searchKeyword: "",
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

  _videoSearch(){
    this.setState({spinner: true});
    console.log("searchKeywork===" + this.state.searchKeyword);

    api.videoSearch(this.state.searchKeyword).then((res)=>{
      console.log('videoSearch_response____');
      console.log(res);
      if(res.respond==1){
        this.setState({spinner: false});

        console.log("videoSearch Success!!!!!!!!");
        var unFilteredSearchVideoData = [];
        res.result.map((data, index)=>{
          global.feedData.map((feedData, index)=>{
            if(data.ID == feedData.id){
              unFilteredSearchVideoData[index] = feedData;
            }
          });  
        });
        console.log("unFilteredSearchVideoData===");
        console.log(unFilteredSearchVideoData);

        var filteredSearchVideoData = unFilteredSearchVideoData.filter(function (el) {
          return el != null;
        });

        this.setState({feedData: filteredSearchVideoData});
        console.log("searchVideoData===");
        console.log(this.state.feedData);

      }else{
          Alert.alert(
              'Sorry!',
              res.message,
              [
              {text: 'OK', onPress: () =>  this.setState({spinner: false})},
              ],
              {cancelable: false},
          );
      }
  })
  .catch((error) => {
      console.log(error);
  })
  }

  render() {
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#370190' animated barStyle='light-content' />
        <View style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Image source={require('@Asset/images/menu.png')} />
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleDesc}>VISUAL NEW SERVICE</Text>
          </View>
          <TouchableOpacity style={Style.navRight} onPress={() => {NavigationService.navigate('PublicProfile')}}>
            <Image source={{ uri: 'https://vns2.quickflik.co.uk/wp-content/uploads/2019/06/SI-Capital-Why-use-a-broker-150x150.png' }} style={Style.headerImg} />
          </TouchableOpacity>
        </View>
      </Header>
      <Content contentContainerStyle={Style.layoutDefault}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Searching...'}
          textStyle={{ color: '#06D65D'}}
        />
        <Image source={require('@Asset/images/background.png')} style={Styles.bgMain} />
        <View>
          <View style={Styles.searchForm}>
            <TextInput  placeholder='search here' placeholderTextColor='rgba(0,0,0,0.2)' style={Styles.searchInput} value={this.state.searchKeyword} onChangeText={(text) => this.setState({searchKeyword: text})} />
            <Icon name='search' type='MaterialIcons' style={Styles.searchIcon} onPress={() => this._videoSearch()}/>
          </View>
        </View>
        <View>
          <FlatList
            data={this.state.feedData}
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
      </Content>

      <View style={Style.footerBg}>
        <View style={Style.fTab}>
          <TouchableOpacity style={Style.fIcons} onPress={() => {
            NavigationService.navigate('PublicHome')
          }}>
            <Icon name='home' type='FontAwesome' style={Style.iconActive} />
            <Text style={Style.textActive}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.fIcons} onPress={() => {
            NavigationService.navigate('PublicTrending')
          }}>
            <Icon name='ios-flame' type='Ionicons' style={Style.iconInactive} />
            <Text style={Style.textInactive}>Trending</Text>
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
    </Container>
  }
}
