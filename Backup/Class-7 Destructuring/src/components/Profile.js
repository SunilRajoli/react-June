function Profile(props) {
    const {firstName, lastName} = props
    return <div>
        Name: {firstName} {lastName} <br />
        Name: {props.firstName}
    </div>
}
export default Profile