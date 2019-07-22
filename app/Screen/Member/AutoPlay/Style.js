const React = require("react-native");
const { Platform } = React;

export default {
    title: {
        fontSize: 12,
        color: 'rgba(255,255,255,1)',
        fontFamily: 'Montserrat-SemiBold',
    },
    condition: {
        padding: 10
    },
    settingsInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    },
    settingsView:{
        flex: 6
    },
    settingsDesc: {
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