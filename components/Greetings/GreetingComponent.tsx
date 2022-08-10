import Link from 'next/link'
import ReactTyped from 'react-typed'

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
            className="mt-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-3xl text-transparent"
          />
        </span>
        <p className="mt-4 w-[650px] text-lg font-medium text-slate-500">
          Desenolvedor Fullstack com experiencia em React, React native, NextJs,
          NodeJs e Typescript. Se ficou interesasdo(a) e queira saber mais {''}
          <Link href={'/Sobre'}>
            <a className="rounded-xl bg-slate-300 p-2 text-lg underline">
              Sobre
            </a>
          </Link>
          {''} mim pode estar checando minhas {''}
          <Link href={'/Skills'}>
            <a className="rounded-xl bg-slate-300 p-2 text-lg underline">
              Skills
            </a>
          </Link>
          , {''} baixando meu {''}
          <Link href={'/CV'}>
            <a className="rounded-xl bg-slate-300 p-2 text-lg underline">CV</a>
          </Link>
          {''} ou entrando em {''}
          <Link href={'/Contato'}>
            <a className="rounded-xl bg-slate-200 p-2 text-lg underline">
              Contato
            </a>
          </Link>
          {''} comigo! Obrigado pela sua visita.
        </p>
      </div>
    </div>
  )
}
