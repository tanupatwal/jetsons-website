import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Partners = () => {
  const partnerCategories = [
    {
      title: 'Ecosystem Partners',
      partners: [
        { name: 'M+ Solar', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Fourth Partner Energy', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'NASSCOM', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Solar Power Corp', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Green Energy Ltd', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Renewable Solutions', logo: '/placeholder.svg?height=60&width=120' }
      ]
    },
    {
      title: 'Financial Partners & Investors',
      partners: [
        { name: 'Citibank', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Villgro', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'YES BANK', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Innovation Fund', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Green Ventures', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Tech Capital', logo: '/placeholder.svg?height=60&width=120' }
      ]
    },
    {
      title: 'Incubation & Research Partners',
      partners: [
        { name: 'IIT Kanpur', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Atal Incubation Centre', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Research Institute', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Innovation Lab', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Tech University', logo: '/placeholder.svg?height=60&width=120' },
        { name: 'Innovation Hub', logo: '/placeholder.svg?height=60&width=120' }
      ]
    }
  ];

  const awards = [
    {
      title: 'World Economic Forum Recognition',
      year: '2023',
      description: 'Global Technology Pioneer Award'
    },
    {
      title: 'YES SCALE Award',
      year: '2023',
      description: 'Best CleanTech Innovation'
    },
    {
      title: 'CEATEC Recognition',
      year: '2022',
      description: 'Outstanding Technology Solution'
    },
    {
      title: 'Innovation Excellence Award',
      year: '2022',
      description: 'Sustainable Technology Leadership'
    }
  ];

  const mediaLogos = [
    { name: 'Inc42', logo: '/placeholder.svg?height=40&width=80' },
    { name: 'YourStory', logo: '/placeholder.svg?height=40&width=80' },
    { name: 'Bizztor', logo: '/placeholder.svg?height=40&width=80' },
    { name: 'VC-Circle', logo: '/placeholder.svg?height=40&width=80' },
    { name: 'TechCrunch', logo: '/placeholder.svg?height=40&width=80' },
    { name: 'Economic Times', logo: '/placeholder.svg?height=40&width=80' }
  ];

  return (
    <section id="partners" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary">
            Trust & Recognition
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Trusted by Industry 
            <span className="text-primary"> Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Backed by leading investors, supported by prestigious institutions, 
            and recognized by global organizations for our innovative solutions.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="space-y-16">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-bold text-center text-foreground">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.partners.map((partner, index) => (
                  <Card 
                    key={index} 
                    className="hover:card-shadow smooth-transition group cursor-pointer"
                  >
                    <CardContent className="p-6 flex items-center justify-center h-20">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 smooth-transition"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-20 space-y-8">
          <h3 className="text-2xl font-bold text-center text-foreground">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="card-shadow hover:elegant-shadow smooth-transition">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 primary-gradient rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{award.title}</h4>
                    <p className="text-sm text-primary font-medium">{award.year}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="mt-20 space-y-8">
          <h3 className="text-2xl font-bold text-center text-foreground">
            As Featured In
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {mediaLogos.map((media, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-16 bg-card rounded-lg hover:card-shadow smooth-transition group cursor-pointer"
              >
                <img 
                  src={media.logo} 
                  alt={media.name}
                  className="max-h-8 max-w-full object-contain grayscale group-hover:grayscale-0 smooth-transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="mt-20 bg-card rounded-2xl p-8 card-shadow">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Global Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;