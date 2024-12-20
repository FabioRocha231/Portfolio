import Link from "next/link";
import { memo } from "react";
import { DiReact } from "react-icons/di";

const NavBarLogo = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <DiReact
        className="animate-spin animate-spin"
        size={"2rem"}
        color={"#61dafb"}
      />
      <Link href={"/"}>
        <p className="font-montserrat text-lg text-slate-100">
          <span className="text-[#61dafb]">Fabio</span> HR Filho
        </p>
      </Link>
    </div>
  );
};

export default memo(NavBarLogo);
