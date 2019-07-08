const React = require("react-native");
const { Platform } = React;

export default {
    memberName:{
        color: 'rgba(255,255,255,1)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
    },
    navRight: {
        marginTop: 5,
        flexDirection: 'row',
        marginHorizontal: 10
    },
    navRightIcon:{
        alignSelf: 'center',
        fontSize: 26,
        color: 'rgba(255,255,255,1)',
        paddingHorizontal: 5
    },
    videoPlaylist:{
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    playlist:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    playlistImg:{
        width: 100,
        height: 75,
        marginBottom: 10,
        borderRadius: 3
    },
    playlistDesc:{
        alignSelf: 'center',
        marginHorizontal: 10
    },
    listDesc:{
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
    },
    listTime:{
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginTop: 5
    },
    modalDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        margin: 5
    },
}