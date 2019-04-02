
export class AWSSESEmailPayload {
  Destination : {
    CcAddresses?: Array<string>;
    ToAddresses : Array<string>;
  };
  Message : {
    Body : {
      Html ?: {
        Charset ?: string;
        Data ? : string;
      };
      Text ?: {
        Charset ?: string;
        Data ? : string;
      }
    };
    Subject ?: {
      Charset ?: string;
      Data ? : string;
    }
  };
  Source : string;
  ReplyToAddresses?: Array<string>
}

export class AWSSESEmailTemplatePayload {
  Destination : {
    CcAddresses?: Array<string>;
    ToAddresses : Array<string>;
  };
  Source : string;
  Template : string;
  TemplateData:  string;
  ReplyToAddresses ?: Array<string>
}

export class AWSSESBulkEmailTemplatePayload {
  Destinations : Array<{
    Destination : {
      CcAddresses?: Array<string>;
      ToAddresses : Array<string>;
    },
    ReplacementTemplateData? : string;
  }>;
  Source : string;
  Template : string;
  DefaultTemplateData?:  string;
  ReplyToAddresses ?: Array<string>
}

export interface AWSSESConfiguration {
  apiVersion ?: string;
}