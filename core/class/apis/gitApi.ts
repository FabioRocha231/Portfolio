import { GitApiResponseTypes } from "@/core/types/gitApiReponseTypes";
import { IGitApi } from "@/core/protocols/gitApi";
import axios from "axios";
import { ErrorHandler } from "../handlers/errorHanlder";

export class GitApi implements IGitApi {
  async MyReposGetter(): Promise<GitApiResponseTypes[]> {
    const { errorHandler } = new ErrorHandler();
    const [error, result] = await errorHandler(
      axios.get("https://api.github.com/users/FabioRocha231/repos")
    );
    if (error) throw new Error(error.message);
    return result.data;
  }
}
