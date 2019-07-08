const React = require("react-native");
const { Platform } = React;

export default {
    bgMain:{
        position: 'absolute',
        width: '100%',
        height: 225
    },
    /* -- Tab -- */
    tabStyle: {
        backgroundColor: '#FFF',
    },
    textStyle: {
        fontSize: 8,
        fontFamily: 'Montserrat-Regular',
        color: '#000',
    },
    activeTabStyle: {
        backgroundColor: '#FFF',
    },
    activeTextStyle: {
        fontSize: 8,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.7)',
    },
    /*** -- Messages -- ***/
    caption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    },
    captionDesc: {
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: '#9253C8',
        paddingVertical: 10
    },
    captionDetails: {
        flexDirection: 'row',
        padding: 15
    },
    captionIcon: {
        color: '#9253C8',
        alignSelf: 'center',
        fontSize: 64,
    },
    captionInfo: {
        marginHorizontal: 10
    },
    captionHead: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
    },
    captionDescript: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
    },
    captionImg: {
        alignSelf: 'center',
        marginVertical: 20
    },
    add: {
        alignSelf: 'center',
    },
    addInfo: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        color: '#9253C8',
    },
    addDesc: {
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.7)',
        marginTop: 5
    },
    addBtn: {
        alignSelf: 'center',
        padding: 10,
        backgroundColor: 'rgba(152,160,172,1)',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,1)',
        marginVertical: 20
    },
    /*** -- Notifications -- ***/
    notifyLogo: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    notifyInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: 'rgba(0,0,0,0.07)',
        borderBottomWidth: 1
    },
    notifyDetails: {
        alignSelf: 'center',
        flex: 5,
        marginHorizontal: 10,
        marginTop: 10
    },
    notifyDesc: {
        fontSize: 11,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
    },
    notifyTime: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
        marginTop: 5
    },
    notifyVideo: {
        width: 75,
        height: 50,
        borderRadius: 3
    },
    videoIcon: {
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.5)'
    },
    /* Modal */
    modal1: {
        height: 200,
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    modalDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        margin: 5
    },
    accountRow: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderColor: 'rgba(0,0,0,0.07)',
        borderBottomWidth: 1
    },
    acIcon: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'rgba(0,0,0,0.5)'
    },
}