import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super()

        this.state = {
            num1: 0,
            num2: 0,
            num3: 0
        }
    }

    changeInput1= (evt) => {
        let newValue1 = parseInt(evt.target.value || 0)
        this.setState({num1: newValue1})
    }
    changeInput2= (evt) => {
        let newValue2 = parseInt(evt.target.value || 0)
        this.setState({num2: newValue2})
    }

    add = (e) => {
        const newCount = this.state.num1 + this.state.num2;
        this.setState({num3: newCount})
    }

    render() {
        return(
            <div>
                <h1>React Calculator</h1>

                <div>
                    <input type="text" value={this.state.num1} onChange={this.changeInput1}/>
                    <span>+</span>
                    <input type="text" value={this.state.num2} onChange={this.changeInput2}/>
                    <button onClick={this.add}>=</button>
                    <button>Clear Calculator</button>
                    <h3>{this.state.num3}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator;