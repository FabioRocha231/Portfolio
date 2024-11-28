import { MotionIconComponent } from "@/components/atoms/MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { SiMongodb } from "react-icons/si";

export const MongoIcon = () => {
  return (
    <MotionIconComponent
      Icon={() => <SiMongodb size={"5rem"} color={"#00FF00"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
