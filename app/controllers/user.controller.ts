import express = require("express");
import { UserBusiness } from '../business';
import { UserModel } from '../models';
export class UserController {
  userBusiness: UserBusiness;
  constructor() {
    this.userBusiness = new UserBusiness();
  }
  list = (req: express.Request, res: express.Response, next : Function): void => {
    try {
      this.userBusiness.get({}, (error, result) => {
        if (error) res.send({ "error": "error" });
        else res.send(result);
      });
    }
    catch (e) {
      res.send(e);
    }
  }

  create = (req: express.Request, res: express.Response): void => {
    try {
      const user: UserModel = <UserModel>req.body;
      this.userBusiness.create(user, (error, result) => {
        if (error) res.send({ "error": "error" });
        else res.send({ "success": "success" });
      });
    }
    catch (e) {
      res.send(e);
    }
  }
}