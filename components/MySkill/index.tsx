import { Icons } from "./Icons";
import MobileIcons from "./MobileIcons";

type MySkillsProps = {
  id?: string;
};
export const MySkill = ({ id }: MySkillsProps) => {
  return (
    <section
      id={id}
      className="relative flex w-full flex-col items-center justify-evenly overflow-x-hidden bg-black"
    >
      <h2 className="z-[1] font-montserrat text-4xl text-white my-20">
        My Skills
      </h2>

      <Icons
        className="my-10 grid grid-cols-6 gap-10 xl:grid-cols-4  mdlg:grid-cols-2 xsm:hidden"
        iconWrapperSize="w-[150px] h-[150px]"
      />

      <article className="flex h-80 flex-row items-center justify-center xs:hidden">
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
