import { Body, Text } from "jsx-email";
import Container from "../components/container";
import { BankingApplications, Templates } from "../types";

const templates: Templates<BankingApplications.New["data"]> = {
  accountSummary: "{{accountSummary}}",
};
export const name: BankingApplications.New["name"] = "banking-applications-new";

export const Template = () => (
  <Container>
    <Body className="bg-white">
      <Text className="block text-lg">
        {templates.accountSummary} is submitted for review.
      </Text>
    </Body>
  </Container>
);
