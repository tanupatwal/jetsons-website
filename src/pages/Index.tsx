import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import TypeZSection from '@/components/TypeZSection';
import About from '@/components/About';
import ProductHighlights from '@/components/ProductHighlights';
import DemoSection from '@/components/DemoSection';
import ProductDemo from '@/components/ProductDemo';
import PartnersLogos from '@/components/PartnersLogos';
import MediaAwards from '@/components/MediaAwards';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StatsSection />
      <TypeZSection />
      <About />
      <ProductHighlights />
      <DemoSection />
     {/* <ProductDemo /> */}
      <PartnersLogos />
      <MediaAwards />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
