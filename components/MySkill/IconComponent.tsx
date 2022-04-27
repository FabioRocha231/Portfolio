import { motion } from "framer-motion";
import { ReactNode } from "react";

type IconCompoentProps = {
  icon: ReactNode;
  className: string;
};

export const IconComponent = ({ icon, className }: IconCompoentProps) => {
  return (
    <motion.article
      whileHover={{ rotate: 180 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
      className={`${className} flex justify-center items-center w-[150px] h-[150px]`}
    >
      {icon}
    </motion.article>
  );
};
