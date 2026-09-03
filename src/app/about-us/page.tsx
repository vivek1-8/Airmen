// ============================================
// Airmen Engineers — About Us Page
// ============================================

import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { COMPANY_DESCRIPTION, COMPANY_STATS, COMPANY_TIMELINE, WHY_AIRMEN, MISSION, VISION } from '@/data/company';
import { Award, Handshake, Wrench, Headphones, Zap, Clock, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Airmen Engineers — India\'s trusted industrial air compressor and material handling solutions provider since 1996. 29+ years of engineering excellence.',
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Award, Handshake, Wrench, HeadsetIcon: Headphones, Zap, Clock,
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-20 right-40 w-96 h-96 border border-gold/30 rounded-full" />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <span className="overline mb-4 block">About Airmen Engineers</span>
              <h1 className="text-white mb-6">
                Engineering Trust.<br />
                <span className="text-gold">Building Industry.</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {COMPANY_DESCRIPTION}
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 mt-8">
                  <Image
                    src="/images/about-2.jpg"
                    alt="Airmen Engineers Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/about-3.jpg"
                    alt="Airmen Engineers Office"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/5 rounded-full -z-10 blur-xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-4xl md:text-5xl font-heading font-bold text-gold">
                  {stat.value}{stat.suffix}
                </span>
                <span className="block text-sm text-gray-500 mt-2 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/about-2.jpg" alt="Our Mission" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">Our Mission</h3>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {MISSION.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-slate-custom leading-relaxed text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/about-3.jpg" alt="Our Vision" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center shadow-lg">
                    <Eye className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">Our Vision</h3>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {VISION.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-slate-custom leading-relaxed text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            overline="Our Journey"
            title="Growing Together Since 1996"
            align="center"
          />
          <div className="relative max-w-3xl mx-auto">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />

            {COMPANY_TIMELINE.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full border-2 border-white shadow-md -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <span className="text-2xl font-heading font-bold text-gold">{event.year}</span>
                  <h4 className="text-lg font-heading font-semibold text-navy mt-1">{event.title}</h4>
                  <p className="text-sm text-slate-custom mt-1">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Airmen */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading
            overline="Why Choose Us"
            title="Built on Experience. Driven by Excellence."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_AIRMEN.map((feature) => {
              const IconComponent = ICON_MAP[feature.icon] || Award;
              return (
                <div key={feature.title} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gold/30 transition-all hover:shadow-md">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-custom">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <Container>
          <div className="text-center">
            <h2 className="text-white mb-4">Partner With <span className="text-gold">Airmen Engineers</span></h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Let our engineering team help you find the right industrial solution for your business.
            </p>
            <Button href="/contact" size="lg" showArrow>Get in Touch</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
