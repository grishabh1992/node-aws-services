/// <reference path="../../typings/tsd.d.ts" />
import { UserModel } from '../models';
import { UserRepository } from '../repository';
export class UserBusiness {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    create(item: UserModel, callback: (error: any, result: any) => void) {
        this.userRepository.create(item, callback);
    }

    delete(condition: { [key: string]: any }, callback: (error: any, result: any) => void) {
        this.userRepository.delete(condition, callback);
    }

    update(condition: { [key: string]: any }, item: UserModel, callback: (error: any, result: any) => void) {
        this.userRepository.update(condition, item, callback);
    }

    get(condition: { [key: string]: any }, callback: (error: any, result: any) => void) {
        this.userRepository.retrieve(condition, callback);
    }
}
