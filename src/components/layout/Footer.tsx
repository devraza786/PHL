import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/business';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-icon.svg" alt="Pristine Hardscape & Landscaping" className="h-16 w-16" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming outdoor spaces with premium hardscape and landscaping services across
              Central Florida.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Project Gallery
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('quote')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Get a Quote
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Service Areas</h4>
            <div className="flex flex-col gap-2">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <div key={area} className="flex items-start gap-2 text-gray-400">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pristine Hardscape & Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
