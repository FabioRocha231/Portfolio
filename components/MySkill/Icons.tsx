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
import { IconComponent } from "./IconComponent";

export const Icons = () => {
  return (
    <article className="grid grid-cols-6 xsm:grid-cols-2 gap-10 my-10 z-[1]">
      <IconComponent
        icon={<DiHtml5 size={"5rem"} color={"#F25C05"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={<DiCss3Full size={"5rem"} color={"#0095E6"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={<DiJsBadge size={"5rem"} color={"#FFF000"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={<DiGit size={"5rem"} color={"#D9183B"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={<SiTypescript size={"5rem"} color={"#08678C"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={<DiNodejsSmall size={"5rem"} color={"#94BF6E"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={<SiNextdotjs size={"5rem"} color={"#171717"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={<SiTsnode size={"5rem"} color={"#94BF6E"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={<SiExpress size={"5rem"} color={"#D9183B"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={<SiMongodb size={"5rem"} color={"#00FF00"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={<SiPostgresql size={"5rem"} color={"#0756F2"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
      <IconComponent
        icon={
          <SiExpo
            size={"5rem"}
            color={"#FFFFFF"}
            className={"bg-black rounded-full"}
          />
        }
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer`}
      />
    </article>
  );
};
