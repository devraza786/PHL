import { MapPin, Award } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useGSAP';
import { BUSINESS_INFO } from '@/constants/business';

export function ServiceAreaSection() {
  const areasRef = useStaggerReveal();

  return (
    <section className="py-24 bg-gradient-to-br from-black to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-12 w-12 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold">Proudly Serving</h2>
          </div>
          <p className="text-xl text-gray-200">
            Premium hardscape & landscaping services across Central Florida
          </p>
        </div>

        <div ref={areasRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {BUSINESS_INFO.serviceAreas.map((area) => (
            <div
              key={area}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <MapPin className="h-8 w-8 text-white mx-auto mb-3" />
              <p className="font-semibold text-sm leading-tight">{area}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-200 mb-4">
            Don't see your area? Contact us to discuss your project!
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <MapPin className="h-5 w-5" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
