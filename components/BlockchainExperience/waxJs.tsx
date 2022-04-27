import Image from "next/image";
import { motion } from "framer-motion";
export type PropsWaxJs = {
  waxClick: boolean;
  setWaxClick: (waxClick: boolean) => void;
  width: number;
};
export const WaxJs = ({ setWaxClick, waxClick, width }: PropsWaxJs) => {
  return (
    <article
      className={`flex ${
        width <= 1151 ? "flex-col" : "flex-row"
      } gap-x-32 transition-all duration-300 items-center justify-center`}
    >
      <motion.aside
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setWaxClick(!waxClick)}
        className="shadow-lg hover:scale-105 flex rounded-full items-center justify-center w-[300px] h-[300px] shadow-cyan-500/50 cursor-pointer my-10"
      >
        <Image
          src="/images/waxWall.jpeg"
          width={300}
          height={300}
          quality={100}
          alt="Wax blockchain image"
          className="rounded-full "
        />
      </motion.aside>

      {waxClick && (
        <motion.aside
          animate={width <= 1115 ? { y: 80 } : { x: 140 }}
          transition={{ delay: 0.2 }}
          className={`w-[350px] h-[350px] ${
            width <= 1115 ? "mb-20" : "mb-0"
          } transition-all items-center justify-evenly duration-300 flex flex-col px-4 shadow-white/25 shadow bg-gradient-to-r  from-[#1F1640]/50 to-[#100D26]/50 rounded-3xl`}
        >
          <h3 className="text-white text-lg font-bold text-center font-montserrat mt-10">
            Wax Blockchain
          </h3>
          <p className="p-4 text-white font-montserrat my-10 text-left text-lg font-semibold">
            I studied in depth and worked with the{" "}
            <a
              href="https://wax.atomichub.io/explorer"
              target={"_blank"}
              rel={"noreferrer"}
              className={"underline text-orange-600/50 hover:snimate-pulse"}
            >
              AtomicHub
            </a>{" "}
            api provided by blockchain wax using the libs that the community
            provided for the rescue and implementation of SmartContracts with
            the Front End
          </p>
        </motion.aside>
      )}
    </article>
  );
};
