// Airmen Engineers — Hyundai Page
import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import SpecificationTable from '@/components/products/SpecificationTable';
import { getProductsByBrand, BRANDS } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hyundai Forklifts — Material Handling Equipment',
  description: 'Authorized Hyundai Material Handling dealer. Electric forklifts (up to 5 ton), diesel forklifts (up to 40 ton), and LPG forklifts for all industrial needs.',
};

export default function HyundaiPage() {
  const products = getProductsByBrand('hyundai');
  const brand = BRANDS.hyundai;

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'Hyundai' }]} />
      <section className="py-20 lg:py-28 bg-navy">
        <Container>
          <div className="max-w-3xl">
            <span className="overline mb-4 block">Material Handling</span>
            <h1 className="text-white mb-6">Hyundai <span className="text-gold">Forklifts</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{brand.description}</p>
            <Button href="/contact" showArrow>Enquire Now</Button>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card-industrial p-6 flex flex-col">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy/5 to-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl font-heading font-bold text-navy/20">{product.name.split(' ')[0]}</span>
                </div>
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
                <Button href="/contact" size="sm" showArrow>Enquire</Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-navy text-center">
        <Container>
          <h2 className="text-white mb-4">Need a Forklift Solution?</h2>
          <p className="text-gray-400 mb-8">Let us help you find the right Hyundai forklift.</p>
          <Button href="/contact" size="lg" showArrow>Contact Us</Button>
        </Container>
      </section>
    </>
  );
}
