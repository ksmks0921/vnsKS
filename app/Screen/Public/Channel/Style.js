const React = require("react-native");
const { Platform } = React;

export default {
    /* -- Header -- */
    subscribe_button: {
        height: 25,
        width: 90, 
        backgroundColor: '#f20c14', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 15  
    },
    unsubscribe_button: {
        height: 25, 
        width: 90,
        backgroundColor: '#75868f', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 15
    },
    header_logo: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginLeft: '3%', 
        marginRight: '5%'
    },
    /* -- Tab -- */
    tabStyle: {
        backgroundColor: '#FFF',
    },
    textStyle: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.2)',
        fontSize: 12
    },
    activeTabStyle: {
        backgroundColor: '#FFF',
    },
    activeTextStyle: {
        fontSize: 8,
        fontFamily: 'Montserrat-Regular',
        color: '#000',
    },
    /*** -- Channel -- ***/
    channel:{},
    title: {
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(255,255,255,1)',
    },
    channelImg: {
        width: '100%',
        height: 200
    },
    channelLogo: {
        //position: 'absolute',
        width: 72,
        height: 72,
        marginTop: -30
    },
    channelInfo: {
        
    },
    channelLogo_info: {
        width: 50,
        height: 50,
    },
    /*** -- subscribe -- ***/
    subscribe: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    subscribeInfo: {
        alignSelf: 'center',
        flex: 7,
    },
    subscribeView: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular'
    },
    subscribeIcon: {
        alignSelf: 'center',
        color: '#9253C8',
        marginHorizontal: 5
    },
    subscribeDesc: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#9253C8',
        fontFamily: 'Montserrat-Regular'
    },
    /*** -- Videos -- ***/
    videoImg: {
        alignSelf: 'center',
        width: 72,
        height: 72,
    },
    videoCaption: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 10,
        borderWidth: 0,
    },
    videoDetails: {
        alignSelf: 'center',
        flex: 5,
        marginHorizontal: 10
    },
    videoDescript: {
        fontSize: 10,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
        marginBottom: 5
    },
    videoView: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
    },
    videoIcon: {
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.5)'
    },
    /*** -- about -- ***/
    about: {
        marginTop: 25,
        marginHorizontal: 50,
        padding: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#5973c9'
    },
    aboutDesc: {
        fontSize: 17,
        color: '#5973c9',
    },
    aboutSubscribe: {
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
        marginTop: 10
    },
    /*** -- Modal -- ***/
    modalDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        margin: 5
    },
}