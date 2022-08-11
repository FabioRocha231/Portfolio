import ReactTyped from 'react-typed'

import Redirect from './Redirect'

export const TextAndRedirect = () => {
  const strings = [
    'Fullstack developer',
    'Front-End developer',
    'Back-end developer',
    'Mobile Developer'
  ]
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <article className="flex self-start w-[650px] flex-col 2xl:w-[500px] lg:w-full">
        <h1 className="text-5xl font-black lg:text-5xl lg:text-white sm:text-3xl xs:text-2xl ">
          Ola, me chamo Fabio Rocha
        </h1>
        <ReactTyped
          strings={strings}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="mt-2 bg-gradient-to-r from-purple-400 to-pink-600
          bg-clip-text text-3xl text-transparent sm:text-2xl"
        />
      </article>
      <article className="mt-10 flex xs:mt-5">
        <p
          className="text-xl font-medium
          text-slate-500 lg:text-white xs:text-lg"
        >
          Desenolvedor Fullstack com experiencia em React, React native, NextJs,
          NodeJs e Typescript. Se ficou interesasdo(a) e queira saber mais {''}
          <Redirect to="/Sobre" content="Sobre" />
          {''} mim pode estar checando minhas {''}
          <Redirect to="/Skills" content="Skills" />, {''} baixando meu {''}
          <Redirect to="/CV" content="CV" />
          {''} ou entrando em {''}
          <Redirect to="/Contato" content="Contato" />
          {''} comigo! Obrigado pela sua visita.
        </p>
      </article>
    </div>
  )
}
