import { title } from "@/components/primitives";
import React from "react";
import Altpanel from "@/components/altpanel";

export default function PricingPage() {
  return (
    <div>
      <Altpanel />
      <h1 className={title()}>Pricing</h1>
    </div>
  );
}
