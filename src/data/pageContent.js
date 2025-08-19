// Detailed content structure for all 51 pages
// This ensures consistency while maintaining uniqueness

export const pageContent = {
  // CORE PAGES
  home: {
    meta: {
      title: 'Valley Insulation Pros - Save 35% on Energy Bills',
      description: 'Professional insulation services in Rio Grande Valley. Spray foam, blown-in, and attic insulation. Free estimates. Licensed & insured. Call (956) 854-0899.',
      keywords: 'insulation contractor RGV, insulation services Rio Grande Valley, spray foam McAllen, attic insulation Texas'
    },
    hero: {
      badge: '🔥 Heat Advisory Active',
      title: 'Beat the Texas Heat with Professional Insulation',
      subtitle: 'Save up to 35% on your cooling bills with expert insulation services',
      dynamicContent: {
        hot: 'Currently {temp}° - Your AC is working overtime!',
        moderate: 'Stay comfortable year-round',
        cool: 'Prepare for summer now'
      }
    },
    sections: [
      'hero', 'services', 'benefits', 'areas', 'testimonials', 'process', 'cta'
    ]
  },

  about: {
    meta: {
      title: 'About Us - Licensed Insulation Contractors',
      description: 'EPA certified insulation experts serving RGV since 2010. Family-owned, fully licensed and insured. Over 1,000 satisfied customers.',
      keywords: 'licensed insulation contractor McAllen, EPA certified insulation RGV, insulation company Rio Grande Valley'
    },
    hero: {
      title: 'Trusted Insulation Experts Since 2010',
      subtitle: 'Family-owned and operated, serving the Rio Grande Valley with pride'
    },
    timeline: [
      { year: '2010', event: 'Company founded in McAllen' },
      { year: '2012', event: 'EPA certification obtained' },
      { year: '2015', event: 'Expanded to serve all RGV' },
      { year: '2018', event: '500th project completed' },
      { year: '2020', event: 'Commercial division launched' },
      { year: '2024', event: '1,000+ satisfied customers' }
    ],
    values: [
      { icon: '🏆', title: 'Quality', description: 'We never compromise on materials or workmanship' },
      { icon: '⏰', title: 'Reliability', description: 'On-time, every time, with transparent communication' },
      { icon: '💰', title: 'Value', description: 'Fair pricing with maximum energy savings' },
      { icon: '🤝', title: 'Trust', description: 'Licensed, insured, and background-checked team' }
    ]
  },

  // SERVICE PAGES
  services: {
    'spray-foam': {
      meta: {
        title: 'Spray Foam Insulation Services RGV',
        description: 'Professional spray foam insulation in Rio Grande Valley. Save up to 40% on energy bills. Open & closed cell options. Free estimates. Call (956) 854-0899.',
        keywords: 'spray foam insulation RGV, closed cell foam insulation Texas, spray foam contractors McAllen'
      },
      hero: {
        badge: 'Most Efficient',
        title: 'Professional Spray Foam Insulation Services',
        subtitle: 'Maximum energy efficiency with expanding foam technology'
      },
      benefits: [
        { percent: '40%', text: 'Energy Savings' },
        { percent: '50%', text: 'Noise Reduction' },
        { percent: '100%', text: 'Air Sealing' },
        { percent: '30%', text: 'Structural Strength' }
      ],
      comparison: {
        openCell: {
          rValue: 'R-3.5 per inch',
          cost: '$$',
          bestFor: 'Interior walls, sound dampening',
          moisture: 'Permeable',
          expansion: '100x volume'
        },
        closedCell: {
          rValue: 'R-6.5 per inch',
          cost: '$$$',
          bestFor: 'Attics, exterior walls, moisture areas',
          moisture: 'Impermeable barrier',
          expansion: '35x volume'
        }
      },
      process: [
        'Free inspection and quote',
        'Prep and protect your property',
        'Apply spray foam insulation',
        'Quality check and cleanup',
        'Final walkthrough and warranty'
      ],
      faqs: [
        {
          q: 'How long does spray foam installation take?',
          a: 'Most residential projects are completed in 1 day. The foam expands within seconds and is fully cured in 24 hours.'
        },
        {
          q: 'Is spray foam safe for my family?',
          a: 'Yes, once cured (24 hours), spray foam is completely safe and actually improves indoor air quality by sealing out pollutants.'
        },
        {
          q: 'What\'s the ROI on spray foam insulation?',
          a: 'Most homeowners see a full return on investment in 3-5 years through energy savings, with insulation lasting 30+ years.'
        }
      ]
    },

    'blown-in': {
      meta: {
        title: 'Blown-In Insulation Services - RGV Contractors',
        description: 'Expert blown-in insulation for attics and walls. Fiberglass & cellulose options. Quick installation, complete coverage. Free estimates. Call (956) 854-0899.',
        keywords: 'blown in insulation McAllen, cellulose insulation RGV, fiberglass insulation Texas'
      },
      hero: {
        badge: 'Best Value',
        title: 'Blown-In Insulation Services',
        subtitle: 'Complete coverage for maximum efficiency at an affordable price'
      },
      materials: {
        fiberglass: {
          rValue: 'R-2.5 per inch',
          fireRating: 'Class A',
          settling: 'Minimal',
          cost: '$',
          pros: ['Non-combustible', 'Moisture resistant', 'No settling']
        },
        cellulose: {
          rValue: 'R-3.5 per inch',
          fireRating: 'Class A (treated)',
          settling: '15-20%',
          cost: '$$',
          pros: ['Eco-friendly', 'Better soundproofing', 'Pest resistant']
        }
      }
    },

    'attic': {
      meta: {
        title: 'Attic Insulation Specialists - Rio Grande Valley',
        description: 'Professional attic insulation services in RGV. Reduce cooling costs by 35%. Radiant barriers, ventilation, and more. Free inspection. Call (956) 854-0899.',
        keywords: 'attic insulation Rio Grande Valley, attic insulation contractors, radiant barrier RGV'
      },
      hero: {
        badge: '35% Savings',
        title: 'Attic Insulation Specialists',
        subtitle: 'Stop heat at the source - Your attic is the #1 energy loss area'
      },
      problems: [
        'Hot spots in rooms below attic',
        'High summer cooling bills',
        'Ice damming in winter',
        'Uneven temperatures',
        'HVAC running constantly',
        'Dust and allergens'
      ]
    },

    'wall': {
      meta: {
        title: 'Wall Insulation Services - Retrofit & New Construction',
        description: 'Professional wall insulation for RGV homes. Retrofit existing walls or insulate new construction. Eliminate drafts and reduce noise. Call (956) 854-0899.',
        keywords: 'wall insulation contractors RGV, retrofit wall insulation, injection foam insulation'
      }
    },

    'commercial': {
      meta: {
        title: 'Commercial Insulation Services - RGV Businesses',
        description: 'Commercial insulation for warehouses, offices, and industrial facilities. Volume pricing, tax incentives available. Licensed contractors. Call (956) 854-0899.',
        keywords: 'commercial insulation RGV, warehouse insulation McAllen, industrial insulation services'
      },
      industries: [
        'Warehouses & Distribution',
        'Office Buildings',
        'Retail Spaces',
        'Medical Facilities',
        'Schools & Universities',
        'Industrial Facilities'
      ]
    }
  },

  // AREA PAGES
  areas: {
    mcallen: {
      meta: {
        title: 'Insulation Contractor McAllen, TX',
        description: 'Professional insulation services in McAllen, TX. Serving North McAllen, South McAllen, and surrounding areas. Save 35% on energy. Free quotes. Call (956) 854-0899.',
        keywords: 'insulation contractor McAllen TX, spray foam insulation McAllen, attic insulation McAllen Texas'
      },
      hero: {
        title: 'Insulation Services in McAllen, TX',
        subtitle: 'Serving McAllen families since 2010 with professional insulation solutions'
      },
      localData: {
        population: '142,212',
        avgSummerTemp: '96°F',
        avgEnergyCost: '$285/month',
        potentialSavings: '$95/month',
        responseTime: '< 2 hours'
      },
      neighborhoods: [
        'North McAllen',
        'South McAllen',
        'West McAllen',
        'Downtown McAllen',
        'Sharyland Area',
        'Bentsen Palm',
        'Edinburg Road Area',
        'Las Palmas',
        'Nolana Area',
        'Trenton Road'
      ],
      testimonials: [
        {
          name: 'Maria Rodriguez',
          neighborhood: 'North McAllen',
          text: 'Our energy bill dropped from $320 to $210 after spray foam installation. Best investment ever!'
        },
        {
          name: 'John Smith',
          neighborhood: 'Sharyland',
          text: 'Professional team, clean work, and our house stays cool even when it\'s 100° outside.'
        }
      ]
    },

    edinburg: {
      meta: {
        title: 'Insulation Services Edinburg, TX - UTRGV Area',
        description: 'Expert insulation contractor in Edinburg, TX. Serving UTRGV area, downtown, and all neighborhoods. Reduce energy costs by 35%. Call (956) 854-0899.',
        keywords: 'insulation Edinburg TX, attic insulation Edinburg, UTRGV area insulation contractor'
      },
      localData: {
        population: '101,170',
        avgSummerTemp: '95°F',
        avgEnergyCost: '$275/month',
        potentialSavings: '$90/month',
        responseTime: '< 2 hours'
      },
      neighborhoods: [
        'Downtown Edinburg',
        'North Edinburg',
        'UTRGV Campus Area',
        'Schunior Area',
        'Chaparral',
        'Indian Hills'
      ]
    },

    brownsville: {
      meta: {
        title: 'Insulation Contractor Brownsville, TX - Coastal Experts',
        description: 'Professional insulation services in Brownsville, TX. Combat coastal humidity and heat. Spray foam and blown-in specialists. Free estimates. Call (956) 854-0899.',
        keywords: 'insulation contractor Brownsville, spray foam Brownsville TX, coastal insulation services'
      },
      localData: {
        population: '186,738',
        avgSummerTemp: '94°F',
        avgEnergyCost: '$290/month',
        humidity: '75% avg',
        responseTime: '< 3 hours'
      },
      specialConsiderations: [
        'High coastal humidity requires moisture barriers',
        'Salt air protection for metal components',
        'Hurricane-resistant installation methods',
        'Mold and mildew prevention focus'
      ]
    },

    harlingen: {
      meta: {
        title: 'Insulation Services Harlingen, TX',
        description: 'Professional insulation contractor serving Harlingen, TX. Medical district and airport area coverage. Save on energy costs. Free quotes. Call (956) 854-0899.',
        keywords: 'insulation services Harlingen TX, blown in insulation Harlingen, energy efficiency Harlingen'
      },
      localData: {
        population: '71,829',
        avgSummerTemp: '95°F',
        avgEnergyCost: '$265/month',
        potentialSavings: '$85/month',
        responseTime: '< 2 hours'
      }
    },

    mission: {
      meta: {
        title: 'Insulation Contractor Mission, TX - Sharyland Area',
        description: 'Expert insulation services in Mission, TX. Serving Sharyland, downtown, and west Mission. New construction specialists. Free estimates. Call (956) 854-0899.',
        keywords: 'insulation Mission TX, energy efficiency Mission Texas, Sharyland insulation contractor'
      },
      localData: {
        population: '85,736',
        avgSummerTemp: '96°F',
        avgEnergyCost: '$280/month',
        growthRate: '15% (new construction)',
        responseTime: '< 2 hours'
      }
    },

    pharr: {
      meta: {
        title: 'Insulation Services Pharr, TX - Commercial & Residential',
        description: 'Professional insulation contractor in Pharr, TX. Warehouse district and residential services. International bridge area. Free quotes. Call (956) 854-0899.',
        keywords: 'insulation contractor Pharr TX, commercial insulation Pharr, warehouse insulation services'
      },
      localData: {
        population: '79,715',
        avgSummerTemp: '96°F',
        avgEnergyCost: '$270/month',
        commercialFocus: 'Warehouse District',
        responseTime: '< 2 hours'
      }
    }
  },

  // COMBO PAGES TEMPLATE
  comboTemplate: {
    meta: {
      title: '{service} in {city}, TX - Professional Installation',
      description: 'Expert {service} services in {city}, TX. {benefit}. Licensed contractors, free estimates. Call (956) 854-0899.',
      keywords: '{service} {city} TX, {service} contractors {city}, {keyword3}'
    },
    hero: {
      title: '{service} in {city}, TX',
      subtitle: 'Professional {service} installation for {city} residents and businesses'
    },
    sections: [
      'local-hero',
      'service-benefits',
      'local-climate',
      'neighborhoods',
      'process',
      'local-testimonials',
      'pricing',
      'other-services',
      'cta'
    ]
  },

  // SUPPORT PAGES
  support: {
    privacy: {
      meta: {
        title: 'Privacy Policy - Valley Insulation Pros',
        description: 'Privacy policy for Valley Insulation Pros. How we collect, use, and protect your information.',
        keywords: 'privacy policy, data protection, CCPA compliance'
      }
    },
    terms: {
      meta: {
        title: 'Terms of Service - Valley Insulation Pros',
        description: 'Terms of service, warranties, and service agreements for Valley Insulation Pros.',
        keywords: 'terms of service, warranty information, service agreement'
      }
    },
    sitemap: {
      meta: {
        title: 'Sitemap - All Pages - Valley Insulation Pros',
        description: 'Complete sitemap of Valley Insulation Pros. Find all our service pages, area pages, and resources.',
        keywords: 'sitemap, site map, all pages'
      }
    }
  }
}

// Generate all 30 combo page configurations
export const generateComboPages = () => {
  const services = ['spray-foam', 'blown-in', 'attic', 'wall', 'commercial']
  const areas = ['mcallen', 'edinburg', 'brownsville', 'harlingen', 'mission', 'pharr']
  const combos = []

  services.forEach(service => {
    areas.forEach(area => {
      combos.push({
        url: `/services/${service}/${area}`,
        serviceId: service,
        areaId: area,
        priority: 0.7, // For sitemap
        changeFreq: 'monthly'
      })
    })
  })

  return combos
}

// Content variations to avoid duplication
export const contentVariations = {
  openings: [
    'Professional {service} services in {city}, TX',
    'Expert {service} installation for {city} residents',
    '{city}\'s trusted {service} contractors',
    'Top-rated {service} services in {city}',
    'Licensed {service} experts serving {city}'
  ],
  
  benefits: [
    'Save up to 40% on energy bills',
    'Reduce cooling costs by 35%',
    'Cut your energy expenses significantly',
    'Maximum energy efficiency guaranteed',
    'Lower your monthly utility bills'
  ],

  callToActions: [
    'Get Your Free {city} Quote Today',
    'Schedule Your Free {service} Estimate',
    'Call Now for {city} Service',
    'Get Started with Free Consultation',
    'Request Your Free Energy Audit'
  ],

  urgency: [
    'Same-day service available',
    'Emergency service for {city}',
    'Fast response in {city} area',
    'Serving {city} within 2 hours',
    'Immediate availability in {city}'
  ]
}

// SEO Schema templates
export const schemaTemplates = {
  localBusiness: (page) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valley Insulation Pros',
    image: 'https://rgvinsulation.com/logo.png',
    url: `https://rgvinsulation.com${page.url}`,
    telephone: '+19568540899',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: page.city,
      addressRegion: 'TX',
      addressCountry: 'US'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00'
    }
  }),

  service: (service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Valley Insulation Pros'
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas'
    },
    description: service.description
  }),

  faqPage: (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  })
}