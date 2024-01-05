import { Body, Head, Html, Preview } from "jsx-email";

export const Template = () => (
  <Html>
    <Head />
    <Preview>
      This is our email {"{{email}}"} text for {"{{name}}"} &lt;{"{{email}}"}
      &gt;
    </Preview>
    <Body>
      This is our email {"{{email}}"} text for {"{{name}}"} &lt;{"{{email}}"}
    </Body>
  </Html>
);
