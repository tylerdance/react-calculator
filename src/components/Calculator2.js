import React, {Component} from 'react';

class Calculator2 extends Component {
    state = {
        num1: 0,
        num2: 0,
        sum: 0,
        operator: '+'
    };
    setNum = (e, numChanging) => {
       this.setState({
           [numChanging]: parseInt(e.target.value)
       })
    }
    operator = (e) => {
        let type = e.target.value;
        this.setState({ operator: type });
    }
    addNums = () => {
        if (this.state.operator === '+') {
            let newSum = this.state.num1 + this.state.num2;
            this.setState({ sum: newSum })
        } else if (this.state.operator === '-') {
            let newSum = this.state.num1 - this.state.num2;
            this.setState({ sum: newSum })
        } else if (this.state.operator === '*') {
            let newSum = this.state.num1 * this.state.num2;
            this.setState({ sum: newSum })
        } else if (this.state.operator === '/') {
            let newSum = this.state.num1 / this.state.num2;
            this.setState({ sum: newSum })
        }
    }
    render() {
        return (
            <div className="container">
                <h1>React Calculator!</h1>
​
                <div className="add">
                    <input type="number"
                           name="num1"
                           placeholder="Enter your first number"
                           value={this.state.num1}
                           onChange={(e) => this.setNum(e, 'num1')}
                    />
                    <select onChange={this.operator}>
                        <option>+</option>
                        <option>-</option>
                        <option>/</option>
                        <option>*</option>
                    </select>
​
                    <input type="number"
                           name="num2"
                           placeholder="Enter your first number"
                           value={this.state.num2}
                           onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button onClick={this.addNums}>=</button>
                    <h3>Results: {this.state.sum}</h3>
                </div>
            </div>
        )
    }
}
export default Calculator2;


