import Link from 'next/link';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-gray-50">
      <Container className="text-center">
        <div className="w-24 h-24 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl font-heading font-bold text-gold">404</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-custom mb-8 max-w-lg mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved. 
          Please check the URL or return to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" showArrow>Return to Homepage</Button>
          <Button href="/contact" variant="secondary">Contact Support</Button>
        </div>
      </Container>
    </section>
  );
}
