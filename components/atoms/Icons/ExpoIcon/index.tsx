import { MotionIconComponent } from "@/components/MySkills/MotionIconComponent";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { SiExpo } from "react-icons/si";

export const ExpoIcon = () => {
  return (
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
  );
};
