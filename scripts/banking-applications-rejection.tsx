import { render } from "jsx-email";
import {
  Template,
  name,
} from "../src/templates/banking-applications-rejection";
import { CreateTemplateRequest } from "@aws-sdk/client-ses";

const json: CreateTemplateRequest = {
  Template: {
    TemplateName: name,
    SubjectPart: "Better giving: changes in banking details",
    HtmlPart: await render(<Template />),
  },
};

await Bun.write(
  `./json-templates/${name}.json`,
  JSON.stringify({ Template: json })
);
