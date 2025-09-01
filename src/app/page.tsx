'use client';

import {
  Navigation,
  HeroSection,
  ServicesSection,
  DetailedServicesSection,
  FeaturesSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
  Footer,
  FloatingContactButton
} from '../components';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <DetailedServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
