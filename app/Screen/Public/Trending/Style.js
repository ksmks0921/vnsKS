const React = require("react-native");
const { Platform } = React;

export default {
    /*** -- Video -- ***/
    videoImg: {
        flex: 1,
        height: 200,
        borderRadius: 10
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
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 3,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#FF0000',
        shadowOpacity: 0.1,
        shadowRadius: 0
    },
    videoReviews: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 10
    },
    videoDesc: {
        flex: 6,
        flexWrap: 'wrap',
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
        alignSelf: 'center',
        marginHorizontal: 5
    },
    videoShare: {
        alignSelf: 'center',
        fontSize: 24,
        color: 'rgba(0,0,0,0.3)'
    },
    logoImg: {
        width: 44,
        height: 44,
        borderRadius: 22
    },
    videoComments: {
        flexDirection: 'row',
        marginLeft: 60,
        marginRight: 10,
        marginBottom: 10
    },
    videoDetails: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: 'rgba(0,0,0,0.5)',
    },
    dot: {
        color: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 5,
        marginTop: -8
    },
    videoTitle: {
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 5,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    /* -- News -- */
    newsLayout: {
        width: 200,
        marginHorizontal: 15,
        marginVertical: 20,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 3,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#666',
        shadowOpacity: 0.9,
        shadowRadius: 0
    },
    newsBot: {
        width: '100%',
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: 0,
        height: 5,
        zIndex: 100
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
    newsDetails: {
        margin: 10,
    },
    breakingNews: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    newsDesc: {
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12
    },
    /* Modal */
    modal1: {
        height: 300,
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