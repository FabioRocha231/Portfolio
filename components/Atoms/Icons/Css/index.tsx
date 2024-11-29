import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { DiCss3Full } from "react-icons/di";
import { MotionIconComponent } from "../../MotionIcon";

export const CssIcon = ({ key }: React.ComponentProps<"div">) => {
  return (
    <MotionIconComponent
      key={key}
      Icon={() => <DiCss3Full size={"5rem"} color={"#0095E6"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};

CssIcon.displayName = "CssIcon";

export default CssIcon;
