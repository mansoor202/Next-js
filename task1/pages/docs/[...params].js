import { useRouter } from "next/dist/client/router"
function DocHomePage(){
    const router=useRouter()
    const {params=[]}=router.query

    if (params.length===0 || params.length>2){
        return (
            <h2>Docs Home Page</h2>
        )

    }
    else if (params.length==1){
        return (
            <h2>Looking for feature {params[0]}</h2>
        )

    }
    else if(params.length===2){
        return(
            <h2>Looking for feature {params[0]} and concept {params[1]}</h2>
        )

    }
  
}

export default DocHomePage