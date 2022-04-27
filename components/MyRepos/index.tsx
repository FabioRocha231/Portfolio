import { useEffect, useState } from "react";
import { GitApi } from "../../core/class/apis/gitApi";
import { GitApiResPonseTypes } from "../../core/types/gitApiReponseTypes";
import Carousel from "./Carousel";

export const MyRepos = () => {
  const [repos, setRepos] = useState<GitApiResPonseTypes[]>([]);
  const { MyRepos } = new GitApi();

  useEffect(() => {
    MyRepos(setRepos);
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-montserrat my-10">My Repos</h1>

      <article className="w-full overflow-x-hidden">
        <Carousel state={repos} />
      </article>
    </section>
  );
};
