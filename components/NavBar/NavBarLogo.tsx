import { DiReact } from 'react-icons/di'

export const NavBarLogo = () => {
  return (
    <aside className="flex flex-row items-center justify-center">
      <DiReact size={'2rem'} color={'#61dafb'} />
      <p className="font-montserrat text-lg text-white">
        <span className="text-[#61dafb]">Fabio</span> Hr Filho
      </p>
    </aside>
  )
}
