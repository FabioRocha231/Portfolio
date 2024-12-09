import Link from "next/link";
import { useMemo } from "react";

export const NavBarButtons = () => {
  const navItens = ["Sobre", "CV", "Contato"];
  const navPaths = ["about", "curriculum", "contact"];
  const navButtons = useMemo(
    () =>
      navItens.map((item, i) => {
        return (
          <li key={i}>
            <Link href={`/${navPaths[i]}`}>
              <p
                className="text-center font-montserrat text-base text-slate-100 transition-all duration-75
                hover:border-b-2 hover:border-cyan-400"
              >
                {item}
              </p>
            </Link>
          </li>
        );
      }),
    []
  );
  return (
    <ul className="flex flex-row items-center justify-center gap-x-9 lg:flex-col">
      {navButtons}
    </ul>
  );
};
