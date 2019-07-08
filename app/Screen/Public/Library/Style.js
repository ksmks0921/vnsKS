// const React = require("react-native");
// const { Platform } = React;

// export default {
//     bgColor: {
//         backgroundColor: '#f0f0f0'
//     },
//     caption: {
//         color: 'rgba(0,0,0,0.7)',
//         fontFamily: 'Montserrat-SemiBold',
//         fontSize: 14,
//         paddingTop: 15,
//         paddingHorizontal: 10,

//     },
//     /* -- News -- */
//     recentLayout: {
//         width: 250,
//         marginHorizontal: 10,
//         marginVertical: 15,
//         borderRadius: 5,
//         backgroundColor: '#FFF',
//         elevation: 10,
//         shadowOffset: {
//             width: 10,
//             height: 10
//         },
//         shadowColor: 'rgba(0,0,0,0.1)',
//         shadowOpacity: 0.1,
//         shadowRadius: 5
//     },
//     recentComment: {
//         flexDirection: 'row',
//         marginTop: 5
//     },
//     recentVideo: {
//         flex: 1,
//         height: 100,
//         borderRadius: 5,
//     },
//     recentDetails: {
//         flexDirection: 'row',
//         padding: 10
//     },
//     recentNews: {
//         flex: 1,
//         color: 'rgba(0,0,0,0.7)',
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 12
//     },
//     videoDetails: {
//         color: 'rgba(0,0,0,0.5)',
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 12,
//         margin: 10
//     },
//     newsDesc: {
//         color: 'rgba(0,0,0,0.5)',
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 12,
//     },
//     recentIcon: {
//         color: 'rgba(0,0,0,0.5)'
//     },
//     recentForm: {
//         marginHorizontal: 5,
//         marginTop: 10,
//         paddingVertical: 10,
//         borderColor: 'rgba(0,0,0,0.1)',
//         borderTopWidth: 1,
//         borderBottomWidth: 1
//     },
//     recentIcons: {
//         color: 'rgba(0,0,0,0.4)',
//         fontSize: 20
//     },
//     recentDesc: {
//         alignSelf: 'center',
//         color: 'rgba(0,0,0,0.7)',
//         fontFamily: 'Montserrat-SemiBold',
//         fontSize: 12,
//         marginHorizontal: 10
//     },
//     recentAdd: {
//         alignSelf: 'center',
//         color: 'rgba(0,0,0,0.7)',
//         fontFamily: 'Montserrat-SemiBold',
//         fontSize: 12,
//         paddingVertical: 10,
//         paddingHorizontal: 10
//     },
//     modalDesc: {
//         color: 'rgba(0,0,0,0.7)',
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 12,
//         margin: 5
//     },
//     playlist: {
//         flexDirection: 'row',
//         paddingHorizontal: 10,
//         paddingVertical: 10
//     },
//     playlistImg: {
//         width: 50,
//         height: 50,
//         marginHorizontal: 10,
//         borderRadius: 3,
//     },
//     playlistDesc: {
//     },
//     listDesc: {
//         color: 'rgba(0,0,0,0.7)',
//         fontFamily: 'Montserrat-SemiBold',
//         fontSize: 12
//     },
//     listTime: {
//         color: 'rgba(0,0,0,0.5)',
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 11
//     },
//     /* Modal */
//     modal1: {
//         height: 300,
//         width: '100%',
//         paddingVertical: 20,
//         paddingHorizontal: 10
//     },
//     modalDesc: {
//         color: 'rgba(0,0,0,0.7)',
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 12,
//         margin: 5
//     },
//     accountRow: {
//         flexDirection: 'row',
//         paddingVertical: 15,
//         paddingHorizontal: 10,
//         borderColor: 'rgba(0,0,0,0.07)',
//         borderBottomWidth: 1
//     },
//     acIcon: {
//         alignSelf: 'center',
//         fontSize: 20,
//         color: 'rgba(0,0,0,0.5)'
//     },
// }

const React = require("react-native");
const { Platform } = React;

export default {
    navigationBar: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: -10,
        marginTop: 5,
        zIndex: 9
    },
    navLeft: {
        alignItems: 'center',
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
    navLeftDesc: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: '#FFF',
    },
    navRight: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    navLeftIcon: {
        fontSize: 38,
        color: 'rgba(255,255,255,1)',
        paddingHorizontal: 5
    },
    navRightIcon: {
        fontSize: 26,
        color: 'rgba(255,255,255,1)',
        paddingHorizontal: 5
    },

    /** Detail **/
    videoInfoDetails: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    videoInfo: {
        margin: 10
    },
    detailImg: {
        width: '100%',
        height: 110,
        backgroundColor: '#dcdee8',
        padding: 20
    },
    detailInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    videoDesc: {
        flex: 7,
        flexWrap: 'wrap',
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold'
    },
    videoIcon: {
        color: 'rgba(0,0,0,0.7)',
    },
    videoViews: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        marginTop: 5
    },
    groupLikeIcon: {
        color: 'rgba(0,0,0,0.5)',
    },
    listIcons: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderColor: 'rgba(0,0,0,0.1)',
        // borderBottomWidth: 1,
        paddingBottom: 10,
        marginHorizontal: 10
    },
    groupIcon: {
        color: 'rgba(0,0,0,0.5)',
    },
    subscribe: {
        flexDirection: 'row',
        padding: 10,
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    subscribe_button: {
        height: 25,
        width: 90, 
        alignSelf: 'center',
        backgroundColor: '#f20c14', 
        alignItems: 'center', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    unsubscribe_button: {
        height: 25, 
        width: 90,
        alignSelf: "center",
        backgroundColor: '#75868f', 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    subscribeInfo: {
        flex: 7,
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subscribeImg: {
        width: 36,
        height: 36,
    },
    subscribeCaption: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
    },
    subscribeView: {
        fontSize: 11,
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
    },
    subscribeIcon: {
        alignSelf: 'center',
        color: '#9253C8',
        marginHorizontal: 5
    },
    subscribeDesc: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#f20c14',
        fontFamily: 'Montserrat-Regular'
    },
    unsubscribeDesc: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#b7bac9',
        fontFamily: 'Montserrat-Regular'
    },
    playInfo: {
        flexDirection: 'row',
        margin: 10
    },
    playDesc: {
        flex: 7,
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold'
    },
    playAuto: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold'
    },
    /*** -- Notify -- ***/
    videoImg: {
        alignSelf: 'center',
        width: 140,
        height: 85
    },
    videoCaption: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderColor: 'rgba(0,0,0,0.07)',
        // borderBottomWidth: 1
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
    videoView: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
    },
    videoIcon: {
        fontSize: 24,
        color: 'rgba(0,0,0,0.5)'
    },
    /** comments **/
    commentInfo: {
        flexDirection: 'row',
        padding: 10,
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    },
    commentsCaption: {
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
    },
    commentsView: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.7)',
        marginHorizontal: 10,
    },
    commentIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    /** Modal **/
    modal3: {
        height: 300,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignSelf: 'center'
    },
    modalReport: {
        height: 320,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignSelf: 'center'
    },
    modalPlaylist: {
        height: 200,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignSelf: 'center'
    },
    modalDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginHorizontal: 10,
        marginVertical: 5
    },
    modalDescBlue: {
        color: 'rgba(0,0,255,1)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        margin: 5
    },
    modalIcon: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'rgba(0,0,0,0.5)'
    },
    radioAlign: {
        alignItems: 'center',
        borderColor: 'rgba(0,0,0,0.07)',
        borderBottomWidth: 1,
    },
    radioDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginHorizontal: 10
    },
    videoForm: {
        flexDirection: 'row'
    },
    modalRow: {
        flexDirection: 'row',
        borderColor: 'rgba(0,0,0,0.07)',
        borderBottomWidth: 1,
        paddingVertical: 10
    },
    modalButton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    closeDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        alignSelf: 'flex-start',
        padding: 5,
        borderColor: 'rgba(0,0,0,0.07)',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5
    },
    linkDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginHorizontal: 15,
        marginVertical: 5
    },
    link: {
        flex: 1
    },
    blueLink: {
        color: 'rgba(0,0,255,1)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginHorizontal: 15,
        marginVertical: 5
    },
    videoShare: {
        // alignSelf: 'center',
        fontSize: 24,
        color: 'rgba(0,0,0,0.3)'
    },
}