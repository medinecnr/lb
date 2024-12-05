
import React from "react";
import Altpanel from "@/components/altpanel";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen relative flex flex-col h-screen">
      <div className="flex-grow">{children}</div>
      <Altpanel />
    </section>
  );
}
