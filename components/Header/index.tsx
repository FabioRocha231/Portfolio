import Image from "next/image";
import { Introduction } from "../Introduction";

export const Header = () => {
  return (
    <header className="flex relative flex-col justify-center items-center bg-header-image bg-center backdrop-brightness-50 h-[600px] hd:h-[800px] md:px-4 py-10 bg-no-repeat w-full">
      <article className="backdrop-blur w-full h-full  bg-black/40 absolute" />
      <article className="flex flex-row h-full w-full items-center justify-evenly hd:flex-col">
        <Introduction />

        <aside className="hd:my-10">
          <Image
            src="/images/headerBetter.jpeg"
            width={300}
            height={300}
            className="rounded-full "
            objectFit="cover"
            alt="Heade image"
          />
        </aside>
      </article>
    </header>
  );
};
