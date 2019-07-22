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
    videoImg: {
        alignSelf: 'center',
        width: 72,
        height: 72
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
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
        marginBottom:5
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