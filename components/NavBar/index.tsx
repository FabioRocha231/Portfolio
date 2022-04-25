import { useState } from "react";
import MobileNav from "./mobileNav";
import { NavBarButtons } from "./NavBarButtons";
import { NavBarLogo } from "./NavBarLogo";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav
      className={"flex flex-row justify-evenly items-center bg-black/70 h-14"}
    >
      <NavBarLogo />
      <NavBarButtons className="md:hidden" />

      <aside
        className="cursor-pointer smd:hidden"
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu size={"2rem"} color={"#61dafb"} />
      </aside>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};
