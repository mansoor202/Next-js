import { useRouter } from "next/dist/client/router"

function Product(){
    const router=useRouter()
    const productId=router.query.productId
    return(
        <>
        <h2>Product Detail {productId} </h2>
       
        </>
    )
}
export default Product