import React from "react";
import{ View,  TouchableOpacity, alert} from "react-native";
import {  Icon, Text,   } from 'native-base'
import Style from '@Theme/Style'
import NavigationService from '@Service/Navigation'
import { Actions } from 'react-native-router-flux';

export default class BottomTab extends React.Component {
  
    constructor(props) {
        super(props)
        state = {
            refresh: true,
        };
        // this.refreshPage = this.refreshPage.bind(this);
    }
    componentDidMount() {
        this.setState({
            refresh: this.props.refresh,
        })
    }
    // _handleTextChange = event => {
    //     this.setState({zip: event.nativeEvent.text});
    //   }
    refreshPage() {
        console.log("=== refreshPage of BottomeTab ===")
        this.setState({refresh: true});
        console.log("===badgeNum of BottomTab==="+ global.badgeNum);
     }
    render() {
        console.log("render of BOttomTab")
        return (
            <View style={Style.footerBg}>
                <View style={Style.fTab}>
                <TouchableOpacity style={Style.fIcons} onPress={() => {
                    NavigationService.navigate('PublicHome')
                }}>
                    <Icon name='home' type='FontAwesome' style={global.active_page ==1? Style.iconActive: Style.iconInactive} />
                    <Text style={global.active_page ==1? Style.textActive : Style.textInactive}>Feed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.fIcons} onPress={() => {
                    NavigationService.navigate('PublicTrending')
                }}>
                    <Icon name='ios-flame' type='Ionicons' style={global.active_page ==2? Style.iconActive: Style.iconInactive} />
                    <Text style={global.active_page ==2? Style.textActive : Style.textInactive}>Trending</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.fIcons} onPress={() => {
                    NavigationService.navigate('PublicSubscription')
                }}>
                    <Icon name='subscriptions' type='MaterialIcons' style={global.active_page ==3? Style.iconActive: Style.iconInactive} />
                    <Text style={global.active_page ==3? Style.textActive : Style.textInactive}>Subscription</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.fIcons} onPress={() => {
                    NavigationService.navigate('PublicInbox')
                }}>
                    <View style={Style.iconInactive}>
                    <Icon name='mail' type='Entypo' style={global.active_page ==4? Style.iconActive: Style.iconInactive} />
                    {/* <Badge style={{backgroundColor: 'red',  marginTop: -35, marginLeft: 30, padding: 0 }}><Text style={{}}>30</Text></Badge> */}
                    </View>
                    <Text style={global.active_page ==4? Style.textActive : Style.textInactive}>Notification</Text>
                </TouchableOpacity>
                {/* {global.badgeNum > 0 ?
                    <View style={{backgroundColor: 'red',  marginTop: -5, marginLeft: -50, padding: 0, zIndex: 9, width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{fontSize: 12, color: '#FFF'}}>{global.badgeNum}</Text>
                    </View>
                    : 
                    null
                } */}
                <TouchableOpacity style={Style.fIcons} onPress={() => {
                    NavigationService.navigate('PublicLibrary')
                }}>
                    <Icon name='video-library' type='MaterialIcons' style={global.active_page ==5? Style.iconActive: Style.iconInactive} />
                    <Text style={global.active_page ==5? Style.textActive : Style.textInactive}>Watch List</Text>
                </TouchableOpacity>
                </View>
            </View>
      
        );
    }
}

