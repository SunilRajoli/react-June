import {Component} from "react"
class ClassEvent extends Component {
    handleEvent() {
        console.log("Handle Event Working");
    }
    render() {
        return <div>
            <h1>This is Class Based Component</h1>
            <button onClick = {this.handleEvent}>Click Me</button>
        </div>
    }
}
export default ClassEvent