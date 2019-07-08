const React = require('react-native')
const { Platform } = React

export default {
  bgMain: {
    position: 'absolute',
    width: '100%',
    height: 225
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
  /** -Trending - **/
  trendDetails: {
    marginVertical: 10,
    paddingHorizontal: 10
  },
  trendImg: {
    alignSelf: 'center',
    width: 36,
    height: 36,
    marginTop: 10
  },
  trendImgDisplay: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
  trendDesc: {
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,1)'
  },
  bgColor: {
  },
  /** * -- Video -- ***/
  videoImg: {
    flex: 1,
    height: 200,
    borderRadius: 5
  },
  videoBot: {
    width: '100%',
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    height: 10,
    zIndex: 100
  },
  searchVideo: {
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  videoReviews: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 5
  },
  videoDesc: {
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'rgba(0,0,0,0.7)',
    marginHorizontal: 10
  },
  videoShare: {
    alignSelf: 'center',
    fontSize: 24,
    color: 'rgba(0,0,0,0.3)'
  },
  logoImg: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  videoComments: {
    flexDirection: 'row',
    marginLeft: 65,
    marginRight: 10,
    marginBottom: 10
  },
  videoDetails: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: 'rgba(0,0,0,0.5)'
  },
  dot: {
    color: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 5,
    marginTop: -8
  },
  VideoTitle: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
    color: 'rgba(0,0,0,0.7)',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14
  },
  /* -- News -- */
  newsLayout: {
    width: 200,
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowColor: '#f0f0f0',
    shadowOpacity: 0.9,
    shadowRadius: 3
  },
  videoComment: {
    flexDirection: 'row',
    marginTop: 5
  },
  newsVideo: {
    flex: 1,
    height: 100,
    borderRadius: 5
  },
  newsBot: {
    width: '100%',
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    height: 5,
    zIndex: 100
  },
  newsDetails: {
    margin: 10
  },
  breakingNews: {
    color: 'rgba(0,0,0,0.7)',
    fontFamily: 'Montserrat-Regular',
    fontSize: 11
  },
  newsDesc: {
    color: 'rgba(0,0,0,0.5)',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12
  },
  /* -- Account -- */
  backArrow: {
    padding: 5
  },
  backArrowIcon: {
    color: 'rgba(255,255,255,1)'
  },
  memberImg: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  backgroundImg: {
    width: '100%',
    height: 250,
    opacity: 0.9
  },
  account: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10
  },
  closeIcon: {
    alignSelf: 'center',
    color: 'rgba(0,0,0,0.5)'
  },
  accountTitle: {
    alignSelf: 'center',
    marginVertical: 5,
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14
  },
  accountList: {
    flexDirection: 'row'
  },
  memberList: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderColor: 'rgba(0,0,0,0.07)',
    borderBottomWidth: 1
  },
  memberForm: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  accountIcons: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 24,
    marginHorizontal: 10
  },

  /* Modal */
  modal1: {
    height: 300,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  modalMemberAccount: {
    height: '100%',
    width: '100%',
    alignSelf: 'center'
  },
  modalDesc: {
    color: 'rgba(0,0,0,0.7)',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    margin: 5
  },
  modalDescBlue: {
    color: 'rgba(0,0,255,1)',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    margin: 5
  },
  modalIcon: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'rgba(0,0,0,0.5)'
  },
  radioBtn: {
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.07)',
    borderBottomWidth: 1
  },
  radioDesc: {
    color: 'rgba(0,0,0,0.7)',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  modalRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  accountRow: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderColor: 'rgba(0,0,0,0.07)',
    borderBottomWidth: 1
  },
  accountDesc: {
    alignSelf: 'center',
    color: 'rgba(0,0,0,0.7)',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12
  },
  acIcon: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'rgba(0,0,0,0.5)'
  }
}
