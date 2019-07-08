import React from 'react'
import { StatusBar, TouchableOpacity, Share, TextInput, Picker, Image } from 'react-native'
import { Container, Header, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'
import Modal from 'react-native-modalbox'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'

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
        this.refModalDownload.open()
    }
    close() {
        this.setState({
            isOpen: false
        })
    }
    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }
    render() {
        return <Modal
            ref={(c) => { this.refModalDownload = c }}
            position={'bottom'}
            isOpen={this.state.isOpen}
            onClosed={() =>
                this.setState({
                    isOpen: false
                })
            }
            isDisabled={this.state.isDisabled}
            style={Styles.modal1} 
            >
            <View>
                <View>
                    <RadioGroup
                        onSelect={(index, value) => this.onSelect(index, value)}
                    >
                        <RadioButton style={Styles.radioBtn} value={'item1'} >
                            <View style={Styles.modalRow}>
                                <Text style={Styles.modalDesc}>Low(144p)</Text>
                                <Text style={Styles.modalDesc}>25MB</Text>
                            </View>
                        </RadioButton>
                        <RadioButton style={Styles.radioBtn} value={'item2'} >
                            <View style={Styles.modalRow}>
                                <Text style={Styles.modalDesc}>medium(144p)</Text>
                                <Text style={Styles.modalDesc}>25MB</Text>
                            </View>
                        </RadioButton>
                        <RadioButton style={Styles.radioBtn} value={'item3'}>
                            <View style={Styles.modalRow}>
                                <Text style={Styles.modalDesc}>high(144p)</Text>
                                <Text style={Styles.modalDesc}>25MB</Text>
                            </View>
                        </RadioButton>
                    </RadioGroup>
                </View>
                <View style={Styles.modalButton}>
                    <TouchableOpacity onPress={() => this.refModalDownload.close()}>
                        <Text style={Styles.modalDescBlue}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.refModalDownload.close()}>
                        <Text style={Styles.modalDesc}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    }
}