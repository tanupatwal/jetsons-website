import { Zap, Droplets, Wifi, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductHighlights = () => {
  const products = [
    {
      name: 'NTX',
      subtitle: 'Solar AI Cam',
      description: 'AI-Powered smart cam for solar panel health monitoring',
      icon: Zap,
      link: '/products/ntx'
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
    <section id="products" className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solar maintenance solutions powered by advanced robotics and AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <CardHeader className="text-center p-6">
                <div className="mx-auto w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <product.icon className="h-8 w-8 text-gray-800" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">{product.name}</CardTitle>
                <p className="text-sm text-blue-600 font-semibold mb-3">{product.subtitle}</p>
              </CardHeader>
              
              <CardContent className="text-center px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;