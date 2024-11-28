import { MotionIconComponent } from "@/components/atoms/MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { SiTypescript } from "react-icons/si";

export const TsIcon = () => {
  return (
    <MotionIconComponent
      Icon={() => <SiTypescript size={"5rem"} color={"#08678C"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
