import * as AWS from 'aws-sdk';
import { AppConfiguration } from '../../constants';
// import * as uuid from 'uuid';
export class AWSS3Bucket {
  s3Instance;
  constructor(){
    AWS.config.update({
      accessKeyId: AppConfiguration.aws.accessKeyId,
      secretAccessKey: AppConfiguration.aws.secretAccessKey,
    });
    this.s3Instance = new AWS.S3();
  }

  listBuckets (callback : Function) {
    this.s3Instance.listBuckets(function(error, data) {
      return callback(error, data);
    });
  }

  createBucket(bucketParams:{
    Bucket : string,
    ACL : string,
  } ,callback : Function) {
    this.s3Instance.createBucket(bucketParams, function(error, data) {
      return callback(error, data);
    });
  }

  deleteBucket(bucketParams:{
    Bucket : string
  } ,callback : Function) {
    this.s3Instance.deleteBucket(bucketParams, function(error, data) {
      return callback(error, data);
    });
  }

  uploadDocument (uploadDoc : {
    Bucket : string,
    Body : string,
    key : string
  }, callback : Function) {
    this.s3Instance.upload(uploadDoc, (error, data) => {
      return callback(error, data);
    })
  }

  deleteDocument (document : {
    Bucket : string,
    key : string
  }, callback : Function) {
    this.s3Instance.deleteObject(document, (error, data) => {
      return callback(error, data);
    })
  }

  deleteDocuments(documents : {
    Bucket : string,
    Delete : {
      Objects : Array<{
        Key : string
      }>
    },
    Quiet : boolean
  }, callback : Function) {
    this.s3Instance.deleteObjects(documents, (error, data) => {
      return callback(error, data);
    })
  }

}