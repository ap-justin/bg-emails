import { CreateTemplateRequest } from "@aws-sdk/client-ses";

export namespace BankingApplications {
  export type Generic = {
    name:
      | "banking-applications-new"
      | "banking-applications-approval"
      | "banking-applications-default";
    data: {
      accountSummary: string;
    };
  };
  export type Rejection = {
    name: "banking-applications-rejection";
    data: {
      accountSummary: string;
      rejectionReason: string;
    };
  };

  export type Data = Generic["data"] & Rejection["data"];
  export type Name = Generic["name"] | Rejection["name"];
}

export namespace User {
  export type Payload = {
    name: "new-endow-user";
    data: {
      endowID: number;
    };
  };
}

export type Templates<T extends Record<string, string>> = {
  /**@ts-ignore */
  [K in keyof T]: `{{${K}}}`;
};

export type ITemplate = CreateTemplateRequest["Template"];
