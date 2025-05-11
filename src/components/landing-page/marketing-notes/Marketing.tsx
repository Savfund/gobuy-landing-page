import { Container } from "@/common";
import Features from "./Features";
import Introduction from "./Introduction";
import SignUpFiller from "./SignupFiller";

export default function Marketing() {
  return (
    <Container>
      <Introduction />
      <Features />
      <SignUpFiller />
    </Container>
  );
}
