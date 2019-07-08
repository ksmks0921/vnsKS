const React = require("react-native");
const { Platform } = React;

export default {
  search: {
    width: '85%',
    borderRadius: 25,
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontFamily: 'Montserrat-Regular',
    fontSize: 11
  },
  searchChannel: {
    padding: 10
  },
  channelImg: {
    height: 48,
    width: 48,
    borderRadius: 24
  },
  channelRow: {
    flexDirection: 'row',
    marginTop: 20
  },
  channelList: {
    alignSelf: 'center',
    fontSize: 12,
    color: 'rgba(0,0,0,0.7)',
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 10
  },
}