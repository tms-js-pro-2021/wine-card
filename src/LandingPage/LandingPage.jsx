import React from "react";
import BannerSection from "./BannerSection";
import DescriptionSection from "./DescriptionSection";
import RegisterForTastingSection from "./RegisterForTastingSection/RegisterFortasting";


export default function LandingPage() {
  return (
    <div>
      <BannerSection />
      <DescriptionSection />
      <RegisterForTastingSection/>
    </div>
  );
}
