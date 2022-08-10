import { GreetingsComponent } from './GreetingComponent'
import { SvgComponent } from './SvgComponent'

export const Greetings = () => {
  return (
    <section className="flex grow bg-slate-100">
      <div className="flex w-full items-center justify-between">
        <GreetingsComponent />
        <SvgComponent />
      </div>
    </section>
  )
}
