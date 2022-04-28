import type { NextPage } from 'next'
import Head from 'next/head'

import {
  AboutMe,
  BlockchainExperience,
  Header,
  MyRepos,
  MySkill,
  NavBar,
  SocialLinks
} from '../components'

const Home: NextPage = () => {
  return (
    <section className="bg-[#262626]">
      <Head>
        <title>Fabio HR Filho</title>
        <meta name="description" content="Fabio Hr - Fullstack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="flex w-full flex-col items-center justify-center">
        <Header />
        <AboutMe id={'about'} />
        <MySkill id={'skills'} />
        <BlockchainExperience />
        <MyRepos />
        <SocialLinks />
      </main>
    </section>
  )
}

export default Home
