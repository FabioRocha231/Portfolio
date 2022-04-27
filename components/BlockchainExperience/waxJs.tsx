import { motion } from 'framer-motion'
import Image from 'next/image'

export type PropsWaxJs = {
  waxClick: boolean
  setWaxClick: (waxClick: boolean) => void
  width: number
}
export const WaxJs = ({ setWaxClick, waxClick, width }: PropsWaxJs) => {
  return (
    <article
      className={`flex ${
        width <= 1151 ? 'flex-col' : 'flex-row'
      } gap-x-32 transition-all duration-300 items-center justify-center`}
    >
      <motion.aside
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setWaxClick(!waxClick)}
        className="my-10 flex h-[300px] w-[300px] cursor-pointer items-center justify-center rounded-full shadow-lg shadow-cyan-500/50 hover:scale-105"
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
            width <= 1115 ? 'mb-20' : 'mb-0'
          } transition-all items-center justify-evenly duration-300 flex flex-col px-4 shadow-white/25 shadow bg-gradient-to-r  from-[#1F1640]/50 to-[#100D26]/50 rounded-3xl`}
        >
          <h3 className="mt-10 text-center font-montserrat text-lg font-bold text-white">
            Wax Blockchain
          </h3>
          <p className="my-10 p-4 text-left font-montserrat text-lg font-semibold text-white">
            I studied in depth and worked with the{' '}
            <a
              href="https://wax.atomichub.io/explorer"
              target={'_blank'}
              rel={'noreferrer'}
              className={'hover:snimate-pulse text-orange-600/50 underline'}
            >
              AtomicHub
            </a>{' '}
            api provided by blockchain wax using the libs that the community
            provided for the rescue and implementation of SmartContracts with
            the Front End
          </p>
        </motion.aside>
      )}
    </article>
  )
}
