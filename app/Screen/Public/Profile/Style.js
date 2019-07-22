const React = require('react-native')
const { Platform } = React

export default {
  backgroundImg: {
    width: '100%',
    height: 250,
    opacity: 0.9
  },
  backArrow: {
    padding: 5
  },
  backArrowIcon: {
    color: 'rgba(255,255,255,1)'
  },
  account: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10
  },
  memberImg: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  accountTitle: {
    alignSelf: 'center',
    marginVertical: 5,
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14
  },
  memberForm: {
    paddingVertical: 20,
    paddingHorizontal: "10%"
  },
  profile_TextInput: {
    borderBottomWidth: 0.5, 
    borderColor: '#000000',  
    fontSize: 20,
    paddingHorizontal: 0, 
    paddingBottom: 0,
    marginBottom: 5, 
  },
  profile_block: {
    marginBottom: 10
  },
  updateButton: {
    paddingHorizontal: 30, 
    paddingVertical: 10, 
    backgroundColor: "#370190", 
    justifyContent: 'center', 
    alignItems: 'center'
  }
}
