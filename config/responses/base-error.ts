export class BaseError extends Error {
  message : string;
  name : string;
  status  : number;
  constructor(status : number, name : string, message : string){
    super();
    this.message = message;
    this.status = status;
    this.name = name;
  }
}