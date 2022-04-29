import { memo, useEffect, useState } from 'react'

import { NavBarButtons } from './NavBarButtons'
import { NavBarLogo } from './NavBarLogo'

interface Props {
  isOpen: boolean
  setIsOpen(value: boolean): void
}

const MobileNav = ({ isOpen, setIsOpen }: Props) => {
  const [shouldRender, setRender] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) setRender(true)
    if (!isOpen) setTimeout(() => setRender(false), 450)
  }, [isOpen])

  return (
    <>
      {shouldRender && (
        <article
          style={{
            animation: `${isOpen ? 'fadeIn' : 'fadeOut'} .5s`
          }}
          className="glass fixed inset-0 z-[4]"
        >
          <article className="overlay" onClick={() => setIsOpen(false)} />
          <aside
            style={{
              width: 'clamp(300px, 30vw, 600px)',
              animation: `${isOpen ? 'fromLeft' : 'toRight'} .5s`
            }}
            className="absolute right-0 z-[5] h-full max-w-full bg-playButton"
          >
            <article className="flex h-full w-full flex-col items-center justify-center gap-y-8 bg-[#274a53]">
              <p
                onClick={() => setIsOpen(false)}
                className="absolute top-10 left-10 cursor-pointer font-black text-white"
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
  )
}

export default memo(MobileNav)
