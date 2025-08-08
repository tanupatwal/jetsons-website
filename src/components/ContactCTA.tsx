import { ArrowRight, MessageSquare, MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ContactCTA = () => {
  const openContactForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfchuuqmD3ZjLJOU6a9t4mSulaEIFqdgQylgB2d6TA4G1xJvQ/viewform?usp=sharing&ouid=102905637179766150994', '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to maximize your solar efficiency? Contact us today to learn more about our robotic cleaning solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="card-shadow bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <div className="p-8 space-y-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Contact Information
                    </h3>
                    <p className="text-muted-foreground">
                      Join 500+ solar operators who have increased their energy output with our solutions.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        B-103, Street No-1, Majlis Park, Delhi 110033
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <a href="tel:+91-9821480880" className="text-primary hover:underline">
                       +91-9821480880
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <a href="mailto:info@jetsonsrobotics.com" className="text-primary hover:underline">
                        info@jetsonsrobotics.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/company/jetsonsrobotics/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline"
                      >
                        JetsonsRobotics Private Limited
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="card-shadow">
              <div className="p-8 text-center space-y-6">
                <div className="space-y-4">
                  <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto">
                    <ArrowRight className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out our contact form and we'll get back to you within 24 hours to discuss your solar cleaning needs.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="primary-gradient group w-full"
                    onClick={openContactForm}
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="group w-full"
                    onClick={openContactForm}
                  >
                    Get Quote
                    <MessageSquare className="ml-2 h-5 w-5 group-hover:scale-110 smooth-transition" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;