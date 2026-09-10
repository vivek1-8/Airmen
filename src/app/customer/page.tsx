import type { Metadata } from 'next';
import Image from 'next/image';
import { Car, Building2, Factory, Component, Droplets, Truck, Briefcase } from 'lucide-react';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import Customers from '@/components/sections/Customers';

export const metadata: Metadata = {
  title: 'Our Customers — Trusted by Leading Industries',
  description: 'Airmen Engineers serves 5000+ customers across Automobile, Japanese, Textile, Glass, Beverage, Cement, and other industries.',
};

const CATEGORIES = [
  { name: 'Automobile', count: 'Multiple leading OEMs & suppliers', icon: Car },
  { name: 'Japanese', count: 'Japanese manufacturing in India', icon: Building2 },
  { name: 'Textile', count: 'Major textile manufacturers', icon: Factory },
  { name: 'Glass', count: 'Including Asahi Glass India', icon: Component },
  { name: 'Beverage', count: 'Beverage production companies', icon: Droplets },
  { name: 'Cement', count: 'Leading cement manufacturers', icon: Truck },
  { name: 'Others', count: 'Pharmaceutical, electronics & more', icon: Briefcase },
];

export default function CustomerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumb items={[{ label: 'Customers' }]} />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-4.jpg"
            alt="Customers Background"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/40" />
        </div>
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="overline mb-6 block text-gold tracking-widest animate-fade-in-up">
            OUR CUSTOMERS
          </span>
          <h1 className="text-white mb-6 text-4xl lg:text-6xl font-bold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Trusted by <span className="text-gold">Leading Industries</span>
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Airmen Engineers are proud suppliers of Kaeser Compressors & EP Forklifts, serving over 5,000+ customers across diverse industrial sectors.
          </p>
        </Container>
      </section>

      {/* Client Logo Grid (Reused from Home Page) */}
      <div className="bg-navy">
        <Customers />
      </div>

      {/* Industries Grid */}
      <section className="section-padding bg-white relative">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="overline mb-4 block text-gold">BY INDUSTRY</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-6">
              Sectors We Empower
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {CATEGORIES.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={cat.name} 
                  className="group bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:bg-navy transition-colors duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gold/10 group-hover:bg-gold rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                    <Icon className="w-7 h-7 text-gold group-hover:text-navy transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">
                    {cat.name}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
                    {cat.count}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-gray-400 mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            The logos and trademarks used are properties of their respective owners and used only for reference.
          </p>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/banner-1.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-10 lg:p-14 rounded-3xl shadow-2xl">
            <h2 className="text-3xl lg:text-4xl text-white font-heading font-bold mb-6">
              Join Our Growing Customer Base
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              Get in touch with our engineering team for a customized industrial solution designed for your specific requirements.
            </p>
            <Button href="/contact" size="lg" className="px-10 py-4 text-sm tracking-widest uppercase shadow-lg shadow-gold/20" id="customers-cta">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
