import Image from "next/image";
import { AboutMe } from "../AboutMe";

export const Header = () => {
  return (
    <header className="flex relative flex-col justify-center items-center bg-header-image bg-center backdrop-brightness-50 md:px-4 py-10 bg-no-repeat w-full">
      <article className="backdrop-blur w-full h-full  bg-black/40 absolute" />
      <article className="flex flex-row h-full w-full items-center justify-evenly hd:flex-col">
        <AboutMe />

        <aside className="hd:my-10">
          <Image
            src="/images/headerBetter.jpeg"
            width={300}
            height={300}
            className="rounded-full"
            objectFit="cover"
            alt="Heade image"
          />
        </aside>
      </article>
    </header>
  );
};
