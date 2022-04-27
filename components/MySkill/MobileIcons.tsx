import { ReactNode, memo } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
// import s from "./team-section.module.css";

interface Props {
  children: ReactNode;
  className?: string;
  stiffness?: number;
  damping?: number;
  /* as pixels */
  scrollerWidth?: number;
  hasScroller?: boolean;
}

const MobileIcons = ({
  children,
  className,
  stiffness = 50,
  damping = 10,
}: Props) => {
  const x = useMotionValue(0);
  const animation = useAnimation();
  return (
    <>
      <div className={`${className} flex flex-row items-center`}>
        <div className={`hideScrollbar`} id="slider-wrapper">
          <motion.div
            drag="x"
            className="cursor-grab "
            style={{ x }}
            animate={animation}
            transition={{
              x: { type: "spring", stiffness, damping },
            }}
            dragConstraints={{
              left: -600,
              right: 600,
            }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default memo(MobileIcons);
