// Airmen Engineers — WiseAir Page
import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import SpecificationTable from '@/components/products/SpecificationTable';
import { getProductsByBrand, BRANDS } from '@/data/products';
import { Activity, Wifi, BarChart3, Shield, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'WiseAir — Smart Compressed Air Monitoring (IIoT)',
  description: 'WiseAir 4.0 IIoT smart monitoring for compressed air systems. WAFS sensors, AI-driven analytics, real-time dashboards. Up to 30% energy savings.',
};

export default function WiseAirPage() {
  const products = getProductsByBrand('wise-air');
  const brand = BRANDS.wiseair;

  const features = [
    { icon: Activity, title: 'Real-Time Monitoring', desc: 'Continuous flow, pressure, power, and dew point measurement.' },
    { icon: Wifi, title: 'Cloud Analytics', desc: 'AI-driven cloud platform for data analysis and optimization.' },
    { icon: BarChart3, title: 'Energy Savings', desc: 'Achieve up to 30% energy savings with smart optimization.' },
    { icon: Shield, title: 'Predictive Maintenance', desc: 'Early fault detection and automated maintenance alerts.' },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'WiseAir' }]} />
      <section className="py-20 lg:py-28 bg-navy">
        <Container>
          <div className="max-w-3xl">
            <span className="overline mb-4 block">Smart Monitoring</span>
            <h1 className="text-white mb-6">WiseAir <span className="text-gold">4.0</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{brand.description}</p>
            <Button href="/contact" showArrow>Request a Demo</Button>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-industrial p-6 text-center">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-base font-heading font-semibold text-navy mb-2">{title}</h3>
                <p className="text-sm text-slate-custom">{desc}</p>
              </div>
            ))}
          </div>

          {/* Products */}
          {products.map((product) => (
            <div key={product.id} className="mb-12 last:mb-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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
                <Button href="/contact" size="sm" showArrow>Enquire</Button>
              </div>
              <SpecificationTable specs={product.specifications} title="Technical Specifications" />
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 bg-navy text-center">
        <Container>
          <h2 className="text-white mb-4">Optimize Your Compressed Air System</h2>
          <p className="text-gray-400 mb-8">Achieve up to 30% energy savings with WiseAir smart monitoring.</p>
          <Button href="/contact" size="lg" showArrow>Contact Us</Button>
        </Container>
      </section>
    </>
  );
}
