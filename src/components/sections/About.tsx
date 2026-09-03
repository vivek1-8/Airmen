'use client';

// ============================================
// Airmen Engineers — About Section (Home)
// ============================================

import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { COMPANY_STATS, COMPANY_DESCRIPTION } from '@/data/company';

export default function About() {
  return (
    <section className="section-padding bg-gray-50" id="about-preview">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            <SectionHeading
              overline="About Airmen Engineers"
              title="Engineering Trust Since 1996"
              subtitle={COMPANY_DESCRIPTION}
            />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {COMPANY_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:border-gold/30 hover:shadow-md transition-all"
                >
                  <span className="text-2xl md:text-3xl font-heading font-bold text-gold block">
                    {stat.value}
                    {stat.suffix && <span className="text-lg">{stat.suffix}</span>}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 block uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Button href="/about-us" variant="secondary" showArrow id="about-cta">
              Know More About Us
            </Button>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/9] relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/images/about-1.jpg"
                  alt="Airmen Engineers Facility"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/images/about-2.jpg"
                  alt="Airmen Engineers Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/images/about-3.jpg"
                  alt="Airmen Engineers Workshop"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-navy/5 rounded-2xl -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
