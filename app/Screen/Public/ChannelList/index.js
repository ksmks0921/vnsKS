import React from 'react'
import { StatusBar, Picker, Image, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/ChannelList/Style'

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
                        <Icon name='close' type="MaterialIcons" style={Style.navIcon} onPress={() => {
                            NavigationService.navigate('PublicDetail')
                        }} />
                        <Text style={Styles.title}>Channel</Text>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.channel}>
                    <View style={Styles.channelForm}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 30, width: 200 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="Most relevant" value="java" />
                            <Picker.Item label="New Activity" value="js" />
                            <Picker.Item label="A-Z" value="js" />
                        </Picker>
                        <Text style={Styles.channelDesc}>Manage</Text>
                    </View>
                    <View>
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
                </View>
            </Content>

        </Container>
    }
}