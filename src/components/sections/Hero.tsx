'use client';

// ============================================
// Airmen Engineers — Hero Section
// ============================================

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

const HERO_IMAGES = [
  { url: '/images/banner-1.jpg', alt: 'Kaeser Compressors' },
  { url: '/images/banner-2.jpg', alt: 'Industrial Solutions' },
  { url: '/images/banner-3.jpg', alt: 'Hyundai Forklifts' },
  { url: '/images/banner-4.jpg', alt: 'Greaves Power' },
  { url: '/images/banner-5.jpg', alt: 'AIM Compressors' }
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Background Image Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax Scroll Effect
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const textEl = section.querySelector('.hero-text') as HTMLElement;
      if (textEl) {
        textEl.style.transform = `translateY(${scrollY * 0.3}px)`;
        textEl.style.opacity = `${1 - scrollY / 600}`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-navy"
      id="hero"
    >
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={img.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ transitionProperty: 'opacity, transform', transitionDuration: '2s' }}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-navy/90 via-navy/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-white to-transparent" />



      {/* Slider Indicators */}
      <div className="absolute bottom-16 right-10 z-[2] flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-gold scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] hidden lg:flex flex-col items-center gap-2 animate-float">
        <span className="text-[10px] text-white/70 uppercase tracking-[0.3em] font-semibold">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center pt-1 bg-navy/20 backdrop-blur-sm">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
