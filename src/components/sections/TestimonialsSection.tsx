import { Star } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useGSAP';
import { TESTIMONIALS } from '@/constants/testimonials';

export function TestimonialsSection() {
  const testimonialsRef = useStaggerReveal();

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
            Trusted by homeowners across Central Florida for exceptional quality and service
          </p>
        </div>

        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-brand-cream rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-black text-black" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-dark leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-brand-primary/10 pt-4">
                <p className="font-bold text-brand-primary">{testimonial.name}</p>
                <p className="text-sm text-brand-secondary">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
