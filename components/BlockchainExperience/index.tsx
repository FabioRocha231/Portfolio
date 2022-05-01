import { memo, useState } from 'react'

import { SolanaJs } from './solanaJs'
import { WaxJs } from './waxJs'

export const BlockchainExperience = () => {
  const [cryptoClick, setCryptoClick] = useState<boolean>(false)
  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-blockchain bg-cover bg-center">
      <article className="absolute h-full w-full  bg-black/30 backdrop-contrast-125" />
      <h2 className="z-[1] mt-10 bg-gradient-to-br from-[#0597F2] to-[#05C7F2]  bg-clip-text font-montserrat text-4xl  text-transparent  sm:mt-10 sm:mb-5 sm:text-2xl">
        Blockchain Experiences
      </h2>
      <article className="hd:gap-x0 flex flex-row items-center justify-center gap-x-52 hd:flex-col sm:my-6">
        <WaxJs waxClick={cryptoClick} setWaxClick={setCryptoClick} />
        <SolanaJs solanaClick={cryptoClick} setSolanaClick={setCryptoClick} />
      </article>
    </section>
  )
}

export default memo(BlockchainExperience)
