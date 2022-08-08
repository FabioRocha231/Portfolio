import Image from 'next/image'
import { memo } from 'react'

import { Introduction } from '../Introduction'

export const Header = () => {
  return (
    <header className="relative flex h-[600px] w-full flex-col items-center justify-center bg-header-image bg-center bg-no-repeat py-10 backdrop-brightness-50 hd:h-[800px] md:px-4">
      <article className="absolute h-full w-full  bg-black/40 backdrop-blur" />
      <article className="flex h-full w-full flex-row items-center justify-evenly hd:flex-col">
        <Introduction />

        <aside className="hd:my-10">
          <Image
            src="/images/headerBetter.jpeg"
            width={300}
            height={300}
            className="rounded-full "
            objectFit="cover"
            alt="Header image"
          />
        </aside>
      </article>
    </header>
  )
}

export default memo(Header)
