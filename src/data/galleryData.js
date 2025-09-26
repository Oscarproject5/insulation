// Import gallery images
import gallery1 from '../assets/gallery/472746154_122136847520534988_5778636508616515403_n.jpg'
import gallery2 from '../assets/gallery/486384398_122156566298534988_3994255747913567531_n.jpg'
import gallery3 from '../assets/gallery/499407396_122169689408534988_1251116691146621951_n.jpg'
import gallery4 from '../assets/gallery/546621496_122191608854534988_8772467868178985762_n.jpg'
import gallery5 from '../assets/gallery/547922943_122191608386534988_5644855554410948122_n.jpg'
import gallery6 from '../assets/gallery/WhatsApp Image 2025-09-24 at 12.32.35_30cb3a56.jpg'
import gallery7 from '../assets/gallery/WhatsApp Image 2025-09-24 at 15.30.08_4095485a.jpg'

// Gallery data using professional project images
export const sampleGalleryImages = [
  {
    image: gallery1,
    title: 'Professional Spray Foam Installation',
    description: 'Expert application of high-performance spray foam insulation'
  },
  {
    image: gallery2,
    title: 'Attic Insulation Project',
    description: 'Complete attic insulation for maximum energy efficiency'
  },
  {
    image: gallery3,
    title: 'Commercial Insulation Work',
    description: 'Large-scale commercial building insulation installation'
  },
  {
    image: gallery4,
    title: 'Wall Insulation Completion',
    description: 'Interior wall insulation for optimal thermal performance'
  },
  {
    image: gallery5,
    title: 'Quality Workmanship',
    description: 'Detailed insulation work showcasing professional standards'
  },
  {
    image: gallery6,
    title: 'Recent Project Completion',
    description: 'Finished insulation project with excellent coverage'
  },
  {
    image: gallery7,
    title: 'Professional Installation',
    description: 'Expert insulation installation by our certified team'
  }
]

// Gallery configurations for different use cases
export const galleryConfigs = {
  // Standard responsive gallery
  standard: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    large: 4
  },

  // Compact gallery for sidebars or smaller sections
  compact: {
    mobile: 1,
    tablet: 2,
    desktop: 2,
    large: 3
  },

  // Feature gallery with larger images
  featured: {
    mobile: 1,
    tablet: 1,
    desktop: 2,
    large: 2
  }
}