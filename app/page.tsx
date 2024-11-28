"use client";
import NavBar from "@/components/NavBar";
import { Greetings } from "@/components/Greetings";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Fabio HR Filho</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Greetings />
    </>
  );
};

export default HomePage;
