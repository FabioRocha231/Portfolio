import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
// '#a1ecfb' : '#26dafd'
export const SocialLinks = () => {
  return (
    <aside
      className={
        "socialLinksBar md:static md:transform-none md:flex-row md:gap-5 md:mb-7"
      }
    >
      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noreferrer"
        className={"socialLink"}
      >
        <FaLinkedin
          className="text-[#61dafb] hover:text-[#a1ecfb]"
          size={"2rem"}
        />
      </a>
      <a
        href="https://github.com/FabioRocha231"
        target="_blank"
        rel="noreferrer"
        className={"socialLink "}
      >
        <FaGithub
          className="text-[#61dafb] hover:text-[#a1ecfb] hover:shadow-teal-300 hover:scale-105"
          size={"2rem"}
        />
      </a>
    </aside>
  );
};
