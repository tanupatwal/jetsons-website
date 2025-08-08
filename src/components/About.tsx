import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Leading India's Solar Revolution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We develop autonomous robotic systems that maximize solar panel efficiency while minimizing water usage. 
              Our AI-powered solutions are transforming renewable energy infrastructure across India.
            </p>
          </div>
          
          <Button variant="outline" size="lg" className="group">
            Learn Our Story
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;