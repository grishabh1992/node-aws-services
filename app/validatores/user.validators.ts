import express = require("express");
export class UserValidator {

  createValidator(req: express.Request, res: express.Response, next: Function) {
    next();
  }

  getValidator(req: express.Request, res: express.Response, next: Function) {
    next();
  }
}