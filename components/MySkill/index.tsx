import { Icons } from "./Icons";

export const MySkill = () => {
  return (
    <section className="h-[500px] md:h-[1000px] w-full relative flex flex-col items-center justify-evenly bg-mySkill bg-center bg-no-repeat">
      <article className="backdrop-blur w-full h-full  bg-black/40 absolute" />
      <h2 className="text-4xl font-montserrat text-white z-[1]">My Skills</h2>

      <Icons />
    </section>
  );
};
