import { DiHtml5 } from "react-icons/di";
import { IconComponent } from "./IconComponent";
import { Icons } from "./Icons";

export const MySkill = () => {
  return (
    <section className="w-full relative flex flex-col items-center justify-evenly bg-black">
      <article className="backdrop-blur w-full h-full  bg-black/40 absolute " />
      <h2 className="text-4xl font-montserrat text-white z-[1]">My Skills</h2>

      <Icons />
    </section>
  );
};
// bg-mySkill bg-center bg-no-repeat
