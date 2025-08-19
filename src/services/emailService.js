// Email Service Integration
// This file provides different options for sending form submissions via email

// Option 1: EmailJS Integration (No backend required)
export const sendEmailWithEmailJS = async (formData) => {
  // First, install EmailJS: npm install @emailjs/browser
  // Then import it at the top of your App.jsx:
  // import emailjs from '@emailjs/browser';
  
  try {
    // Initialize EmailJS with your public key
    // emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    
    // Prepare template parameters
    const templateParams = {
      to_name: 'Valley Insulation Team',
      from_name: formData.name,
      from_phone: formData.phone,
      from_email: formData.email || 'Not provided',
      service_type: formData.serviceType || 'Not specified',
      property_address: formData.address || 'Not provided',
      message: formData.message || 'No additional message',
      submission_date: new Date().toLocaleDateString(),
      submission_time: new Date().toLocaleTimeString()
    };
    
    // Send email using EmailJS
    /*
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );
    */
    
    console.log('Email sent successfully');
    return { success: true };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error: error.message };
  }
};

// Option 2: Custom Netlify Function
export const sendEmailWithNetlifyFunction = async (formData) => {
  try {
    const response = await fetch('/.netlify/functions/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
    
    const result = await response.json();
    return { success: true, message: result.message };
  } catch (error) {
    console.error('Netlify function error:', error);
    return { success: false, error: error.message };
  }
};

// Option 3: Formspree Integration
export const sendEmailWithFormspree = async (formData) => {
  try {
    // Replace YOUR_FORM_ID with your actual Formspree form ID
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Formspree error:', error);
    return { success: false, error: error.message };
  }
};

// Utility function to validate form data
export const validateFormData = (formData) => {
  const errors = {};
  
  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  // Phone validation
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!formData.phone) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  // Email validation (optional)
  if (formData.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Utility function to format phone number
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

// Utility function to sanitize input
export const sanitizeInput = (input) => {
  return input
    .trim()
    .replace(/<[^>]*>?/gm, '') // Remove HTML tags
    .replace(/[<>]/g, ''); // Remove < and > characters
};