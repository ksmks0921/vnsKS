const React = require("react-native");
const { Platform } = React;

export default {
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
    
    videoCaption: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderColor: 'rgba(0,0,0,0.07)',
        // borderBottomWidth: 1,
        backgroundColor: '#dcdee8',
        marginBottom: 10,
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

    //===========
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
    videoBot: {
        width: '100%',
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: 0,
        height: 10,
        zIndex: 100
    },
    videoImg: {
        flex: 1,
        height: 200,
        borderRadius: 5
    },
    videoReviews: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 5
    },
    logoImg: {
        width: 44,
        height: 44,
        borderRadius: 22,
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
}