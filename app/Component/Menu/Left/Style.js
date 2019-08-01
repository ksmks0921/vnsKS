const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

  layout: {
    flex: 1,
  },
  nav: {
    flex: 1,
  },
  navProfile: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    color: '#FFF', 
    position: 'absolute', 
    right: 10, 
    top: 20,
    zIndex: 9
  },
  backArrowIcon: {
    color: '#FFF'
  },
  navMenu: {
    flex: 7,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  navName: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(255,255,255,1)',
    marginTop: 5
  },
  profileItem: {
    flex: 1,
    marginBottom: 15
  },
  profileBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  profileIconBg: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: 'rgba(150, 150, 150, 1)',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginBottom: 10,
    borderRadius: 32,
  },
  profileIcon: {
    width: 36,
    height: 36,
    textAlign: 'center',
  },
  profileName: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '10%'
  },

  navFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navFooterText: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    color: '#ffffff',
    textAlign: 'center',
  },

};
