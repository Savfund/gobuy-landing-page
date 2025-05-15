import Features from "./marketing/Features";
import Introduction from "./marketing/Introduction";
import SignUpFiller from "./marketing/SignupFiller";

export default function LandingPage() {
  return (
    <div>
      <Introduction />
      <Features />
      <SignUpFiller />
    </div>
  );
}
