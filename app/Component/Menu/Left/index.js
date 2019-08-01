import React, { Component } from "react";
import { Image, FlatList, TouchableOpacity, ImageBackground, Alert } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  View,
} from "native-base";
import Styles from "./Style";
import NavigationService from './../../../Service/Navigation'
import MENU from './Menu'

const drawerImage = require("@Asset/images/logo-vns.png");

class MenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          contentContainerStyle={Styles.layout}
          render
        >
          <ImageBackground style={Styles.nav} source={require('@Asset/images/bg-main.jpg')} >
            <TouchableOpacity style={Styles.backArrow} onPress={()=>this.props.navigation.closeDrawer()}>
                <Icon name='close' type="MaterialIcons"  style={Styles.backArrowIcon} />
                {/* <Text>rtrt</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={Styles.navProfile} >
              <Image square style={Styles.navAvatar} source={drawerImage} />
            </TouchableOpacity>

            <View style={Styles.navMenu}>

              <FlatList
                data={MENU}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, separators }) => (
                  <TouchableOpacity style={Styles.profileItem} underlayColor='transparent' onPress={() => {
                    NavigationService.navigate(item.route)
                  }}>
                    <View style={Styles.profileBtn}>
                      
                      <Text style={Styles.profileName}>{item.name}</Text>
                    </View>
                   
                  </TouchableOpacity>
                )}
              />

            {/* <View style={{}}>
              <Text style={Styles.navFooterText}>Logout</Text>
            </View> */}

            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
// MenuLeft.navigationOptions = {
//   title: "Left Menu"
// }
export default MenuLeft;