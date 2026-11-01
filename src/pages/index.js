import Head from "next/head";
import HomePage from "../pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aakash | Web Developer & Designer</title>
        <meta
          name="description"
          content="Portfolio of Aakash, a web designer and full-stack developer."
        />
      </Head>
      <HomePage />
    </>
  );
}
