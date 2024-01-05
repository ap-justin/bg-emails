import { render } from "jsx-email";
import { Template as BankingApplicationsApproval } from "../src/templates/banking-applications-approval";
import { Template as ITemplate } from "@aws-sdk/client-ses";

const template: ITemplate = {
  TemplateName: "banking-applications-approval",
  SubjectPart: "Better giving: changes in banking details",
  HtmlPart: await render(<BankingApplicationsApproval />),
};

await Bun.write(
  `./json-templates/${template.TemplateName}.json`,
  JSON.stringify(template)
);
