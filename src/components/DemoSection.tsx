import { MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const DemoSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919821480880', '_blank');
  };

  const handleScheduleDemo = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfchuuqmD3ZjLJOU6a9t4mSulaEIFqdgQylgB2d6TA4G1xJvQ/viewform?usp=sharing&ouid=102905637179766150994', '_blank');
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="card-shadow bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <div className="p-8 lg:p-12 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  See Our Robots in Action
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Book a free demo for your solar site today!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleScheduleDemo}
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 group transition-all duration-300"
                >
                  <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 smooth-transition" />
                  Schedule Live Demo
                </Button>
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-3 group transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 smooth-transition" />
                  Connect with us
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