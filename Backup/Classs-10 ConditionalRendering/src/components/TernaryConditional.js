import { useState } from "react";

export default function TernaryConditional() {
    const [display, setDisplay] = useState()
        return display ? (
            <div>
                <h1>This is Conditional statement</h1>
            </div>
        )
        : (
            <div>
                <h1>Nothing to see here</h1>
            </div>
        )
}