import axios from "axios";
import { IGitApi } from "../../interfaces/gitApi";
import { GitApiResPonseTypes } from "../../types/gitApiReponseTypes";
import { ErrorHandler } from "../handlers/errorHanlder";

export class GitApi implements IGitApi {
  async MyRepos(setState: Function): Promise<GitApiResPonseTypes[]> {
    const { errorHandler } = new ErrorHandler();
    const [error, result] = await errorHandler(
      axios.get("https://api.github.com/users/FabioRocha231/repos")
    );

    if (error) throw new Error(error.message);
    return setState(result.data);
  }
}
