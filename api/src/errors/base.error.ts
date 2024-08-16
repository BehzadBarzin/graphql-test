export abstract class BaseError extends Error {
  /**
   * The status code of the error
   */
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BaseError.prototype);
  }

  /**
   * A method that returns the serialized errors object to be sent back to the client
   */
  abstract serializeErrors(): { message: string; field?: string }[];
}
