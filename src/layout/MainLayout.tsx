"use client";

import Navigation from "@/components/navigation/Navigation";

export default function MainLayout(props: { component: React.ReactNode }) {
  return (
    <>
      <Navigation>{props.component}</Navigation>
    </>
  );
}
