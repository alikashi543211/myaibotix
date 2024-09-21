import HeroSection from "./_front/_components/HeroSection";
import FeatureSection from "./_front/_components/FeatureSection";
import FooterSection from "./_front/_components/FooterSection";
import FrontNavbar from "./_front/_components/FrontNavbar";
import TestimonialSection from "./_front/_components/TestimonialSection";
import CallToAction from "./_front/_components/CallToAction";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <FrontNavbar />
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <CallToAction />
      <FooterSection />
    </div>
  );
}
