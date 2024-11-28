import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

export type PropsWaxJs = {
  waxClick: boolean;
  setWaxClick: (waxClick: boolean) => void;
};
export const WaxJs = ({ setWaxClick, waxClick }: PropsWaxJs) => {
  return (
    <article
      className={`flex flex-col gap-x-32 transition-all duration-300 items-center justify-center ${
        waxClick ? "mb-20" : ""
      }`}
    >
      <motion.aside
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setWaxClick(!waxClick)}
        className={`my-10 flex h-[300px] w-[300px] cursor-pointer items-center justify-center rounded-full shadow-lg shadow-cyan-500/50 hover:scale-105`}
      >
        <Image
          src="/images/waxWall.png"
          width={300}
          height={300}
          quality={100}
          objectFit={"fill"}
          alt="Wax blockchain image"
          className="rounded-full "
        />
      </motion.aside>

      {waxClick && (
        <motion.aside
          animate={{ y: 40 }}
          transition={{ delay: 0.2 }}
          className={`w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] transition-all items-center justify-evenly duration-300 flex flex-col px-4 shadow-white/25 shadow bg-gradient-to-r  from-[#1F1640]/50 to-[#100D26]/50 rounded-3xl`}
        >
          <h3 className="mt-10 text-center font-montserrat text-lg font-bold text-white sm:text-base">
            Wax Blockchain
          </h3>
          <article className="my-10 p-4 text-left font-montserrat text-lg font-semibold text-white sm:my-5 sm:text-base">
            I studied in depth and worked with the{" "}
            <a
              href="https://wax.atomichub.io/explorer"
              target={"_blank"}
              rel={"noreferrer"}
              className={"hover:snimate-pulse text-orange-600/50 underline"}
            >
              AtomicHub
            </a>{" "}
            api provided by blockchain wax using the libs that the community
            provided for the rescue and implementation of SmartContracts with
            the Front End
          </article>
        </motion.aside>
      )}
    </article>
  );
};

export default memo(WaxJs);
