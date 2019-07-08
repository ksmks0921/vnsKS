import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { Container, Header, Content, Icon, Text, Card, Button, View } from 'native-base'

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/Home/Style'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
        }
    }
    render() {
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#1e4072" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navRightIcon} onPress={() => { NavigationService.navigate('PublicHome') }} />
                        <Text style={Styles.memberName}>VNS</Text>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layoutDefault}>
                <View>
                    <Text style={Styles.videoPlaylist}>Created playlists</Text>
                </View>
                <View style={Styles.playlist}>
                    <Image source={{ uri: "https://images.pexels.com/photos/1019980/pexels-photo-1019980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} style={Styles.playlistImg} />
                    <View style={Styles.playlistDesc}>
                        <Text style={Styles.listDesc}>Member</Text>
                        <Text style={Styles.listTime}>4 Videos</Text>
                    </View>
                </View>
                <View style={Styles.playlist}>
                    <Image source={{ uri: "https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" }} style={Styles.playlistImg} />
                    <View style={Styles.playlistDesc}>
                        <Text style={Styles.listDesc}>Member</Text>
                        <Text style={Styles.listTime}>2 Videos</Text>
                    </View>
                </View>
                <View style={Styles.playlist}>
                    <Image source={{ uri: "https://images.pexels.com/photos/1646870/pexels-photo-1646870.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" }} style={Styles.playlistImg} />
                    <View style={Styles.playlistDesc}>
                        <Text style={Styles.listDesc}>Mime</Text>
                        <Text style={Styles.listTime}>1 Video</Text>
                    </View>
                </View>
                <View>
                    <Text style={Styles.videoPlaylist}>Subscription playlists</Text>
                </View>
                <View style={Styles.playlist}>
                    <Image source={{ uri: "https://images.pexels.com/photos/1019980/pexels-photo-1019980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} style={Styles.playlistImg} />
                    <View style={Styles.playlistDesc}>
                        <Text style={Styles.listDesc}>Member</Text>
                        <Text style={Styles.listTime}>4 Videos</Text>
                    </View>
                </View>
                <View style={Styles.playlist}>
                    <Image source={{ uri: "https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" }} style={Styles.playlistImg} />
                    <View style={Styles.playlistDesc}>
                        <Text style={Styles.listDesc}>Member</Text>
                        <Text style={Styles.listTime}>2 Videos</Text>
                    </View>
                </View>
                <View style={Styles.playlist}>
                    <Image source={{ uri: "https://images.pexels.com/photos/1646870/pexels-photo-1646870.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" }} style={Styles.playlistImg} />
                    <View style={Styles.playlistDesc}>
                        <Text style={Styles.listDesc}>Mime</Text>
                        <Text style={Styles.listTime}>1 Video</Text>
                    </View>
                </View>
            </Content>
            <Modal
                ref={'modal1'}
                isOpen={this.state.isOpen}
                onClosed={() =>
                    this.setState({
                        isOpen: false
                    })
                }
                isDisabled={this.state.isDisabled}
                style={{ height: 200, width: '50%', marginTop: 40, paddingTop: 30, paddingLeft: 10, paddingRight: 10, alignSelf: 'center' }}
            >
                <View>
                    <Text style={Styles.modalDesc}>Share</Text>
                    <Text style={Styles.modalDesc}>Watch Later</Text>
                    <Text style={Styles.modalDesc}>Download</Text>
                    <Text style={Styles.modalDesc}>Save to Playlist</Text>
                    <Text style={Styles.modalDesc}>Report</Text>
                </View>
            </Modal>

            <View style={Style.footerBg}>
                <View style={Style.fTab}>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon name="home" type="FontAwesome" style={Style.iconActive} />
                        <Text style={Style.textActive}>Home</Text>
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
                        <Icon name="subscriptions" type="MaterialIcons" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Subscription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicInbox')
                    }}>
                        <Icon name="mail" type="Entypo" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Inbox</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.fIcons} onPress={() => {
                        NavigationService.navigate('PublicLibrary')
                    }}>
                        <Icon name="video-library" type="MaterialIcons" style={Style.iconInactive} />
                        <Text style={Style.textInactive}>Library</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container >
    }
}