import { CustomResponseMessage } from '../constants';
export class Success  {
  message : string;
  data : any;
  status : number;
  constructor(message: string, data : any) {
    this.status = CustomResponseMessage.statuses.ok;
    this.data = data;
    this.message = message || CustomResponseMessage.message.ok;
  }
}