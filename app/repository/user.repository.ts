import { UserSchemaDO } from '../data-access/schemas';
import { UserModel } from '../models';
import { RepositoryBase } from '../repository/base/base-repository';
export class UserRepository  extends RepositoryBase<UserModel> {
    constructor () {
        super(UserSchemaDO);
    }
}