import { GitApiResPonseTypes } from "../types/gitApiReponseTypes";

export interface IGitApi {
  MyReposGetter(setState: Function): Promise<GitApiResPonseTypes[]> | Error;
}
