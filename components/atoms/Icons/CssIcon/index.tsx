import { MotionIconComponent } from "@/components/MySkills/IconComponent";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { DiCss3Full } from "react-icons/di";

export const CssIcon = () => {
  return (
    <MotionIconComponent
      Icon={() => <DiCss3Full size={"5rem"} color={"#0095E6"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
