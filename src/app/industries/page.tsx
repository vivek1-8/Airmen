// Airmen Engineers — Industries Page
import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { INDUSTRIES } from '@/data/industries';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Airmen Engineers serves Automobile, Textile, Glass, Beverage, Cement, Pharmaceutical, Electronics, and Manufacturing industries with compressed air and material handling solutions.',
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Industries' }]} />
      <section className="py-20 lg:py-28 bg-navy">
        <Container>
          <div className="max-w-3xl">
            <span className="overline mb-4 block">Industries</span>
            <h1 className="text-white mb-6">Powering Diverse <span className="text-gold">Industries</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              From automotive to pharmaceutical, our solutions support critical operations across India&apos;s leading industrial sectors.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-8">
            {INDUSTRIES.map((industry) => (
              <div key={industry.id} id={industry.slug} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 scroll-mt-24">
                <h2 className="text-2xl font-heading font-semibold text-navy mb-3">{industry.name}</h2>
                <p className="text-slate-custom mb-6 max-w-2xl">{industry.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" size="sm" showArrow>Enquire for {industry.name}</Button>
                  <Button href="/products" variant="ghost" size="sm">View Related Products</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
