"use client";

import Navigation from "@/components/navigation/Navigation";

export default function MainLayout({
  component,
}: {
  component: React.ReactNode;
}) {
  return (
    <>
      <Navigation>{component}</Navigation>
    </>
  );
}
