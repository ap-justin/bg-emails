import { BankingApplication } from "../components/banking-applications";
import { BankingApplications, ITemplate } from "../types";

const name: BankingApplications.Name = "banking-applications-rejection";

export const Template = () => (
  <BankingApplication name={name} action="rejected" />
);

export const template: ITemplate = {
  TemplateName: name,
  SubjectPart: "Better giving: changes in banking details",
};
