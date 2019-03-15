/// <reference path="../../../typings/tsd.d.ts" />

import Mongoose = require("mongoose");
import { AppConfiguration } from '../../../config';

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    constructor() {
        DataAccess.connect();
    }
    static connect(): Mongoose.Connection {
        if (this.mongooseInstance) return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", (error) => {
            if(error){
                console.log("MongoDB Connection Error : ", error);
            } else {
                console.log("MongoDB Connection Successful");
            }
        });
        this.mongooseInstance = Mongoose.connect(AppConfiguration.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
DataAccess.connect();
export = DataAccess;
