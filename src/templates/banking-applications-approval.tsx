import { Body, Text } from "jsx-email";
import Container from "../components/container";
import { BankingApplications, Templates } from "../types";

const templates: Templates<BankingApplications.Approval["data"]> = {
  accountSummary: "{{accountSummary}}",
};
export const name: BankingApplications.Approval["name"] =
  "banking-applications-approval";

export const Template = () => (
  <Container>
    <Body className="bg-white">
      <Text className="block text-lg">
        {templates.accountSummary} is{" "}
        <span className="text-green">approved</span>.
      </Text>
    </Body>
  </Container>
);
