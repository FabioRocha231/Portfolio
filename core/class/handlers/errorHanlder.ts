import { IErrorHandler } from "../../interfaces/errorHandler";

export class ErrorHandler implements IErrorHandler {
  public errorHandler = (promise: Promise<unknown>) =>
    promise.then((result) => [null, result]).catch((error) => [error]);
}
