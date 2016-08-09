// Reference:
// http://goldbergyoni.com/checklist-best-practices-of-node-js-error-handling/
// https://www.joyent.com/node-js/production/design/errors
// https://books.google.com.hk/books?id=odVOCwAAQBAJ&pg=PA189&lpg=PA189&dq=typescript+google+book+exception+handling&source=bl&ots=zpiVWE1wdY&sig=YfUMoXysRaC7VMlQrHTyP_rXKBM&hl=zh-TW&sa=X&ved=0ahUKEwiIwrDKgbTOAhUFk5QKHXZTBYwQ6AEISDAG#v=onepage&q=typescript%20google%20book%20exception%20handling&f=false

class Err {
  public name: string;
  public stack: string;
  constructor(public message?: string) {}
}

export class CustomErrorCode {
  
  constructor(public isOperational: boolean, public message?: string) {};
}

export class CustomException extends Err {
  public isOperational: boolean;
  
  constructor(public errorCode: CustomErrorCode) {
    super(errorCode.message);
    this.name = (<any>this).constructor.name;
    this.stack = (<any>new Error()).stack;
    this.isOperational = errorCode.isOperational;
  }
  
  get log() {
    return `Exception: ${this.name} | ErrorCode: ${(<any>this.errorCode).constructor.name} | Message: ${this.message} 
    ${this.stack}` 
  }
}

// usages

export class LocalStorageException extends CustomException {
  constructor(public errorCode: CustomErrorCode) {
		super(errorCode);
	}
}

export class LocalStorageNotSupport extends CustomErrorCode {
  constructor(public message?: string) {
		super(true, message);
	}
}

export class SessionKeyNotFound extends CustomErrorCode {
  constructor(public message?: string) {
		super(true, message);
	}
}