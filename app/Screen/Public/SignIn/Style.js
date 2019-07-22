const React = require('react-native')
const { Platform } = React

export default {
  login_TextInput_view: {
    flex: 1.3, 
    alignItems: 'center', 
    justifyContent: "center",
    borderBottomWidth: 0.3, 
    borderColor: 'white',
    backgroundColor: 'red',
    padding: 0
  },
  LoginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D6292E',
    height: 40,
},

searchForm: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 10,
  marginHorizontal: 15,
  height: 40,
  borderRadius: 30,
  backgroundColor: 'rgba(255,255,255,1)',
  borderColor: 'rgba(255,255,255,1)',
  borderWidth: 0
},
searchInput: {
  flex: 1,
  paddingHorizontal: 15
},
searchIcon: {
  alignSelf: 'center',
  fontSize: 24,
  color: 'rgba(0,0,0,0.2)',
  paddingVertical: 5,
  paddingHorizontal: 15
},


}
