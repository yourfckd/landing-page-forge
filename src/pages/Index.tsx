import { useScrollFade } from "@/hooks/useScrollFade";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ParodyRevealSection from "@/components/ParodyRevealSection";
import WhatThisIsSection from "@/components/WhatThisIsSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import WhatHappensSection from "@/components/WhatHappensSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useScrollFade();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ParodyRevealSection />
      <WhatThisIsSection />
      <WhoThisIsForSection />
      <WhatHappensSection />
      <LeadCaptureSection />
      <FooterSection />
    </div>
  );
};

export default Index;
