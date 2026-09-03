// Airmen Engineers — Blog Page
import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blog';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Industrial Insights & Articles',
  description: 'Expert articles on air compressors, energy efficiency, maintenance, industrial technology, material handling, and compressed air systems.',
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog' }]} />
      <section className="py-20 lg:py-28 bg-navy">
        <Container>
          <div className="max-w-3xl">
            <span className="overline mb-4 block">Blog</span>
            <h1 className="text-white mb-6">Industrial <span className="text-gold">Knowledge Hub</span></h1>
            <p className="text-gray-300 text-lg">Expert insights on compressed air, energy efficiency, and industrial technology.</p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-4 py-2 bg-gold text-navy text-sm font-semibold rounded-lg">All</span>
            {BLOG_CATEGORIES.map((cat) => (
              <span key={cat} className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
                {cat}
              </span>
            ))}
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="card-industrial h-full flex flex-col">
                  <div className="aspect-[16/9] bg-gradient-to-br from-navy to-navy-light relative">
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold text-navy text-xs font-semibold px-2.5 py-1 rounded-md">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </div>
                    <h3 className="text-base font-heading font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-slate-custom line-clamp-2 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-sm font-semibold text-gold mt-3">Read More <ArrowRight className="w-3.5 h-3.5" /></div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
