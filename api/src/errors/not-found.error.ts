import { BaseError } from "./base.error";

export class NotFoundError extends BaseError {
  statusCode = 404;

  constructor(public message: string = "Not Found") {
    super(message);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
