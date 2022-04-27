import { Button } from "../Button";
type PropsNavBarButtons = {
  className: string;
};
export const NavBarButtons = ({ className }: PropsNavBarButtons) => {
  return (
    <aside
      className={`flex flex-row justify-center items-center gap-x-9 ${className}`}
    >
      <Button
        className="p-1 hover:border-b-2 font-montserrat text-lg hover:border-cyan-400 transition-all duration-75 hover:animate-pulse"
        content="Repositories"
      />
      <Button
        className="p-1 hover:border-b-2 font-montserrat text-lg hover:border-cyan-400 transition-all duration-75 hover:animate-pulse"
        content="About"
        href="#about"
      />
      <Button
        className="p-1 hover:border-b-2 font-montserrat text-lg hover:border-cyan-400 transition-all duration-75 hover:animate-pulse"
        content="Contact"
      />
      <Button
        className="p-1 hover:border-b-2 font-montserrat text-lg hover:border-cyan-400 transition-all duration-75 hover:animate-pulse"
        content="Skils"
        href="#skills"
      />
    </aside>
  );
};
