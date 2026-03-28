import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { ServiceAreas } from '@/components/sections/service-areas';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'C&C Stump Grinding and More',
    image: 'https://alyssa-personal.s3.us-east-1.amazonaws.com/vecteezy_large-tree-stump-in-summer-forest-tree-stump_3280061.jpg',
    description: 'Professional stump grinding, debris removal, and cleanup services in Orange and Lake County, Florida',
    telephone: '407-448-1647',
    url: 'https://CandCStumpgrindingandmore.com',
    priceRange: '$$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Orlando',
        '@id': 'https://CandCStumpgrindingandmore.com/service-areas'
      },
      {
        '@type': 'City',
        name: 'Winter Park',
        '@id': 'https://CandCStumpgrindingandmore.com/service-areas'
      },
      {
        '@type': 'City',
        name: 'Clermont',
        '@id': 'https://CandCStumpgrindingandmore.com/service-areas'
      },
      {
        '@type': 'City',
        name: 'Leesburg',
        '@id': 'https://CandCStumpgrindingandmore.com/service-areas'
      },
    ],
    sameAs: [],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'C&C Stump Grinding and More',
    url: 'https://CandCStumpgrindingandmore.com',
    telephone: '407-448-1647',
    email: 'chris@candcstumpgrinding.com',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Stump Grinding Services',
    description: 'Professional stump grinding, debris removal, and property cleanup in Orange and Lake County',
    provider: {
      '@type': 'LocalBusiness',
      name: 'C&C Stump Grinding and More',
      telephone: '407-448-1647'
    },
    areaServed: {
      '@type': 'Region',
      name: 'Orange County, Lake County'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <ServiceAreas />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
