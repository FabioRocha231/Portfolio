import { IconsArray } from "@/components/Atoms/Icons";
import { MotionIconComponent } from "@/components/Atoms/MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";

export const Icons = () => {
  return IconsArray.map((Icon, index) => (
    <MotionIconComponent
      key={index.toString()}
      Icon={() => <Icon />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  ));
};
