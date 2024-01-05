import { render } from "jsx-email";
import { Template, name } from "../src/templates/banking-applications-new";
import { CreateTemplateRequest } from "@aws-sdk/client-ses";

const template: CreateTemplateRequest = {
  Template: {
    TemplateName: name,
    SubjectPart: "Better giving: new banking details",
    HtmlPart: await render(<Template />),
  },
};

const _name = `${name}.json`;
await Bun.write(`./json-templates/${_name}`, JSON.stringify(template));
console.log(`aws ses create-template --cli-input-json file://${_name}`);
