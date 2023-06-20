function FunctionEvent() {
    function handleClick() {
        console.log("Button Clicked")
    }
    return <div>
        <h1>Functional Component</h1>
        <button onClick = {handleClick}>Click Here</button>
    </div>
}
export default FunctionEvent