// import React from 'react'
// import { StatusBar, TouchableOpacity, Share, TextInput, Picker, Image } from 'react-native'
// import { Container, Header, Content, Icon, Text, View } from 'native-base'

// import NavigationService from '@Service/Navigation'
// import Modal from 'react-native-modalbox'

// import Style from '@Theme/Style'
// import Styles from '@Screen/Public/Home/Style'
// import ModalDownload from './ModalDownload'
// import api from '../../../../Constants/Api'


// export default class extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isDisabled: false,
//             isOpen: false,
//         }
//         this.open = this.open.bind(this)
//         this.close = this.close.bind(this)
//     }
//     open(item) {
//         this.refModalShare.open()
//         console.log("===selected_modalItem===");
//         global.watchLaterItem = item;
//         global.shareItem = item;
//         console.log(item);
//     }
//     close() {
//         this.setState({
//             isOpen: false
//         })
//         this.onShare = this.onShare.bind(this)
//     }
//     onShare() {
//         Share.share({
//             message:
//             global.shareItem.video,
//         })
//     }
//     onWatchLater(){
//         console.log("===watchLater_item===");
//         console.log(global.watchLaterItem);
//         var id = global.watchLaterItem.channel_id;
//         var company_name = global.watchLaterItem.channel_name;
//         var session_id = global.session_id;
//         api.watchLater(id, company_name, session_id).then((res)=>{
//             console.log('watchLater_response____');
//             console.log(res);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }
//     render() {
//         return <React.Fragment>
//             <Modal
//                 ref={(c) => { this.refModalShare = c }}
//                 position={'bottom'}
//                 isOpen={this.state.isOpen}
//                 onClosed={() =>
//                     this.setState({
//                         isOpen: false
//                     })
//                 }
//                 isDisabled={this.state.isDisabled}
//                 style={Styles.modal1} >
//                 <View>
//                     <TouchableOpacity style={Styles.accountRow} onPress={this.onShare} >
//                         <Icon name='share' type="MaterialCommunityIcons" style={Styles.acIcon} />
//                         <Text style={Styles.modalDesc}>Share</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={Styles.accountRow} onPress={this.onWatchLater} >
//                         <Icon name='watch-later' type="MaterialIcons" style={Styles.acIcon} />
//                         <Text style={Styles.modalDesc}>Watch Later</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>
//             <ModalDownload
//                 ref={(c) => { this.refModalDownload = c }}
//             />
//         </React.Fragment>
//     }
// }

import React from 'react'
import { StatusBar, TouchableOpacity, Share, TextInput, Picker, Image } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modalbox'

import NavigationService from '@Service/Navigation'
import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'
import ModalDownload from './ModalDownload'
import api from '../../../../Constants/Api'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
            spinner: false,
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }
    open(item) {
        this.refModalShare.open()
        console.log("===selected_modalItem===");
        global.watchLaterItem = item;
        global.shareItem = item;
        
        console.log(item);
    }
    close() {
        this.setState({
            isOpen: false
        })
        this.onShare = this.onShare.bind(this)
    }
    onShare() {
        Share.share({
            message:
                global.shareItem.video,
        })
    }
    onWatchLater=()=>{
        
        console.log("===watchLater_item===");
        console.log(global.watchLaterItem);
        if(!global.watchLaterItem.watchLater_status){
            this.setState({spinner: true});
            
            var id = global.watchLaterItem.id;
            var company_name = global.watchLaterItem.channel_name;
            var session_id = global.session_id;

            //--------feedData update for watchLater------
            global.feedData.map((feedDatas, index)=>{
                if(id==feedDatas.id){
                    feedDatas.watchLater_status = true;
                }
            })
            this.forceUpdate();
            console.log("updated feedData for watchLater", global.feedData)


            //--------------------------------------------
            api.watchLater(id, company_name, session_id).then((res)=>{
                console.log('watchLater_response____');
                console.log(res);
                this.setState({spinner: false});
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
    render() {
        return <React.Fragment>
            <Modal
                ref={(c) => { this.refModalShare = c }}
                position={'bottom'}
                isOpen={this.state.isOpen}
                onClosed={() =>
                    this.setState({
                        isOpen: false
                    })
                }
                isDisabled={this.state.isDisabled}
                style={Styles.modal1} >
                <View>
                    <Spinner visible={this.state.spinner}/>
                    <TouchableOpacity style={Styles.accountRow} onPress={this.onShare} >
                        <Icon name='share' type="MaterialCommunityIcons" style={Styles.acIcon} />
                        <Text style={Styles.modalDesc}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.accountRow} onPress={this.onWatchLater} >
                        <Icon name='watch-later' type="MaterialIcons" style={Styles.acIcon} />
                        <Text style={Styles.modalDesc}>Watch Later</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <ModalDownload
                ref={(c) => { this.refModalDownload = c }}
            />
        </React.Fragment>
    }
}