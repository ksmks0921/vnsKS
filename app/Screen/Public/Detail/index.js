import React from 'react'
import { StatusBar, TouchableOpacity, ImageBackground, Share, Image, FlatList, WebView } from 'react-native'
import { Container, Header, Switch, Content, Icon, Text, Card, Button, View, Form } from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay';


import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import ModalShare from './../Home/ModalShare'
import NOTIFY from './Notify'
import api from '../../../Constants/Api'
import UserData from '../../../Constants/Constants'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Detail/Style'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
            switch_status: true,
            spinner: false,
            videoData: global.videoData,
            detailShow: false,
        }
    }

    componentWillMount(){
        //-----------------------get subscribe_status--------------------------//
        api.signIn(UserData).then((res)=>{
            console.log('sinIn_response_Details____');
            
            global.subscribe_channel_id =  res.result[0].authormeta.subscribe_channel_id;
            console.log("subscribe_channel_id of Details====");
            console.log(global.subscribe_channel_id)

            var subscribe_channel_id = res.result[0].authormeta.subscribe_channel_id;
            
            var subscribe_status = true;
            for (const key in subscribe_channel_id) {
                if (subscribe_channel_id.hasOwnProperty(key)) {
                    const element = subscribe_channel_id[key];
                    console.log("===data of SubscribeDataID===" + element);

                    if(element== this.state.videoData.channel_id){
                        subscribe_status = false;
                    }
                }
            }
            this.setState({subscribe_status: subscribe_status});
        })
        .catch((error) => {
            console.log(error);
        })
        //---------------------------------------------------------------------//
        console.log("===componentWillMount===");
        if(global.watchLater == 0){
            var channelDetail = [];
            global.feedData.map((data, index)=>{
                    
                if(global.videoData.channel_id == data.channel_id){
                    
                    channelDetail[ index] = {
                        realchannel_id: data.realchannel_id,
                        channel_id: data.channel_id,
                        video: data.video,
                        image: data.image,
                        logo: data.logo,
                        title: data.title,
                        tags: data.tags,
                        views: data.views,
                        time: data.time
                    };
                
                }
            });

            var filtered = channelDetail.filter(function (el) {
                return el != null;
            });
            console.log('/////////////////////////filtered')
            console.log(filtered);
            global.channelDetail =filtered;
            console.log("===global.channelDetail===");
            console.log(global.channelDetail);
        }
    }

    _subscribe = () => {
        this.setState({subscribe_status:!this.state.subscribe_status});
        var channel_id = this.state.videoData.channel_id;
        console.log('===id===' + this.state.videoData.channel_id);
        var user_id = global.user_id;
        console.log("===user_id===" + global.user_id)
        api.subscribe(channel_id, user_id).then((res)=>{
            console.log('subscribe_response____');
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    onShare = () => {
        Share.share({
            message:
                'React Native | A framework for building native apps using React',
        })
    }

    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }

    _switch  =() =>{
         this.setState({ switch_status: !this.state.switch_status })
    }

    _videoPlay(item){
        this.setState({videoData: item});
    }

    _showDetail(){
        this.setState({detailShow: !this.state.detailShow})
    }

    render() {
        console.log("===Detail_render===");
        return <Container>
            <StatusBar backgroundColor="#370190" animated barStyle="light-content" />
            <View style={Styles.navigation}>
                <View style={Styles.navigationBar}>
                    <TouchableOpacity style={Styles.navLeft} onPress={() => {NavigationService.navigate('PublicHome')}}>
                        <Icon name='keyboard-arrow-left' type="MaterialIcons" style={Styles.navLeftIcon} />
                    </TouchableOpacity>
                    <View style={Styles.navRight}>
                        {/* <Icon name='playlist-add' type="MaterialIcons" style={Styles.navRightIcon} onPress={() => this.refs.modalPlayList.open()} />
                        <Icon name='share' type="MaterialCommunityIcons" style={Styles.navRightIcon} onPress={this.onShare} /> */}
                        {/* <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.navRightIcon} onPress={() => this.refs.modal3.open()} /> */}
                    </View>
                </View>
            </View>
            {/* <ImageBackground source={{ uri: this.state.videoData.image }} style={Styles.detailImg} >
                <WebView
                    // originWhitelist={['*']}
                    source={{uri: this.state.videoData.video}}
                    style={{flex: 1, width: '100%', }}
                />
            </ImageBackground> */}
            <View style={{ height: 250 }}>
                <WebView
                    style={Styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: this.state.videoData.video }}
                />
            </View>
            <Content contentContainerStyle={Style.layoutDefault}>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Updating...'}
                    textStyle={{ color: '#06D65D'}}
                />
                <View style={Styles.videoInfoDetails}>
                    <View style={Styles.videoInfo}>
                        <View style={Styles.detailInfo}>
                            <Text style={Styles.videoDesc}>{this.state.videoData.title}</Text>
                            <TouchableOpacity  onPress={() => this._showDetail()} style={{justifyContent: 'center'}}>
                                {this.state.detailShow?
                                   <Image style={{}} source={require('@Asset/images/arrow-up.png')} style={{width:18, height: 18}}/>
                                    :                                
                                    <Image style={{}} source={require('@Asset/images/arrow-down.png')} style={{width:18, height: 18}} />
                                }
                            </TouchableOpacity>
                        </View>
                        {/* <Text style={Styles.videoViews}>1.7M views</Text> */}
                    </View>
                    <View style={Styles.listIcons}>
                        <Icon name='like' type="Foundation" style={Styles.groupLikeIcon} />
                        {/* <Icon name='dislike' type="Foundation" style={Styles.groupIcon} /> */}
                        {/* <Icon name='share' type="MaterialCommunityIcons" style={Styles.groupIcon} onPress={this.onShare} /> */}
                        {/* <Icon name='watch-later' type="MaterialIcons" style={Styles.groupIcon} onPress={() => this.refs.modalDownload.open()} /> */}
                        <Icon name='playlist-add' type="MaterialIcons" style={Styles.groupIcon} onPress={() => this.refs.modalPlayList.open()} />
                        <Text style={Styles.videoViews}>{this.state.videoData.views}</Text>
                    </View>
                    <View style={Styles.subscribe}>
                        <Image source={{ uri: this.state.videoData.logo }} style={Styles.subscribeImg} />
                        <View style={Styles.subscribeInfo}>
                            <Text style={Styles.subscribeCaption}>{this.state.videoData.channel_name}</Text>
                            {/* <Text style={Styles.subscribeView}>14,935 subscribers</Text> */}
                        </View>
                        {/* <Icon name='play-video' type="Foundation" style={Styles.subscribeIcon} /> */}
                        
                        {/* <TouchableOpacity  onPress={() => this._subscribe()} style={{justifyContent: 'center'}}>
                            {this.state.subscribe_status?
                               <Text style={Styles.subscribeDesc}>SUBSCRIBE</Text>
                                :                                
                                <Text style={Styles.unsubscribeDesc}>UNSUBSCRIBE</Text>
                            }
                        </TouchableOpacity> */}
                        <TouchableOpacity style={this.state.subscribe_status? Styles.subscribe_button: Styles.unsubscribe_button} onPress={() => this._subscribe()}>
                            {this.state.subscribe_status?
                                <Text style={{color: '#ffffff', fontSize: 12}}>SUBSCRIBE</Text>
                                :                                
                                <Text style={{color: '#ffffff', fontSize: 12}}>UNSUBSCRIBE</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    
                    {this.state.detailShow?
                        <View style={{paddingHorizontal: 10, borderColor: 'rgba(0,0,0,0.1)',borderBottomWidth: 1,}}>
                            <Text>{this.state.videoData.detail}</Text>
                        </View>
                        :
                        null
                    }
                    
                    <View style={Styles.playInfo}>
                        <Text style={Styles.playDesc}>More VNS</Text>
                        <Text style={Styles.playAuto}>Autoplay</Text>
                        <Switch onValueChange={this._switch}  value={this.state.switch_status} />
                    </View>
                    <FlatList
                        data={global.channelDetail}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity  onPress={() => this._videoPlay(item)}>
                                <View style={Styles.videoCaption}>
                                    <TouchableOpacity onPress={() => {
                                        NavigationService.navigate('PublicChannel')
                                    }}>
                                        <Image source={{ uri: item.image }} style={Styles.videoImg} />
                                    </TouchableOpacity>
                                    <View style={Styles.videoDetails}>
                                        <Text style={Styles.videoDescript}>{item.title}</Text>
                                        <Text style={Styles.videoView}>{item.channel_name}  {item.views}</Text>
                                    </View>
                                    {/* <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.videoIcon} onPress={() => this.refModalShare.open()} /> */}
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    {/* <View style={Styles.commentInfo}>
                        <Text style={Styles.commentsCaption}>Comments</Text>
                        <Text style={Styles.commentsView}>1.1K</Text>
                    </View>
                    <View style={Styles.subscribe}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXD3QaebMOiaRS8hVgq8YKP_JmSHYd4rQYXPxF3SvPvpW6ppYb" }} style={Styles.subscribeImg} />
                        <View style={Styles.subscribeInfo}>
                            <Text style={Styles.subscribeCaption}>cindrella . 2 weeks ago</Text>
                            <Text style={Styles.subscribeView}>Hi friends nice video.</Text>
                            <View style={Styles.commentIcon}>
                                <Icon name='like' type="Foundation" style={Styles.groupLikeIcon} />
                                <Icon name='dislike' type="Foundation" style={Styles.groupIcon} />
                                <Icon name='share' type="MaterialCommunityIcons" style={Styles.groupIcon} onPress={this.onShare} />
                                <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.groupIcon} />
                            </View>
                        </View>
                    </View>
                    <View style={Styles.subscribe}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXD3QaebMOiaRS8hVgq8YKP_JmSHYd4rQYXPxF3SvPvpW6ppYb" }} style={Styles.subscribeImg} />
                        <View style={Styles.subscribeInfo}>
                            <Text style={Styles.subscribeCaption}>Novell. 2 weeks ago</Text>
                            <Text style={Styles.subscribeView}>Hi friends nice video.</Text>
                            <View style={Styles.commentIcon}>
                                <Icon name='like' type="Foundation" style={Styles.groupLikeIcon} />
                                <Icon name='dislike' type="Foundation" style={Styles.groupIcon} />
                                <Icon name='share' type="MaterialCommunityIcons" style={Styles.groupIcon} onPress={this.onShare}/>
                                <Icon name='dots-vertical' type="MaterialCommunityIcons" style={Styles.groupIcon} />
                            </View>
                        </View>
                    </View> */}
                </View>
            </Content>

         
            <ModalShare
                ref={(c) => { this.refModalShare = c }}
            />
            <Modal
                ref={'modal3'}
                position={'bottom'}
                isOpen={this.state.isOpen}
                onClosed={() =>
                    this.setState({
                        isOpen: false
                    })
                }
                isDisabled={this.state.isDisabled}
                style={Styles.modal3}
            >
                <View>
                    <TouchableOpacity style={Styles.modalRow} onPress={() => this.refs.modalReport.open()}>
                        <Icon name='flag' type="Feather" style={Styles.modalIcon} />
                        <Text style={Styles.modalDesc}>Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.modalRow} onPress={() => this.refs.modalQuality.open()}>
                        <Icon name='settings' type="MaterialIcons" style={Styles.modalIcon} />
                        <Text style={Styles.modalDesc}>Quality</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.modalRow} onPress={() => this.refs.modalCaption.open()}>
                        <Icon name='view-headline' type="MaterialCommunityIcons" style={Styles.modalIcon} />
                        <Text style={Styles.modalDesc}>Captions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.modalRow} onPress={() => this.refs.modalPlayback.open()}>
                        <Icon name='play-circle-outline' type="MaterialIcons" style={Styles.modalIcon} />
                        <Text style={Styles.modalDesc}>Playback Speed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.modalRow} onPress={() => { NavigationService.navigate('PublicHelp') }}>
                        <Icon name='help-circle' type="MaterialCommunityIcons" style={Styles.modalIcon} />
                        <Text style={Styles.modalDesc}>Help & feedback</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal
                ref={'modalReport'}
                position={'bottom'}
                isOpen={this.state.isOpen}
                onClosed={() =>
                    this.setState({
                        isOpen: false
                    })
                }
                isDisabled={this.state.isDisabled}
                style={Styles.modalReport}
            >
                <View>
                    <View>
                        <RadioGroup
                            onSelect={(index, value) => this.onSelect(index, value)}
                        >
                            <RadioButton style={Styles.radioAlign} value={'item1'} >
                                <Text style={Styles.radioDesc}>violent content</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item2'} >
                                <Text style={Styles.radioDesc}>child abuse</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>Spam or misleading</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>Violent or replusive content</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>Infringes my rights</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>Hateful</Text>
                            </RadioButton>
                        </RadioGroup>
                        <TouchableOpacity onPress={() => this.refs.modalReport.close()}>
                            <Text style={Styles.closeDesc}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                ref={'modalQuality'}
                position={'bottom'}
                isOpen={this.state.isOpen}
                onClosed={() =>
                    this.setState({
                        isOpen: false
                    })
                }
                isDisabled={this.state.isDisabled}
                style={Styles.modalReport}
            >
                <View>
                    <View>
                        <RadioGroup
                            onSelect={(index, value) => this.onSelect(index, value)}
                        >
                            <RadioButton style={Styles.radioAlign} value={'item1'} >
                                <Text style={Styles.radioDesc}>Auto</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item2'} >
                                <Text style={Styles.radioDesc}>144p</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>240p</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>360p</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>480p</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>720p</Text>
                            </RadioButton>
                        </RadioGroup>
                        <TouchableOpacity onPress={() => this.refs.modalQuality.close()}>
                            <Text style={Styles.closeDesc}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                ref={'modalDownload'}
                position={'bottom'}
                isOpen={this.state.isOpen}
                onClosed={() =>
                    this.setState({
                        isOpen: false
                    })
                }
                isDisabled={this.state.isDisabled}
                style={Styles.modalReport}
            >
                <View>
                    <View>
                        <RadioGroup
                            onSelect={(index, value) => this.onSelect(index, value)}
                        >
                            <RadioButton style={{ alignItems: 'center' }} value={'item1'} >
                                <View style={Styles.modalRow}>
                                    <Text style={Styles.modalDesc}>Low(144p)</Text>
                                    <Text style={Styles.modalDesc}>25MB</Text>
                                </View>
                            </RadioButton>
                            <RadioButton style={{ alignItems: 'center' }} value={'item2'} >
                                <View style={Styles.modalRow}>
                                    <Text style={Styles.modalDesc}>Low(144p)</Text>
                                    <Text style={Styles.modalDesc}>25MB</Text>
                                </View>
                            </RadioButton>
                            <RadioButton style={{ alignItems: 'center' }} value={'item3'}>
                                <View style={Styles.modalRow}>
                                    <Text style={Styles.modalDesc}>Low(144p)</Text>
                                    <Text style={Styles.modalDesc}>25MB</Text>
                                </View>
                            </RadioButton>
                        </RadioGroup>
                    </View>
                    <View style={Styles.modalButton}>
                        <TouchableOpacity onPress={() => this.refs.modalDownload.close()}>
                            <Text style={Styles.modalDescBlue}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.refs.modalDownload.close()}>
                            <Text style={Styles.modalDesc}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                ref={'modalCaption'}
                position={'bottom'}
                isOpen={this.state.isOpen}
                onClosed={() =>
                    this.setState({
                        isOpen: false
                    })
                }
                isDisabled={this.state.isDisabled}
                style={Styles.modalPlaylist}
            >
                <View>
                    <View style={Styles.modalRow}>
                        <Icon name='poweroff' type="AntDesign" style={Styles.modalIcon} />
                        <Text style={Styles.modalDesc}>Turn off captions</Text>
                    </View>
                    <View style={Styles.modalRow}>
                        <Icon name='language' type="FontAwesome" style={Styles.modalIcon} />
                        <Text style={Styles.modalDesc}>English</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.refs.modalCaption.close()}>
                        <Text style={Styles.closeDesc}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal
                ref={'modalPlayback'}
                position={'bottom'}
                isOpen={this.state.isOpen}
                onClosed={() =>
                    this.setState({
                        isOpen: false
                    })
                }
                isDisabled={this.state.isDisabled}
                style={Styles.modalReport}
            >
                <View>
                    <View>
                        <RadioGroup
                            onSelect={(index, value) => this.onSelect(index, value)}
                        >
                            <RadioButton style={Styles.radioAlign} value={'item1'} >
                                <Text style={Styles.radioDesc}>0.25x</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item2'} >
                                <Text style={Styles.radioDesc}>0.5x</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>0.75x</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>Normal</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>1.25x</Text>
                            </RadioButton>
                            <RadioButton style={Styles.radioAlign} value={'item3'}>
                                <Text style={Styles.radioDesc}>1.5x</Text>
                            </RadioButton>
                        </RadioGroup>
                        <TouchableOpacity onPress={() => this.refs.modalPlayback.close()}>
                            <Text style={Styles.closeDesc}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                ref={'modalPlayList'}
                position={'bottom'}
                isOpen={this.state.isOpen}
                onClosed={() =>
                    this.setState({
                        isOpen: false
                    })
                }
                isDisabled={this.state.isDisabled}
                style={Styles.modalPlaylist}
            >
                <View>
                    <RadioGroup
                        onSelect={(index, value) => this.onSelect(index, value)}
                    >
                        <RadioButton style={{ alignItems: 'center' }} value={'item1'} >
                            <Text style={Styles.modalDesc}>Watch Later</Text>
                        </RadioButton>
                        <RadioButton style={{ alignItems: 'center' }} value={'item2'} >
                            <Text style={Styles.modalDesc}>Member</Text>
                        </RadioButton>
                    </RadioGroup>
                </View>
                <TouchableOpacity onPress={() => this.refs.modalPlayList.close()}>
                    <Text style={Styles.closeDesc}>OK</Text>
                </TouchableOpacity>
            </Modal>

        </Container >
    }
}