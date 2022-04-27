import { useState } from "react";
import { UseWidth } from "../../hooks/UseWidth";
import { SolanaJs } from "./solanaJs";
import { WaxJs } from "./waxJs";

export const BlockchainExperience = () => {
  const { width } = UseWidth();
  const [waxClick, setWaxClick] = useState<boolean>(false);
  const [solanaClick, setSolanaClick] = useState<boolean>(false);
  return (
    <section className="bg-black w-full flex flex-col items-center justify-center">
      <h2 className="text-4xl text-white font-montserrat my-10">
        Blockchain Experiences
      </h2>

      <WaxJs waxClick={waxClick} setWaxClick={setWaxClick} width={width} />
      <SolanaJs
        solanaClick={solanaClick}
        setSolanaClick={setSolanaClick}
        width={width}
      />
    </section>
  );
};
