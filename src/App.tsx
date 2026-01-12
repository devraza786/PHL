import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCallButton } from '@/components/layout/StickyCallButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { ServiceAreaSection } from '@/components/sections/ServiceAreaSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ServiceAreaSection />
        <QuoteSection />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
}

export default App;
