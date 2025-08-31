// Google Ads Enhanced Conversion Tracking Utilities

/**
 * Format phone number for Google Ads enhanced conversions
 * Removes all non-numeric characters and adds country code if missing
 */
export const formatPhoneForGoogle = (phone) => {
  if (!phone) return undefined;
  
  // Remove all non-numeric characters
  let cleaned = phone.replace(/\D/g, '');
  
  // Add US country code if not present
  if (cleaned.length === 10) {
    cleaned = '1' + cleaned;
  }
  
  // Add + prefix for international format
  return '+' + cleaned;
};

/**
 * Hash user data for enhanced conversions (if needed in future)
 * Google can accept both hashed and unhashed data
 */
export const hashUserData = async (data) => {
  // For now, return unhashed data as Google accepts it
  // In future, can implement SHA256 hashing if required
  return data;
};

/**
 * Track form submission with enhanced conversion data
 */
export const trackFormConversion = (formData, conversionLabel = '5yfACPbzwf0aEPO0rcpA') => {
  if (!window.gtag) {
    console.warn('Google gtag not loaded');
    return;
  }

  // Prepare enhanced conversion data
  const enhancedData = {
    'send_to': `AW-17335802483/${conversionLabel}`,
    'user_data': {}
  };

  // Add email if provided
  if (formData.email) {
    enhancedData.user_data.email = formData.email.toLowerCase().trim();
  }

  // Add phone if provided
  if (formData.phone) {
    enhancedData.user_data.phone_number = formatPhoneForGoogle(formData.phone);
  }

  // Add name and address data
  if (formData.name) {
    const nameParts = formData.name.trim().split(' ');
    enhancedData.user_data.address = {
      first_name: nameParts[0] || undefined,
      last_name: nameParts.slice(1).join(' ') || undefined
    };
  } else {
    enhancedData.user_data.address = {};
  }

  // Add address details
  if (formData.address) {
    enhancedData.user_data.address.street = formData.address.trim();
  }
  
  if (formData.city) {
    enhancedData.user_data.address.city = formData.city;
  }
  
  // Add state and country (RGV specific)
  enhancedData.user_data.address.region = 'TX';
  enhancedData.user_data.address.country = 'US';
  
  if (formData.zip) {
    enhancedData.user_data.address.postal_code = formData.zip;
  }

  // Send conversion event with enhanced data
  window.gtag('event', 'conversion', enhancedData);
  
  // Also track for Google Analytics
  window.gtag('event', 'form_submit', {
    'event_category': 'engagement',
    'event_label': 'quote_form',
    'service_type': formData.serviceType || 'not_specified',
    'city': formData.city || 'not_specified',
    'value': 1
  });

  // Track additional form details for debugging
  window.gtag('event', 'enhanced_conversion_debug', {
    'event_category': 'conversion_tracking',
    'event_label': 'form_data_sent',
    'has_email': !!formData.email,
    'has_phone': !!formData.phone,
    'has_address': !!formData.address,
    'has_name': !!formData.name
  });
};

/**
 * Track phone call conversions
 */
export const trackPhoneConversion = (phoneNumber) => {
  if (!window.gtag) {
    console.warn('Google gtag not loaded');
    return;
  }

  // Track phone call conversion
  window.gtag('event', 'conversion', {
    'send_to': 'AW-17335802483/r6IPCNyJroobEPO0rcpA',
    'value': 1.0,
    'currency': 'USD'
  });

  // Also track for analytics
  window.gtag('event', 'phone_call', {
    'event_category': 'engagement',
    'event_label': phoneNumber || 'direct_call',
    'value': 1
  });
};

/**
 * Initialize enhanced conversions on page load
 */
export const initEnhancedConversions = () => {
  // Check if gtag is available
  if (!window.gtag) {
    console.warn('Google gtag not available for enhanced conversions');
    return;
  }

  // Set global enhanced conversions configuration
  window.gtag('set', 'user_data', {
    'mode': 'manual'
  });

  console.log('Enhanced conversions initialized');
};

/**
 * Debug function to test conversion tracking
 */
export const testConversionTracking = () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '(956) 123-4567',
    address: '123 Test St',
    city: 'McAllen',
    serviceType: 'Spray Foam Insulation'
  };

  console.log('Testing conversion tracking with:', testData);
  trackFormConversion(testData);
  console.log('Test conversion event sent - check Google Ads Tag Assistant');
};

// Export for use in window object for debugging
if (typeof window !== 'undefined') {
  window.testConversionTracking = testConversionTracking;
}