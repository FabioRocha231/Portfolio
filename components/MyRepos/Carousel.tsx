import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { GitApiResPonseTypes } from "../../core/types/gitApiReponseTypes";
import { CarouselGestures } from "../../core/class/handlers/CarouselGestures";
import { UseWidth } from "../../hooks/UseWidth";
import { carouselVariants, imagesVariants } from "./CarouselUtils";

type PropsCarousel = {
  state: GitApiResPonseTypes[];
};

const Carousel = ({ state }: PropsCarousel) => {
  const [isChosen, setIsChosen] = useState<number>(-1);
  const [limit, setLimit] = useState<number>(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const { width } = UseWidth();
  const { ValidRight, ValidLeft, CaroulselFormatter, CarouselReset } =
    new CarouselGestures();
  const [bounds, setBounds] = useState({
    upper: 0,
    limit: 0,
  });

  useEffect(() => {
    return CaroulselFormatter({ state, setBounds, setLimit, width });
  }, [width, state]);

  useEffect(() => {
    return CarouselReset({ setPage, setIsChosen, direction });
  }, [limit]);

  const completeMap = useMemo(
    () =>
      state?.map(
        (git, i) =>
          i < bounds.upper + bounds.limit * page &&
          i >= 0 + bounds.limit * page && (
            <motion.div
              className="h-fit bg-transparent cursor-pointer"
              key={i}
              onClick={() => {
                // window.open(git.html_url, "_blank", "noreferrer");
              }}
              // animate={isChosen === i ? "selected" : "notSelected"}
              variants={carouselVariants}
            >
              <article className="flex relative flex-col items-center justify-center text-center p-2 bg-repos bg-center bg-cover bg-no-repeat w-[250px] bg-white h-[250px] rounded-3xl">
                <article className="backdrop-blur-sm w-full h-full  bg-white/40 rounded-3xl absolute" />
                <p className="text-lg font-montserrat text-[#61dafb] font-bold z-[1]">
                  {git.name}
                </p>
              </article>
            </motion.div>
          )
      ),
    [page, limit, state]
  );
  const iconLeftValidLeft = (
    <AiFillCaretLeft
      onClick={() => paginate(-1)}
      className="relative text-white h-8 w-8 hover:opacity-80 cursor-pointer"
    />
  );

  const iconRightValidLeft = (
    <AiFillCaretLeft className="relative text-white h-8 w-8 hover:opacity-80 cursor-not-allowed" />
  );

  const iconLeftValidRight = (
    <AiFillCaretRight
      onClick={() => paginate(1)}
      className="relative text-white h-8 w-8 hover:opacity-80 cursor-pointer"
    />
  );
  const iconRightValidRight = (
    <AiFillCaretRight className="relative text-white h-8 w-8 hover:opacity-80 cursor-not-allowed" />
  );

  const validLeft = useMemo(() => {
    return ValidLeft(page, iconLeftValidLeft, iconRightValidLeft);
  }, [page, limit]);

  const validRight = useMemo(() => {
    return ValidRight(page, limit, iconLeftValidRight, iconRightValidRight);
  }, [page, limit]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className="mt-10 min-h-max min-w-fit gap-4 xsm:gap-2 flex justify-center items-center">
        {validLeft}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            variants={imagesVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", bounce: 0, velocity: 0.8 },
              opacity: { duration: 0.45 },
            }}
            className="flex gap-8 max-w-screen-2xl z-10"
          >
            {completeMap}
          </motion.div>
        </AnimatePresence>
        {validRight}
      </div>
      <div className="text-center mt-4 mb-20">
        <p className="font-montserrat text-white">
          Page <b>{page + 1}</b> of <b>{limit}</b>
        </p>
      </div>
    </>
  );
};

export default Carousel;
