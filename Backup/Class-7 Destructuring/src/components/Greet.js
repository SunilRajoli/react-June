/*
//Without Destructuring
const Greet = props => {
    return <div>
        <div className="XYZ">
            <h3>{props.active}</h3>
        </div>
        <div className="PQR">
            <h3>{props.activeStatus}</h3>
        </div>
    </div>

}
*/

//Destructuring
const Greet = props => {
    const {active, activeStatus} = props;
    return <div>
        <div className="XYZ">
            <h3>{active}</h3>
        </div>
        <div className="PQR">
            <h3>{activeStatus}</h3>
        </div>
    </div>
}
export default Greet