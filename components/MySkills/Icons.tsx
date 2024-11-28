import {
  DiCss3Full,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiNodejsSmall,
} from "react-icons/di";
import {
  SiExpo,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTsnode,
  SiTypescript,
} from "react-icons/si";

import { MotionIconComponent } from "./MotionIconComponent";
import { IconsProps } from "@/core/types/iconProps";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { HtmlIcon } from "../atoms/Icons/Html";
import { CssIcon } from "../atoms/Icons/Css";
import { JsIcon } from "../atoms/Icons/Js";
import { GitIcon } from "../atoms/Icons/Git";
import { TsIcon } from "../atoms/Icons/Ts";

export const Icons = ({ className }: IconsProps) => {
  return (
    <article id="slider-wrapper" className={`${className}`}>
      <HtmlIcon />
      <CssIcon />
      <JsIcon />
      <GitIcon />
      <TsIcon />
      <MotionIconComponent
        Icon={() => <DiNodejsSmall size={"5rem"} color={"#94BF6E"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
      />
      <MotionIconComponent
        Icon={() => <SiNextdotjs size={"5rem"} color={"#171717"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
      />
      <MotionIconComponent
        Icon={() => <SiTsnode size={"5rem"} color={"#94BF6E"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
      />
      <MotionIconComponent
        Icon={() => <SiExpress size={"5rem"} color={"#D9183B"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
      />
      <MotionIconComponent
        Icon={() => <SiMongodb size={"5rem"} color={"#00FF00"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
      />
      <MotionIconComponent
        Icon={() => <SiPostgresql size={"5rem"} color={"#0756F2"} />}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
      />
      <MotionIconComponent
        Icon={() => (
          <SiExpo
            size={"5rem"}
            color={"#FFFFFF"}
            className={"rounded-full bg-black"}
          />
        )}
        className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE} `}
      />
    </article>
  );
};