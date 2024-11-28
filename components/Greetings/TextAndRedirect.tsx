import { ReactTyped } from "react-typed";

import Redirect from "./Redirect";

export const TextAndRedirect = () => {
  const strings = [
    "Fullstack developer",
    "Front-End developer",
    "Back-end developer",
    "Mobile Developer",
  ];
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <section className="flex self-start w-[650px] flex-col 2xl:w-[500px] lg:w-full">
        <h1 className="text-5xl font-black lg:text-5xl lg:text-white sm:text-3xl xs:text-2xl ">
          Ola, me chamo Fabio Rocha
        </h1>
        <ReactTyped
          strings={strings}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="mt-2 bg-gradient-to-r from-purple-400 to-pink-600
          bg-clip-text text-3xl text-transparent sm:text-2xl"
        />
      </section>
      <section className="mt-10 flex xs:mt-5">
        <p
          className="text-xl font-medium
          text-slate-500 lg:text-white xs:text-lg"
        >
          Atuo como Desenvolvedor Fullstack há 5 anos, com experiência em React,
          React Native, Next.js, Node.js TypeScript e Golang. Se ficou
          interessado(a) e deseja saber mais {""}
          <Redirect to="/about" content="Sobre mim" />
          {""} confira minhas {""}
          <Redirect to="/skills" content="habilidades" />, {""} baixando meu{" "}
          {""}
          <Redirect to="/curriculum" content="curriculo" />
          {""} ou entrando em {""}
          <Redirect to="/contact" content="contato" />
          {""} comigo! Obrigado pela sua visita.
        </p>
      </section>
    </div>
  );
};
