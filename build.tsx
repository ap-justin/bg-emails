import { CreateTemplateRequest } from "@aws-sdk/client-ses";

import * as fs from "fs";
import { render } from "jsx-email";
import * as path from "path";
import { FC } from "react";

interface ITemplate {
  Template: FC<any>;
  template: CreateTemplateRequest["Template"];
}

const build = async (filePath: string) => {
  try {
    const { Template, template } = require(`./${filePath}`) as ITemplate;

    const request: CreateTemplateRequest = {
      Template: {
        HtmlPart: await render(<Template />),
        TemplateName: template?.TemplateName,
        SubjectPart: template?.SubjectPart,
      },
    };
    await Bun.write(
      `./json-templates/${template?.TemplateName}.json`,
      JSON.stringify(request)
    );
  } catch (error) {
    console.error(`Error running build from file '${filePath}':`, error);
  }
};

const folderPath = "./src/templates";

const files = fs.readdirSync(folderPath);
console.log(files);

for (const file of files) {
  const filePath = path.join(folderPath, file);
  if (fs.statSync(filePath).isFile() && path.extname(filePath) === ".tsx") {
    build(filePath);
  }
}
