import { SvgComponent } from "./SvgComponent";
import { GreetingsAndRedirects } from "./GreetingsAndRedirects";

export const Greetings = () => {
  return (
    <section className="flex grow bg-slate-100">
      <div className="flex w-full items-center justify-between">
        <GreetingsAndRedirects />
        <SvgComponent />
      </div>
    </section>
  );
};
