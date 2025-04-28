import Image from "next/image";

export const AboutMe = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row items-center justify-evenly py-10 border-t-2 border-b-2 border-slate-300">
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
    </section>
  );
};

// {/* <section id={id} className="flex w-full flex-col items-center">
//       <article className="my-10 flex flex-row items-center justify-evenly gap-x-80 xl:gap-x-36 lg:gap-x-7 hd:flex-col-reverse hd:px-4 sm:my-5">
//         <aside className="hd:my-10">
//           <Image
//             src={"/images/sticker.svg"}
//             width={400}
//             height={400}
//             alt={"Programmer programming"}
//           />
//         </aside>

//         <Infos />
//       </article>
//     </section> */}
