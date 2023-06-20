import React from 'react'
class Resume extends React.Component {
    render() {
        const {active, activeStatus} = this.props;
        return <div>
            <h1>The Class Component is: {active} {activeStatus}</h1>
        </div>
    }
}
export default Resume