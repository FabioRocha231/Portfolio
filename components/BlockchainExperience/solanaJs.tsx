import { motion } from 'framer-motion'
import Image from 'next/image'
import { memo } from 'react'

export type PropsWaxJs = {
  solanaClick: boolean
  setSolanaClick: (solanaClick: boolean) => void
}

export const SolanaJs = ({ setSolanaClick, solanaClick }: PropsWaxJs) => {
  return (
    <article
      className={`flex flex-col gap-x-32 transition-all duration-300 items-center justify-center ${
        solanaClick ? 'mb-20' : ''
      }`}
    >
      <motion.aside
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setSolanaClick(!solanaClick)}
        className={`my-10 flex h-[300px] w-[300px] cursor-pointer items-center justify-center rounded-full shadow-lg shadow-cyan-500/50 hover:scale-105`}
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
          animate={{ y: 40 }}
          transition={{ delay: 0.2 }}
          className={`w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] mb-20' transition-all items-center justify-evenly duration-300 flex flex-col px-4 shadow-white/25 shadow bg-gradient-to-r  from-[#1F1640]/50 to-[#100D26]/50 rounded-3xl`}
        >
          <h3 className="mt-10 text-center font-montserrat text-lg font-bold text-white sm:text-base">
            Solana Blockchain
          </h3>
          <p className="my-10 p-4 text-center font-montserrat text-lg font-semibold text-white sm:text-base">
            starting to venture with{' '}
            <a
              href="https://solana.com/"
              target={'_blank'}
              rel={'noreferrer'}
              className={'text-blue-500/70 underline hover:animate-pulse'}
            >
              Solana
            </a>{' '}
            implemented authentication and transfer flows together with
            SmartContracts and experience with creating Backend servers to Smart
            Contracts.
          </p>
        </motion.aside>
      )}
    </article>
  )
}

export default memo(SolanaJs)
