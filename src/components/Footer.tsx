import { Mail, Phone, MapPin, Linkedin, Facebook, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setSubscriptionStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setSubscriptionStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setSubscriptionStatus('loading');

    try {
      // Store email in localStorage for now (in production, this would be sent to your backend/email service)
      const subscribers = JSON.parse(localStorage.getItem('jetson-subscribers') || '[]');
      
      if (subscribers.some((sub: any) => sub.email === email)) {
        setSubscriptionStatus('error');
        setMessage('You are already subscribed to our updates');
        return;
      }

      subscribers.push({
        email: email,
        subscribedAt: new Date().toISOString(),
        source: 'website-footer'
      });
      
      localStorage.setItem('jetson-subscribers', JSON.stringify(subscribers));
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubscriptionStatus('success');
      setMessage('Successfully subscribed! You\'ll receive updates from Jetsons Robotics.');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch (error) {
      setSubscriptionStatus('error');
      setMessage('Something went wrong. Please try again later.');
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


  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/media/jetsons_logo.png" 
                  alt="Jetsons Robotics Logo" 
                  className="w-full h-full object-contain"
                />
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

          {/* Contact & Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            {/* Quick Links */}
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
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">Get the latest solar innovation insights</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1 md:w-64"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                  disabled={subscriptionStatus === 'loading'}
                />
                <Button 
                  className="primary-gradient min-w-[100px]" 
                  onClick={handleSubscribe}
                  disabled={subscriptionStatus === 'loading'}
                >
                  {subscriptionStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
              
              {/* Status Message */}
              {message && (
                <div className={`mt-2 flex items-center space-x-2 text-sm ${
                  subscriptionStatus === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {subscriptionStatus === 'success' ? (
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  )}
                  <span>{message}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              Powered by Jetsons Robotics © 2021 Jetsons Robotics. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;