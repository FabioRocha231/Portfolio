import { MotionIconComponent } from "../../MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { SiNextdotjs } from "react-icons/si";

export const NextIcon = () => {
  return (
    <MotionIconComponent
      Icon={() => <SiNextdotjs size={"5rem"} color={"#171717"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
NextIcon.displayName = "NextIcon";
export default NextIcon;
