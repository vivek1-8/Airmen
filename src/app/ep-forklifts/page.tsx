// Airmen Engineers — EP Forklifts Page
import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import SpecificationTable from '@/components/products/SpecificationTable';
import { getProductsByBrand, BRANDS } from '@/data/products';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EP Forklifts — Material Handling Equipment',
  description: 'EP Equipment forklifts and material handling solutions. Lithium-ion electric forklifts, diesel forklifts, pallet trucks, stackers, and warehouse equipment.',
};

export default function EPForkliftsPage() {
  const products = getProductsByBrand('ep-forklifts');
  const brand = BRANDS.ep;

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'EP Forklifts' }]} />
      <section className="py-20 lg:py-28 bg-navy">
        <Container>
          <div className="max-w-3xl">
            <span className="overline mb-4 block">Material Handling</span>
            <h1 className="text-white mb-6">EP <span className="text-gold">Forklifts</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{brand.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" showArrow>Enquire Now</Button>
              {brand.website && (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:border-gold hover:text-gold transition-colors text-sm font-medium"
                >
                  Visit EP Equipment <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card-industrial p-6 flex flex-col">
                <div className="aspect-[4/3] bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden"> <img src="/images/banner-3.jpg" alt={product.name} className="w-full h-full object-cover" /> </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-2">{product.name}</h3>
                <p className="text-sm text-slate-custom flex-1 mb-4">{product.shortDescription}</p>
                {product.specifications.length > 0 && (
                  <div className="mb-4">
                    {product.specifications.map((s, i) => (
                      <div key={i} className="flex justify-between text-xs text-gray-500 py-1 border-b border-gray-50">
                        <span>{s.label}</span><span className="font-medium text-navy">{s.value} {s.unit}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-auto">
                  <Button href="/contact" size="sm" showArrow>Enquire</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-navy text-center">
        <Container>
          <h2 className="text-white mb-4">Need a Forklift Solution?</h2>
          <p className="text-gray-400 mb-8">Let us help you find the right EP forklift for your application.</p>
          <Button href="/contact" size="lg" showArrow>Contact Us</Button>
        </Container>
      </section>
    </>
  );
}
