import type { NextPage } from 'next'

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
import { Meta } from '../layouts/Meta'
import { Main } from '../templates'

const Home: NextPage = () => {
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
          <MyRepos />
          <SocialLinks />
          <Footer />
        </main>
      </section>
    </Main>
  )
}

export default Home
