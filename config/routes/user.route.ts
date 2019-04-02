import express = require("express");
import { UserController } from '../../app/controllers';
import { UserValidator } from '../../app/validatores';
export class UserRoutes {
  router;
  constructor() {
    this.router = express.Router();
  }
  get routes() {
    const validator = new UserValidator();
    const baseController = new UserController();
    this.router.get("/user", baseController.list);
    this.router.post("/user", baseController.create);
    return this.router;
  }
}
