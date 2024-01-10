import { Body, Text } from "jsx-email";
import Container from "./container";
import { BankingApplications, Templates } from "../types";

const templates: Templates<BankingApplications.Data> = {
  accountSummary: "{{accountSummary}}",
  rejectionReason: "{{rejectionReason}}",
};

export type Props = {
  name: BankingApplications.Name;
  action: "rejected" | "approved" | "default" | "new";
};

const description: { [K in Props["action"]]: string } = {
  rejected: "rejected",
  approved: "approved",
  default: "set to default",
  new: "submitted for review.",
};

export const BankingApplication = ({ action }: Props) => {
  return (
    <Container>
      <Body className="bg-white">
        <Text className="block text-lg">
          {templates.accountSummary} is {description[action]}.
        </Text>
        {action === "rejected" && (
          <Text className="text-red-700">
            Reason: {templates.rejectionReason}
          </Text>
        )}
      </Body>
    </Container>
  );
};
