import { Body, Preview } from "jsx-email";
import Container from "./components/container";

export const Template = () => (
  <Container>
    <Preview>
      This is our email {"{{email}}"} text for {"{{name}}"} &lt;{"{{email}}"}
      &gt;
    </Preview>
    <Body className="bg-white">
      This is our email {"{{email}}"} text for {"{{name}}"} &lt;{"{{email}}"}
    </Body>
  </Container>
);
