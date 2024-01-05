import { render } from "jsx-email";
import { Template, name } from "../src/templates/banking-applications-approval";
import { Template as ITemplate } from "@aws-sdk/client-ses";

const json: ITemplate = {
  TemplateName: name,
  SubjectPart: "Better giving: changes in banking details",
  HtmlPart: await render(<Template />),
};

await Bun.write(
  `./json-templates/${name}.json`,
  JSON.stringify({ Template: json })
);
