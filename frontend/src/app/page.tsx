import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { WhyUs } from "@/components/home/WhyUs";
import { ImpactNumbers } from "@/components/home/ImpactNumbers";
import { Testimonials } from "@/components/home/Testimonials";
import { CustomerTypes } from "@/components/home/CustomerTypes";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <FeaturedCategories />
      <WhyUs />
      <ImpactNumbers />
      <Testimonials />
      <CustomerTypes />
      <CTABanner />
    </>
  );
}
