import { MotionIconComponent } from "@/components/atoms/MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { DiHtml5 } from "react-icons/di";

export const HtmlIcon = () => {
  return (
    <MotionIconComponent
      Icon={() => <DiHtml5 size={"5rem"} color={"#F25C05"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
