export const BUSINESS_INFO = {
  name: 'Pristine Hardscape & Landscaping',
  phone: '352-203-5417',
  phoneDisplay: '(352) 203-5417',
  email: 'pristinehardscape1@gmail.com',
  serviceAreas: [
    'The Villages, FL',
    'Lady Lake, FL',
    'Ocala, FL',
    'Summerfield, FL',
    'Belleview, FL',
    'Wildwood, NJ',
  ],
} as const;

export const SERVICES = {
  custom: [
    {
      title: 'Paver Patios',
      description: 'Custom-designed outdoor living spaces with premium pavers',
      icon: 'Square',
    },
    {
      title: 'Driveways & Walkways',
      description: 'Durable, beautiful pathways that enhance curb appeal',
      icon: 'Route',
    },
    {
      title: 'Landscape Design',
      description: 'Professional design and installation tailored to your vision',
      icon: 'Trees',
    },
  ],
  maintenance: [
    {
      title: 'Professional Mowing',
      description: 'Precision lawn care for a pristine appearance',
      icon: 'Sparkles',
    },
    {
      title: 'Bush Trimming',
      description: 'Expert pruning and shaping for healthy growth',
      icon: 'Scissors',
    },
    {
      title: 'Weed Control',
      description: 'Hand-pulled weed removal for chemical-free care',
      icon: 'Leaf',
    },
  ],
} as const;
