import React from 'react'
import Gallery from './Gallery'
import { sampleGalleryImages, galleryConfigs } from '../../data/galleryData'

const GallerySection = ({
  title = "Our Work",
  subtitle = "See our completed projects",
  images = sampleGalleryImages,
  config = galleryConfigs.standard,
  maxImages = null,
  className = ""
}) => {
  const displayImages = maxImages ? images.slice(0, maxImages) : images

  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Gallery */}
        <Gallery
          images={displayImages}
          columns={config}
        />
      </div>
    </section>
  )
}

export default GallerySection