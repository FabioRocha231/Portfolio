import { memo } from 'react'

import { Icons } from './Icons'
import MobileIcons from './MobileIcons'

type MySkillsProps = {
  id?: string
}
export const MySkill = ({ id }: MySkillsProps) => {
  return (
    <section
      id={id}
      className="flex w-full flex-col items-center justify-evenly overflow-x-hidden "
    >
      <h2 className="mt-10 font-montserrat text-4xl text-white sm:my-5 sm:text-2xl">
        My Skills
      </h2>

      <Icons
        className="mt-10 mb-20 grid grid-cols-6 gap-10 xl:grid-cols-4  mdlg:grid-cols-2 xsm:hidden"
        iconWrapperSize="w-[150px] h-[150px]"
      />

      <article className="flex h-80 flex-row items-center justify-center bg-black sm:h-40 xs:hidden">
        <MobileIcons>
          <Icons
            className="flex flex-row gap-x-10"
            iconWrapperSize=" w-[90px] h-[90px]"
          />
        </MobileIcons>
      </article>
    </section>
  )
}

export default memo(MySkill)
