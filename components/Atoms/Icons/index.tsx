import { IconType } from "react-icons";
import {
  SiExpo,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTsnode,
  SiTypescript,
} from "react-icons/si";
import {
  DiCss3Full,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiNodejsSmall,
} from "react-icons/di";

export const IconsArray: IconType[] = [
  () => <DiHtml5 size={"5rem"} color={"#F25C05"} />,
  () => <DiCss3Full size={"5rem"} color={"#0095E6"} />,
  () => <DiJsBadge size={"5rem"} color={"#FFF000"} />,
  () => <DiGit size={"5rem"} color={"#D9183B"} />,
  () => <SiTypescript size={"5rem"} color={"#08678C"} />,
  () => <DiNodejsSmall size={"5rem"} color={"#94BF6E"} />,
  () => <SiNextdotjs size={"5rem"} color={"#171717"} />,
  () => <SiTsnode size={"5rem"} color={"#94BF6E"} />,
  () => <SiExpress size={"5rem"} color={"#D9183B"} />,
  () => <SiMongodb size={"5rem"} color={"#00FF00"} />,
  () => <SiPostgresql size={"5rem"} color={"#0756F2"} />,
  () => (
    <SiExpo
      size={"5rem"}
      color={"#FFFFFF"}
      className={"rounded-full bg-black"}
    />
  ),
];
