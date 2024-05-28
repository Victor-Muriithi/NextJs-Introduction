'use client'
import { useRouter } from "next/navigation";

export default function PlaceOrder() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Your order is being placed");
    router.push("/");
  };
  return (
    <>
      <h1>Order page</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
