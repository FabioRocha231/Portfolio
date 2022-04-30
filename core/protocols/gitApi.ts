import { GitApiResponseTypes } from "../types/gitApiReponseTypes";

export interface IGitApi {
  MyReposGetter(): Promise<GitApiResponseTypes[]>;
}
