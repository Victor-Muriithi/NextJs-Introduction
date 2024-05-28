import { notFound } from "next/navigation";

function getRandomInt(count: number){
  return Math.floor(Math.random()*count)
}

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
    const random = getRandomInt(2);
    if(random === 1){
      throw new Error('There is an error in the review')
    }
if(parseInt(params.reviewId) > 1000){
        notFound();
    }
  return (
    <h1>
      Review no:- {params.reviewId} for product {params.productId}
    </h1>
  ); // must be same as the up folder
}
