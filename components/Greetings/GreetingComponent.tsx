import { MySkills } from '../MySkills/MySkills'
import { TextAndRedirect } from './TextAndRedirect'

export const GreetingsComponent = () => {
  return (
    <div className="flex h-full flex-1 flex-col bg-slate-100 px-20 lg:hidden">
      <TextAndRedirect />
      <MySkills />
    </div>
  )
}
