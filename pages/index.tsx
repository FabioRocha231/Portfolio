import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../components";

const Home: NextPage = () => {
  return (
    <section className="bg-white h-screen">
      <Head>
        <title>Fabio HR Filho</title>
        <meta name="description" content="Portfolio do Fabio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
    </section>
  );
};

export default Home;
