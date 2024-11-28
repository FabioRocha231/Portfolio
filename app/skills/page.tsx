import { CommingSoon } from "@/components/CommingSoon";
import NavBar from "@/components/NavBar";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <main className="flex h-screen flex-col">
      <NavBar />
      <CommingSoon />
    </main>
  );
};

export default Page;
