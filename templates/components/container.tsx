import { Html, Tailwind } from "jsx-email";
import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <Html>
      <Tailwind>{children}</Tailwind>
    </Html>
  );
}
