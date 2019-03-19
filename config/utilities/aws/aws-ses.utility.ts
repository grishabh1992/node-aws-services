import * as AWS from 'aws-sdk';
import { AppConfiguration } from '../../constants';
export class AWSSESBucket {
  sesInstance;
  constructor(){
    AWS.config.update({
      accessKeyId: AppConfiguration.aws.accessKeyId,
      secretAccessKey: AppConfiguration.aws.secretAccessKey,
    });
    this.sesInstance = new AWS.SES();
  }

  sendEmail(emailParams:{
    from : string,
    to : string,
    subject : string,
    body : string
  } ,callback : Function) {
    const sesRequestParam = {
      Source: emailParams.from,
        Destination: { ToAddresses: emailParams.to },
        Message: {
          Subject: {
          Data: emailParams.subject
        },
        Body: {
          Html: {
                Charset: "UTF-8",
                Data: ""+ emailParams.body +"",
          }
        }
      }
    }
    this.sesInstance.sendEmail(emailParams, function(error, data) {
      return callback(error, data);
    });
  }

}