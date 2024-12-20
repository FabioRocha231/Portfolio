import { ReactTyped } from "react-typed";

import Redirect from "./Redirect";

const strings = [
  "Fullstack developer",
  "DevOps",
  "Golang",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Typescript",
  "Python",
  "Django",
  "Docker",
  "Kubernetes",
  "AWS",
  "Git",
  "Linux",
  "Windows",
  "MacOS",
  "SQL",
  "NoSQL",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Elasticsearch",
  "Kafka",
  "RabbitMQ",
];

export const GreetingsAndRedirects = () => {
  return (
    <section className="flex flex-col h-full items-center justify-center flex-1 bg-slate-100 px-20 lg:hidden">
      <article className="flex self-start w-[650px] flex-col 2xl:w-[500px] lg:w-full">
        <h1 className="text-5xl text-black lg:text-5xl lg:text-white sm:text-3xl xs:text-2xl ">
          Olá, me chamo Fabio Rocha
        </h1>
        <ReactTyped
          strings={strings}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="my-2 bg-gradient-to-r from-purple-400 to-pink-600
          bg-clip-text text-3xl text-transparent sm:text-2xl"
        />
      </article>
      <article>
        <p
          className="text-xl font-medium
          text-slate-500 lg:text-white xs:text-lg"
        >
          Atuo como Desenvolvedor Fullstack há 5+ anos, com experiência em
          React, React Native, Next.js, Node.js TypeScript e Golang. Ficou
          interessado(a) e deseja saber mais {""}
          <Redirect to="/about" content="Sobre mim" />
          {""}? {""} faça download meu {""}
          <Redirect to="/curriculum" content="curriculum" />
          {""} ou entre em {""}
          <Redirect to="/contact" content="contato" />
          {""}! Obrigado pela sua visita.
        </p>
      </article>
    </section>
  );
};
