import { BankingApplication } from "../components/banking-applications";
import { BankingApplications, ITemplate } from "../types";

const name: BankingApplications.Name = "banking-applications-new";
export const Template = () => (
  <BankingApplication name="banking-applications-new" action="new" />
);

export const template: ITemplate = {
  TemplateName: name,
  SubjectPart: "Better giving: new banking details",
};
