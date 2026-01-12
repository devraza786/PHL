import { useState } from 'react';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { QuoteFormData } from '@/types';
import { useScrollReveal } from '@/hooks/useGSAP';
import { CheckCircle2 } from 'lucide-react';

export function QuoteSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useScrollReveal();

  const handleSubmit = (data: QuoteFormData) => {
    console.log('Quote request submitted:', data);
    
    // Store in localStorage
    const existingQuotes = JSON.parse(localStorage.getItem('quoteRequests') || '[]');
    localStorage.setItem('quoteRequests', JSON.stringify([...existingQuotes, { ...data, timestamp: new Date().toISOString() }]));
    
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="quote" className="py-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div ref={sectionRef} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Landscaping Quote
            </h2>
            <p className="text-xl text-gray-200">
              Tell us about your project and we'll provide a detailed, no-obligation estimate
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-lg p-12 text-center">
              <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-6 animate-bounce" />
              <h3 className="text-3xl font-bold text-brand-primary mb-4">
                Thank You for Your Request!
              </h3>
              <p className="text-lg text-brand-dark mb-4">
                We've received your quote request and will contact you within 24 hours.
              </p>
              <p className="text-brand-secondary">
                Need immediate assistance? Call us at{' '}
                <a href="tel:352-203-5417" className="text-black font-bold hover:underline">
                  (352) 203-5417
                </a>
              </p>
            </div>
          ) : (
            <QuoteForm onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </section>
  );
}
