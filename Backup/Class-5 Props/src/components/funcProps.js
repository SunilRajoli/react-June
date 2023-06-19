function Props(props) {
    console.log(props)
    return <div>
        <h1>Name: {props.name}</h1>
        <h1>Name: {props.name} {props.lastName}</h1>
    </div>
}
export default Props