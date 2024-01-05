import { Body, Text } from "jsx-email";
import Container from "../components/container";
import { BankingApplications, Templates } from "../types";

const templates: Templates<BankingApplications.Rejection["data"]> = {
  accountSummary: "{{accountSummary}}",
  rejectionReason: "{{rejectionReason}}",
};
export const name: BankingApplications.Rejection["name"] =
  "banking-applications-rejection";

export const Template = () => (
  <Container>
    <Body className="bg-white">
      <Text className="block text-lg">
        {templates.accountSummary} is rejected
      </Text>
      <Text className="text-red-700">Reason: {templates.rejectionReason}</Text>
    </Body>
  </Container>
);
