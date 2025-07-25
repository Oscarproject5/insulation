// Security utilities for form handling and input sanitization

// DOMPurify alternative - lightweight sanitization
export const sanitizeHTML = (dirty) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return String(dirty).replace(reg, (match) => map[match]);
};

// Remove all HTML tags and dangerous characters
export const sanitizeInput = (input) => {
  if (!input) return '';
  
  return String(input)
    .trim()
    .replace(/<[^>]*>?/gm, '') // Remove HTML tags
    .replace(/[<>\"']/g, '') // Remove dangerous characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove inline event handlers
    .substring(0, 1000); // Limit length
};

// Validate and sanitize phone number
export const sanitizePhone = (phone) => {
  return String(phone).replace(/[^\d\s\-\(\)\.]/g, '');
};

// Validate and sanitize email
export const sanitizeEmail = (email) => {
  return String(email).toLowerCase().trim().substring(0, 254);
};

// Rate limiting implementation
class RateLimiter {
  constructor(maxRequests = 5, windowMs = 60000) {
    this.requests = new Map();
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(identifier) {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];
    
    // Clean old requests
    const validRequests = userRequests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    
    // Cleanup old entries periodically
    if (this.requests.size > 100) {
      this.cleanup();
    }
    
    return true;
  }

  cleanup() {
    const now = Date.now();
    for (const [key, requests] of this.requests.entries()) {
      const validRequests = requests.filter(time => now - time < this.windowMs);
      if (validRequests.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, validRequests);
      }
    }
  }

  getRemainingTime(identifier) {
    const userRequests = this.requests.get(identifier) || [];
    if (userRequests.length === 0) return 0;
    
    const oldestRequest = Math.min(...userRequests);
    const now = Date.now();
    const timeElapsed = now - oldestRequest;
    
    return Math.max(0, this.windowMs - timeElapsed);
  }
}

// Create rate limiter instance
export const formRateLimiter = new RateLimiter(3, 60000); // 3 requests per minute

// CSRF token generation
export const generateCSRFToken = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Validate CSRF token
export const validateCSRFToken = (token, storedToken) => {
  return token && storedToken && token === storedToken;
};

// Check for common XSS patterns
export const containsXSS = (input) => {
  const xssPatterns = [
    /<script[^>]*>[\s\S]*?<\/script>/gi,
    /<iframe[^>]*>[\s\S]*?<\/iframe>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<img[^>]*onerror\s*=/gi,
    /<svg[^>]*onload\s*=/gi,
    /eval\s*\(/gi,
    /expression\s*\(/gi,
  ];
  
  return xssPatterns.some(pattern => pattern.test(input));
};

// Validate form data with security checks
export const validateFormSecurity = (formData) => {
  const errors = {};
  
  // Check all fields for XSS
  for (const [key, value] of Object.entries(formData)) {
    if (value && containsXSS(String(value))) {
      errors[key] = 'Invalid characters detected';
    }
  }
  
  // Additional validation
  if (formData.email && formData.email.length > 254) {
    errors.email = 'Email too long';
  }
  
  if (formData.message && formData.message.length > 1000) {
    errors.message = 'Message too long (max 1000 characters)';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Secure local storage wrapper
export const secureStorage = {
  setItem: (key, value) => {
    try {
      const encrypted = btoa(JSON.stringify(value));
      localStorage.setItem(key, encrypted);
    } catch (error) {
      console.error('Storage error:', error);
    }
  },
  
  getItem: (key) => {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;
      return JSON.parse(atob(encrypted));
    } catch (error) {
      console.error('Storage error:', error);
      return null;
    }
  },
  
  removeItem: (key) => {
    localStorage.removeItem(key);
  }
};

// IP-based fingerprinting (client-side approximation)
export const getFingerprint = () => {
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timestamp: Date.now()
  };
  
  return btoa(JSON.stringify(fingerprint));
};

// Honeypot field checker
export const isHoneypotFilled = (honeypotValue) => {
  return honeypotValue && honeypotValue.trim().length > 0;
};

// Time-based validation (forms submitted too quickly are likely bots)
export const isSubmittedTooQuickly = (startTime, minSeconds = 3) => {
  const elapsedSeconds = (Date.now() - startTime) / 1000;
  return elapsedSeconds < minSeconds;
};