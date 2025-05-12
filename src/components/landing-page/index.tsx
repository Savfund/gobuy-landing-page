import Features from "./marketing-notes/Features";
import Introduction from "./marketing-notes/Introduction";
import SignUpFiller from "./marketing-notes/SignupFiller";

export default function LandingPage() {
  return (
    <div>
      <Introduction />
      <Features />
      <SignUpFiller />
    </div>
  );
}
