import { GitApiResPonseTypes } from "../types/gitApiReponseTypes";

export interface IGitApi {
  MyReposGetter(): Promise<GitApiResPonseTypes[]>;
}
