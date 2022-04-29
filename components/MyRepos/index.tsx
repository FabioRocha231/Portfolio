export const MyRepos = () => {
  // const [repos, setRepos] = useState<GitApiResPonseTypes[]>([])

  // useEffect(() => {
  //   MyReposGetter(setRepos)
  // }, [])
  // console.log(repos, 'aqui')
  return (
    <section className="flex w-full flex-col items-center justify-center bg-black">
      <h1 className="my-10 font-montserrat text-4xl text-white sm:my-5 sm:text-2xl">
        My Repos
      </h1>

      <article className="w-full overflow-x-hidden">
        {/* <Carousel state={props.repos} /> */}
      </article>
    </section>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const [repos, setRepos] = useState<GitApiResPonseTypes[]>([])
//   const { MyReposGetter } = new GitApi()

//   await MyReposGetter(setRepos)
//   console.log(repos, 'aqui')
//   return {
//     props: {
//       repos
//     }
//   }
// }
