import Image from "next/image";

export const Presentation = () => {
  return (
    <div className="flex flex-row items-center justify-evenly py-10 border-b-2 border-slate-300">
      <Image
        src={"/images/hero.jpg"}
        width={250}
        height={250}
        alt="developer image"
        className="rounded-full"
      />

      <div>
        <h1 className="text-4xl">Olá, eu sou Fábio</h1>
        <p className="mt-2">
          Desenvolvedor Full Stack especializado em Frontend, Backend e Cloud
        </p>
        <div className="flex flex-row gap-5 mt-2">
          <button className="bg-black rounded px-5 py-2 text-white text-sm">
            Ver Projetos
          </button>
          <button className="border border-slate-300 rounded px-5 py-2">
            Contato
          </button>
        </div>
      </div>
    </div>
  );
};
