"use client";
import { ComingSoon } from "@/components/ComingSoon";
import { MySkills } from "@/components/MySkills/MySkills";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div className="flex grow bg-slate-100 flex-col overflow-scroll">
      <section className="w-full border-2">
        <div className="rounded-full w-40 h-40 border-2 text-black">
          uai mano
        </div>
      </section>
      <section className="flex w-full h-48 items-center justify-center p-2"></section>
      <MySkills />
    </div>
  );
};

export default Page;
