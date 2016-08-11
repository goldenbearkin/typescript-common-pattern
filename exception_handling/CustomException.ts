export class CustomException {
  public name: string;
  public message?: string;
  public stack: string;
  public isOperational: boolean;

  constructor(isOperational: boolean, message?: string) {
    this.name = (<any>this).constructor.name;

    this.message = message;
    this.stack = (<any>new Error('CustomError')).stack;
    this.isOperational = isOperational;
  }

  get log() {
    let proto = (<any>this).__proto__;
    let tmp: string[] = [];
    let str: string = '';

    while (proto.constructor.name !== 'Object') {
      tmp.unshift(proto.constructor.name)
      tmp.unshift(' <- ');
      proto = proto.__proto__;
    }
    tmp.shift();
    tmp.forEach(x => str = str + x);

    return `${str}\n${'Operational: ' + this.isOperational}\n${'Message: ' + this.message}\n${this.stack}`;
  }
}