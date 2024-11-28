import { WorkCard } from './WorkCard'

export const WorkExperience = () => {
  return (
    <section className="mt-10 flex flex-col items-center justify-center">
      <h2 className="mt-10 font-montserrat text-4xl text-white sm:my-5 sm:text-2xl">
        Work Experience
      </h2>
      <div className="flex flex-row items-center justify-center gap-x-32">
        <WorkCard company="apex" />
        <WorkCard company="solcraft" />
      </div>
    </section>
  )
}
