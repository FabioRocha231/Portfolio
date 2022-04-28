import Image from 'next/image'

import { Infos } from './infos'

type AboutMeProps = {
  id?: string
}

export const AboutMe = ({ id }: AboutMeProps) => {
  return (
    <section
      id={id}
      className="relative flex w-full flex-col items-center bg-black"
    >
      <h2 className="z-10 my-20 font-montserrat text-4xl text-white sm:my-10 sm:text-2xl">
        About Me
      </h2>

      <article className="my-10 flex flex-row items-center justify-evenly gap-x-80 xl:gap-x-36 lg:gap-x-7 hd:flex-col-reverse hd:px-4 sm:my-5">
        <aside className="hd:my-10">
          <Image
            src={'/images/sticker.svg'}
            width={'400px'}
            height={'400px'}
            alt={'Programmer programming'}
          />
        </aside>

        <Infos />
      </article>
    </section>
  )
}
