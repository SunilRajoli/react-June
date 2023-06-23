import { Component } from "react";

class Form extends Component {
    state = {
        firstname: "",
        lastname: ""
    }
    handleChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname
        })
    }
    render(){
        return <div>
            Form
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" value={this.state.firstname} />
                <input type="text" value={this.state.lastname} onChange={this.handleLastNameChange} />
                <button>Submit</button>
            </form>
        </div>
    }
}
export default Form