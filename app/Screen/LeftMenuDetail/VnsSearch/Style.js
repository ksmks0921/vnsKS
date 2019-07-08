const React = require("react-native");
const { Platform } = React;

export default {
    /* --search -- */
    
    searchIcon: {
        alignSelf: 'center',
        fontSize: 24,
        color: 'rgba(0,0,0,0.2)',
    },
    
    searchInput: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 5
       
    },
    searchIcon: {
        alignSelf: 'center',
        fontSize: 24,
        color: 'rgba(0,0,0,0.2)',
    },
    /* --------- */
    title: {
        color: 'rgba(255,255,255,1)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: 'white'
    },
    detailImg: {
        width: '100%',
        height: 250,
        opacity: 0.9
    },
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
    subscribe: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    videoImg: {
        alignSelf: 'center',
        width: 72,
        height: 72,
    },
    videoCaption: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderColor: 'rgba(0,0,0,0.07)',
        // borderBottomWidth: 1,
        backgroundColor: '#dcdee8',
        marginBottom: 10,
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
    videoInfoDetails: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
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
        alignSelf: "center",
        backgroundColor: '#75868f', 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
}