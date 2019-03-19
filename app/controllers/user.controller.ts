import express = require("express");
export class UserController {
  constructor() {
  }
  list = (req: express.Request, res: express.Response, next : Function): void => {
    try {

    }
    catch (e) {
      res.send(e);
    }
  }

  create = (req: express.Request, res: express.Response): void => {
    try {

    }
    catch (e) {
      res.send(e);
    }
  }
}