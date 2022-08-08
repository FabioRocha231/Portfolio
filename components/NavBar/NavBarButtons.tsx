import Link from 'next/link'
import { useMemo } from 'react'

interface INavBarButtonsParam {
  isMobileNav: boolean
}

export const NavBarButtons = ({ isMobileNav }: INavBarButtonsParam) => {
  const navItens = ['about', 'skilss', 'Blockchain', 'contact']
  const navButtons = useMemo(
    () =>
      navItens.map((item, i) => {
        return (
          <li key={i}>
            <Link href="#about">
              <a
                className="font-montserrat text-lg text-white transition-all duration-75
                hover:animate-pulse hover:border-b-2 hover:border-cyan-400"
              >
                {item}
              </a>
            </Link>
          </li>
        )
      }),
    []
  )
  return (
    <ul
      className={`${isMobileNav ? 'flex flex-col' : 'flex flex-row md:hidden'}
        items-center justify-center gap-x-9`}
    >
      {navButtons}
    </ul>
  )
}
