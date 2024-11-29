import { MotionIconComponent } from "../../MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { SiTypescript } from "react-icons/si";

export const TsIcon = ({ key }: React.ComponentProps<"div">) => {
  return (
    <MotionIconComponent
      key={key}
      Icon={() => <SiTypescript size={"5rem"} color={"#08678C"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
TsIcon.displayName = "TsIcon";
export default TsIcon;
