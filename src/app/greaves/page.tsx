// Airmen Engineers — Greaves Page
import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import SpecificationTable from '@/components/products/SpecificationTable';
import { getProductsByBrand, BRANDS } from '@/data/products';
import { ArrowRight, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Greaves — Power Solutions & Generator Sets',
  description: 'Greaves Cotton high-performance generator sets 5kVA-1250kVA with Genius smart monitoring. Up to 5-year warranty. 24-hour service.',
};

export default function GreavesPage() {
  const products = getProductsByBrand('greaves');
  const brand = BRANDS.greaves;

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'Greaves' }]} />
      <section className="py-20 lg:py-28 bg-navy">
        <Container>
          <div className="max-w-3xl">
            <span className="overline mb-4 block">Power Solutions</span>
            <h1 className="text-white mb-6">Greaves <span className="text-gold">Cotton</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{brand.description}</p>
            <Button href="/contact" showArrow>Enquire Now</Button>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          {products.map((product) => (
            <div key={product.id} className="mb-16 last:mb-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-navy mb-4">{product.name}</h2>
                <p className="text-slate-custom leading-relaxed mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-custom">
                      <ArrowRight className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact" size="sm" showArrow>Enquire</Button>
                  {product.brochureUrl && (
                    <a href={product.brochureUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy border-2 border-gray-200 rounded-lg hover:border-gold hover:text-gold transition-colors">
                      <Download className="w-4 h-4" /> Catalogue
                    </a>
                  )}
                </div>
              </div>
              <SpecificationTable specs={product.specifications} title="Specifications" />
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 bg-navy text-center">
        <Container>
          <h2 className="text-white mb-4">Need a Power Solution?</h2>
          <p className="text-gray-400 mb-8">Contact us for Greaves generator sets and smart monitoring.</p>
          <Button href="/contact" size="lg" showArrow>Contact Us</Button>
        </Container>
      </section>
    </>
  );
}
