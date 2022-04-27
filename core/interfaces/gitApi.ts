import { GitApiResPonseTypes } from "../types/gitApiReponseTypes";

export interface IGitApi {
  MyRepos(setState: Function): Promise<GitApiResPonseTypes[]> | Error;
}
