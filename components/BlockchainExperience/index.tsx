import { useState } from 'react'

import { SolanaJs } from './solanaJs'
import { WaxJs } from './waxJs'

export const BlockchainExperience = () => {
  const [cryptoClick, setCryptoClick] = useState<boolean>(false)
  return (
    <section className="flex w-full flex-col items-center justify-center bg-black">
      <h2 className="mt-20 mb-10 font-montserrat text-4xl text-white sm:mt-10 sm:mb-5 sm:text-2xl">
        Blockchain Experiences
      </h2>
      <article className="hd:gap-x0 my-20 flex flex-row items-center justify-center gap-x-52 hd:flex-col sm:my-6">
        <WaxJs waxClick={cryptoClick} setWaxClick={setCryptoClick} />
        <SolanaJs solanaClick={cryptoClick} setSolanaClick={setCryptoClick} />
      </article>
    </section>
  )
}
