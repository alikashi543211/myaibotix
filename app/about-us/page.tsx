import { useState } from "react";
import BannerSection from "../_front/_components/BannerSection";
import CallToAction from "../_front/_components/CallToAction";
import FeatureSection from "../_front/_components/FeatureSection";
import FooterSection from "../_front/_components/FooterSection";
import FrontNavbar from "../_front/_components/FrontNavbar";
import HeroSection from "../_front/_components/HeroSection";
import TestimonialSection from "../_front/_components/TestimonialSection";
import AboutSection from "../_front/_components/AboutSection";


export default function About() {
    const pageTitle = { title: "About Us" };
  return (
    <div className="bg-gray-50">
      <FrontNavbar />
      <BannerSection pageTitle={pageTitle} />
      <AboutSection />
      <CallToAction />
      <FooterSection />
    </div>
  );
}
