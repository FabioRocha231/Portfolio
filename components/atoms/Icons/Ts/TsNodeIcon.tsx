import { MotionIconComponent } from "@/components/atoms/MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { SiTsnode } from "react-icons/si";

export const TsNodeIcon = () => {
  return (
    <MotionIconComponent
      Icon={() => <SiTsnode size={"5rem"} color={"#94BF6E"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};