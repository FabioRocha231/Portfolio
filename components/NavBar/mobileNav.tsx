import { memo, useEffect, useState } from 'react'

import { NavBarButtons } from './NavBarButtons'
import NavBarLogo from './NavBarLogo'

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
        <div
          style={{
            animation: `${isOpen ? 'fadeIn' : 'fadeOut'} .5s`
          }}
          className="glass fixed inset-0 z-[4]"
        >
          <div className="overlay" onClick={() => setIsOpen(false)} />
          <aside
            style={{
              width: 'clamp(300px, 30vw, 600px)',
              animation: `${isOpen ? 'fromLeft' : 'toRight'} .5s`
            }}
            className="absolute right-0 z-[5] h-full max-w-full bg-playButton"
          >
            <div
              className="flex h-full w-full flex-col items-center
              justify-center gap-y-8 rounded-l-xl bg-[#274a53]"
            >
              <span
                onClick={() => setIsOpen(false)}
                className="absolute top-10 left-10 cursor-pointer font-black text-white"
              >
                X
              </span>
              <NavBarLogo />
              <NavBarButtons />
            </div>
          </aside>
        </div>
      )}
    </>
  )
}

export default memo(MobileNav)
