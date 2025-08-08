import { Zap, Droplets, Wifi, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductHighlights = () => {
  const products = [
    {
      name: 'TYPE Z',
      subtitle: 'Autonomous Cleaning Robot',
      description: 'AI-powered robots for large-scale solar farms',
      icon: Zap,
      link: '/products/type-z'
    },
    {
      name: 'TYPE U',
      subtitle: 'Handheld Cleaning Tool',
      description: 'Portable solution for smaller installations',
      icon: Droplets,
      link: '/products/type-u'
    },
    {
      name: 'NODE X',
      subtitle: 'IoT Monitoring System',
      description: 'Real-time performance analytics',
      icon: Wifi,
      link: '/products/node-x'
    }
  ];

  return (
    <section id="products" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Complete Solar Cleaning Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From autonomous robots to smart monitoring systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="card-shadow hover:elegant-shadow smooth-transition group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 primary-gradient rounded-xl flex items-center justify-center mb-4">
                  <product.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{product.name}</CardTitle>
                <p className="text-sm text-primary font-medium">{product.subtitle}</p>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{product.description}</p>
                <Button variant="outline" size="sm" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;