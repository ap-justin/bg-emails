import { Body, Text } from "jsx-email";
import Container from "../components/container";
import { BankingApplications, Templates } from "../types";

const templates: Templates<BankingApplications.Default["data"]> = {
  accountSummary: "{{accountSummary}}",
};
export const name: BankingApplications.Default["name"] =
  "banking-applications-default";

export const Template = () => (
  <Container>
    <Body className="bg-white">
      <Text className="block text-lg">
        {templates.accountSummary} was set as default.
      </Text>
    </Body>
  </Container>
);
