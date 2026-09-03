'use client';

// ============================================
// Airmen Engineers — Core Solutions Section
// ============================================

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Wind, Truck, GitBranch, Activity, BatteryCharging, ArrowRight } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { PRODUCT_CATEGORIES } from '@/data/products';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind, Truck, GitBranch, Activity, BatteryCharging,
};

// Map categories to our downloaded images
const CATEGORY_IMAGES: Record<string, string> = {
  'air-compressors': '/images/banner-1.jpg',
  'material-handling': '/images/banner-3.jpg',
  'compressed-air-piping': '/images/banner-2.jpg',
  'smart-monitoring': '/images/banner-2.jpg', // Using banner 2 as a fallback
  'power-solutions': '/images/banner-4.jpg',
};

export default function Solutions() {
  return (
    <section className="section-padding bg-gray-50" id="solutions">
      <Container>
        <SectionHeading
          overline="What We Offer"
          title="Complete Industrial Solutions"
          subtitle="From compressed air to material handling, smart monitoring to power generation — we provide end-to-end engineering solutions for your industry."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <SolutionCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function SolutionCard({ category, index }: { category: typeof PRODUCT_CATEGORIES[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const IconComponent = ICON_MAP[category.icon] || Wind;
  const brandNames = category.brands.map((b) => b.name).join(' • ');
  const firstBrandSlug = category.brands[0]?.slug || '/products';
  const imageUrl = CATEGORY_IMAGES[category.id] || '/images/banner-1.jpg';

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      className="card-3d h-[400px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link href={`/${firstBrandSlug}`} className="block h-full">
        <div
          className="relative rounded-2xl overflow-hidden h-full group shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={imageUrl}
              alt={category.name}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy via-navy/80 to-navy/10 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Content */}
          <div className="relative z-20 h-full p-6 flex flex-col justify-end">
            <div className="w-14 h-14 bg-gold/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-auto mt-2 transition-transform duration-500 group-hover:-translate-y-2">
              <IconComponent className="w-7 h-7 text-gold" />
            </div>

            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                {category.description}
              </p>
              <p className="text-xs text-gold font-medium mb-4">{brandNames}</p>

              <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-gold transition-colors">
                Explore
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
