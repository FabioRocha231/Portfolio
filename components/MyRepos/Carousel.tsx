import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

import { CarouselGestures } from '../../core/class/handlers/CarouselGestures'
import { GitApiResponseTypes } from '../../core/types/gitApiReponseTypes'
import { UseWidth } from '../../hooks/UseWidth'
import { carouselVariants, imagesVariants } from './CarouselUtils'

type PropsCarousel = {
  state: GitApiResponseTypes[]
}

const Carousel = ({ state }: PropsCarousel) => {
  const [limit, setLimit] = useState<number>(0)
  const [[page, direction], setPage] = useState([0, 0])
  const { width } = UseWidth()
  const { ValidRight, ValidLeft, CaroulselFormatter, CarouselReset } =
    new CarouselGestures()
  const [bounds, setBounds] = useState({
    upper: 0,
    limit: 0
  })

  useEffect(() => {
    return CaroulselFormatter({ state, setBounds, setLimit, width })
  }, [width, state])

  useEffect(() => {
    return CarouselReset({ setPage, direction })
  }, [limit])

  const completeMap = useMemo(
    () =>
      state?.map(
        (git, i) =>
          i < bounds.upper + bounds.limit * page &&
          i >= 0 + bounds.limit * page && (
            <motion.div
              className="h-fit cursor-pointer bg-transparent"
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 100, duration: 2 }}
              key={i}
              variants={carouselVariants}
              onClick={() => {
                setTimeout(() => {
                  window.open(git.html_url, '_blank', 'noreferrer')
                }, 400)
              }}
            >
              <article className="relative flex h-[250px] w-[250px] flex-col items-center justify-evenly gap-y-5 rounded-3xl bg-repos bg-cover bg-center bg-no-repeat p-2 text-center">
                <article className="absolute  h-full w-full  rounded-3xl bg-[#4E7AC7]/10 backdrop-blur-sm" />

                <aside className="-mt-20 flex flex-row items-center justify-center gap-x-3">
                  <Image
                    src={git.owner.avatar_url}
                    width={30}
                    height={30}
                    quality={100}
                    objectFit={'contain'}
                    alt={'Avatar github'}
                    className={`rounded-full`}
                  />

                  <p className="z-[1]  animate-pulse bg-gradient-to-br from-pink-400 to-red-600 bg-clip-text font-montserrat text-base font-extrabold text-transparent">
                    {git.owner.login}
                  </p>
                </aside>

                <p className="z-[1] -mb-20 font-montserrat text-base font-semibold text-white">
                  {git.name}
                </p>
              </article>
            </motion.div>
          )
      ),
    [page, limit, state]
  )

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const iconLeftValidLeft = (
    <AiFillCaretLeft
      onClick={() => paginate(-1)}
      className="relative h-8 w-8 cursor-pointer text-white hover:opacity-80"
    />
  )

  const iconRightValidLeft = (
    <AiFillCaretLeft className="relative h-8 w-8 cursor-not-allowed text-white hover:opacity-80" />
  )

  const iconLeftValidRight = (
    <AiFillCaretRight
      onClick={() => paginate(1)}
      className="relative h-8 w-8 cursor-pointer text-white hover:opacity-80"
    />
  )
  const iconRightValidRight = (
    <AiFillCaretRight className="relative h-8 w-8 cursor-not-allowed text-white hover:opacity-80" />
  )

  const validLeft = useMemo(() => {
    return ValidLeft(page, iconLeftValidLeft, iconRightValidLeft)
  }, [page, limit])

  const validRight = useMemo(() => {
    return ValidRight(page, limit, iconLeftValidRight, iconRightValidRight)
  }, [page, limit])

  return (
    <>
      <div className="mt-10 flex min-h-max min-w-fit items-center justify-center gap-4 xsm:gap-2">
        {validLeft}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            variants={imagesVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', bounce: 0, velocity: 0.8 },
              opacity: { duration: 0.45 }
            }}
            className="max-w-screen-2xl z-10 flex gap-8"
          >
            {completeMap}
          </motion.div>
        </AnimatePresence>
        {validRight}
      </div>
      <div className="mt-4 mb-20 text-center sm:mb-5">
        <p className="font-montserrat text-white">
          Page <b>{page + 1}</b> of <b>{limit}</b>
        </p>
      </div>
    </>
  )
}

export default Carousel
