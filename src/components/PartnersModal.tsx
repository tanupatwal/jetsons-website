import { useState, useEffect } from 'react';
import { X, Users, Building, Banknote, Network, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Partner {
  name: string;
  logo: string;
}

interface PartnerCategory {
  title: string;
  partners: Partner[];
  icon: any;
  description: string;
}

interface PartnersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnersModal = ({ isOpen, onClose }: PartnersModalProps) => {
  const [partnerCategories, setPartnerCategories] = useState<PartnerCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<{[key: string]: number}>({});

  const loadPartnerData = async () => {
    setLoading(true);
    try {
      const categories = [
        { 
          title: "Customers", 
          folder: "customers", 
          icon: Building,
          description: "Leading companies trusting our solar cleaning solutions"
        },
        { 
          title: "Ecosystem", 
          folder: "ecosysterm", 
          icon: Network,
          description: "Innovation partners and industry collaborators"
        },
        { 
          title: "Investors", 
          folder: "investors", 
          icon: Banknote,
          description: "Financial partners supporting our growth"
        }
      ];

      const categoryData: PartnerCategory[] = [];

      // For each category, load the logos
      for (const category of categories) {
        const partners: Partner[] = [];
        
        // Manually add known partners (in production, this would be dynamic)
        if (category.folder === 'customers') {
          partners.push(
            { name: 'Tata Power', logo: '/partner_logos/customers/tata.png' },
            { name: 'Freyr Energy', logo: '/partner_logos/customers/freyr-logo.png' },
            { name: 'PlaySolar', logo: '/partner_logos/customers/playsolar.png' },
            { name: 'M Energy', logo: '/partner_logos/customers/M.png' },
            { name: 'Fourth Partner', logo: '/partner_logos/customers/fourth_partner.png' }
          );
        } else if (category.folder === 'ecosysterm') {
          partners.push(
            { name: 'IIT Kanpur', logo: '/partner_logos/ecosysterm/iitk-logo.svg' },
            { name: 'IIT Kanpur Incubation', logo: '/partner_logos/ecosysterm/iitk_incubation.png' },
            { name: 'Jetro', logo: '/partner_logos/ecosysterm/jetro.png' },
            { name: 'Startup Tunnel', logo: '/partner_logos/ecosysterm/startup_tunnel.png' },
            { name: 'Villgro', logo: '/partner_logos/ecosysterm/villgro.png' }
          );
        } else if (category.folder === 'investors') {
          partners.push(
            { name: 'Citibank', logo: '/partner_logos/investors/citibank-Logo.png' },
            { name: 'YES Bank', logo: '/partner_logos/investors/yes_bank.png' },
            { name: 'Ministry of Electronics & IT', logo: '/partner_logos/investors/ministry_of_electronics_and_information_technology.svg' },
            { name: 'KXX Capital', logo: '/partner_logos/investors/kxx.png' }
          );
        }

        categoryData.push({
          title: category.title,
          partners,
          icon: category.icon,
          description: category.description
        });
      }

      setPartnerCategories(categoryData);
      
      // Initialize current page for each category
      const initialPages: {[key: string]: number} = {};
      categoryData.forEach(category => {
        initialPages[category.title.toLowerCase()] = 0;
      });
      setCurrentPage(initialPages);
    } catch (error) {
      console.error('Error loading partner data:', error);
    } finally {
      setLoading(false);
    }
  };

  const navigatePartners = (categoryKey: string, direction: 'prev' | 'next') => {
    const category = partnerCategories.find(cat => cat.title.toLowerCase() === categoryKey);
    if (!category) return;

    const totalPages = Math.ceil(category.partners.length / 5);
    const currentPageNum = currentPage[categoryKey] || 0;
    
    let newPage;
    if (direction === 'next') {
      newPage = currentPageNum < totalPages - 1 ? currentPageNum + 1 : 0;
    } else {
      newPage = currentPageNum > 0 ? currentPageNum - 1 : totalPages - 1;
    }
    
    setCurrentPage(prev => ({
      ...prev,
      [categoryKey]: newPage
    }));
  };

  useEffect(() => {
    if (isOpen) {
      loadPartnerData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const totalPartners = partnerCategories.reduce((sum, category) => sum + category.partners.length, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-6xl bg-card rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <Users className="mr-3 h-6 w-6 text-primary" />
                  Our Partners & Collaborators
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Trusted relationships driving innovation in solar technology
                </p>
              </div>
              <Button variant="outline" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="text-muted-foreground">Loading partner information...</p>
                  </div>
                </div>
              ) : (
                <>

                  <Tabs defaultValue="customers" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      {partnerCategories.map((category, index) => (
                        <TabsTrigger key={index} value={category.title.toLowerCase()}>
                          <category.icon className="mr-2 h-4 w-4" />
                          {category.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {partnerCategories.map((category, categoryIndex) => (
                      <TabsContent key={categoryIndex} value={category.title.toLowerCase()}>
                        <div className="space-y-6">
                          {/* Category Description */}
                          <div className="text-center space-y-2">
                            <div className="flex items-center justify-center space-x-3">
                              <div className="w-12 h-12 primary-gradient rounded-full flex items-center justify-center">
                                <category.icon className="h-6 w-6 text-primary-foreground" />
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                                <p className="text-sm text-muted-foreground">{category.description}</p>
                              </div>
                            </div>
                          </div>

                          {/* Partners Navigation */}
                          <div className="relative">
                            {/* Left Arrow */}
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg"
                              onClick={() => navigatePartners(category.title.toLowerCase(), 'prev')}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>

                            {/* Partners Grid */}
                            <div className="px-12">
                              <div className="grid grid-cols-5 gap-4">
                                {category.partners
                                  .slice(
                                    (currentPage[category.title.toLowerCase()] || 0) * 5,
                                    ((currentPage[category.title.toLowerCase()] || 0) + 1) * 5
                                  )
                                  .map((partner, partnerIndex) => (
                                    <div
                                      key={partnerIndex}
                                      className="group relative bg-background border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 smooth-transition"
                                    >
                                      <div className="flex flex-col items-center justify-center">
                                        <div className="w-full h-20 flex items-center justify-center">
                                          <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain group-hover:scale-105 smooth-transition"
                                            loading="lazy"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>

                            {/* Right Arrow */}
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg"
                              onClick={() => navigatePartners(category.title.toLowerCase(), 'next')}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>

                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersModal;