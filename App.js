import React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from "react-navigation"

import DrawerContent from '@Component/Menu/Left'

import PublicSignIn from '@Screen/Public/SignIn'
import PublicSignUp from '@Screen/Public/SignUp'
import PublicHome from '@Screen/Public/Home'
import PublicDetail from '@Screen/Public/Detail'
import PublicChannel from '@Screen/Public/Channel'
import PublicChannelList from '@Screen/Public/ChannelList'
import PublicSearch from '@Screen/Public/Search'
import PublicTrending from '@Screen/Public/Trending'
import PublicSubscription from '@Screen/Public/Subscription'
import PublicInbox from '@Screen/Public/Inbox'
import PublicLibrary from '@Screen/Public/Library'
import PublicHelp from '@Screen/Public/Help'
import PublicProfile from '@Screen/Public/Profile'
import PublicNotification from '@Screen/Public/Notification'
import PublicBottomTab from '@Screen/Public/PublicComponent/BottomTab'





import MemberHome from '@Screen/Member/Home'
import MemberGeneral from '@Screen/Member/General'
import MemberSettings from '@Screen/Member/Settings'
import MemberAutoPlay from '@Screen/Member/AutoPlay'
import MemberDownloads from '@Screen/Member/Downloads'
import MemberPolicy from '@Screen/Member/Policy'
import MemberNotifications from '@Screen/Member/Notifications'
import MemberWatchList from '@Screen/Member/WatchList'
import MemberTerms from '@Screen/Member/Terms'

import LeftMenuDetailHowItWork from '@Screen/LeftMenuDetail/HowItWork'
import LeftMenuDetailCompanies from '@Screen/LeftMenuDetail/Companies'
import LeftMenuDetailVnsSearch from '@Screen/LeftMenuDetail/VnsSearch'
import LeftMenuDetailVnsSchool from '@Screen/LeftMenuDetail/VnsSchool'
import LeftMenuDetailVnsSpotlight from '@Screen/LeftMenuDetail/VnsSpotlight'
import LeftMenuDetailVnsOverview from '@Screen/LeftMenuDetail/VnsOverview'






import NavigationService from '@Service/Navigation'

const deviceWidth = Dimensions.get("window").width;

const Drawer = createDrawerNavigator(
  {
    PublicHome: {
      screen: PublicHome,
    },
    MemberHome: {
      screen: MemberHome,
    },
    DrawerContent:{
      screen:DrawerContent
    }
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    hideStatusBar: true,
    // headerMode: "none",
    // initialRouteName: "PublicHome",
    drawerWidth: deviceWidth
  }
)

const AppNav = createStackNavigator(
  { PublicSignIn : {
      screen: PublicSignIn
    },
    PublicSignUp : {
      screen: PublicSignUp
    },
    PublicDetail: {
      screen: PublicDetail,
    },
    PublicChannel: {
      screen: PublicChannel,
    },
    PublicChannelList: {
      screen: PublicChannelList,
    },
    PublicSearch: {
      screen: PublicSearch,
    },
    PublicTrending: {
      screen: PublicTrending,
    },
    PublicSubscription: {
      screen: PublicSubscription,
    },
    PublicInbox: {
      screen: PublicInbox,
    },
    PublicLibrary: {
      screen: PublicLibrary,
    },
    PublicHelp: {
      screen: PublicHelp
    },

    PublicNotification: {
      screen: PublicNotification
    },

    PublicBottomTab: {
      screen: PublicBottomTab
    },


    MemberHome: {
      screen: MemberHome
    },
    MemberGeneral: {
      screen: MemberGeneral
    },
    MemberSettings: {
      screen: MemberSettings
    },
    MemberWatchList: {
      screen: MemberWatchList
    },
    MemberAutoPlay: {
      screen: MemberAutoPlay
    },
    MemberDownloads: {
      screen: MemberDownloads
    },
    MemberPolicy: {
      screen: MemberPolicy
    },
    MemberNotifications: {
      screen: MemberNotifications
    },
    MemberTerms: {
      screen: MemberTerms
    },

    LeftMenuDetailHowItWork : {
      screen: LeftMenuDetailHowItWork
    },
    LeftMenuDetailCompanies : {
      screen: LeftMenuDetailCompanies
    },
    LeftMenuDetailVnsSearch : {
      screen: LeftMenuDetailVnsSearch
    },
    LeftMenuDetailVnsSchool : {
      screen: LeftMenuDetailVnsSchool
    },
    LeftMenuDetailVnsSpotlight: {
      screen: LeftMenuDetailVnsSpotlight
    },
    LeftMenuDetailVnsOverview: {
      screen: LeftMenuDetailVnsOverview
    },
    PublicProfile: {
      screen: PublicProfile
    },


    Drawer: {
      screen: Drawer
    }
  },
  // {
  //   headerMode: "none",
  //   initialRouteName: "Drawer"
  //   // initialRouteName: "LeftMenuDetailVnsSearch"
  // }

  {
    headerMode: "none",
    initialRouteName: "PublicSignIn"
  }
)

export default class App extends React.Component {
  render() {
    return (
      <AppNav ref={(r) => { NavigationService.setTopLevelNavigator(r) }} />
    );
  }
}