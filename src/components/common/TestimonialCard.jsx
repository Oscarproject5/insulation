import React from 'react'
import { Star, Quote } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-orange-100" />
      
      <div className="flex items-center gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-4 relative z-10">
        "{testimonial.text}"
      </p>
      
      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-600">{testimonial.location}</p>
        <p className="text-xs text-orange-500 mt-1">{testimonial.service}</p>
      </div>
    </div>
  )
}

export default TestimonialCard