import * as AWS from 'aws-sdk';
import { AWSConfiguration, AWSSESBulkEmailTemplatePayload, AWSSESEmailPayload, AWSSESEmailTemplatePayload } from '../../models';
export class AWSSESBucket {
  sesInstance;
  constructor(configuration:AWSConfiguration){
    AWS.config.update(configuration);
    this.sesInstance = new AWS.SES();
  }

  sendEmail(emailParams: AWSSESEmailPayload,callback : Function) {
    this.sesInstance.sendEmail(emailParams, function(error, data) {
      return callback(error, data);
    });
  }

  sendTemplateEmail(emailParams: AWSSESEmailTemplatePayload,callback : Function) {
    this.sesInstance.sendEmail(emailParams, function(error, data) {
      return callback(error, data);
    });
  }

  sendBulkEmail(emailParams: AWSSESBulkEmailTemplatePayload,callback : Function) {
    this.sesInstance.sendEmail(emailParams, function(error, data) {
      return callback(error, data);
    });
  }
}