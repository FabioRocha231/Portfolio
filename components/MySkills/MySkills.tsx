import { Icons } from "../Organisms/Icons";
import { MobileIcons } from "../Atoms/MobileIcon";

export const MySkills = () => {
  return (
    <section
      className="flex flex-1 w-full flex-col items-center justify-evenly overflow-x-hidden bg-black bg-gradient-to-t
      from-blue-700 via-blue-800 to-black lg:w-full overflow-hidden"
    >
      <h2 className="font-montserrat text-4xl text-white sm:my-5 sm:text-2xl">
        My Skills
      </h2>

      <section className="grid grid-cols-6 gap-10 xl:grid-cols-4  mdlg:grid-cols-2 xs:hidden">
        <Icons />
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
