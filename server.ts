// import { App } from './base';
// import { UserRouter } from './routes/sample-routes';
// const port = 3000;
// const sampleRoute = new UserRouter();

// const server = App.express.listen(port, (err) => {
//     if (err) {
//         return console.error(err)
//     }
//     return console.log(`server is listening on ${port}`)
// });

// App.express.use(function (err, req, res, next) {
//     res.status(err.status).send(err);
// });
/// <reference path="./typings/tsd.d.ts" />
import { App, AppConfiguration } from './config';
import ApplicationMiddleWares = require("./config/middlewares");
const port = AppConfiguration.port;
App.express.set("port", port);
App.express.use(ApplicationMiddleWares.configuration);

App.express.listen(port, () => {
    console.log("Node app is running at localhost:" + port);
});
