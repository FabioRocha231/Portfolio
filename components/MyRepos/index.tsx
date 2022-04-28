import { useEffect, useState } from 'react'

import { GitApi } from '../../core/class/apis/gitApi'
import { GitApiResPonseTypes } from '../../core/types/gitApiReponseTypes'
import Carousel from './Carousel'

export const MyRepos = () => {
  const [repos, setRepos] = useState<GitApiResPonseTypes[]>([])
  const { MyReposGetter } = new GitApi()

  useEffect(() => {
    MyReposGetter(setRepos)
  }, [])

  return (
    <section className="flex w-full flex-col items-center justify-center bg-black">
      <h1 className="my-10 font-montserrat text-4xl text-white sm:my-5 sm:text-2xl">
        My Repos
      </h1>

      <article className="w-full overflow-x-hidden">
        <Carousel state={repos} />
      </article>
    </section>
  )
}
