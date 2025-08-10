import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import PartnersModal from './PartnersModal';

const PartnersLogos = () => {
  const [partnerTypes, setPartnerTypes] = useState([]);
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false);
  const scrollRefs = useRef({});

  const getPartnerLogos = async () => {
    const partnerCategories = [
      { title: "Customers", folder: "customers" },
      { title: "Ecosystem", folder: "ecosysterm" },
      { title: "Investors", folder: "investors" }
    ];

    const logoData = await Promise.all(
      partnerCategories.map(async (category) => {
        try {
          const logos = await import.meta.glob('/public/partner_logos/**/*.{png,jpg,jpeg,svg,webp}', { eager: true });
          const categoryLogos = Object.keys(logos)
            .filter(path => path.includes(`/${category.folder}/`))
            .map(path => {
              const fileName = path.split('/').pop().replace(/\.[^/.]+$/, "");
              const name = fileName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
              return {
                name,
                logo: path.replace('/public', '')
              };
            });
          
          return {
            title: category.title,
            partners: categoryLogos
          };
        } catch (error) {
          console.error(`Error loading logos for ${category.title}:`, error);
          return {
            title: category.title,
            partners: []
          };
        }
      })
    );

    setPartnerTypes(logoData);
  };

  useEffect(() => {
    getPartnerLogos();
  }, []);

  const scroll = (direction, sectionIndex) => {
    const container = scrollRefs.current[sectionIndex];
    if (container) {
      const scrollAmount = 240; // Logo width + margin
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section id="partners" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground">
              Backed by leading investors and supported by prestigious institutions
            </p>
          </div>
          
          <div className="space-y-12">
            {partnerTypes.map((partnerType, typeIndex) => (
              <div key={typeIndex} className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {partnerType.title}
                </h3>
                <div className="relative">
                  {/* Left Navigation Arrow */}
                  <button
                    onClick={() => scroll('left', typeIndex)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card border rounded-full p-2 shadow-md hover:shadow-lg smooth-transition hover:scale-105"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>

                  {/* Logo Container */}
                  <div 
                    ref={el => scrollRefs.current[typeIndex] = el}
                    className="flex overflow-x-auto scrollbar-hide gap-6 px-12 py-4 scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {partnerType.partners.map((partner, partnerIndex) => (
                      <div 
                        key={`${typeIndex}-${partnerIndex}`}
                        className="flex items-center justify-center w-48 h-32 bg-card rounded-lg hover:card-shadow smooth-transition group cursor-pointer flex-shrink-0 animate-fade-in hover-scale shimmer-hover"
                        style={{ 
                          animationDelay: `${(typeIndex * 4 + partnerIndex) * 0.1}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-32 max-h-16 object-contain smooth-transition relative z-10"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right Navigation Arrow */}
                  <button
                    onClick={() => scroll('right', typeIndex)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card border rounded-full p-2 shadow-md hover:shadow-lg smooth-transition hover:scale-105"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="group"
            onClick={() => setIsPartnersModalOpen(true)}
          >
            View All Partners
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
          </Button>
        </div>
      </div>
      
      {/* Partners Modal */}
      <PartnersModal 
        isOpen={isPartnersModalOpen}
        onClose={() => setIsPartnersModalOpen(false)}
      />
    </section>
  );
};

export default PartnersLogos;

