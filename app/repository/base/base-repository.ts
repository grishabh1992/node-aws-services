import mongoose = require('mongoose');
export class RepositoryBase<T extends mongoose.Document> {
       private _model: mongoose.Model<mongoose.Document>;

       constructor (schemaModel: mongoose.Model<mongoose.Document>) {
           this._model = schemaModel;
       }

       create (item: T, callback: (error: any, result: any) => void) {
           this._model.create(item, callback);
       }

       retrieve (condition: { [key: string]: any },callback: (error: any, result: any) => void) {
            this._model.find(condition, callback)
       }

       update (condition: { [key: string]: any }, item: T, callback: (error: any, result: any) => void) {
               this._model.update(condition, item, callback);
       }

       delete (condition: { [key: string]: any }, callback:(error: any, result: any) => void) {
           this._model.remove(condition, (err) => callback(err, null));
       }
   }