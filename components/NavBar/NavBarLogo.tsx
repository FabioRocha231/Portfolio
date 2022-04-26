import { DiReact } from "react-icons/di";

export const NavBarLogo = () => {
  return (
    <aside className="flex flex-row justify-center items-center">
      <DiReact size={"2rem"} color={"#61dafb"} />
      <p className="text-white font-montserrat text-lg">
        <span className="text-[#61dafb]">Fabio</span> Hr Filho
      </p>
    </aside>
  );
};
