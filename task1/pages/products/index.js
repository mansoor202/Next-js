import Link from "next/dist/client/link";
function Products() {
  return (
    <>
      <Link href="/products/1">
        <a>Product 1 </a>
      </Link>
      <Link href="/products/2">
        <a>Product 2 </a>
      </Link>

      <Link href="/products/3">
        <a>Product 3 </a>
      </Link>
    </>
  );
}
export default Products;
