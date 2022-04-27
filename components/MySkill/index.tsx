import { Icons } from "./Icons";
import MobileIcons from "./MobileIcons";

export const MySkill = () => {
  return (
    <section className="w-full relative flex flex-col items-center justify-evenly bg-black overflow-x-hidden">
      <h2 className="text-4xl font-montserrat text-white z-[1]">My Skills</h2>

      <Icons
        className="xsm:hidden grid grid-cols-6 xl:grid-cols-4 mdlg:grid-cols-2 xsm:grid-cols-1 gap-10 my-10"
        iconWrapperSize="w-[150px] h-[150px]"
      />

      <article
        className="flex flex-row justify-center items-center xs:hidden h-80"
        id="slider-wrapper"
      >
        <MobileIcons>
          <Icons
            className="flex flex-row gap-x-10"
            iconWrapperSize=" w-[90px] h-[90px]"
          />
        </MobileIcons>
      </article>
    </section>
  );
};
// bg-mySkill bg-center bg-no-repeat
