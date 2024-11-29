import {
  motion,
  type HTMLMotionProps,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import { ReactNode } from "react";

interface Props extends HTMLMotionProps<"div"> {
  children: ReactNode;
  stiffness?: number;
  damping?: number;
}
export const MobileIcons = ({ damping, stiffness, ...props }: Props) => {
  const x = useMotionValue(0);
  const animation = useAnimation();
  return (
    <>
      <div className={`${props.className} flex flex-row items-center`}>
        <div className={`hideScrollbar`} id="slider-wrapper">
          <motion.div
            drag="x"
            className="cursor-grab"
            style={{ x }}
            animate={animation}
            transition={{
              x: { type: "spring", stiffness, damping },
            }}
            dragConstraints={{
              left: -600,
              right: 600,
            }}
            {...props}
          >
            {props.children}
          </motion.div>
        </div>
      </div>
    </>
  );
};
