// ============================================
// Airmen Engineers — Product Spec Table
// ============================================

import React from 'react';
import { Specification } from '@/types';

interface SpecificationTableProps {
  specs: Specification[];
  title?: string;
}

export default function SpecificationTable({ specs, title }: SpecificationTableProps) {
  if (specs.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      {title && (
        <div className="bg-navy px-4 py-3">
          <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider">
            {title}
          </h4>
        </div>
      )}
      <table className="spec-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr key={index}>
              <td className="font-medium text-navy">{spec.label}</td>
              <td>
                {spec.value}
                {spec.unit && <span className="text-gray-400 ml-1">{spec.unit}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
