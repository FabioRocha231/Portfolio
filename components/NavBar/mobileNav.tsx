import Link from "next/link";
import { memo, ReactNode, useEffect, useState } from "react";
import { NavBarButtons } from "./NavBarButtons";
import { NavBarLogo } from "./NavBarLogo";

interface Props {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
}

const MobileNav = ({ isOpen, setIsOpen }: Props) => {
  const [shouldRender, setRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) setRender(false);
  };

  return (
    <>
      {shouldRender && (
        <article
          onAnimationEnd={onAnimationEnd}
          style={{
            animation: `${isOpen ? "fadeIn" : "fadeOut"} .5s`,
          }}
          className="fixed z-[4] inset-0 glass"
        >
          <article className="overlay" onClick={() => setIsOpen(false)} />
          <aside
            style={{
              width: "clamp(300px, 30vw, 600px)",
              animation: `${isOpen ? "fromLeft" : "toRight"} .5s`,
            }}
            className="absolute bg-playButton max-w-full h-full right-0 z-[5]"
          >
            <article className="h-full bg-[#274a53] w-full flex flex-col justify-center items-center gap-y-8">
              <p
                onClick={() => setIsOpen(false)}
                className="absolute text-white font-black top-10 left-10 cursor-pointer"
              >
                X
              </p>
              <NavBarLogo />
              <NavBarButtons className="flex flex-col items-center justify-center gap-y-8" />
            </article>
          </aside>
        </article>
      )}
    </>
  );
};

export default memo(MobileNav);
