"use client";
import { AboutMe } from "@/components/AboutMe";
import { NextPage } from "next";
import Image from "next/image";

const Page: NextPage = () => {
  return (
    <div className="flex flex-col">
      <AboutMe />
    </div>
  );
};

export default Page;
