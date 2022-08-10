import { NextPage } from 'next'

import { NavBar } from '../../components'
import { CommingSoon } from '../../components/CommingSoon'
import { Meta } from '../../layouts/Meta'
import { Main } from '../../templates'

const Home: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Fabio HR Filho - Curriculum"
          description="Fabio HR Filho - Full Stack Js Developer"
        />
      }
    >
      <main className="flex h-screen flex-col">
        <NavBar />
        <CommingSoon />
      </main>
    </Main>
  )
}
export default Home
