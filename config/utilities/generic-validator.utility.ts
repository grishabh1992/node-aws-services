import * as R from 'ramda';
export class GenericValidator {
  validateObject: any;
  keyValue: any;
  message: string;
  valid: boolean = true;
  constructor(objectNeedValidate) {
    this.validateObject = objectNeedValidate;
  }

  checkKey = (key: string, message: string) => {
    this.message = R.clone(message);
    this.keyValue = R.clone(this.validateObject[key]);
    return this;
  }

  isRequired = (): this => {
    if (this.valid) {
      if (R.isNil(this.keyValue)) {
        this.valid = false;
      } else if (R.isEmpty(this.keyValue)){
        this.valid = false;
      }
    }
    return this;
  }

  value = () : string => {
    if (this.valid) {
      return '';
    } else {
      return this.message;
    }
  }
}