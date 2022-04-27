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

type IconsProps = {
  className?: string;
  iconWrapperSize?: string;
};

export const Icons = ({ className, iconWrapperSize }: IconsProps) => {
  return (
    <article id="slider-wrapper" className={`${className}`}>
      <IconComponent
        icon={<DiHtml5 size={"5rem"} color={"#F25C05"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={<DiCss3Full size={"5rem"} color={"#0095E6"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={<DiJsBadge size={"5rem"} color={"#FFF000"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={<DiGit size={"5rem"} color={"#D9183B"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={<SiTypescript size={"5rem"} color={"#08678C"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={<DiNodejsSmall size={"5rem"} color={"#94BF6E"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={<SiNextdotjs size={"5rem"} color={"#171717"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={<SiTsnode size={"5rem"} color={"#94BF6E"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={<SiExpress size={"5rem"} color={"#D9183B"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={<SiMongodb size={"5rem"} color={"#00FF00"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={<SiPostgresql size={"5rem"} color={"#0756F2"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize}`}
      />
      <IconComponent
        icon={
          <SiExpo
            size={"5rem"}
            color={"#FFFFFF"}
            className={"bg-black rounded-full"}
          />
        }
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${iconWrapperSize} `}
      />
    </article>
  );
};
