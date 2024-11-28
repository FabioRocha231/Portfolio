import Image from 'next/image'

import { TextAndRedirect } from './TextAndRedirect'

export const SvgComponent = () => {
  return (
    <div
      className="flex h-full flex-col items-center justify-center bg-gradient-to-t
      from-blue-700 via-blue-800 to-black lg:w-full overflow-hidden"
    >
      <div className="flex items-center justify-center px-20 mlg:hidden sm:px-10">
        <TextAndRedirect />
      </div>
      <div className="mt-20 flex items-center justify-center xl:h-52 xl:w-96 xs:h-36 xs:w-80">
        <Image
          src="/images/mainImage.svg"
          alt="a developer image"
          width={700}
          height={700}
        />
      </div>
    </div>
  )
}
