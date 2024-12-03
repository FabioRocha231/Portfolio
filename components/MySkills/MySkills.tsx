import { Icons } from "../Organisms/Icons";
import { MobileIcons } from "../Atoms/MobileIcon";

export const MySkills = () => {
  return (
    <section className="flex flex-1 w-full items-center overflow-x-hidden">
      <section className="flex flex-col w-5/6 items-center">
        <h3 className="text-4xl font-bold text-black">Projects</h3>
      </section>

      <section
        className="flex flex-col h-full w-2/5 items-center justify-center bg-gradient-to-t
      from-blue-700 via-blue-800 to-black lg:w-full overflow-hidden"
      >
        <h2 className="font-montserrat text-4xl text-white font-bold mb-10 sm:text-2xl">
          My Skills
        </h2>

        <article className="grid grid-cols-6 gap-10 xl:grid-cols-4mdlg:grid-cols-2 xs:hidden">
          <Icons />
        </article>
      </section>

      {/* <Icons className="mt-10 mb-20 grid grid-cols-6 gap-10 xl:grid-cols-4  mdlg:grid-cols-2 xsm:hidden" /> */}
      {/* <article className="flex h-80 flex-row items-center justify-center bg-black sm:h-40 xs:hidden">
        <MobileIcons>
          <Icons className="flex flex-row gap-x-10" /> 
          <Icons />
        </MobileIcons>
      </article> */}
    </section>
  );
};
