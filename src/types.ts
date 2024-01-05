export namespace BankingApplications {
  export type New = {
    name: "banking-applications-new";
    data: {
      accountSummary: string;
    };
  };

  export type Approval = {
    name: "banking-applications-approval";
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

  export type Default = {
    name: "banking-applications-default";
    data: {
      accountSummary: string;
    };
  };
}

export type Templates<T extends Record<string, string>> = {
  /**@ts-ignore */
  [K in keyof T]: `{{${K}}}`;
};
