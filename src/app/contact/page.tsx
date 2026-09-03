'use client';

// Airmen Engineers — Contact Page
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_NUMBER } from '@/data/company';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { enquirySchema, EnquiryFormValues, REQUIREMENT_OPTIONS } from '@/lib/validations';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (res.ok) setSubmitted(true);
    } catch { /* handled by UI */ }
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Contact Us' }]} />
      <section className="py-20 lg:py-28 bg-navy">
        <Container>
          <div className="max-w-3xl">
            <span className="overline mb-4 block">Get in Touch</span>
            <h1 className="text-white mb-6">We&apos;re Here to <span className="text-gold">Help</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Have a question about our products, need service support, or want to request a quote? 
              Reach out to our engineering team today.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 hidden lg:block" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-12 pr-0 lg:pr-8">
              <div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-6">Contact Information</h3>
                
                {/* Registered Office */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Registered Office</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-slate-custom">{CONTACT_INFO.registeredOffice.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        {CONTACT_INFO.registeredOffice.phone.map((p) => (
                          <a key={p} href={`tel:${p.replace(/[^+\d]/g, '')}`} className="text-slate-custom hover:text-gold transition-colors">{p}</a>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        {CONTACT_INFO.registeredOffice.email.map((e) => (
                          <a key={e} href={`mailto:${e}`} className="text-slate-custom hover:text-gold transition-colors">{e}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Head Office */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Head Office</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-slate-custom">{CONTACT_INFO.headOffice.address}</span>
                    </div>
                  </div>
                </div>

                {/* Service Enquiry */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Service Enquiry</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        {CONTACT_INFO.serviceEnquiry.phone.map((p) => (
                          <a key={p} href={`tel:${p.replace(/[^+\d]/g, '')}`} className="text-slate-custom hover:text-gold transition-colors">{p}</a>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        {CONTACT_INFO.serviceEnquiry.email.map((e) => (
                          <a key={e} href={`mailto:${e}`} className="text-slate-custom hover:text-gold transition-colors">{e}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl shadow-navy/5">
                <SectionHeading overline="Send a Message" title="Request a Quote" className="mb-8" />
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-heading font-semibold text-navy mb-2">Message Sent Successfully!</h4>
                    <p className="text-slate-custom">Thank you for contacting Airmen Engineers. Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <input type="text" className="hidden" {...register('honeypot')} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">Full Name</label>
                        <input type="text" {...register('name')} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="John Doe" />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">Company Name</label>
                        <input type="text" {...register('company')} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="Company Ltd." />
                        {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">Email Address</label>
                        <input type="email" {...register('email')} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="john@company.com" />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">Phone Number</label>
                        <input type="tel" {...register('phone')} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="+91 98765 43210" />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Requirement Type</label>
                      <select {...register('requirementType')} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all">
                        {REQUIREMENT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Your Message</label>
                      <textarea {...register('message')} rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none transition-all" placeholder="Please describe your requirements in detail..." />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-gold text-navy font-heading font-semibold py-4 rounded-lg hover:bg-gold-dark transition-colors disabled:opacity-50 uppercase tracking-wide text-sm mt-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <div className="h-[400px] w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.423719888957!2d77.1084!3d28.7368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ0JzEyLjUiTiA3N8KwMDYnMzAuMiJF!5e0!3m2!1sen!2sin!4v1628100000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          title="Airmen Engineers Location"
        />
      </div>
    </>
  );
}
