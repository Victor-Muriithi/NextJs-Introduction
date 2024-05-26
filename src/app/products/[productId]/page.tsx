export default function ProductDetails({
  params,
}: {
  params: { productId: string; };
}) {
  return <h1>Product no:- {params.productId}</h1>; // must be same as the up folder
}
