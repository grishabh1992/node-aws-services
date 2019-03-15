import express = require("express");
import { GenericValidator, CustomError } from '../../config';
export class UserValidator {

  createValidator(req: express.Request, res: express.Response, next: Function) {
    next();
  }

  getValidator(req: express.Request, res: express.Response, next: Function) {
    next();
  }

  updateValidator(req: express.Request, res: express.Response, next: Function) {
    let idError = new GenericValidator({ id: req.params._id }).checkKey('id', 'Id required').isRequired().value();
    if (idError) {
      return res.json(CustomError.BadRequestError(idError));
    } 
    next();
  }
}