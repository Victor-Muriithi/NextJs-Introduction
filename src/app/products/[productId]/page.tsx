import { Metadata } from "next";


type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({   //generateMetadata should be written exactly like that to work
  params,
}: Props): Promise<Metadata> => {


  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Oraimo Pods ${params.productId}`);
    }, 2 * 1000);
  });
  return {
    title: `${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Product no:- {params.productId}</h1>; // must be same as the up folder
}
