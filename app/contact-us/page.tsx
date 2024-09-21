import BannerSection from "../_front/_components/BannerSection";
import CallToAction from "../_front/_components/CallToAction";
import ContactSection from "../_front/_components/ContactSection";
import FeatureSection from "../_front/_components/FeatureSection";
import FooterSection from "../_front/_components/FooterSection";
import FrontNavbar from "../_front/_components/FrontNavbar";
import HeroSection from "../_front/_components/HeroSection";
import TestimonialSection from "../_front/_components/TestimonialSection";


export default function Page() {
  const pageTitle = { title: "Contact Us" };
  return (
    <div className="bg-gray-50">
      <FrontNavbar />
      <BannerSection pageTitle={pageTitle} />
      <ContactSection />
      <CallToAction />
      <FooterSection />
    </div>
  );
}
