import { useRouter } from "next/dist/client/router";

function Review(){
    const router=useRouter();
    const {productId,reviewId}=router.query;

    return (
        <h2>Review {reviewId} for Product {productId}</h2>

    )
}

export default Review