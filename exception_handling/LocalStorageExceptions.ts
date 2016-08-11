import { CustomException } from './CustomException';

export class LocalStorageException extends CustomException {
    constructor(isOperational: boolean, message?: string) {
      super(isOperational, message);
    }
  }

export namespace LocalStorageExceptions {
  export class SessionKeyNotFound extends LocalStorageException {
    constructor(isOperational: boolean, message?: string) {
      super(isOperational, message);
    }
  }
}
