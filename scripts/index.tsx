import * as React from "react";
import { render } from "jsx-email";
import { Template } from "../templates/banking-applications-approval";

const html = await render(<Template />);
console.log(html);
