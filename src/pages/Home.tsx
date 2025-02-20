import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/sections/Testimonials";

import PricingSection from "@/components/sections/Pricing";
import WhyChooseUs from "@/components/sections/WhyUs";
import CTADemoSection from "@/components/sections/Cta";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <PricingSection/>
      <CTADemoSection/>
      <WhyChooseUs/> 
      <Testimonials/>
      <Footer/>
    </main>
  );
}