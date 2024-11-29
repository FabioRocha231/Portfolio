import { MotionIconComponent } from "../../MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { SiExpress } from "react-icons/si";

export const ExpressIcon = ({ key }: React.ComponentProps<"div">) => {
  return (
    <MotionIconComponent
      key={key}
      Icon={() => <SiExpress size={"5rem"} color={"#D9183B"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};

ExpressIcon.displayName = "ExpressIcon";

export default ExpressIcon;
