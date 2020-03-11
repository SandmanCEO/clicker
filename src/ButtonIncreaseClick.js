import React, {Component} from 'react'

class ButtonIncreaseClick extends Component {

    increaseMultiplier = () => {
        this.props.increaseCallback(this.props.cost, this.props.increase)
    }

    render() {
        return (
            <li><button onClick={this.increaseMultiplier} className="increaseButton">+{this.props.increase}</button></li>
        )
    }
}

export default ButtonIncreaseClick;