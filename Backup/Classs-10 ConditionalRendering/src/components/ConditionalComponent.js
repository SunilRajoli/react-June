import {useState} from 'react'
export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true)
    if(display){
        return (
            <div>
                <h1>This is Conditional Statement</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Nothimg to see here</h3>
            </div>
        )
    }
    
}