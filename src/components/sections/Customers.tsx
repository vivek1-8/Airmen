'use client';

// ============================================
// Airmen Engineers — Client Section
// ============================================

import React, { useState } from 'react';
import Container from '@/components/common/Container';

const CLIENTS = [
  { name: 'Maruti Suzuki', domain: 'marutisuzuki.com' },
  { name: 'Hero', domain: 'heromotocorp.com' },
  { name: 'TAFE', domain: 'tafe.com' },
  { name: 'BKT', domain: 'bkt-tires.com' },
  { name: 'Amtek', domain: 'amtek.com' },
  { name: 'JRG Automotive', domain: 'jrg.co.in' },
  { name: 'Badve Engineering', domain: 'badvegroup.com' },
  { name: 'Sandhar', domain: 'sandhargroup.com' },
  { name: 'Sunbeam', domain: 'sunbeamauto.com' },
  { name: 'Motherson Sumi', domain: 'motherson.com' },
  { name: 'India Japan Lighting', domain: 'ijllight.com' },
  { name: 'YKK', domain: 'ykk.com' },
  { name: 'Musashi', domain: 'musashi.co.jp' },
  { name: 'Ahresty', domain: 'ahresty.co.jp' },
  { name: 'JTEKT', domain: 'jtekt.co.jp' },
  { name: 'Shiroki', domain: 'shiroki.co.jp' },
  { name: 'DID', domain: 'daidokogyo.co.jp' },
  { name: 'Allied Nippon', domain: 'alliednippon.com' },
  { name: 'Yachiyo', domain: 'yachiyo-ind.co.jp' },
  { name: 'Jain Cord', domain: 'jaincord.com' },
  { name: 'Ginni', domain: 'ginnifilaments.com' },
  { name: 'Saint-Gobain', domain: 'saint-gobain.com' },
  { name: 'AIS', domain: 'aisglass.com' },
  { name: 'Beam Suntory', domain: 'beamsuntory.com' },
  { name: 'Pernod Ricard', domain: 'pernod-ricard.com' },
  { name: 'Dabur', domain: 'dabur.com' },
  { name: 'Macawber', domain: 'macawberindia.com' },
  { name: 'Wonder Cement', domain: 'wondercement.com' },
  { name: 'Shree Cement', domain: 'shreecement.com' },
  { name: 'Metso', domain: 'metso.com' },
  { name: 'Spark Minda', domain: 'sparkminda.com' },
  { name: 'TVS', domain: 'tvsmotor.com' },
  { name: 'Rockman', domain: 'rockman.in' },
  { name: 'Mann Hummel', domain: 'mann-hummel.com' },
  { name: 'Havells', domain: 'havells.com' },
  { name: 'Hindustan Unilever', domain: 'hul.co.in' },
  { name: 'ITC Limited', domain: 'itcportal.com' },
  { name: 'Panasonic', domain: 'panasonic.com' },
  { name: 'Ashirvad Pipes', domain: 'ashirvad.com' }
];

function ClientLogo({ client }: { client: { name: string, domain: string } }) {
  const primaryUrl = `https://logo.clearbit.com/${client.domain}`;
  const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=ffffff&color=050B14&size=256&font-size=0.3&bold=true`;
  
  const [src, setSrc] = useState(primaryUrl);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={src}
      alt={`${client.name} Logo`}
      className={`max-w-[80%] max-h-[60%] object-contain transition-all duration-300 ${!hasError ? 'grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100' : ''}`}
      onError={() => {
        if (!hasError) {
          setSrc(fallbackUrl);
          setHasError(true);
        }
      }}
      loading="lazy"
    />
  );
}

export default function Customers() {
  return (
    <section className="py-20 bg-[#050B14] relative overflow-hidden" id="clients">
      {/* Subtle modern background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
            Client
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-3 md:gap-4">
          {CLIENTS.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group relative bg-white h-20 sm:h-24 rounded-lg flex items-center justify-center p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] animate-fade-in-up"
              style={{ animationDelay: `${(index % 10) * 0.05}s`, animationFillMode: 'both' }}
            >
              <ClientLogo client={client} />
            </div>
          ))}
          {/* Add one more blank block to make it an even 40 like the image */}
          <div className="group relative bg-white h-20 sm:h-24 rounded-lg flex items-center justify-center p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] animate-fade-in-up cursor-pointer" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <span className="text-xs font-bold text-navy text-center uppercase tracking-wider group-hover:text-gold transition-colors duration-300">
              MORE
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
