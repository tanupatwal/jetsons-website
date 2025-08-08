import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const openContactForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfchuuqmD3ZjLJOU6a9t4mSulaEIFqdgQylgB2d6TA4G1xJvQ/viewform?usp=sharing&ouid=102905637179766150994', '_blank');
  };

  const scrollToDemo = () => {
    const element = document.querySelector('#demo');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Removed Make in India Badge as requested */}

          {/* Hero Headlines */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Autonomous Solar
              <span className="text-primary block"> Cleaning Robots</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Maximizing solar efficiency with AI-powered cleaning solutions. 
              Trusted by 500+ installations across India.
            </p>
          </div>

          {/* Key Stats */}
          <div className="flex justify-center space-x-8 lg:space-x-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">+7,000MW</div>
              <div className="text-sm text-muted-foreground">Awarded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1.6B+</div>
              <div className="text-sm text-muted-foreground">Panels Cleaned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15%</div>
              <div className="text-sm text-muted-foreground">Efficiency Gain</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="primary-gradient elegant-shadow group"
              onClick={openContactForm}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group"
              onClick={scrollToDemo}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 smooth-transition" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;