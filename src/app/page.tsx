// ============================================
// Airmen Engineers — Home Page
// ============================================

import Hero from '@/components/sections/Hero';
import Brands from '@/components/sections/Brands';
import Solutions from '@/components/sections/Solutions';
import About from '@/components/sections/About';
import WhyAirmen from '@/components/sections/WhyAirmen';
import Customers from '@/components/sections/Customers';
import BlogPreview from '@/components/sections/BlogPreview';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <Solutions />
      <About />
      <WhyAirmen />
      <Customers />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
