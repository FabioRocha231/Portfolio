import { GitApiResponseTypes } from '../../core/types/gitApiReponseTypes'
import Carousel from './Carousel'

export type MyReposProps = {
  result: GitApiResponseTypes[]
}

export const MyRepos = ({ result }: MyReposProps) => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h1 className="my-10 font-montserrat text-4xl text-white sm:my-5 sm:text-2xl">
        My Repos
      </h1>

      <article className="w-full overflow-x-hidden">
        <Carousel state={result} />
      </article>
    </section>
  )
}
