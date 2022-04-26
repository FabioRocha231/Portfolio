import Image from "next/image";
import { AboutMe } from "./AboutMe";

export const Header = () => {
  return (
    <header className="flex relative flex-col justify-center items-center h-full bg-header-image bg-center backdrop-brightness-50 bg-no-repeat w-full">
      <article className="flex flex-row items-center justify-center">
        <AboutMe
          title="Sobre mim"
          description="Desenvolvedor Front End, com experiencia em ReactJS, NextJS e Typescript para criações de interfaces, dedico partes dos meu estudos em NodeJs com interesse em me tornar um desenvolvedor MERN."
        />
      </article>
    </header>
  );
};
