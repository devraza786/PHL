import { useState } from 'react';
import { X } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useGSAP';
import { GALLERY_IMAGES } from '@/constants/gallery';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useStaggerReveal();

  return (
    <section id="gallery" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            Our Completed Projects
          </h2>
          <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
            Explore our portfolio of stunning hardscape and landscape transformations
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover min-h-[250px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white font-bold text-lg">{image.title}</h4>
                  <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Project detail"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
