import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Picker, Image } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Search/Style'

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
                <StatusBar backgroundColor="#9253C8" animated barStyle="light-content" />
                <View style={Style.navigationBar}>
                    <View style={Style.navLeft}>
                        <Icon name='arrow-back' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }} />
                        <TextInput placeholder="Search here" placeholderTextColor='rgba(255,255,255,0.5)' style={Styles.search} />
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.searchChannel}>
                    <TouchableOpacity style={Styles.channelRow} onPress={() => {
                        NavigationService.navigate('PublicChannel')
                    }}>
                        <Image source={{ uri: "https://i.ytimg.com/vi/deaa-RElbTw/hqdefault.jpg" }} style={Styles.channelImg} />
                        <Text style={Styles.channelList}>kids Cartoon Family</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.channelRow} onPress={() => {
                        NavigationService.navigate('PublicChannel')
                    }}>
                        <Image source={{ uri: "https://i.pinimg.com/originals/03/32/88/033288573e174c88f2f3b3c789b75212.jpg" }} style={Styles.channelImg} />
                        <Text style={Styles.channelList}>Apple iPhone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.channelRow} onPress={() => {
                        NavigationService.navigate('PublicChannel')
                    }}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzZ_fay7cEFMiynoygMbmTlsiz-Hfmx_92a-SCGI-JjWV2nEH" }} style={Styles.channelImg} />
                        <Text style={Styles.channelList}>Relaxation Music</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.channelRow} onPress={() => {
                        NavigationService.navigate('PublicChannel')
                    }}>
                        <Image source={{ uri: "https://i.ytimg.com/vi/l8xgs8OU1SQ/maxresdefault.jpg" }} style={Styles.channelImg} />
                        <Text style={Styles.channelList}>Crafty Art</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.channelRow} onPress={() => {
                        NavigationService.navigate('PublicChannel')
                    }}>
                        <Image source={{ uri: "https://s.hdnux.com/photos/70/17/52/14744204/8/920x920.jpg" }} style={Styles.channelImg} />
                        <Text style={Styles.channelList}>Discoveries</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    }
}