import { MotionIconComponent } from "@/components/MySkills/MotionIconComponent";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { DiNodejsSmall } from "react-icons/di";

export const NodeIcon = () => {
  return (
    <MotionIconComponent
      Icon={() => <DiNodejsSmall size={"5rem"} color={"#94BF6E"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
