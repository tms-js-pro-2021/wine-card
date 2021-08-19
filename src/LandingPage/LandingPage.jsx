import React from "react";
import BannerSection from "./BannerSection";
import DescriptionSection from "./DescriptionSection";
import RegisterForTastingSection from "./RegisterForTastingSection/RegisterFortasting";
import InfoSection from "./InfoSection";


export default function LandingPage() {
  return (
    <div>
      <BannerSection />
      <DescriptionSection />
      <InfoSection />
      <RegisterForTastingSection/>
    </div>
  );
}
