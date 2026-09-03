// ============================================
// Airmen Engineers — Products Overview Page
// ============================================

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import { PRODUCT_CATEGORIES } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products — Complete Range of Industrial Solutions',
  description: 'Explore Airmen Engineers\' complete range: Kaeser screw compressors, AIM oil-free compressors, Hyundai forklifts, Legris Transair piping, WiseAir smart monitoring, and Greaves generators.',
};

// Map categories to available images
const CATEGORY_IMAGES: Record<string, string> = {
  'air-compressors': '/images/banner-1.jpg',
  'material-handling': '/images/banner-3.jpg',
  'compressed-air-piping': '/images/banner-2.jpg',
  'smart-monitoring': '/images/banner-4.jpg',
  'power-solutions': '/images/banner-5.jpg',
};

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumb items={[{ label: 'Products' }]} />

      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-2.jpg"
            alt="Industrial Solutions Background"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/40" />
        </div>
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="overline mb-6 block text-gold tracking-widest animate-fade-in-up">
            OUR PRODUCTS
          </span>
          <h1 className="text-white mb-6 text-4xl lg:text-6xl font-bold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Complete Range of<br />
            <span className="text-gold">Industrial Solutions</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            From advanced air compressors to smart monitoring and material handling equipment, we have the right solution for every industry.
          </p>
        </Container>
      </section>

      {/* Product Categories Grid */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PRODUCT_CATEGORIES.map((category, index) => {
              const imageSrc = CATEGORY_IMAGES[category.id] || '/images/banner-1.jpg';
              const firstBrandSlug = category.brands[0]?.slug || '#';

              return (
                <div
                  key={category.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={imageSrc}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-heading font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6 flex-1">
                      {category.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {category.brands.map((brand) => (
                        <span key={brand.id} className="text-xs bg-gray-50 text-gray-500 border border-gray-100 px-3 py-1.5 rounded-full font-medium shadow-sm">
                          {brand.name}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/${firstBrandSlug}`}
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gray-50 hover:bg-gold text-navy font-semibold px-6 py-3 rounded-lg border border-gray-200 hover:border-gold transition-all duration-300 group-hover:shadow-md"
                    >
                      VIEW PRODUCTS
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/banner-3.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-10 lg:p-14 rounded-3xl shadow-2xl">
            <h2 className="text-3xl lg:text-4xl text-white font-heading font-bold mb-6">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              Our experts are ready to help you find the perfect solution tailored to your exact industrial requirements.
            </p>
            <Button href="/contact" size="lg" className="px-10 py-4 text-sm tracking-widest uppercase shadow-lg shadow-gold/20" id="products-cta">
              TALK TO AN ENGINEER
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
