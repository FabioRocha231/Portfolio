import ReactTyped from "react-typed"

export const GreetingsComponent = () => {
  const strings = [
    'Fullstack developer',
    'Front-End developer',
    'Back-end developer',
    'Mobile Developer'
  ]
  return (
    <div className="flex h-full flex-1 flex-col bg-slate-100">
      <div className="flex h-full flex-col items-center justify-center">
        <span className="flex max-w-max flex-col">
          <h1 className="text-5xl font-black">Ola, me chamo Fabio Rocha</h1>
          <ReactTyped
            strings={strings}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="mt-2 text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          />
        </span>
      </div>
    </div>
  )
}
