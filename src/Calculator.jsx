import React, {Component} from 'react'

class Calculator extends Component {
    state = {
        num1: null,
        num2: null,
        sum: 0,
        operator: '+'
    }

    calculate = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            let operation = 0
            switch (this.state.operator) {
              case '+':
                operation = prevState.num1 + prevState.num2
            } return {
                sum: operation
            }
        })
    }

    setNum = (e) => {
        // this.setState({ [num]: e.target.value })
        this.setState({ [e.target.name]: parseInt(e.target.value) })
        console.log(0 === true)
    }

    handleSetOp = (e) => {
        this.setState({
            operator: e.target.name
        })
    }
    
    render() {
        return (
            <div className="calculator">
                <h1>Add with React!</h1>

                <form onSubmit={this.calculate}>
                    <input type="number" 
                        name="num1"
                        value={this.state.num1}
                        onChange={this.setNum}
                    />
                    <span>+</span>
                    <input type="number" 
                        name="num2"
                        value={this.state.num2}
                        onChange={this.setNum}
                    />
                    <button>=</button>
                    <h3>{this.state.sum}</h3>
                </form>
            </div>
        )
    }

}

export default Calculator