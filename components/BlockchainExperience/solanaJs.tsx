import { motion } from 'framer-motion'
import Image from 'next/image'

export type PropsWaxJs = {
  solanaClick: boolean
  setSolanaClick: (solanaClick: boolean) => void
  width: number
}

export const SolanaJs = ({
  setSolanaClick,
  solanaClick,
  width
}: PropsWaxJs) => {
  return (
    <article
      className={`flex ${
        width <= 1151 ? 'flex-col' : 'flex-row'
      } gap-x-32 transition-all duration-300 items-center justify-center`}
    >
      <motion.aside
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setSolanaClick(!solanaClick)}
        className={`hadow-lg hover:scale-105 flex rounded-full items-center justify-center w-[300px] h-[300px] shadow-cyan-500/50 cursor-pointer my-10`}
      >
        <Image
          src="/images/solanaWall.jpeg"
          width={300}
          height={300}
          quality={100}
          alt="Solana blockchain image"
          className="rounded-full "
        />
      </motion.aside>

      {solanaClick && (
        <motion.aside
          animate={width <= 1115 ? { y: 80 } : { x: 140 }}
          transition={{ delay: 0.2 }}
          className={`w-[350px] h-[350px] ${
            width <= 1115 ? 'mb-20' : 'mb-0'
          } transition-all items-center justify-evenly duration-300 flex flex-col px-4 shadow-white/25 shadow bg-gradient-to-r  from-[#1F1640]/50 to-[#100D26]/50 rounded-3xl`}
        >
          <h3 className="mt-10 text-center font-montserrat text-lg font-bold text-white">
            Solana Blockchain
          </h3>
          <p className="my-10 p-4 text-center font-montserrat text-lg font-semibold text-white">
            starting to venture with{' '}
            <a
              href="https://solana.com/"
              target={'_blank'}
              rel={'noreferrer'}
              className={'hover:snimate-pulse text-blue-500/70 underline'}
            >
              Solana
            </a>{' '}
            implemented authentication and transfer flows together width
            SmartContracts
          </p>
        </motion.aside>
      )}
    </article>
  )
}
