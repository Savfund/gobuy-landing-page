import LandingPage from "@/components/landing-page";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return <MainLayout children={<LandingPage />} />;
}
