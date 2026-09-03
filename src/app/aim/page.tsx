// ============================================
// Airmen Engineers — AIM Page
// ============================================

import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import SpecificationTable from '@/components/products/SpecificationTable';
import { getProductsByBrand, BRANDS } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AIM Compressors — Reciprocating & Oil-Free Scroll',
  description: 'Authorized AIM (Anest Iwata Motherson) dealer. Lubricated reciprocating, oil-free reciprocating with CMF technology, and ultra-quiet oil-free scroll compressors.',
};

export default function AIMPage() {
  const products = getProductsByBrand('aim');
  const brand = BRANDS.aim;

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'AIM' }]} />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy">
        <Container>
          <div className="max-w-3xl">
            <span className="overline mb-4 block">Air Compressors</span>
            <h1 className="text-white mb-6">AIM <span className="text-gold">Compressors</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{brand.description}</p>
            <Button href="/contact" showArrow>Enquire Now</Button>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-16">
            {products.map((product) => (
              <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pb-16 border-b border-gray-100 last:border-0">
                <div>
                  <h2 className="text-navy mb-4">{product.name}</h2>
                  <p className="text-slate-custom leading-relaxed mb-6">{product.description}</p>
                  {product.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {product.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-custom">
                          <ArrowRight className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button href="/contact" size="sm" showArrow>Enquire</Button>
                </div>
                <SpecificationTable specs={product.specifications} title="Technical Specifications" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-navy text-center">
        <Container>
          <h2 className="text-white mb-4">Need an AIM Compressor?</h2>
          <p className="text-gray-400 mb-8">Contact our team for pricing and availability.</p>
          <Button href="/contact" size="lg" showArrow>Contact Us</Button>
        </Container>
      </section>
    </>
  );
}
