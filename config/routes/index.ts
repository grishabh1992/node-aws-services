import * as express from 'express';
import { UserRoutes } from './user.route';
const app = express();
export class AppRoutes {
   get routes() {
    app.use("/", new UserRoutes().routes);
    return app;
  }
}