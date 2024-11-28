import { MotionIconComponent } from "../../MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { DiJsBadge } from "react-icons/di";

export const JsIcon = () => {
  return (
    <MotionIconComponent
      Icon={() => <DiJsBadge size={"5rem"} color={"#FFF000"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
JsIcon.displayName = "JsIcon";
export default JsIcon;
