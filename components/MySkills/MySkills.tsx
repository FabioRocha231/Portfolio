import { Icons } from "../Organisms/Icons";

export const MySkills = () => {
  return (
    <section className="flex items-center overflow-x-hidden">
      <section className="flex flex-col h-full items-center justify-center lg:w-full overflow-hidden">
        <div className="grid grid-cols-6 gap-10 xl:grid-cols-4 mdlg:grid-cols-2">
          <Icons />
        </div>
      </section>
    </section>
  );
};
