// ============================================
// Airmen Engineers — Kaeser Page
// ============================================

import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import SpecificationTable from '@/components/products/SpecificationTable';
import { getProductsByBrand, BRANDS } from '@/data/products';
import { Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kaeser Compressors — Screw Air Compressors',
  description: 'Authorized Kaeser dealer in India. Energy-efficient rotary screw air compressors with SIGMA PROFILE technology, SFC variable speed, SIGMA PET systems. 2.2-515 kW.',
};

export default function KaeserPage() {
  const products = getProductsByBrand('kaeser');
  const brand = BRANDS.kaeser;

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'Kaeser' }]} />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 border border-gold rounded-full" />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="overline mb-4 block">Air Compressors</span>
              <h1 className="text-white mb-6">
                Kaeser<br />
                <span className="text-gold">Kompressoren</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {brand.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" showArrow>Enquire Now</Button>
                <Button variant="dark" href="#products">View Products</Button>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-navy-light to-charcoal rounded-2xl flex items-center justify-center border border-white/5">
              <div className="text-center">
                <span className="text-7xl font-heading font-bold text-gold/30">K</span>
                <p className="text-gray-500 text-sm mt-2">Kaeser Kompressoren</p>
                <p className="text-gold text-xs mt-1">Germany</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="section-padding bg-white" id="products">
        <Container>
          {products.map((product) => (
            <div key={product.id} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-navy mb-4">{product.name}</h2>
                  <p className="text-slate-custom leading-relaxed mb-6">{product.description}</p>

                  {/* Features */}
                  {product.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-custom">
                            <ArrowRight className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button href="/contact" size="sm" showArrow>Enquire</Button>
                    {product.brochureUrl && (
                      <a
                        href={product.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy border-2 border-gray-200 rounded-lg hover:border-gold hover:text-gold transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Catalogue
                      </a>
                    )}
                  </div>
                </div>
                <div>
                  <SpecificationTable specs={product.specifications} title="Technical Specifications" />
                </div>
              </div>
              <hr className="mt-12 border-gray-100" />
            </div>
          ))}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <Container>
          <h2 className="text-white mb-4">Have a Query About Kaeser Products?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Our engineering team will help you select the right Kaeser compressor for your application.
          </p>
          <Button href="/contact" size="lg" showArrow>Contact Us</Button>
        </Container>
      </section>
    </>
  );
}
