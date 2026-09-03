// Airmen Engineers — Legris Transair Page
import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import { getProductsByBrand, BRANDS } from '@/data/products';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legris Transair — Compressed Air Piping Systems',
  description: 'Parker Legris Transair push-to-connect aluminium and stainless steel compressed air piping systems. 4x faster installation. Corrosion-resistant. Modular.',
};

export default function LegrisPage() {
  const products = getProductsByBrand('legris');
  const brand = BRANDS.legris;

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'Legris Transair' }]} />
      <section className="py-20 lg:py-28 bg-navy">
        <Container>
          <div className="max-w-3xl">
            <span className="overline mb-4 block">Compressed Air Piping</span>
            <h1 className="text-white mb-6">Legris <span className="text-gold">Transair</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{brand.description}</p>
            <Button href="/contact" showArrow>Enquire Now</Button>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-12">
            {products.map((product) => (
              <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pb-12 border-b border-gray-100 last:border-0">
                <div>
                  <h2 className="text-navy mb-4">{product.name}</h2>
                  <p className="text-slate-custom leading-relaxed mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-custom">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" size="sm" showArrow>Enquire</Button>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl font-heading font-bold text-navy/10">Transair</span>
                    <p className="text-sm text-gray-400 mt-2">{product.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-navy text-center">
        <Container>
          <h2 className="text-white mb-4">Need a Piping Solution?</h2>
          <p className="text-gray-400 mb-8">Contact us for Transair system design and installation.</p>
          <Button href="/contact" size="lg" showArrow>Contact Us</Button>
        </Container>
      </section>
    </>
  );
}
