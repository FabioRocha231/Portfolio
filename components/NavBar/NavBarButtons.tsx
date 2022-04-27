import { Button } from '../Button'

type PropsNavBarButtons = {
  className: string
}
export const NavBarButtons = ({ className }: PropsNavBarButtons) => {
  return (
    <aside
      className={`flex flex-row justify-center items-center gap-x-9 ${className}`}
    >
      <Button
        className="p-1 font-montserrat text-lg transition-all duration-75 hover:animate-pulse hover:border-b-2 hover:border-cyan-400"
        content="Repositories"
      />
      <Button
        className="p-1 font-montserrat text-lg transition-all duration-75 hover:animate-pulse hover:border-b-2 hover:border-cyan-400"
        content="About"
        href="#about"
      />
      <Button
        className="p-1 font-montserrat text-lg transition-all duration-75 hover:animate-pulse hover:border-b-2 hover:border-cyan-400"
        content="Contact"
      />
      <Button
        className="p-1 font-montserrat text-lg transition-all duration-75 hover:animate-pulse hover:border-b-2 hover:border-cyan-400"
        content="Skils"
        href="#skills"
      />
    </aside>
  )
}
