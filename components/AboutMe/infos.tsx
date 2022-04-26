export const Infos = () => {
  return (
    <aside className="w-[400px] hd:w-[300px] flex flex-col  justify-center backdrop-blur-sm bg-[#A3B2AD]/10 shadow-inner shadow-cyan-500/75 rounded-xl p-10">
      <h3 className="text-white font-montserrat text-2xl mb-5 text-left hd:text-xl">
        My name is{" "}
        <span className="text-[#61dafb] animate-pulse">Fabio Haroldo</span>!
      </h3>

      <p className="text-white text-xl font-montserrat text-left mb-5 hd:text-base">
        FullStack programmer passionate about technology and how the programming
        world works.
      </p>

      <p className="text-white text-xl font-montserrat text-left mb-5 hd:text-base">
        Currently focused on learning more about the{" "}
        <span className="text-[#0CF25D] animate-pulse font-bold">M</span>
        <span className="text-[#FF1D23] animate-pulse font-bold">E</span>
        <span className="text-[#61dafb] animate-pulse font-bold">R</span>
        <span className="text-[#6cc24a] animate-pulse font-bold">N</span>{" "}
        universe (Mongo, Express, React, NodeJs).
      </p>

      <p className="text-white text-xl font-montserrat text-left mb-5 hd:text-base">
        I love sharing my knowledge and teaching what I know about such
        technology. Studying to be a reference and create interfaces and systems
        that will change the world.
      </p>
    </aside>
  );
};
