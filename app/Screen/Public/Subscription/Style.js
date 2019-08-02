// const React = require("react-native");
// const { Platform } = React;

// export default {
//     bgMain:{
//         position: 'absolute',
//         width: '100%',
//         height: 225
//     },
//     subscripDetails: {
//         marginVertical: 10,
//         marginHorizontal: 15
//     },
//     subscripImg: {
//         alignSelf: 'center',
//         width: 64,
//         height: 64,
//         borderRadius: 32,
//         borderColor: 'rgba(0,0,0,0.1)',
//         borderWidth: 1,
//         marginTop: 10,
//     },
//     subscripDesc: {
//         alignSelf: 'center',
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 12,
//         color: 'rgba(0,0,0,0.7)',
//         paddingTop: 10
//     },
//     subscripBox: {
//         position: 'absolute',
//         width: '100%',
//         marginTop: 10
//     },
//     subscripBoxDesc: {
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 12,
//         color: 'rgba(255,255,255,1)',
//         alignSelf: 'flex-end',
//         paddingVertical: 40,
//         paddingHorizontal: 10,
//         height: 100,
//         backgroundColor: 'rgba(0,0,0,0.5)'
//     },
//     /*** -- Video -- ***/
//     videoImg: {
//         flex: 1,
//         height: 200,
//         borderRadius: 5,
//     },
//     videoBot: {
//         width: '100%',
//         backgroundColor: '#FFF',
//         position: 'absolute',
//         bottom: 0,
//         height: 10,
//         zIndex: 100
//     },
//     searchVideo: {
//         marginHorizontal: 15,
//         marginVertical: 15,
//         borderRadius: 5,
//         backgroundColor: '#FFF',
//         // elevation: 10,
//         // shadowOffset: {
//         //     width: 15,
//         //     height: 15
//         // },
//         // shadowColor: '#9253C8',
//         // shadowOpacity: 0.9,
//         // shadowRadius: 5
//     },
//     videoReviews: {
//         flexDirection: 'row',
//         paddingHorizontal: 10,
//         marginTop: 5
//     },
//     videoDesc: {
//         flex: 1,
//         flexWrap: 'wrap',
//         fontFamily: 'Montserrat-SemiBold',
//         fontSize: 12,
//         color: 'rgba(0,0,0,0.7)',
//         marginHorizontal: 5
//     },
//     videoShare: {
//         alignSelf: 'center',
//         fontSize: 24,
//         color: 'rgba(0,0,0,0.3)'
//     },
//     logoImg: {
//         width: 44,
//         height: 44,
//         borderRadius: 22
//     },
//     videoComments: {
//         flexDirection: 'row',
//         marginLeft: 60,
//         marginRight: 10,
//         marginBottom: 10
//     },
//     videoDetails: {
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 10,
//         color: 'rgba(0,0,0,0.5)',
//     },
//     dot: {
//         color: 'rgba(0,0,0,0.5)',
//         paddingHorizontal: 5,
//         marginTop: -2
//     },
//     VideoTitle: {
//         paddingHorizontal: 15,
//         paddingTop: 10,
//         paddingBottom: 5,
//         color: 'rgba(0,0,0,0.7)',
//         fontFamily: 'Montserrat-SemiBold',
//         fontSize: 14
//     },
//     /* -- News -- */
//     newsLayout: {
//         width: 200,
//         marginHorizontal: 15,
//         marginVertical: 20,
//         borderRadius: 5,
//         backgroundColor: '#FFF',
//         elevation: 10,
//         shadowOffset: {
//             width: 10,
//             height: 10
//         },
//         shadowColor: '#FF0000',
//         shadowOpacity: 0.9,
//         shadowRadius: 3
//     },
//     videoComment: {
//         flexDirection: 'row',
//         marginTop: 5
//     },
//     newsVideo: {
//         flex: 1,
//         height: 100,
//         borderRadius: 5
//     },
//     newsBot: {
//         width: '100%',
//         backgroundColor: '#FFF',
//         position: 'absolute',
//         bottom: 0,
//         height: 5,
//         zIndex: 100
//     },
//     newsDetails: {
//         margin: 10,
//     },
//     breakingNews: {
//         color: 'rgba(0,0,0,0.7)',
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 11,
//     },
//     newsDesc: {
//         color: 'rgba(0,0,0,0.5)',
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 12
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
    bgMain:{
        position: 'absolute',
        width: '100%',
        height: 225
    },
    subscripDetails: {
        marginVertical: 10,
        marginHorizontal: 15
    },
    subscripImg: {
        alignSelf: 'center',
        width: 64,
        height: 64,
        borderRadius: 32,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        marginTop: 10,
        marginRight: 10
    },
    subscripDesc: {
        alignSelf: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        paddingTop: 10
    },
    subscripBox: {
        position: 'absolute',
        width: '100%',
        marginTop: 10
    },
    subscripBoxDesc: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'rgba(255,255,255,1)',
        alignSelf: 'flex-end',
        paddingVertical: 40,
        paddingHorizontal: 10,
        height: 100,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    /*** -- Video -- ***/
    videoImg: {
        flex: 1,
        height: 200,
        borderRadius: 5,
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
        // marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#9253C8',
        shadowOpacity: 0.9,
        shadowRadius: 5
    },
    videoReviews: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 5
    },
    videoDesc: {
        flex: 1,
        flexWrap: 'wrap',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
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
    VideoTitle: {
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 5,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14
    },
    /* -- News -- */
    newsLayout: {
        width: 200,
        marginHorizontal: 15,
        marginVertical: 20,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 10,
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: '#FF0000',
        shadowOpacity: 0.9,
        shadowRadius: 3
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
    newsBot: {
        width: '100%',
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: 0,
        height: 5,
        zIndex: 100
    },
    newsDetails: {
        margin: 10,
    },
    breakingNews: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
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

    //------------------------
    companyItem_gray: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#dcdee8',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginHorizontal: 5
    },

    companyItem: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginHorizontal: 5
    }
}