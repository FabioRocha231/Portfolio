import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import MobileNav from './mobileNav'
import { NavBarButtons } from './NavBarButtons'
import { NavBarLogo } from './NavBarLogo'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <nav className={'flex h-14 flex-row items-center justify-evenly'}>
      <NavBarLogo />
      <NavBarButtons className="md:hidden" />

      <aside
        className="cursor-pointer smd:hidden"
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu size={'2rem'} color={'#61dafb'} />
      </aside>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}
