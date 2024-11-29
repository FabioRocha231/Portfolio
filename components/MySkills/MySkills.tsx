import { Icons } from "../Organisms/Icons";
import { MobileIcons } from "../Atoms/MobileIcon";

export const MySkills = () => {
  return (
    <section className="flex w-full flex-col items-center justify-evenly overflow-x-hidden bg-black">
      <h2 className="mt-10 font-montserrat text-4xl text-white sm:my-5 sm:text-2xl">
        My Skills
      </h2>

      {/* <Icons className="mt-10 mb-20 grid grid-cols-6 gap-10 xl:grid-cols-4  mdlg:grid-cols-2 xsm:hidden" /> */}
      <Icons />

      <article className="flex h-80 flex-row items-center justify-center bg-black sm:h-40 xs:hidden">
        <MobileIcons>
          {/* <Icons className="flex flex-row gap-x-10" /> */}
          <Icons />
        </MobileIcons>
      </article>
    </section>
  );
};
