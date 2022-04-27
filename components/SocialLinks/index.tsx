import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export const SocialLinks = () => {
  return (
    <aside
      className={
        'socialLinksBar md:static md:mb-7 md:transform-none md:flex-row md:gap-5'
      }
    >
      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noreferrer"
        className={'socialLink'}
      >
        <FaLinkedin
          className="text-[#61dafb] hover:text-[#a1ecfb]"
          size={'2rem'}
        />
      </a>
      <a
        href="https://github.com/FabioRocha231"
        target="_blank"
        rel="noreferrer"
        className={'socialLink'}
      >
        <FaGithub
          className="text-[#61dafb] hover:scale-105 hover:text-[#a1ecfb] hover:shadow-teal-300"
          size={'2rem'}
        />
      </a>
      <a
        href="mailto:fabioharoldo1@gmail.com"
        target="_blank"
        rel="noreferrer"
        className={'socialLink'}
      >
        <SiGmail
          className="text-[#61dafb] hover:scale-105 hover:text-[#a1ecfb] hover:shadow-teal-300"
          size={'2rem'}
        />
      </a>
    </aside>
  )
}
