import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { GitApiResPonseTypes } from "../../core/types/gitApiReponseTypes";

const carouselVariants = {
  selected: { scale: 1.1 },
  notSelected: { scale: 1 },
};

const imagesVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1,
      display: "none",
    };
  },
  center: {
    x: 0,
    opacity: 1,
    display: "flex",
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1,
      display: "none",
    };
  },
};

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

type PropsCarousel = {
  state: GitApiResPonseTypes[];
};

const Carousel = ({ state }: PropsCarousel) => {
  const [isChosen, setIsChosen] = useState<number>(-1);
  const [limit, setLimit] = useState<number>(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const [bounds, setBounds] = useState({
    upper: 0,
    limit: 0,
  });

  const widthSize = useWidth();

  useEffect(() => {
    if (!widthSize) return;

    let calculatedValue = 0;
    widthSize > 1600
      ? (calculatedValue = 5)
      : (calculatedValue = +(widthSize / 400).toFixed(0));

    widthSize < 650 ? (calculatedValue = 1) : calculatedValue;

    setBounds({
      upper: calculatedValue,
      limit: calculatedValue,
    });

    setLimit(
      +(state?.length / calculatedValue).toFixed(0) <
        +(state?.length / calculatedValue)
        ? +(state?.length / calculatedValue).toFixed(0) + 1
        : +(state?.length / calculatedValue).toFixed(0)
    );
  }, [widthSize]);

  useEffect(() => {
    // reset the carousel if the user changes device width

    setPage([0, direction]);
    setIsChosen(-1);
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
                window.open(git.html_url, "_blank", "noreferrer");
              }}
              animate={isChosen === i ? "selected" : "notSelected"}
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
    [page, limit, isChosen]
  );

  const validLeft = useMemo(
    () =>
      page !== 0 ? (
        <AiFillCaretLeft
          onClick={() => paginate(-1)}
          className="relative text-white h-8 w-8 hover:opacity-80 cursor-pointer xsm:h-6 xsm:w-6"
        />
      ) : (
        <AiFillCaretLeft className="relative text-white/30 h-8 w-8 hover:opacity-80 cursor-not-allowed xsm:h-6 xsm:w-6" />
      ),
    [page, limit]
  );

  const validRight = useMemo(
    () =>
      page !== limit - 1 ? (
        <AiFillCaretRight
          onClick={() => paginate(1)}
          className="relative text-white h-8 w-8 hover:opacity-80 cursor-pointer xsm:h-6 xsm:w-6"
        />
      ) : (
        <AiFillCaretRight className="relative text-white/30 h-8 w-8 hover:opacity-80 cursor-not-allowed xsm:h-6 xsm:w-6" />
      ),
    [page, limit]
  );

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      {/* <Counter/> */}
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
