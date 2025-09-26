import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'

const GalleryItem = ({ image, title, description, onClick, isLoading, onLoad }) => {
  // Only show top for the first spray foam installation image
  const objectPosition = title === 'Professional Spray Foam Installation' ? 'object-top' : 'object-center'

  return (
    <div
      className={`${siteConfig.cardStyles.default} cursor-pointer group overflow-hidden`}
      onClick={onClick}
    >
      <div className="relative h-64 lg:h-72 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${objectPosition} transition-all duration-500 group-hover:scale-110 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={onLoad}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>

      {(title || description) && (
        <div className="p-4">
          {title && (
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}
    </div>
  )
}

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrevious }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onPrevious()
          break
        case 'ArrowRight':
          onNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !images[currentIndex]) return null

  const currentImage = images[currentIndex]

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm" onClick={handleBackdropClick}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <span className="text-sm">
              {currentIndex + 1} of {images.length}
            </span>
            {currentImage.title && (
              <h2 className="text-lg font-semibold mt-1">{currentImage.title}</h2>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Image Container - Click anywhere in this area to close */}
      <div
        className="flex items-center justify-center h-full p-4 pt-20 pb-16"
        onClick={handleBackdropClick}
      >
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="max-w-full max-h-full object-contain cursor-pointer"
          onClick={handleBackdropClick}
        />
      </div>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-3 bg-black/30 rounded-full backdrop-blur-sm z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-3 bg-black/30 rounded-full backdrop-blur-sm z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
        {currentImage.description && (
          <p className="text-white text-center">{currentImage.description}</p>
        )}
      </div>
    </div>
  )
}

const Gallery = ({
  images = [],
  columns = { mobile: 1, tablet: 2, desktop: 3, large: 4 },
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [loadingStates, setLoadingStates] = useState(
    images.reduce((acc, _, index) => ({ ...acc, [index]: true }), {})
  )

  const handleImageLoad = (index) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }))
  }

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const gridClasses = `
    grid gap-6
    grid-cols-${columns.mobile}
    sm:grid-cols-${columns.tablet}
    lg:grid-cols-${columns.desktop}
    xl:grid-cols-${columns.large}
  `.replace(/\s+/g, ' ').trim()

  return (
    <>
      <div className={`${gridClasses} ${className}`}>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            image={image.image}
            title={image.title}
            description={image.description}
            onClick={() => openLightbox(index)}
            isLoading={loadingStates[index]}
            onLoad={() => handleImageLoad(index)}
          />
        ))}
      </div>

      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  )
}

export default Gallery