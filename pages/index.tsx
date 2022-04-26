import type { NextPage } from "next";
import Head from "next/head";
import { Header, NavBar, SocialLinks } from "../components";

const Home: NextPage = () => {
  return (
    <section className="bg-[#262626] h-screen">
      <Head>
        <title>Fabio HR Filho</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="flex flex-col items-center justify-center w-full">
        <Header />
        <SocialLinks />
      </main>
    </section>
  );
};

export default Home;
