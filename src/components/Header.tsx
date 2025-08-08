import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const openContactForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfchuuqmD3ZjLJOU6a9t4mSulaEIFqdgQylgB2d6TA4G1xJvQ/viewform?usp=sharing&ouid=102905637179766150994', '_blank');
  };

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Demo', href: '#demo' },
    { name: 'Media', href: '#media' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">JR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">JETSONS ROBOTICS</h1>
              <p className="text-xs text-muted-foreground">Solar Panel Cleaning Solutions</p>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="hidden sm:flex"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Primary CTA */}
            <Button 
              size="sm" 
              className="primary-gradient hidden sm:flex"
              onClick={openContactForm}
            >
              Get Started
            </Button>

            {/* Hamburger Menu */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Hamburger Menu Content */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 left-0 bg-card/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-foreground hover:text-primary smooth-transition font-medium py-2 px-4 rounded-md hover:bg-muted/50"
                  >
                    {item.name}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-border space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-center"
                    onClick={() => handleNavClick('#demo')}
                  >
                    Watch Demo
                  </Button>
                  
                  {/* Mobile Dark Mode Toggle */}
                  <Button
                    variant="outline"
                    onClick={toggleTheme}
                    className="w-full justify-center sm:hidden"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="mr-2 h-4 w-4" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-4 w-4" />
                        Dark Mode
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    className="w-full primary-gradient justify-center sm:hidden"
                    onClick={openContactForm}
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;