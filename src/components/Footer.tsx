import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Demo', href: '#demo' },
    { name: 'Contact', href: '#contact' },
    { name: 'Products', href: '#products' },
    { name: 'Partners', href: '#partners' },
    { name: 'Media', href: '#media' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">JR</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">JETSONS ROBOTICS</h1>
                <p className="text-xs text-muted-foreground">Solar Panel Cleaning Solutions</p>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              Leading India's sustainable energy future with autonomous solar panel cleaning robots.
            </p>

            {/* Make in India Badge */}
            <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2">
              <div className="w-6 h-4 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-sm"></div>
              <span className="text-sm font-medium text-foreground">Proudly Made in India</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open('https://www.linkedin.com/company/jetsonsrobotics/', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open('https://b-m.facebook.com/100162639090176/', '_blank')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleNavClick(link.href)}
                      className="text-muted-foreground hover:text-primary smooth-transition text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="space-y-2">
                {legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary smooth-transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@jetsonsrobotics.com" className="hover:text-primary smooth-transition">
                  info@jetsonsrobotics.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+91-9821480880" className="hover:text-primary smooth-transition">
                  +91-9821480880
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">Get the latest solar innovation insights</p>
            </div>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="primary-gradient">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Jetsons Robotics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-primary smooth-transition">Privacy</a>
              <a href="/terms" className="hover:text-primary smooth-transition">Terms</a>
              <a href="/sitemap" className="hover:text-primary smooth-transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;