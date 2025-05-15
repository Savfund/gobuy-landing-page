import Footer from "../landing-page/Footer";
import DesktopNavigation from "./desktop";
import MobileNavigation from "./mobile";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNavigation />
      </div>
      <div className="block lg:hidden">
        <MobileNavigation />
      </div>
      {children}
      <Footer />
    </>
  );
}
