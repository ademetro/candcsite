import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { ServiceAreas } from '@/components/sections/service-areas';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <Contact />
      <Footer />
    </main>
  );
}
