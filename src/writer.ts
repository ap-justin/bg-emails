import { CreateTemplateRequest } from "@aws-sdk/client-ses";

export const writer = async (
  name: string,
  template: CreateTemplateRequest["Template"]
) => {
  const request: CreateTemplateRequest = { Template: template };
  await Bun.write(`./json-templates/${name}.json`, JSON.stringify(request));
};
