import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/business';

export function StickyCallButton() {
  return (
    <a
      href={`tel:${BUSINESS_INFO.phone}`}
      className="fixed bottom-6 right-6 z-50 bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6 group-hover:animate-bounce" />
      <span className="sr-only">Call {BUSINESS_INFO.phoneDisplay}</span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-black animate-ping opacity-75"></span>
    </a>
  );
}
