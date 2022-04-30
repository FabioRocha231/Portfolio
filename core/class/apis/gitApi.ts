import axios from "axios";
import { IGitApi } from "../../interfaces/gitApi";
import { GitApiResponseTypes } from "../../types/gitApiReponseTypes";
import { ErrorHandler } from "../handlers/errorHanlder";

export class GitApi implements IGitApi {
  async MyReposGetter(): Promise<GitApiResponseTypes[]> {
    const { errorHandler } = new ErrorHandler();
    const [error, result] = await errorHandler(
      axios.get("https://api.github.com/users/FabioRocha231/repos")
    );

    if (error) throw new Error(error.message);
    console.log(result.data, "dentro da classe");
    return result.data;
  }
}
