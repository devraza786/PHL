import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/constants/business';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo-icon.svg" alt="Pristine Hardscape & Landscaping" className="h-14 w-14" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-brand-dark hover:text-brand-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-brand-dark hover:text-brand-primary transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-brand-dark hover:text-brand-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('quote')}
              className="text-brand-dark hover:text-brand-primary transition-colors font-medium"
            >
              Get Quote
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-brand-primary hover:text-brand-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <Button
              onClick={() => scrollToSection('quote')}
              className="bg-black hover:bg-gray-800 text-white font-semibold"
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-primary"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-brand-primary/10">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-brand-dark hover:text-brand-primary transition-colors font-medium py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-brand-dark hover:text-brand-primary transition-colors font-medium py-2"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-brand-dark hover:text-brand-primary transition-colors font-medium py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('quote')}
                className="text-left text-brand-dark hover:text-brand-primary transition-colors font-medium py-2"
              >
                Get Quote
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 text-brand-primary font-semibold py-2"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS_INFO.phoneDisplay}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-brand-secondary py-2"
              >
                <Mail className="h-4 w-4" />
                {BUSINESS_INFO.email}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
