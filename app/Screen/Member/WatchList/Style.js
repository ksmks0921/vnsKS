const React = require("react-native");
const { Platform } = React;

export default {
    navRight: {
        marginTop: 5,
        flexDirection: 'row',
        marginHorizontal: 10
    },
    navRightIcon: {
        alignSelf: 'center',
        fontSize: 26,
        color: 'rgba(255,255,255,1)',
        paddingHorizontal: 5
    },
    title: {
        fontSize: 12,
        color: 'rgba(255,255,255,1)',
        fontFamily: 'Montserrat-SemiBold',
    },
    condition: {
       
    },
    playInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.07)'
    },
    playDesc: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        alignSelf: 'center',
    },
    conditionChange: {
        alignSelf: 'center',
    },
    videoPlaylist: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        paddingHorizontal: 15,
        paddingVertical: 20
    },

}