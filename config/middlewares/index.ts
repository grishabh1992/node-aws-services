import express = require("express");
import bodyParser = require("body-parser");
import { AppRoutes } from '../routes';
class ApplicationMiddleWares {
    static get configuration () {
         var app = express();
         app.use(bodyParser());
         app.use(new AppRoutes().routes);
         return app;
    }
}
Object.seal(ApplicationMiddleWares);
export = ApplicationMiddleWares;