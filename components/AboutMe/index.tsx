import Image from "next/image";
import { Infos } from "./infos";

type AboutMeProps = {
  id?: string;
};

export const AboutMe = ({ id }: AboutMeProps) => {
  return (
    <section
      id={id}
      className="flex relative flex-col w-full items-center bg-black"
    >
      <h2 className="text-4xl text-white font-montserrat my-10 z-10">
        About Me
      </h2>

      <article className="flex flex-row items-center justify-evenly gap-x-80 my-10 xl:gap-x-36 lg:gap-x-7 hd:flex-col-reverse hd:px-4">
        <aside className="hd:my-10">
          <Image
            src={"/images/sticker.svg"}
            width={"400px"}
            height={"400px"}
            alt={"Programmer programming"}
          />
        </aside>

        <Infos />
      </article>
    </section>
  );
};
