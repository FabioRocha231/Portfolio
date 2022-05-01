import type { GetStaticProps, NextPage } from 'next'

import {
  AboutMe,
  BlockchainExperience,
  Footer,
  Header,
  MyRepos,
  MySkill,
  NavBar,
  SocialLinks
} from '../components'
import { GitApi } from '../core/class/apis/gitApi'
import { GitApiResponseTypes } from '../core/types/gitApiReponseTypes'
import { Meta } from '../layouts/Meta'
import { Main } from '../templates'

const Home: NextPage<{ result: GitApiResponseTypes[] }> = ({ result }) => {
  return (
    <Main
      meta={
        <Meta
          title="Fabio HR Filho - Full Stack Developer"
          description="Fabio HR Filho - Full Stack Js Developer"
        />
      }
    >
      <section className="bg-black">
        <NavBar />
        <main className="flex w-full flex-col items-center justify-center">
          <Header />
          <AboutMe id={'about'} />
          <MySkill id={'skills'} />
          <BlockchainExperience />
          <MyRepos result={result} />
          <SocialLinks />
          <Footer />
        </main>
      </section>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { MyReposGetter } = new GitApi()
  const result = await MyReposGetter()
  return {
    props: {
      result
    },
    revalidate: 60 // 1 minuto || 60scs
  }
}

export default Home
