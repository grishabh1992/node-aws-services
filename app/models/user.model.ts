/// <reference path="../../typings/tsd.d.ts" />
import mongoose = require("mongoose");
export interface UserModel extends mongoose.Document {
  name: string;
  age: number;
}
