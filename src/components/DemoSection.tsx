import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const DemoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="card-shadow bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <div className="p-8 lg:p-12 text-center space-y-6">
              <div className="space-y-4">
                <div className="w-20 h-20 primary-gradient rounded-full flex items-center justify-center mx-auto">
                  <Play className="h-10 w-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  See Our Robots in Action
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Watch how our autonomous cleaning robots transform solar panel maintenance 
                  with precision and efficiency.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="primary-gradient group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 smooth-transition" />
                  Watch Demo Video
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfchuuqmD3ZjLJOU6a9t4mSulaEIFqdgQylgB2d6TA4G1xJvQ/viewform?usp=sharing&ouid=102905637179766150994', '_blank')}
                >
                  Schedule Live Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;