import React from "react"
import { TextInput } from "react-native"

import ButtonDecrement from './ButtonDecrement'
import ButtonIncrement from './ButtonIncrement'
import Input from './Input'
export { ButtonDecrement, ButtonIncrement, Input }

class CounterInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: '0'
        }

        this.renderChildren = this.renderChildren.bind(this)
        this.renderChildrenInput = this.renderChildrenInput.bind(this)
        this.onPress = this.onPress.bind(this)

        this.inputRef = React.createRef()
    }
    onPress() {
        console.log('onPress')
        this.setState({
            counter: parseInt(this.state.counter, 10) + 1
        })
    }
    renderChildrenInput(children) {
        return React.Children.map(children, (childNode) => {
            if (childNode.type == TextInput) {
                return React.cloneElement(childNode, { ref: this.inputRef, defaultValue: this.state.counter, value: this.state.counter })
            }
            if (typeof childNode.props.children == 'string')
                return React.cloneElement(childNode, []);
            return React.cloneElement(childNode, [], this.renderChildrenInput(childNode.props.children));
        })
    }
    renderChildren(children) {
        return React.Children.map(children, (childNode) => {
            if (childNode.type == ButtonIncrement) {
                return React.cloneElement(childNode, {
                    onPress: this.onPress
                }, this.props.tagButtonIncrement);
            } else if (childNode.type == ButtonDecrement) {
                return React.cloneElement(childNode, [], this.props.tagButtonDecrement);
            } else if (childNode.type == Input) {
                return React.cloneElement(childNode, [], this.renderChildrenInput(this.props.tagInput));
            }
            if (typeof childNode.props.children == 'string')
                return React.cloneElement(childNode, []);
            return React.cloneElement(childNode, [], this.renderChildren(childNode.props.children));
        })
    }
    render() {
        return this.renderChildren(this.props.children)
    }
}

export default CounterInput