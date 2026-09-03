// ============================================
// Airmen Engineers — Products & Brands Data
// ============================================

import { Brand, Product, ProductCategoryInfo } from '@/types';

// ── Brands ──────────────────────────────────
export const BRANDS: Record<string, Brand> = {
  kaeser: {
    id: 'kaeser',
    name: 'Kaeser',
    slug: 'kaeser',
    description: 'World-class German engineering. KAESER Kompressoren delivers energy-efficient rotary screw air compressors with the renowned SIGMA PROFILE technology.',
    country: 'Germany',
    website: 'https://www.kaeser.com',
  },
  aim: {
    id: 'aim',
    name: 'AIM',
    slug: 'aim',
    description: 'Anest Iwata Motherson (AIM) — A joint venture between Anest Iwata (Japan) and Sumi Motherson Group, manufacturing high-quality reciprocating and scroll air compressors in India.',
    country: 'India / Japan',
  },
  hyundai: {
    id: 'hyundai',
    name: 'Hyundai',
    slug: 'hyundai',
    description: 'Hyundai Material Handling delivers robust, reliable forklifts and material handling equipment for diverse industrial applications.',
    country: 'South Korea',
  },
  legris: {
    id: 'legris',
    name: 'Legris Transair',
    slug: 'legris',
    description: 'Parker Legris Transair — The world leader in quick-connect aluminium and stainless steel compressed air piping systems.',
    country: 'France',
  },
  wiseair: {
    id: 'wiseair',
    name: 'WiseAir',
    slug: 'wise-air',
    description: 'WiseAir provides Industrial IoT (IIoT) smart monitoring solutions for compressed air systems — sensors, analytics, and AI-driven optimization.',
    country: 'India',
  },
  greaves: {
    id: 'greaves',
    name: 'Greaves',
    slug: 'greaves',
    description: 'Greaves Cotton — A diversified engineering company with 162+ years of heritage, manufacturing high-performance generator sets and Cleantech solutions.',
    country: 'India',
  },
};

export const BRAND_LIST = Object.values(BRANDS);

// ── Product Categories ──────────────────────
export const PRODUCT_CATEGORIES: ProductCategoryInfo[] = [
  {
    id: 'air-compressors',
    name: 'Air Compressors',
    slug: 'air-compressors',
    description: 'Reliable, energy-efficient compressed air solutions from world-leading manufacturers.',
    icon: 'Wind',
    brands: [BRANDS.kaeser, BRANDS.aim],
  },
  {
    id: 'material-handling',
    name: 'Material Handling',
    slug: 'material-handling',
    description: 'Forklifts and material handling equipment for every industrial application.',
    icon: 'Truck',
    brands: [BRANDS.hyundai],
  },
  {
    id: 'compressed-air-piping',
    name: 'Compressed Air Piping',
    slug: 'compressed-air-piping',
    description: 'Quick-connect aluminium and stainless steel piping systems for compressed air distribution.',
    icon: 'GitBranch',
    brands: [BRANDS.legris],
  },
  {
    id: 'smart-monitoring',
    name: 'Smart Air Monitoring',
    slug: 'smart-monitoring',
    description: 'IIoT sensors, real-time analytics and AI-driven optimization for compressed air systems.',
    icon: 'Activity',
    brands: [BRANDS.wiseair],
  },
  {
    id: 'power-solutions',
    name: 'Power Solutions',
    slug: 'power-solutions',
    description: 'High-performance generator sets with smart monitoring and predictive maintenance.',
    icon: 'BatteryCharging',
    brands: [BRANDS.greaves],
  },
];

// ── Products ────────────────────────────────
export const PRODUCTS: Product[] = [
  // ── Kaeser Products ─────────────────────
  {
    id: 'kaeser-screw-compressors',
    name: 'Rotary Screw Air Compressors',
    brand: BRANDS.kaeser,
    category: 'air-compressors',
    slug: 'kaeser-screw-compressors',
    description: 'State-of-the-art German technology KAESER make energy efficient screw air compressor. "KAESER SIGMA PROFILE" compressors are available in a very wide range and are about 15 percent more power efficient over conventional rotary screw compressors available in industry.',
    shortDescription: 'Energy-efficient rotary screw compressors with SIGMA PROFILE technology and 1:1 drive.',
    images: [],
    specifications: [
      { label: 'Series', value: 'SX to HSD' },
      { label: 'FADs', value: '0.26 to 83.4', unit: 'm³/min' },
      { label: 'CFM Range', value: '9.1 to 2645', unit: 'CFM' },
      { label: 'Motor Power', value: '2.2 to 500', unit: 'kW' },
      { label: 'Pressure', value: '5.5 to 15', unit: 'bar' },
      { label: 'Drive', value: '1:1 Direct Drive' },
      { label: 'Control', value: 'SIGMA CONTROL PLC' },
    ],
    applications: ['Manufacturing', 'Automotive', 'Textile', 'Glass', 'Beverage', 'Cement', 'Pharmaceutical'],
    brochureUrl: 'https://airmen.in/wp-content/uploads/2022/07/Screw-Air-Compressors.pdf',
    features: [
      'SIGMA PROFILE rotors — 15% more energy efficient',
      'LOW SPEED rotors — less wear, fewer maintenance costs',
      'ENERGY-SAVING 1:1 direct drive',
      'SIGMA CONTROL PLC for intelligent operation',
      'EFFICIENT RADIAL FANS — up to 50% less power than axial fans',
      'Highly efficient cooling system design',
    ],
    relatedProducts: ['kaeser-sfc-compressors', 'kaeser-air-treatment', 'kaeser-sigma-pet'],
  },
  {
    id: 'kaeser-sfc-compressors',
    name: 'Frequency Controlled Screw Compressors (SFC)',
    brand: BRANDS.kaeser,
    category: 'air-compressors',
    slug: 'kaeser-sfc-compressors',
    description: 'Rotary Screw Compressor with Sigma Frequency Control (SFC) for optimal energy savings through variable speed operation.',
    shortDescription: 'Variable speed screw compressors with Sigma Frequency Control for maximum energy savings.',
    images: [],
    specifications: [
      { label: 'Series', value: 'SM to HSD SFC' },
      { label: 'FADs', value: '0.35 to 86', unit: 'm³/min' },
      { label: 'CFM Range', value: '12.3 to 3037', unit: 'CFM' },
      { label: 'Motor Power', value: '7.5 to 515', unit: 'kW' },
      { label: 'Pressure', value: '5.5 to 15', unit: 'bar' },
    ],
    applications: ['Variable demand applications', 'Manufacturing', 'Process industries'],
    features: [
      'Sigma Frequency Control for variable speed operation',
      'Optimal energy savings at partial loads',
      'Wide speed range for maximum flexibility',
    ],
    relatedProducts: ['kaeser-screw-compressors', 'kaeser-air-treatment'],
  },
  {
    id: 'kaeser-sigma-pet',
    name: 'SIGMA PET AIR Compressors',
    brand: BRANDS.kaeser,
    category: 'air-compressors',
    slug: 'kaeser-sigma-pet',
    description: 'SIGMA PET AIR compact systems are characterized by their extremely low operating costs and compressed air certified to ISO 8573-1. This makes a considerable contribution to the reduction of the cost of PET bottle production using blow molding plant.',
    shortDescription: 'High-pressure compressors up to 45 bar for PET bottle blow molding with ISO 8573-1 certified air.',
    images: [],
    specifications: [
      { label: 'Max Pressure', value: 'Up to 45', unit: 'bar' },
      { label: 'Air Quality', value: 'ISO 8573-1 Certified' },
      { label: 'Drive', value: '1:1 Direct Drive' },
      { label: 'Control', value: 'Sigma Frequency Control (SFC)' },
      { label: 'Motor Power', value: 'Up to 515', unit: 'kW' },
    ],
    applications: ['PET bottle manufacturing', 'Blow molding'],
    brochureUrl: 'https://airmen.in/wp-content/uploads/2022/07/SIGMA-PET.pdf',
    features: [
      'Extremely low operating costs',
      'ISO 8573-1 certified compressed air',
      'Innovative modular system concept',
      'Reduces PET bottle production costs',
    ],
    relatedProducts: ['kaeser-screw-compressors', 'kaeser-sfc-compressors'],
  },
  {
    id: 'kaeser-air-treatment',
    name: 'Air Treatment (Dryers & Filters)',
    brand: BRANDS.kaeser,
    category: 'air-compressors',
    slug: 'kaeser-air-treatment',
    description: 'Complete air treatment solutions including dryers and filters for clean, dry compressed air supply.',
    shortDescription: 'Industrial dryers and filters for clean, dry compressed air.',
    images: [],
    specifications: [],
    applications: ['All compressed air applications'],
    features: ['Refrigeration dryers', 'Desiccant dryers', 'Compressed air filters', 'Condensate management'],
    relatedProducts: ['kaeser-screw-compressors', 'kaeser-sfc-compressors'],
  },

  // ── AIM Products ────────────────────────
  {
    id: 'aim-lubricated-reciprocating',
    name: 'Lubricated Reciprocating Compressors',
    brand: BRANDS.aim,
    category: 'air-compressors',
    slug: 'aim-lubricated-reciprocating',
    description: 'New generation air-cooled lubricated reciprocating compressors featuring low oil consumption, reduced noise and vibration levels, and longer part life.',
    shortDescription: 'Air-cooled lubricated reciprocating compressors with low oil consumption and reduced noise.',
    images: [],
    specifications: [
      { label: 'Type', value: 'Air-cooled Lubricated Reciprocating' },
      { label: 'Lubrication', value: 'Oil Lubricated' },
    ],
    applications: ['General manufacturing', 'Workshops', 'Small to medium industries'],
    features: [
      'Low oil consumption',
      'Reduced noise and vibration levels',
      'Longer part life',
      'New generation design',
    ],
    relatedProducts: ['aim-oil-free-reciprocating', 'aim-oil-free-scroll'],
  },
  {
    id: 'aim-oil-free-reciprocating',
    name: 'Oil-Free Reciprocating Compressors',
    brand: BRANDS.aim,
    category: 'air-compressors',
    slug: 'aim-oil-free-reciprocating',
    description: 'Oil-free reciprocating compressors with patented CMF (Critical Maintenance Free) technology featuring oil-free composite piston design for continuous, heavy-duty operation without risk of seizure.',
    shortDescription: 'Oil-free reciprocating compressors with patented CMF technology for 100% oil-free air.',
    images: [],
    specifications: [
      { label: 'Type', value: 'Oil-Free Reciprocating' },
      { label: 'Technology', value: 'CMF (Critical Maintenance Free)' },
      { label: 'Piston', value: 'Patented Oil-Free Composite' },
    ],
    applications: ['Pharmaceutical', 'Food & Beverage', 'Electronics', 'Healthcare'],
    features: [
      'CMF (Critical Maintenance Free) technology',
      'Patented oil-free composite piston design',
      'Continuous heavy-duty operation',
      'No risk of seizure',
      '100% oil-free air',
    ],
    relatedProducts: ['aim-lubricated-reciprocating', 'aim-oil-free-scroll'],
  },
  {
    id: 'aim-oil-free-scroll',
    name: 'Oil-Free Scroll Compressors',
    brand: BRANDS.aim,
    category: 'air-compressors',
    slug: 'aim-oil-free-scroll',
    description: 'Anest Iwata pioneered oil-free scroll compressor technology. These compressors are highly regarded for their quiet operation, compact design, and ability to provide 100% oil-free, high-purity air.',
    shortDescription: 'Ultra-quiet oil-free scroll compressors (51-67 dB) for high-purity air applications.',
    images: [],
    specifications: [
      { label: 'Type', value: 'Oil-Free Scroll' },
      { label: 'Noise Level', value: '51 to 67', unit: 'dB' },
      { label: 'Air Quality', value: '100% Oil-Free' },
    ],
    applications: ['Healthcare', 'Food processing', 'Electronics', 'Laboratories', 'Dental'],
    features: [
      'Ultra-quiet operation (51-67 dB)',
      'Compact design',
      '100% oil-free, high-purity air',
      'Pioneer in scroll technology (since 1991)',
    ],
    relatedProducts: ['aim-oil-free-reciprocating', 'aim-lubricated-reciprocating'],
  },

  // ── Hyundai Products ────────────────────
  {
    id: 'hyundai-electric-forklifts',
    name: 'Electric Forklifts',
    brand: BRANDS.hyundai,
    category: 'material-handling',
    slug: 'hyundai-electric-forklifts',
    description: 'Hyundai battery-operated electric forklifts for clean, efficient indoor and outdoor material handling operations.',
    shortDescription: 'Battery-operated electric forklifts up to 5 ton capacity for clean material handling.',
    images: [],
    specifications: [
      { label: 'Type', value: 'Battery Electric' },
      { label: 'Capacity', value: 'Up to 5', unit: 'ton' },
    ],
    applications: ['Warehousing', 'Manufacturing', 'Food & Beverage', 'Cold storage'],
    features: ['Zero emissions', 'Low noise operation', 'Low maintenance costs', 'Indoor & outdoor use'],
    relatedProducts: ['hyundai-diesel-forklifts', 'hyundai-lpg-forklifts'],
  },
  {
    id: 'hyundai-diesel-forklifts',
    name: 'Diesel Forklifts',
    brand: BRANDS.hyundai,
    category: 'material-handling',
    slug: 'hyundai-diesel-forklifts',
    description: 'Heavy-duty Hyundai diesel forklifts for demanding industrial applications requiring high lifting capacity.',
    shortDescription: 'Heavy-duty diesel forklifts up to 40 ton capacity for demanding applications.',
    images: [],
    specifications: [
      { label: 'Type', value: 'Diesel' },
      { label: 'Capacity', value: 'Up to 40', unit: 'ton' },
    ],
    applications: ['Heavy industry', 'Construction', 'Logistics', 'Ports'],
    features: ['High lifting capacity', 'Robust construction', 'Powerful diesel engine', 'All-terrain capability'],
    relatedProducts: ['hyundai-electric-forklifts', 'hyundai-lpg-forklifts'],
  },
  {
    id: 'hyundai-lpg-forklifts',
    name: 'LPG Forklifts',
    brand: BRANDS.hyundai,
    category: 'material-handling',
    slug: 'hyundai-lpg-forklifts',
    description: 'Hyundai LPG-powered forklifts offering a balance between power and cleaner emissions for versatile material handling.',
    shortDescription: 'LPG-powered forklifts balancing performance with cleaner emissions.',
    images: [],
    specifications: [
      { label: 'Type', value: 'LPG' },
      { label: 'Fuel', value: 'Liquefied Petroleum Gas' },
    ],
    applications: ['Manufacturing', 'Warehousing', 'Indoor/outdoor operations'],
    features: ['Cleaner emissions than diesel', 'Versatile indoor/outdoor use', 'Cost-effective operation'],
    relatedProducts: ['hyundai-electric-forklifts', 'hyundai-diesel-forklifts'],
  },

  // ── Legris Transair ─────────────────────
  {
    id: 'legris-aluminium-piping',
    name: 'Aluminium Piping System',
    brand: BRANDS.legris,
    category: 'compressed-air-piping',
    slug: 'legris-aluminium-piping',
    description: 'Transair aluminium compressed air piping system with push-to-connect technology. Lightweight, corrosion-resistant, and installs up to 4x faster than traditional piping.',
    shortDescription: 'Quick-connect aluminium piping — 4x faster installation than copper or black iron.',
    images: [],
    specifications: [
      { label: 'Material', value: 'Aluminium' },
      { label: 'Connection', value: 'Push-to-Connect' },
      { label: 'Installation Speed', value: '4x faster than traditional' },
    ],
    applications: ['Compressed air distribution', 'Vacuum systems', 'Inert gas applications'],
    features: [
      'Push-to-connect technology — no threading, soldering, or gluing',
      '4x faster installation vs copper or black iron',
      'Lightweight and easy to handle',
      'Highly resistant to corrosion',
      'Smooth internal bore — minimal pressure drops',
      'Modular and expandable',
    ],
    relatedProducts: ['legris-stainless-piping', 'legris-fittings'],
  },
  {
    id: 'legris-stainless-piping',
    name: 'Stainless Steel Piping System',
    brand: BRANDS.legris,
    category: 'compressed-air-piping',
    slug: 'legris-stainless-piping',
    description: 'Transair stainless steel piping for demanding environments requiring high purity, washdown capability, or resistance to harsh chemicals.',
    shortDescription: 'Stainless steel piping for high-purity and chemical-resistant applications.',
    images: [],
    specifications: [
      { label: 'Material', value: 'Stainless Steel' },
      { label: 'Connection', value: 'Push-to-Connect' },
    ],
    applications: ['Food & Beverage', 'Chemical processing', 'Pharmaceutical', 'High-purity environments'],
    features: [
      'High purity applications',
      'Washdown capability',
      'Chemical resistance',
      'Push-to-connect assembly',
    ],
    relatedProducts: ['legris-aluminium-piping', 'legris-fittings'],
  },
  {
    id: 'legris-fittings',
    name: 'Transair Fittings & Accessories',
    brand: BRANDS.legris,
    category: 'compressed-air-piping',
    slug: 'legris-fittings',
    description: 'Complete range of Transair fittings and accessories for building and expanding compressed air piping networks.',
    shortDescription: 'Complete range of push-to-connect fittings and piping accessories.',
    images: [],
    specifications: [],
    applications: ['All compressed air piping installations'],
    features: [
      'Compatible with Transair aluminium and stainless systems',
      'Modular and interchangeable',
      'Easy expansion and modification',
    ],
    relatedProducts: ['legris-aluminium-piping', 'legris-stainless-piping'],
  },

  // ── WiseAir Products ────────────────────
  {
    id: 'wiseair-wafs-103',
    name: 'WAFS-103 Flow Meter',
    brand: BRANDS.wiseair,
    category: 'smart-monitoring',
    slug: 'wiseair-wafs-103',
    description: 'Differential pressure pitot tube flow meter suitable for measuring flow in wet and dirty gases. Part of the WiseAir 4.0 smart monitoring ecosystem.',
    shortDescription: 'Differential pressure pitot tube flow meter for wet and dirty gas applications.',
    images: [],
    specifications: [
      { label: 'Type', value: 'Differential Pressure Pitot Tube' },
      { label: 'Application', value: 'Wet and Dirty Gases' },
      { label: 'Platform', value: 'WiseAir 4.0' },
    ],
    applications: ['Compressed air monitoring', 'Industrial gas measurement', 'Energy auditing'],
    features: ['Suitable for wet and dirty gases', 'High-precision measurement', 'WiseAir 4.0 compatible'],
    relatedProducts: ['wiseair-smart-monitoring'],
  },
  {
    id: 'wiseair-smart-monitoring',
    name: 'WASM-604 Smart Monitoring Platform',
    brand: BRANDS.wiseair,
    category: 'smart-monitoring',
    slug: 'wiseair-smart-monitoring',
    description: 'Cloud-based smart monitoring platform providing real-time dashboards, predictive maintenance, and AI-driven energy optimization for compressed air systems. Potential energy savings of up to 30%.',
    shortDescription: 'Cloud-based AI analytics platform for compressed air optimization — up to 30% energy savings.',
    images: [],
    specifications: [
      { label: 'Platform', value: 'WASM-604' },
      { label: 'Analytics', value: 'AI-Driven Cloud Analytics' },
      { label: 'Energy Savings', value: 'Up to 30%' },
      { label: 'Monitoring', value: 'Flow, Pressure, Power, Dew Point' },
    ],
    applications: ['Manufacturing plants', 'Process industries', 'Energy management'],
    features: [
      'Real-time dashboards',
      'Predictive maintenance with AI',
      'Up to 30% energy savings',
      'Cloud-based analytics',
      'Automated continuous logging',
      'Leak detection and pressure monitoring',
    ],
    relatedProducts: ['wiseair-wafs-103'],
  },

  // ── Greaves Products ────────────────────
  {
    id: 'greaves-generator-sets',
    name: 'Generator Sets',
    brand: BRANDS.greaves,
    category: 'power-solutions',
    slug: 'greaves-generator-sets',
    description: 'Greaves high-performance generator sets with small footprint, low TCO, and low noise levels. Available from 5kVA to 1250kVA with up to 5-year warranty on important components.',
    shortDescription: 'High-performance generator sets from 5kVA to 1250kVA with up to 5-year warranty.',
    images: [],
    specifications: [
      { label: 'Range', value: '5 to 1250', unit: 'kVA' },
      { label: 'Warranty', value: 'Up to 5 years on key components' },
      { label: 'Service', value: '24-hour service and supplies' },
    ],
    applications: ['Industrial', 'Commercial', 'Infrastructure', 'Residential'],
    brochureUrl: 'https://airmen.in/wp-content/uploads/2022/07/NEW-GREAVES-GENIUS-LEAFLET.pdf',
    features: [
      'Small footprint',
      'Low Total Cost of Ownership',
      'Low noise levels',
      'Up to 5-year warranty on key components',
      '24-hour service and supplies facility',
    ],
    relatedProducts: ['greaves-genius-monitoring'],
  },
  {
    id: 'greaves-genius-monitoring',
    name: 'Genius Smart Monitoring',
    brand: BRANDS.greaves,
    category: 'power-solutions',
    slug: 'greaves-genius-monitoring',
    description: 'Upgrade old Greaves Genset to Genius Genset with smart monitoring. Real-time dashboard, predictive maintenance, and all-round protection alerts.',
    shortDescription: 'Smart monitoring upgrade for Greaves generator sets with real-time dashboard and alerts.',
    images: [],
    specifications: [
      { label: 'Compatibility', value: '5 to 1250', unit: 'kVA' },
      { label: 'Features', value: 'Real-time Dashboard, Predictive Maintenance' },
    ],
    applications: ['All Greaves generator installations'],
    features: [
      'Anytime & anywhere access via dashboard',
      'Up to 30% more life with genuine components',
      'Easy upgrade for existing gensets',
      'Increased uptime with predictive maintenance',
      'All-round protection alerts (overload, battery, fuel, service)',
    ],
    relatedProducts: ['greaves-generator-sets'],
  },
];

// Helper functions
export function getProductsByBrand(brandSlug: string): Product[] {
  return PRODUCTS.filter((p) => p.brand.slug === brandSlug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter((p) => p.category === categoryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRAND_LIST.find((b) => b.slug === slug);
}
