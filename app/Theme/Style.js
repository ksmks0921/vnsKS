
const React = require('react-native')
const { Platform } = React

export default {
  // *** Login *** //
  login_TextInput: {
    flex: 0.15, 
    borderBottomWidth: 1, 
    borderColor: 'white',  
    fontSize: 17,
    paddingHorizontal: 0, 
    paddingBottom: 0,
    marginBottom: 5, 
    textAlign: 'center', 
    color: '#FFF'
  },
  hadAccount_view: {
    flex: 4,  
    marginTop: 15, 
    alignItems: 'center',
  },
  hadAccount: {
    height: 20, 
    flexDirection: 'row',  
    justifyContent: 'center'
  },
  hadAccount_des: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  hadAccountDes_text: {
    fontSize: 12, 
    color: '#b0aeae',
  },
  hadAccount_button: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  hadAccountBtn_des: {
    fontSize: 15, 
    color: '#FFF'
  },
  // *** Header *** //
  navigation: {
    width: '100%',
    backgroundColor: '#171841'
  },
  navigationTransparent: {
    width: '100%',
    backgroundColor: 'transparent'
  },

  // *** Content *** //
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: 'rgba(146,83,200,0.05)'
  },

  // *** text header *** //
  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -10
  },
  navLeft: {
    alignItems: 'center',
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  navRight: {
    alignItems: 'center',
    marginHorizontal: 10
  },
  navLeftIcon: {
    fontSize: 38,
    color: 'rgba(255,255,255,1)',
    paddingHorizontal: 5
  },
  navMiddle: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navMiddleDesc: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#FFF'
  },
  navRightIcon: {
    fontSize: 26,
    color: 'rgba(255,255,255,1)',
    paddingHorizontal: 5
  },
  navIcon: {
    fontSize: 26,
    color: 'rgba(255,255,255,1)',
    paddingHorizontal: 5
  },
  headerImg: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  actionMenu: {
    marginLeft: 10
  },
  actionBtn: {
    alignSelf: 'center'
  },
  actionIcon: {
    fontSize: 18,
    color: '#FFF'
  },
  actionBtnRight: {
    alignSelf: 'flex-end'
  },
  navIn: {
    ...Platform.select({
      ios: {
        marginTop: 20
      }
    })
  },

  textHeader: {
    fontSize: 24,
    color: '#FFF'
  },
  textDesc: {
    fontSize: 14,
    color: '#FFF'
  },

  // *** footer *** //
  footerBg: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    paddingHorizontal: 10
  },
  fTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10

  },
  fIcons: {
    backgroundColor: 'rgba(255,255,255,1)'
  },
  fTabView: {
    flexDirection: 'row'

  },
  fIconsRow: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1

  },
  iconActive: {
    ...Platform.select({
      ios: {
        color: '#171841',
        fontSize: 24,
        alignSelf: 'center'
      },
      android: {
        color: '#171841',
        fontSize: 24,
        alignSelf: 'center'
      }
    })
  },
  iconInactive: {
    ...Platform.select({
      ios: {
        fontSize: 24,
        color: 'rgba(0,0,0,0.5)',
        alignSelf: 'center'
      },
      android: {
        fontSize: 24,
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.5)'
      }
    })
  },
  fTabIcon: {
    ...Platform.select({
      ios: {
        fontSize: 24,
        color: 'rgba(0,0,0,0.5)',
        marginHorizontal: 5
      },
      android: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.5)',
        marginHorizontal: 5
      }
    })
  },
  fTabDesc: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)'
  },
  textActive: {
    fontSize: 10,
    color: '#171841',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center'
  },
  textInactive: {
    fontSize: 10,
    color: 'rgba(0,0,0,0.5)',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center'
  }
}
