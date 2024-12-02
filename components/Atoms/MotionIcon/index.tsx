import { motion } from "framer-motion";

type IconComponentProps = {
  Icon: React.ComponentType;
  className: string;
};

export const MotionIconComponent = ({
  Icon,
  className,
}: IconComponentProps) => {
  return (
    <motion.article
      whileHover={{ rotate: 180 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 100, duration: 2 }}
      className={`${className} flex justify-center items-center`}
    >
      <Icon />
    </motion.article>
  );
};
