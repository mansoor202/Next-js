function UserComponent({user}){
    return(
        <>
        {console.log("user Component rerendering")}
        <li>{user.name}</li>
        </>
    )
}

export default UserComponent;