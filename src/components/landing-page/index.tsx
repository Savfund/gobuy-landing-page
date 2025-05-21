import Features from "./marketing/Features";
import Introduction from "./marketing/Introduction";
import SignUpFiller from "./marketing/SignupFiller";

export default function LandingPage() {
  return (
    <div>
      <Introduction />
      <div id="features">
        <Features />
      </div>
      <div id="about">
        <SignUpFiller />
      </div>
    </div>
  );
}
