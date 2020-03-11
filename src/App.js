import React, {Component} from 'react';
import ButtonIncreaseClick from './ButtonIncreaseClick'
import ButtonIncreaseTime from "./ButtonIncreaseTime";
import './App.css'

const perks = [
    {
        cost: 10,
        increase: 5
    },
    {
        cost: 20,
        increase: 10
    },
    {
        cost: 50,
        increase: 20
    },
    {
        cost: 100,
        increase: 50
    },
]

class App extends Component {

    state = {
        points: 0,
        clickMultiplier: 1,
        delayMultiplier: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => this.increasePointsDelay(), 1000)
    }

    increasePoints = () => {
        this.setState({points: this.state.points + this.state.clickMultiplier})
    }

    increasePointsDelay = () => {
        this.setState({points: this.state.points + this.state.delayMultiplier})
    }

    increaseClickMultiplier = (cost, increase) => {
        if (cost <= this.state.points) {
            this.setState({points: this.state.points - cost, clickMultiplier: this.state.clickMultiplier + increase})
        }
    }

    increaseTimeMultiplier = (cost, increase) => {
        if (cost <= this.state.points) {
            clearInterval(this.interval)
            this.setState({points: this.state.points - cost, delayMultiplier: this.state.delayMultiplier + increase})
            this.interval = setInterval(() => this.increasePointsDelay(), 1000)
        }
    }


    render() {
        return (
            <div className="App">
                <h1>{this.state.points}</h1>
                <br/>
                <button onClick={this.increasePoints} className="clickButton">CLICK</button>
                <div className="perksContainer">
                    <ul>
                        <li>Click perks</li>
                        {perks.map(row => (
                    <ButtonIncreaseClick increase={row.increase} cost={row.cost} increaseCallback={this.increaseClickMultiplier}/>
                ))}
                    </ul>
                    <ul>
                        <li>Time perks</li>
                        {perks.map(row => (
                    <ButtonIncreaseTime increase={row.increase} cost={row.cost} increaseCallback={this.increaseTimeMultiplier}/>
                ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
