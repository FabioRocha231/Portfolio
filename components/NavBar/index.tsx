"use client";
import { memo, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./mobileNav";
import NavBarLogo from "./NavBarLogo";
import { NavBarButtons } from "./NavBarButtons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex h-16 min-h-max flex-row items-center justify-evenly bg-black">
      <NavBarLogo />
      <div className="lg:hidden">
        <NavBarButtons />
      </div>
      <span
        className="cursor-pointer mlg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu size={"1.5rem"} color={"#61dafb"} />
      </span>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default memo(NavBar);
