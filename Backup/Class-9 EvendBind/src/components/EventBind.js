import React, {Component} from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message : 'Welcome'
        }
    }
    clickHandler() {
        this.setState({
            message : 'Farewell'
        })
        console.log("changed")
    }
    render() {
        return <div>
            <h3>{this.state.message}</h3>
            <button onClick={() => this.clickHandler()}>
            {/*</button> <button onClick = {this.clickHandler.bind(this)}>*/}
                Click Me
            </button>
        </div>
    }
}
export default EventBind