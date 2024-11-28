import { MotionIconComponent } from "@/components/MySkills/MotionIconComponent";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { DiGit } from "react-icons/di";

export const GitIcon = () => {
  return (
    <MotionIconComponent
      Icon={() => <DiGit size={"5rem"} color={"#D9183B"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
