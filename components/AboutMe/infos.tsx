export const Infos = () => {
  return (
    <aside className="flex w-[400px] flex-col justify-center  rounded-xl bg-[#A3B2AD]/10 p-10 shadow-inner shadow-cyan-500/75 backdrop-blur-sm hd:w-[300px]">
      <h3 className="mb-5 text-left font-montserrat text-2xl text-white hd:text-xl">
        My name is{' '}
        <span className="animate-pulse text-[#61dafb]">Fabio Haroldo</span>!
      </h3>

      <p className="mb-5 text-left font-montserrat text-xl text-white hd:text-base">
        FullStack programmer passionate about technology and how the programming
        world works.
      </p>

      <p className="mb-5 text-left font-montserrat text-xl text-white hd:text-base">
        Currently focused on learning more about the{' '}
        <span className="animate-pulse font-bold text-[#0CF25D]">M</span>
        <span className="animate-pulse font-bold text-[#FF1D23]">E</span>
        <span className="animate-pulse font-bold text-[#61dafb]">R</span>
        <span className="animate-pulse font-bold text-[#6cc24a]">N</span>{' '}
        universe (Mongo, Express, React, NodeJs).
      </p>

      <p className="mb-5 text-left font-montserrat text-xl text-white hd:text-base">
        I love sharing my knowledge and teaching what I know about such
        technology. Studying to be a reference and create interfaces and systems
        that will change the world.
      </p>
    </aside>
  )
}
