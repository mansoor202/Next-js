import UserComponent from "../../components/user";
function Users({users}){
    


    return (
        <>
        <h2>Users Here</h2>
        <ul>
            {users.map(user=> <UserComponent user={user} key={user.id}/>)}
            
        
        </ul>
        </>
    )
}


export default Users;
export async  function getStaticProps (){
    const respone=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await respone.json()
    // console.log(data)

    return{
        props:{
            users:data,
        },
    }

}