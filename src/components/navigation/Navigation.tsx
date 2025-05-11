import Footer from "../landing-page/Footer";
import TopNavigation from "./TopNavigation";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigation />
      {children}
      <Footer />
    </>
  );
}
