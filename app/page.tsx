"use client";
import type { NextPage } from "next";
import { GitApiResponseTypes } from "../core/types/gitApiReponseTypes";
import NavBar from "@/components/NavBar";
import { Greetings } from "@/components/Greetings";

const Home: NextPage<{ result: GitApiResponseTypes[] }> = () => {
  return (
    <main className="flex h-screen flex-col">
      <NavBar />
      <Greetings />
    </main>
  );
};

export default Home;
