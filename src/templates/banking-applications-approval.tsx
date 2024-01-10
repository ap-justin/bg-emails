import { BankingApplication } from "../components/banking-applications";
import { BankingApplications, ITemplate } from "../types";

const name: BankingApplications.Name = "banking-applications-approval";

export const Template = () => (
  <BankingApplication name={name} action="approved" />
);

export const template: ITemplate = {
  TemplateName: name,
  SubjectPart: "Better giving: changes in banking details",
};
