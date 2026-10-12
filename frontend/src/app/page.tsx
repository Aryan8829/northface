import { HeroSection } from "@/components/sections/HeroSection";
import { DualGatewaySection } from "@/components/sections/DualGatewaySection";
import { RecruitmentSolutionsSection } from "@/components/sections/RecruitmentSolutionsSection";
import { PracticeAreasSection } from "@/components/sections/PracticeAreasSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturedJobsSection } from "@/components/sections/FeaturedJobsSection";
import { TrustPrinciplesSection } from "@/components/sections/TrustPrinciplesSection";
import { EmployerCTASection } from "@/components/sections/EmployerCTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DualGatewaySection />
      <RecruitmentSolutionsSection />
      <PracticeAreasSection />
      <ProcessSection />
      <FeaturedJobsSection />
      <TrustPrinciplesSection />
      <EmployerCTASection />
      <FAQSection />
    </>
  );
}
