import { useState } from 'react'

import { UseWidth } from '../../hooks/UseWidth'
import { SolanaJs } from './solanaJs'
import { WaxJs } from './waxJs'

export const BlockchainExperience = () => {
  const { width } = UseWidth()
  const [waxClick, setWaxClick] = useState<boolean>(false)
  const [solanaClick, setSolanaClick] = useState<boolean>(false)
  return (
    <section className="flex w-full flex-col items-center justify-center bg-black">
      <h2 className="my-10 font-montserrat text-4xl text-white">
        Blockchain Experiences
      </h2>

      <WaxJs waxClick={waxClick} setWaxClick={setWaxClick} width={width} />
      <SolanaJs
        solanaClick={solanaClick}
        setSolanaClick={setSolanaClick}
        width={width}
      />
    </section>
  )
}
