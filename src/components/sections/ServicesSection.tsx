import { Square, Route, Trees, Sparkles, Scissors, Leaf } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useGSAP';
import { SERVICES } from '@/constants/business';

const iconMap = {
  Square,
  Route,
  Trees,
  Sparkles,
  Scissors,
  Leaf,
};

export function ServicesSection() {
  const customRef = useStaggerReveal();
  const maintenanceRef = useStaggerReveal();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            Our Hardscape & Landscaping Services
          </h2>
          <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
            Premium outdoor solutions designed to enhance your property's beauty and value
          </p>
        </div>

        {/* Custom Installations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-brand-dark mb-8 text-center">
            Custom Installations
          </h3>
          <div ref={customRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.custom.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div
                  key={service.title}
                  className="group bg-brand-cream rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-black"
                >
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-3 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-brand-dark leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Maintenance Services */}
        <div>
          <h3 className="text-3xl font-bold text-brand-dark mb-8 text-center">
            Maintenance Services
          </h3>
          <div ref={maintenanceRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.maintenance.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div
                  key={service.title}
                  className="group bg-brand-cream rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-black"
                >
                  <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-gray-600 transition-colors">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-700 mb-3 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-brand-dark leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
