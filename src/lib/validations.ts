// ============================================
// Airmen Engineers — Form Validation Schemas
// ============================================

import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().min(2, 'Company name is required').max(200),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15),
  requirementType: z.enum([
    'air-compressor',
    'forklift',
    'piping',
    'service',
    'spare-parts',
    'rental',
    'energy-audit',
    'other',
  ]),
  message: z.string().min(10, 'Please describe your requirement (min 10 characters)').max(2000),
  honeypot: z.string().max(0).optional(),
});

export const rentalSchema = enquirySchema.extend({
  requiredHP: z.string().min(1, 'Please specify required HP'),
  rentalDuration: z.string().min(1, 'Please specify rental duration'),
});

export const quoteSchema = enquirySchema;

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
export type RentalFormValues = z.infer<typeof rentalSchema>;
export type QuoteFormValues = z.infer<typeof quoteSchema>;

export const REQUIREMENT_OPTIONS = [
  { value: 'air-compressor', label: 'Air Compressor' },
  { value: 'forklift', label: 'Forklift' },
  { value: 'piping', label: 'Piping' },
  { value: 'service', label: 'Service' },
  { value: 'spare-parts', label: 'Spare Parts' },
  { value: 'rental', label: 'Rental' },
  { value: 'energy-audit', label: 'Energy Audit' },
  { value: 'other', label: 'Other' },
] as const;

export const HP_OPTIONS = [
  '10 HP', '15 HP', '20 HP', '25 HP', '30 HP',
  '40 HP', '50 HP', '60 HP', '75 HP', 'Custom',
] as const;

export const DURATION_OPTIONS = [
  '1 Week', '2 Weeks', '1 Month', '3 Months',
  '6 Months', '1 Year', 'Custom',
] as const;
