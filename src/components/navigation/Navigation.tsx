import { Container } from "@/common";
import Footer from "../landing-page/Footer";
import DesktopNavigation from "./desktop";
import MobileNavigation from "./mobile";
import { PropsWithChildren } from "react";

export type ToggleInterface = {
  toggle: () => void;
};

export default function Navigation({ children }: PropsWithChildren) {
  return (
    <>
      <Container>
        <div className="hidden lg:block">
          <DesktopNavigation />
        </div>
        <div className="block lg:hidden">
          <MobileNavigation />
        </div>
        {children}
        <Footer />
      </Container>
    </>
  );
}
