import { CustomResponseMessage } from '../constants';
import { BaseError } from './base-error';

export class CustomError {
  static ServerError (message: string) : BaseError{
    return new BaseError(CustomResponseMessage.statuses.serverError, CustomResponseMessage.name.serverError, message || CustomResponseMessage.message.serverError)
  }

  static BadRequestError (message: string) : BaseError{
    return new BaseError(CustomResponseMessage.statuses.badRequest, CustomResponseMessage.name.badRequest, message || CustomResponseMessage.message.badRequest)
  }
}


// export class UnAuthorizedError  extends BaseError {
//   constructor(message: string) {
//     super(CustomResponseMessage.statuses.unAuthorized, CustomResponseMessage.name.unAuthorized, message || CustomResponseMessage.message.unAuthorized);
//   }
// }

// export class ServerError  extends BaseError {
//   constructor(message: string) {
//     super(CustomResponseMessage.statuses.serverError, CustomResponseMessage.name.serverError, message || CustomResponseMessage.message.serverError);
//   }
// }

// export class BadRequestError extends BaseError {
//   constructor(message: any) {
//     super(CustomResponseMessage.statuses.badRequest, CustomResponseMessage.name.badRequest, message || CustomResponseMessage.message.badRequest);
//   }
// }

// export class ForBiddenError extends BaseError {
//   constructor(message: string) {
//     super(CustomResponseMessage.statuses.forbidden, CustomResponseMessage.name.forbidden, message || CustomResponseMessage.message.forbidden);
//   }
// }