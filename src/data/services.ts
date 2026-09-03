// ============================================
// Airmen Engineers — Services Data
// ============================================

import { Service } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'after-sales-support',
    name: 'After Sales Support',
    slug: 'after-sales-support',
    description: 'An effective team comprising of sales, service and administrative staff have functioned well to give this organization a good customer base. We stock many spare parts and those we don\'t stock can be quickly ordered for fast deliveries.',
    shortDescription: 'Comprehensive service and technical support from our experienced engineering team.',
    icon: 'Headphones',
    features: [
      'Dedicated service team',
      'Quick spare parts supply',
      'On-site technical support',
      'Remote diagnostics',
    ],
  },
  {
    id: 'preventive-maintenance',
    name: 'Preventive Maintenance',
    slug: 'preventive-maintenance',
    description: 'Preventive and predictive maintenance is the key to lower operating costs. A compressor requires regular scheduled maintenance which ensures optimum utilization and efficient operation, giving sufficient lead time to procure spare parts, thus avoiding down time and production losses.',
    shortDescription: 'Regular scheduled maintenance for optimum utilization and efficient operation.',
    icon: 'Settings',
    features: [
      'Scheduled maintenance plans',
      'Performance monitoring',
      'Wear parts replacement',
      'Downtime prevention',
    ],
  },
  {
    id: 'annual-maintenance-contract',
    name: 'Annual Maintenance Contract',
    slug: 'annual-maintenance-contract',
    description: 'Comprehensive Annual Service Contracts (ASC) covering periodic and preventive maintenance for your equipment. With our specialized service experience of 29+ years and prompt supply of spare parts, our motive is to pass utmost advantage to our valued customers.',
    shortDescription: 'Comprehensive annual contracts covering periodic and preventive maintenance.',
    icon: 'FileCheck',
    features: [
      'Periodic service visits',
      'Priority support',
      'Discounted spare parts',
      '29+ years service experience',
    ],
  },
  {
    id: 'spare-parts',
    name: 'Spare Parts',
    slug: 'spare-parts',
    description: 'Genuine spare parts for all major brands in our portfolio. We stock critical spare parts and those we don\'t stock can be quickly ordered for fast deliveries, minimizing equipment downtime.',
    shortDescription: 'Genuine spare parts with fast delivery for all major equipment brands.',
    icon: 'Cog',
    features: [
      'Genuine manufacturer parts',
      'Critical parts in stock',
      'Fast ordering & delivery',
      'Competitive pricing',
    ],
  },
  {
    id: 'energy-audit',
    name: 'Energy Audit',
    slug: 'energy-audit',
    description: 'Specialized energy audits for compressed air systems to identify inefficiencies, optimize performance, and reduce energy consumption. Our experienced team helps you achieve significant cost savings.',
    shortDescription: 'Comprehensive energy audits to optimize compressed air system performance.',
    icon: 'BarChart3',
    features: [
      'Compressed air system analysis',
      'Efficiency optimization',
      'Cost reduction strategies',
      'Detailed audit reports',
    ],
  },
  {
    id: 'compressor-rental',
    name: 'Compressor Rental',
    slug: 'compressor-rental',
    description: 'Rental air compressors in the range of 10 HP to 75 HP for both short-term and long-term requirements. Our rental units provide oil-free and moisture-free compressed air, ideal for emergency backup or temporary project needs.',
    shortDescription: 'Rental compressors (10-75 HP) for short-term and long-term needs.',
    icon: 'RefreshCw',
    features: [
      '10 HP to 75 HP range',
      'Oil-free, moisture-free air',
      'Short-term & long-term rental',
      'Emergency backup available',
      'Maintenance included',
    ],
  },
  {
    id: 'technical-support',
    name: 'Technical Support',
    slug: 'technical-support',
    description: 'Expert technical support from our experienced engineering team for troubleshooting, system optimization, and equipment commissioning.',
    shortDescription: 'Expert technical support for troubleshooting and system optimization.',
    icon: 'Wrench',
    features: [
      'Expert troubleshooting',
      'System optimization',
      'Equipment commissioning',
      'Training & guidance',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
