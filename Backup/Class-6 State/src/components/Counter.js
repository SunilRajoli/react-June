import {Component} from 'react'

class Counter extends Component{
    constructor() {
        super() //calling super method
        this.state = {
            counter: 0
        }
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return <div>
            <h1>Count Value is: {this.state.counter} </h1>
            <button onClick={() => {this.increment()}}>Click</button>
        </div>
    }
}

export default Counter