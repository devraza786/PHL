import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { QuoteFormData } from '@/types';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface QuoteFormProps {
  onSubmit: (data: QuoteFormData) => void;
}

export function QuoteForm({ onSubmit }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    jobDetails: '',
    preferredDate: '',
    preferredTime: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      jobDetails: '',
      preferredDate: '',
      preferredTime: '',
    });
    setStep(1);
  };

  const canProceedStep1 = formData.name && formData.phone && formData.email;
  const canProceedStep2 = formData.serviceType && formData.jobDetails;

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-12 shadow-2xl">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-brand-dark">
            Step {step} of 3
          </span>
          <span className="text-sm text-brand-secondary">
            {step === 1 && 'Contact Info'}
            {step === 2 && 'Project Details'}
            {step === 3 && 'Schedule & Submit'}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-black rounded-full h-2 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1: Contact Information */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-brand-dark font-semibold mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border-gray-300 focus:border-black"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-brand-dark font-semibold mb-2">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-gray-300 focus:border-black"
              placeholder="(352) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-brand-dark font-semibold mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 focus:border-black"
              placeholder="john@example.com"
            />
          </div>

          <Button
            type="button"
            onClick={() => setStep(2)}
            disabled={!canProceedStep1}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-6 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Next Step
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Step 2: Project Details */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <label htmlFor="serviceType" className="block text-brand-dark font-semibold mb-2">
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select a service...</option>
              <option value="Paver Patio">Paver Patio</option>
              <option value="Driveway">Driveway</option>
              <option value="Walkway">Walkway</option>
              <option value="Landscape Design">Landscape Design</option>
              <option value="Mowing">Professional Mowing</option>
              <option value="Bush Trimming">Bush Trimming</option>
              <option value="Weed Control">Weed Control</option>
              <option value="Multiple Services">Multiple Services</option>
            </select>
          </div>

          <div>
            <label htmlFor="jobDetails" className="block text-brand-dark font-semibold mb-2">
              Project Details & Special Requests *
            </label>
            <Textarea
              id="jobDetails"
              name="jobDetails"
              required
              value={formData.jobDetails}
              onChange={handleChange}
              rows={6}
              className="w-full border-gray-300 focus:border-black"
              placeholder="Tell us about your project: dimensions, materials, special requirements, etc."
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={() => setStep(1)}
              variant="outline"
              className="flex-1 border-2 border-black text-black hover:bg-black hover:text-white py-6 text-lg"
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Back
            </Button>
            <Button
              type="button"
              onClick={() => setStep(3)}
              disabled={!canProceedStep2}
              className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-6 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Next Step
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Schedule */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <label htmlFor="preferredDate" className="block text-brand-dark font-semibold mb-2">
              Preferred Date (Optional)
            </label>
            <Input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full border-gray-300 focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-brand-dark font-semibold mb-2">
              Preferred Time (Optional)
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select a time...</option>
              <option value="Morning (8AM-12PM)">Morning (8AM-12PM)</option>
              <option value="Afternoon (12PM-4PM)">Afternoon (12PM-4PM)</option>
              <option value="Evening (4PM-6PM)">Evening (4PM-6PM)</option>
            </select>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-black">
            <h4 className="font-bold text-brand-primary mb-2">Review Your Information</h4>
            <div className="space-y-1 text-sm text-brand-dark">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Service:</strong> {formData.serviceType}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={() => setStep(2)}
              variant="outline"
              className="flex-1 border-2 border-black text-black hover:bg-black hover:text-white py-6 text-lg"
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Back
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-6 text-lg"
            >
              Submit Request
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
