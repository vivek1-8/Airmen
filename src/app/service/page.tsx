import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Headphones, Settings, Wrench, Zap, Package, Activity } from 'lucide-react';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';

export const metadata: Metadata = {
  title: 'Services & Technical After Sales Support',
  description: 'Complete service support: after-sales, preventive maintenance, AMC, spare parts, energy audits, compressor rental, and technical support. 29+ years experience.',
};

export default function ServicePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumb items={[{ label: 'Services' }]} />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-3.jpg"
            alt="Service & Support Background"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/40" />
        </div>
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="overline mb-6 block text-gold tracking-widest animate-fade-in-up">
            SUPPORT & MAINTENANCE
          </span>
          <h1 className="text-white mb-6 text-4xl lg:text-6xl font-bold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Service & Technical <br className="hidden md:block" />
            <span className="text-gold">After Sales Support</span>
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            An effective team comprising of sales, service and administrative staff have functioned well to give this organization a good customer base.
          </p>
        </Container>
      </section>

      {/* Key Content Blocks */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up lg:order-last">
              <Image src="/images/about-2.jpg" alt="Spare Parts Stock" fill className="object-cover" />
              <div className="absolute inset-0 bg-navy/10" />
            </div>
            <div className="animate-fade-in-up lg:order-first" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Fast & Reliable Spare Parts</h2>
              <p className="text-lg text-slate-custom leading-relaxed mb-6">
                We stock many spare parts and those we don&apos;t stock can be quickly ordered for fast deliveries. With our specialized service experience of 29 years and prompt supply of spare parts, our motive is to pass utmost advantage to our valued customer.
              </p>
              <ul className="space-y-4">
                {['Genuine OEM Parts', 'Extensive Local Inventory', 'Rapid Dispatch & Delivery'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-navy font-medium">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
              <Image src="/images/banner-1.jpg" alt="Preventive Maintenance" fill className="object-cover" />
              <div className="absolute inset-0 bg-navy/10" />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">The Importance of Maintenance</h2>
              <p className="text-lg text-slate-custom leading-relaxed">
                As you are aware that preventive and predictive maintenance is the key to lower operating costs, a Compressor requires regular scheduled maintenance which not only ensures optimum utilization and efficient operation but also gives sufficient lead time to procure the spare parts thus avoiding down time and production losses.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Cards */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/banner-4.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Our After Sales Range
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Wrench className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Periodic Maintenance</h3>
              <p className="text-gray-300 leading-relaxed">
                On-call service and scheduled periodic maintenance to keep your equipment running flawlessly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Activity className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Annual Service Contract (ASC)</h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive yearly contracts for total peace of mind, minimizing downtime and optimizing costs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Energy Audits</h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized energy audits for Compressed Air systems to identify waste and maximize efficiency.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 bg-white text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <Headphones className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-4xl lg:text-5xl text-navy font-heading font-bold mb-6">
              Have a query in mind? <span className="text-gold">Let&apos;s talk.</span>
            </h2>
            <p className="text-slate-custom text-lg mb-10 max-w-xl mx-auto">
              Our service engineering team is ready to assist you with maintenance, spare parts, and technical support.
            </p>
            <Button href="/contact" size="lg" className="px-12 py-4 text-sm tracking-widest uppercase shadow-xl shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1 transition-all duration-300" id="services-contact-btn">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
