export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  jobDetails: string;
  preferredDate: string;
  preferredTime: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'patio' | 'driveway' | 'landscape' | 'walkway';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}
