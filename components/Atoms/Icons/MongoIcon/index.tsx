import { MotionIconComponent } from "../../MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { SiMongodb } from "react-icons/si";

export const MongoIcon = ({ key }: React.ComponentProps<"div">) => {
  return (
    <MotionIconComponent
      key={key}
      Icon={() => <SiMongodb size={"5rem"} color={"#00FF00"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
MongoIcon.displayName = "MongoIcon";
export default MongoIcon;
