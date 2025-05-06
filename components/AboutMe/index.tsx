import { MySkills } from "../MySkills/MySkills";
import { Presentation } from "./Presentation";

export const AboutMe = () => {
  return (
    <section className="flex flex-col">
      <Presentation />
      <div className="flex flex-col items-start justify-center py-10 px-10 border-b-2 border-slate-300">
        <h1 className="text-4xl">Sobre mim</h1>
        <p>
          Sou desenvolvedor Full Stack com experiência em grandes Projetos no
          Brasil e exterior, apaixonador por criar soluções escaláveis e
          invovadoras
        </p>
      </div>

      <div className="flex flex-col py-10 px-10 border-b-2 border-slate-300">
        <h1 className="text-4xl">Tecnologias que domino</h1>
        <div className="flex items-center justify-center">
          <MySkills />
        </div>
      </div>
    </section>
  );
};
