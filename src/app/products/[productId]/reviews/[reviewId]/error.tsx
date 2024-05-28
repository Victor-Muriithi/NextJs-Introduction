"use client";

import { useRouter } from "next/router";
export default function ErrorBoundary({ error }: { error: Error }) {


    const router = useRouter();
  const handleGoBack = () => {
    console.log("backroute");
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/'); // Redirect to home or any other default page
    }
  };
  return (
    <>
      {" "}
      <h1>{error.message}</h1>
      <button onClick={handleGoBack}>go back</button>
    </>
  );
}
