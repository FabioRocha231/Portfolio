import { MotionIconComponent } from "../../MotionIcon";
import { ICON_WRAPPER_SIZE } from "@/constants/iconWrapperSize";
import { SiPostgresql } from "react-icons/si";

export const PostgresIcon = ({ key }: React.ComponentProps<"div">) => {
  return (
    <MotionIconComponent
      key={key}
      Icon={() => <SiPostgresql size={"5rem"} color={"#0756F2"} />}
      className={`bg-white z-[1] rounded-lg shadow-lg shadow-white/25 cursor-pointer ${ICON_WRAPPER_SIZE}`}
    />
  );
};
PostgresIcon.displayName = "PostgresIcon";
export default PostgresIcon;
