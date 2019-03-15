
import DataAccess = require("../base/data-access");
import { UserModel } from "../../models";
import Mongoose = require("mongoose");
const mongooseConnection = DataAccess.mongooseConnection;
class UserSchema {
  static get schema () {
       var schema = new Mongoose.Schema({
           name : {
               type: String,
               required: true
           },
           age: {
               type: Number,
               required: true
           }
       });
       return schema;
   }

}
export const UserSchemaDO = mongooseConnection.model<UserModel>("Users", UserSchema.schema);