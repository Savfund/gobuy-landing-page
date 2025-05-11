"use client";

import Footer from "@/components/landing-page/Footer";
import TopNavigation from "@/components/navigation/TopNavigation";

export default function MainLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <TopNavigation />
      {props.children}
      <Footer />
    </>
  );
}
