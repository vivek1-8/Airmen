'use client';

// ============================================
// Airmen Engineers — 3D Scene Wrapper
// ============================================

import React, { Suspense, useState } from 'react';

interface Scene3DWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  height?: string;
}

function LoadingIndicator() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-navy/5">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">
          Loading experience...
        </span>
      </div>
    </div>
  );
}

export default function Scene3DWrapper({
  children,
  fallback,
  className = '',
  height = '100%',
}: Scene3DWrapperProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <>{fallback || <DefaultFallback />}</>;
  }

  return (
    <div className={`relative ${className}`} style={{ height }}>
      <ErrorBoundary onError={() => setHasError(true)} fallback={fallback}>
        <Suspense fallback={<LoadingIndicator />}>
          {children}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function DefaultFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl font-heading font-bold text-gold">A</span>
        </div>
        <p className="text-gray-400 text-sm">Airmen Engineers</p>
      </div>
    </div>
  );
}

// Error Boundary
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  onError: () => void;
  fallback?: React.ReactNode;
}, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode; onError: () => void; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <DefaultFallback />;
    }
    return this.props.children;
  }
}
