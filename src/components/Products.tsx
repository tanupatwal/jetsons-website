import { Zap, Droplets, Wifi, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const products = [
    {
      id: 'type-z',
      name: 'TYPE Z',
      subtitle: 'Autonomous Solar Panel Cleaning Robot',
      description: 'Our flagship autonomous robot that revolutionizes solar panel maintenance with precision cleaning and minimal water usage.',
      icon: Zap,
      image: '/placeholder.svg?height=300&width=400',
      features: [
        'Runs on Frame Structure',
        'Fewest Possible Components',
        'AI-Powered Navigation',
        '90% Water Reduction',
        'Remote Monitoring',
        '24/7 Operation'
      ],
      specs: {
        coverage: '2-5 MW per unit',
        speed: '10-15 panels/minute',
        water: '90% reduction',
        power: 'Solar + Battery backup'
      },
      badge: 'Most Popular',
      badgeColor: 'primary'
    },
    {
      id: 'type-u',
      name: 'TYPE U',
      subtitle: 'Handheld Water-Based Solar Panel Cleaning Brush',
      description: 'Portable, efficient manual cleaning solution for smaller installations and targeted maintenance tasks.',
      icon: Droplets,
      image: '/placeholder.svg?height=300&width=400',
      features: [
        'Ergonomic Design',
        'Water-Efficient',
        'Lightweight Construction',
        'Quick Setup',
        'Cost-Effective',
        'Easy Maintenance'
      ],
      specs: {
        coverage: '50-100 panels/hour',
        weight: '2.5 kg',
        water: '70% reduction',
        power: 'Manual operation'
      },
      badge: 'Portable',
      badgeColor: 'secondary'
    },
    {
      id: 'node-x',
      name: 'NODE X',
      subtitle: 'IoT-Based Solar Remote Monitoring Device',
      description: 'Advanced monitoring system that provides real-time performance analytics and predictive maintenance insights.',
      icon: Wifi,
      image: '/placeholder.svg?height=300&width=400',
      features: [
        'Real-Time Monitoring',
        'Predictive Analytics',
        'Cloud Integration',
        'Mobile App Control',
        'Alert System',
        'Performance Optimization'
      ],
      specs: {
        connectivity: '4G/WiFi/LoRa',
        battery: '5+ years',
        monitoring: 'Real-time',
        alerts: 'Instant notifications'
      },
      badge: 'Smart Tech',
      badgeColor: 'accent'
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary">
            Our Solutions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Complete Solar Cleaning 
            <span className="text-primary"> Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From autonomous robots to handheld tools and smart monitoring systems, 
            we offer comprehensive solutions for every solar installation need.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={product.id} className={`relative card-shadow hover:elegant-shadow smooth-transition group ${index === 0 ? 'lg:scale-105 border-primary/20' : ''}`}>
              {product.badge && (
                <Badge 
                  className={`absolute -top-3 left-6 z-10 ${
                    product.badgeColor === 'primary' ? 'primary-gradient text-primary-foreground' : 
                    product.badgeColor === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                    'bg-accent text-accent-foreground'
                  }`}
                >
                  {product.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 primary-gradient rounded-xl flex items-center justify-center">
                  <product.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-foreground">{product.name}</CardTitle>
                  <p className="text-sm text-primary font-medium mt-1">{product.subtitle}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">{product.description}</p>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Specifications:</h4>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground capitalize">{key}:</span>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our engineering team can design tailored robotic cleaning systems 
            for your specific solar installation requirements.
          </p>
          <Button size="lg" className="primary-gradient">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;