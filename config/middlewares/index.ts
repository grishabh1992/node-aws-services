import express = require("express");
import bodyParser = require("body-parser");
import { AppRoutes } from '../routes';
import { GenericErrorHandler } from './generic-error';
import { MethodOverride } from './method-override';
class ApplicationMiddleWares {
    static get configuration () {
         var app = express();
         app.use(bodyParser());
         app.use(MethodOverride.configuration());
         app.use(GenericErrorHandler.configuration());
         app.use(new AppRoutes().routes);
         return app;
    }
}
Object.seal(ApplicationMiddleWares);
export = ApplicationMiddleWares;