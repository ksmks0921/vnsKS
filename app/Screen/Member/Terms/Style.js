const React = require("react-native");
const { Platform } = React;

export default {
    title:{
        fontSize: 12,
        color: 'rgba(255,255,255,1)',
        fontFamily: 'Montserrat-SemiBold',
    },
    condition: {
        paddingHorizontal: 15,
        marginTop: 20
    },
    settingsInfo: {
        flexDirection: 'row',
        marginVertical: 10
    },
    termsDesc:{
        lineHeight: 25,
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
    },
    settingsDesc: {
        alignSelf: 'center',
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
    },
    settingsList:{
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 10
    },
    conditionChange: {
        alignSelf: 'center',
    },
}