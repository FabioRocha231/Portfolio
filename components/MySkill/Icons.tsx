import {
  DiGit,
  DiHtml5,
  DiCss3Full,
  DiNodejsSmall,
  DiJsBadge,
} from "react-icons/di";

import {
  SiTypescript,
  SiNextdotjs,
  SiTsnode,
  SiExpress,
  SiExpo,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export const Icons = () => {
  return (
    <article className="grid grid-cols-6 md:grid-cols-3 xsm:grid-cols-2 gap-20 my-10 z-[1]">
      <DiHtml5
        size={"3rem"}
        color={"#F25C05"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <DiCss3Full
        size={"3rem"}
        color={"#0095E6"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <DiJsBadge
        size={"3rem"}
        color={"#FFF000"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <DiGit
        size={"3rem"}
        color={"#D9183B"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <SiTypescript
        size={"3rem"}
        color={"#08678C"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <DiNodejsSmall
        size={"3rem"}
        color={"#94BF6E"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <SiNextdotjs
        size={"3rem"}
        color={"#D9D9D9"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <SiTsnode
        size={"3rem"}
        color={"#94BF6E"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <SiExpress
        size={"3rem"}
        color={"#D9183B"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <SiMongodb
        size={"3rem"}
        color={"#00FF00"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <SiPostgresql
        size={"3rem"}
        color={"#0756F2"}
        className={"cursor-pointer hover:animate-pulse hover:scale-110"}
      />
      <SiExpo size={"3rem"} className={"bg-white rounded-full"} />
    </article>
  );
};
