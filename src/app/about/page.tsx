export default async function About() {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 5*1000);
    });
    return <h1>about page</h1>;
  }