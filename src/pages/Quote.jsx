import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  DollarSign,
  User,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import './Quote.css';
import EnhancedHeader from '../components/layout/EnhancedHeader';
import PageFooter from '../components/layout/PageFooter';
import MobileBottomNav from '../components/common/MobileBottomNav';
import { validateFormData, sanitizeInput, formatPhoneNumber, sendEmailWithEmailJS } from '../services/emailService';

const Quote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    address: '',
    city: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    
    if (name === 'phone') {
      processedValue = formatPhoneNumber(value);
    } else if (name === 'name' || name === 'address' || name === 'message') {
      processedValue = sanitizeInput(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const formErrors = {};
    
    // Validate required fields
    const { isValid, errors: validationErrors } = validateFormData({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || 'placeholder@email.com' // Email is optional
    });
    
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.phone) formErrors.phone = 'Phone is required';
    if (!formData.serviceType) formErrors.serviceType = 'Please select a service';
    if (!formData.address) formErrors.address = 'Address is required';
    if (!formData.city) formErrors.city = 'Please select a city';
    
    // Add validation errors
    if (!isValid && formData.email) {
      Object.assign(formErrors, validationErrors);
    }
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await sendEmailWithEmailJS(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            email: '',
            serviceType: '',
            address: '',
            city: '',
            message: ''
          });
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <EnhancedHeader />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Page Header - Simplified */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Get Your Free {isMobile && <br />} Insulation Quote
            </h1>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {isMobile ? 'Quick form • 24-hour response' : 'Complete our quick form to receive a detailed estimate within 24 hours.'}
            </p>
          </div>

          {/* Benefits Bar - Hide on mobile */}
          {!isMobile && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <DollarSign className="w-5 h-5" />, text: 'Free Estimate' },
                { icon: <Clock className="w-5 h-5" />, text: '24-Hour Response' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'No Obligation' },
                { icon: <Phone className="w-5 h-5" />, text: 'Expert Consultation' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm">
                  <span className="text-orange-500">{benefit.icon}</span>
                  <span className="font-medium text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          )}

          {/* Form Container - Single Page Form */}
          <div className="max-w-2xl mx-auto">
            <div className={`bg-white ${isMobile ? 'rounded-xl shadow-lg p-6' : 'rounded-2xl shadow-xl p-8 md:p-12'}`}>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Phone Row */}
                <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-6'}`}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      {!isMobile && <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />}
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        className={`w-full ${isMobile ? 'px-4' : 'pl-10 pr-4'} py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      {!isMobile && <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />}
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(956) 123-4567"
                        className={`w-full ${isMobile ? 'px-4' : 'pl-10 pr-4'} py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    {!isMobile && <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />}
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`w-full ${isMobile ? 'px-4' : 'pl-10 pr-4'} py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none ${
                      errors.serviceType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service...</option>
                    <option value="Spray Foam Insulation">Spray Foam Insulation</option>
                    <option value="Blown-In Insulation">Blown-In Insulation</option>
                    <option value="Attic Insulation">Attic Insulation</option>
                    <option value="Wall Insulation">Wall Insulation</option>
                    <option value="Commercial Insulation">Commercial Insulation</option>
                    <option value="Insulation Removal">Insulation Removal</option>
                    <option value="Energy Audit">Energy Audit</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.serviceType && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                {/* Address and City */}
                <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-6'}`}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Address *
                    </label>
                    <div className="relative">
                      {!isMobile && <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />}
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Main St"
                        className={`w-full ${isMobile ? 'px-4' : 'pl-10 pr-4'} py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                          errors.address ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.address && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select city...</option>
                      <option value="McAllen">McAllen</option>
                      <option value="Edinburg">Edinburg</option>
                      <option value="Mission">Mission</option>
                      <option value="Pharr">Pharr</option>
                      <option value="Brownsville">Brownsville</option>
                      <option value="Harlingen">Harlingen</option>
                      <option value="Weslaco">Weslaco</option>
                      <option value="San Juan">San Juan</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.city && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.city}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <div className="relative">
                    {!isMobile && <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />}
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={4}
                      className={`w-full ${isMobile ? 'px-4' : 'pl-10 pr-4'} py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 ${
                    isMobile ? 'py-3 text-base' : 'py-4 text-lg'
                  } bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get Free Quote
                      <CheckCircle className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-900">Quote Request Submitted!</p>
                      <p className="text-sm text-green-700 mt-1">
                        We'll contact you within 24 hours with your estimate.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-semibold text-red-900">Submission Error</p>
                      <p className="text-sm text-red-700 mt-1">
                        Please try again or call us at (956) 854-0899.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Alternative - Responsive styling */}
            <div className="mt-8 text-center">
              <p className={`text-gray-600 mb-4 ${isMobile ? 'text-sm' : ''}`}>Prefer to talk to someone directly?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:9568540899"
                  className={`inline-flex items-center justify-center gap-2 ${isMobile ? 'px-5 py-2.5 text-sm' : 'px-6 py-3'} bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all`}
                >
                  <Phone className="w-5 h-5" />
                  Call (956) 854-0899
                </a>
                <a
                  href="mailto:info@rgvinsulation.com"
                  className={`inline-flex items-center justify-center gap-2 ${isMobile ? 'px-5 py-2.5 text-sm' : 'px-6 py-3'} border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all`}
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PageFooter />
      
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav />}
    </>
  );
};

export default Quote;