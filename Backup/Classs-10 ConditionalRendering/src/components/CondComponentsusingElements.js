import {useState} from 'react'

export default function CondComponentsusingElements() {
    const [display, setDisplay] = useState(false)
    let output;
    if(display) {
        output = <h3>This is Conditional statement</h3>
    } else {
        output = <h3>Nothing to see here</h3>
    }
    return <div>
        {output}
    </div>
}