import express = require("express");
import { BaseError } from '../responses';
export class GenericErrorHandler {
   static configuration () : any {
        var app = express();
        app.use((error : BaseError, req: express.Request, res: express.Response, next : Function) => {
          console.log(error);
          res.status(error.status).send(error);
        });
        return app;
    }
}
Object.seal(GenericErrorHandler);
