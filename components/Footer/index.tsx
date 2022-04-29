import { memo } from 'react'

export const Footer = () => {
  return (
    <footer className="flex h-20 w-full flex-row items-center justify-evenly bg-black sm:h-32 sm:flex-col sm:gap-y-5">
      <p className="font-montserrat text-lg text-white">
        Copyright &copy; 2022 All rights reserved
      </p>
      <p className="font-montserrat text-lg text-white">
        Designed by{' '}
        <span className="animate-pulse text-base text-[#61dafb]">
          Fabio HR Filho
        </span>
      </p>
    </footer>
  )
}

export default memo(Footer)
