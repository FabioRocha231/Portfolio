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
        <title>Fabio HR Filho - FullStack JS</title>
        <meta
          name="description"
          content="SolCraft is an Action-RTS P2E Game built on the Solana Blockchain that includes Dwarf Miners, Orcs, Elves as playable characters who mine crypto - $SLN"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta
          name="keywords"
          content="FullStack, Javascript, Expo, Typescrip, NextJs, NodeJs, BackEnd, HTML5, CSS3, Git, Express, MongoDB, PostgresSql, FrontEnd, Blockchain, Wax, Solana"
        />
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
