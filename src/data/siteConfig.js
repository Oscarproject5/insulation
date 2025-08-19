// Centralized configuration for consistent site-wide data
export const siteConfig = {
  // Company Information
  company: {
    name: 'Valley Insulation Pros',
    tagline: 'Professional Insulation Services',
    phone: '(956) 854-0899',
    phoneRaw: '9568540899',
    email: 'info@rgvinsulation.com',
    address: 'Rio Grande Valley, TX',
    hours: 'Mon-Sat: 7:00 AM - 7:00 PM',
    license: 'Licensed & Insured',
    certification: 'EPA Certified',
    rating: 4.9,
    reviewCount: 127
  },

  // Brand Colors (matching your CSS variables)
  colors: {
    primary: {
      dark: '#0A0A0A',
      gray: '#171717',
      orange: '#FF6B35',
      green: '#10B981'
    },
    text: {
      primary: '#0A0A0A',
      secondary: '#525252'
    },
    background: {
      light: '#FAFAFA',
      white: '#FFFFFF'
    }
  },

  // Consistent Button Styles
  buttonStyles: {
    primary: 'bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300',
    secondary: 'border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300',
    outline: 'border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300'
  },

  // Consistent Card Styles
  cardStyles: {
    default: 'bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden',
    glass: 'bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden',
    bordered: 'bg-white rounded-2xl border border-gray-200 hover:border-orange-500 transition-all duration-300 overflow-hidden'
  },

  // Section Padding (responsive)
  sectionPadding: {
    desktop: 'py-16 px-4',
    mobile: 'py-12 px-4'
  },

  // Typography Scales
  typography: {
    hero: {
      desktop: 'text-5xl lg:text-6xl font-bold leading-tight',
      mobile: 'text-3xl font-bold leading-tight'
    },
    heading1: {
      desktop: 'text-4xl lg:text-5xl font-bold',
      mobile: 'text-2xl font-bold'
    },
    heading2: {
      desktop: 'text-3xl lg:text-4xl font-bold',
      mobile: 'text-xl font-bold'
    },
    heading3: {
      desktop: 'text-2xl lg:text-3xl font-semibold',
      mobile: 'text-lg font-semibold'
    },
    body: {
      desktop: 'text-base lg:text-lg',
      mobile: 'text-sm'
    }
  },

  // Breakpoints
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1280
  }
}

// Services Data (consistent across all pages)
export const services = [
  {
    id: 'spray-foam',
    name: 'Spray Foam Insulation',
    shortDescription: 'Maximum efficiency with expanding foam technology',
    description: 'Professional spray foam insulation provides superior air sealing and moisture control, reducing energy costs by up to 40%.',
    benefits: [
      'Up to 40% energy savings',
      'Superior air sealing',
      'Moisture and mold prevention',
      'Increased structural strength',
      'Noise reduction'
    ],
    image: '/assets/spray-foam-installation.jpg',
    icon: '🔧',
    slug: 'spray-foam'
  },
  {
    id: 'blown-in',
    name: 'Blown-In Insulation',
    shortDescription: 'Cost-effective solution for attics and walls',
    description: 'Efficient blown-in insulation fills every gap and corner, providing excellent coverage for maximum energy efficiency.',
    benefits: [
      'Complete coverage',
      'Quick installation',
      'Fire resistant',
      'Eco-friendly materials',
      'Cost-effective'
    ],
    image: '/assets/blown-insulation-new.jpg',
    icon: '💨',
    slug: 'blown-in'
  },
  {
    id: 'attic',
    name: 'Attic Insulation',
    shortDescription: 'Keep your home cool and energy bills low',
    description: 'Proper attic insulation is crucial in Texas heat. We provide comprehensive attic solutions to maximize comfort and savings.',
    benefits: [
      'Reduce cooling costs',
      'Prevent heat transfer',
      'Extend HVAC lifespan',
      'Improve air quality',
      'Even temperature distribution'
    ],
    image: '/assets/attic-insulation-new.jpg',
    icon: '🏠',
    slug: 'attic'
  },
  {
    id: 'wall',
    name: 'Wall Insulation',
    shortDescription: 'Complete thermal barrier for your home',
    description: 'Wall insulation creates a complete thermal envelope, keeping conditioned air inside and extreme temperatures out.',
    benefits: [
      'Eliminate drafts',
      'Reduce noise transmission',
      'Prevent moisture damage',
      'Improve comfort',
      'Lower energy bills'
    ],
    image: '/assets/professional-team.jpg',
    icon: '🧱',
    slug: 'wall'
  },
  {
    id: 'commercial',
    name: 'Commercial Insulation',
    shortDescription: 'Large-scale solutions for businesses',
    description: 'Professional commercial insulation services for warehouses, offices, and industrial facilities throughout the RGV.',
    benefits: [
      'Reduce operating costs',
      'Improve employee comfort',
      'Meet building codes',
      'Tax incentives available',
      'Custom solutions'
    ],
    image: '/assets/professional-team-spray.jpg',
    icon: '🏢',
    slug: 'commercial'
  }
]

// Service Areas Data (consistent across all pages)
export const serviceAreas = [
  {
    id: 'mcallen',
    name: 'McAllen',
    state: 'TX',
    zip: '78501',
    population: '142,212',
    description: 'Serving McAllen with professional insulation services. As the largest city in Hidalgo County, we help residents combat the intense Texas heat.',
    neighborhoods: ['North McAllen', 'South McAllen', 'West McAllen', 'Downtown'],
    slug: 'mcallen'
  },
  {
    id: 'edinburg',
    name: 'Edinburg',
    state: 'TX',
    zip: '78539',
    population: '101,170',
    description: 'Professional insulation services in Edinburg. Home to UTRGV, we serve both residential and commercial properties.',
    neighborhoods: ['Downtown Edinburg', 'North Edinburg', 'University Area'],
    slug: 'edinburg'
  },
  {
    id: 'brownsville',
    name: 'Brownsville',
    state: 'TX',
    zip: '78520',
    population: '186,738',
    description: 'Comprehensive insulation solutions for Brownsville. Combat coastal humidity and heat with proper insulation.',
    neighborhoods: ['Downtown', 'Southmost', 'North Brownsville'],
    slug: 'brownsville'
  },
  {
    id: 'harlingen',
    name: 'Harlingen',
    state: 'TX',
    zip: '78550',
    population: '71,829',
    description: 'Expert insulation services in Harlingen. Reduce energy costs and improve comfort year-round.',
    neighborhoods: ['Downtown', 'Treasure Hills', 'Dixieland'],
    slug: 'harlingen'
  },
  {
    id: 'mission',
    name: 'Mission',
    state: 'TX',
    zip: '78572',
    population: '85,736',
    description: 'Quality insulation services for Mission residents. Save on cooling costs in the Texas heat.',
    neighborhoods: ['Downtown Mission', 'Sharyland', 'West Mission'],
    slug: 'mission'
  },
  {
    id: 'pharr',
    name: 'Pharr',
    state: 'TX',
    zip: '78577',
    population: '79,715',
    description: 'Professional insulation installation in Pharr. Improve home efficiency and comfort.',
    neighborhoods: ['Downtown Pharr', 'Las Milpas', 'North Pharr'],
    slug: 'pharr'
  }
]

// Common CTA Messages (for consistency)
export const ctaMessages = {
  primary: 'Get Your Free Quote Today',
  secondary: 'Schedule Free Consultation',
  emergency: 'Call Now for Same-Day Service',
  savings: 'Start Saving on Energy Bills'
}

// SEO Templates
export const seoTemplates = {
  service: (service, area = null) => ({
    title: area 
      ? `${service.name} in ${area.name}, ${area.state}` 
      : `${service.name} Services in Rio Grande Valley`,
    description: area
      ? `Professional ${service.name.toLowerCase()} services in ${area.name}, ${area.state}. ${service.shortDescription}. Call ${siteConfig.company.phone} for free estimate.`
      : `Expert ${service.name.toLowerCase()} services in the Rio Grande Valley. ${service.shortDescription}. Free estimates. Call ${siteConfig.company.phone}.`,
    keywords: area
      ? `${service.name}, ${area.name}, ${area.state}, insulation contractor, energy savings, ${service.slug} installation`
      : `${service.name}, Rio Grande Valley, RGV insulation, ${service.slug}, insulation services, Texas`
  }),
  
  area: (area) => ({
    title: `Insulation Services in ${area.name}, ${area.state}`,
    description: `Professional insulation contractor serving ${area.name}, ${area.state}. Spray foam, blown-in, and attic insulation. Save up to 40% on energy bills. Call ${siteConfig.company.phone}.`,
    keywords: `insulation ${area.name}, ${area.name} insulation contractor, spray foam ${area.name}, attic insulation ${area.name}, energy savings ${area.state}`
  })
}

// Testimonials (use across pages)
export const testimonials = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    location: 'McAllen, TX',
    rating: 5,
    text: 'Our energy bill dropped by 35% after getting spray foam insulation. The team was professional and cleaned up perfectly.',
    service: 'Spray Foam Insulation'
  },
  {
    id: 2,
    name: 'James Wilson',
    location: 'Edinburg, TX',
    rating: 5,
    text: 'Best investment for our home. The house stays cool even in 100+ degree weather. Highly recommend!',
    service: 'Attic Insulation'
  },
  {
    id: 3,
    name: 'Patricia Martinez',
    location: 'Brownsville, TX',
    rating: 5,
    text: 'Quick, efficient, and professional. They completed our entire attic in one day. Great value!',
    service: 'Blown-In Insulation'
  }
]

// FAQ Data (consistent across pages)
export const faqs = [
  {
    question: 'How much can I save on my energy bills?',
    answer: 'Most homeowners in the RGV save 25-40% on their cooling costs with proper insulation. The exact savings depend on your current insulation, home size, and cooling habits.'
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential projects are completed in 1-2 days. Spray foam typically takes 1 day, while blown-in insulation can often be done in a few hours.'
  },
  {
    question: 'Do you offer financing?',
    answer: 'Yes, we offer flexible financing options to make energy-efficient upgrades affordable. Contact us for details about our payment plans.'
  },
  {
    question: 'Is insulation worth it in South Texas?',
    answer: 'Absolutely! With our extreme heat and high humidity, proper insulation is crucial for comfort and energy savings. It typically pays for itself in 2-3 years through reduced energy bills.'
  }
]