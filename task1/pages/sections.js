import { useRouter } from "next/dist/client/router"
import { route } from "next/dist/server/router"
function Section(){
    const router=useRouter()
    const clickHandler=()=>{
        router.push("/products")

    }
    return(
        <>
        <h2>Sections here </h2>
        <button onClick={clickHandler}>Go to products</button>
        </>
    )
}
export default Section