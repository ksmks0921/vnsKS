import React from 'react'
import { StatusBar, TouchableOpacity, Share, TextInput, Picker, Image } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'
import ModalDownload from './ModalDownload'


export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            isOpen: false,
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }
    open() {
        this.refModalShare.open()
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
                'React Native | A framework for building native apps using React',
        })
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
                    <TouchableOpacity style={Styles.accountRow} onPress={this.onShare} >
                        <Icon name='share' type="MaterialCommunityIcons" style={Styles.acIcon} />
                        <Text style={Styles.modalDesc}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.accountRow}>
                        <Icon name='watch-later' type="MaterialIcons" style={Styles.acIcon} />
                        <Text style={Styles.modalDesc}>Watch Later</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={Styles.accountRow} onPress={() => this.refModalDownload.open()}>
                        <Icon name='download' type="MaterialCommunityIcons" style={Styles.acIcon} />
                        <Text style={Styles.modalDesc} >Download</Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity style={Styles.accountRow}>
                        <Icon name='playlist-add' type="MaterialIcons" style={Styles.acIcon} />
                        <Text style={Styles.modalDesc}>Save to Playlist</Text>
                    </TouchableOpacity> */}
                </View>
            </Modal>
            <ModalDownload
                ref={(c) => { this.refModalDownload = c }}
            />
        </React.Fragment>
    }
}