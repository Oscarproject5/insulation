// Netlify Function for handling form submissions with email
// This is an alternative to using Netlify Forms if you need more control

// Simple in-memory rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 3;

function checkRateLimit(ip) {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  
  // Clean old requests
  const validRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (validRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  validRequests.push(now);
  rateLimitMap.set(ip, validRequests);
  
  // Cleanup old IPs periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.every(time => now - time > RATE_LIMIT_WINDOW)) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  return true;
}

// Input sanitization
function sanitizeInput(input) {
  if (!input) return '';
  return String(input)
    .trim()
    .replace(/<[^>]*>?/gm, '')
    .replace(/[<>\"']/g, '')
    .replace(/javascript:/gi, '')
    .substring(0, 1000);
}

exports.handler = async (event, context) => {
  // Security headers
  const headers = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Type': 'application/json'
  };

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }
  
  // Get client IP
  const clientIp = event.headers['client-ip'] || 
                   event.headers['x-forwarded-for'] || 
                   context.clientContext?.ip || 
                   'unknown';
  
  // Check rate limit
  if (!checkRateLimit(clientIp)) {
    return {
      statusCode: 429,
      headers,
      body: JSON.stringify({ error: 'Too many requests. Please try again later.' })
    };
  }

  // Parse the form data
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid request body' })
    };
  }
  
  // Sanitize all inputs
  const sanitizedData = {
    name: sanitizeInput(data.name),
    phone: sanitizeInput(data.phone),
    email: sanitizeInput(data.email),
    address: sanitizeInput(data.address),
    serviceType: sanitizeInput(data.serviceType),
    message: sanitizeInput(data.message)
  };
  
  data = sanitizedData;

  // Validate required fields
  if (!data.name || !data.phone) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Name and phone number are required' })
    };
  }

  // Validate phone number format
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid phone number format' })
    };
  }

  // Validate email format if provided
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }
  }

  // Here you would integrate with your email service
  // Example with SendGrid (requires: npm install @sendgrid/mail)
  /*
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.NOTIFICATION_EMAIL || 'info@rgvinsulation.com',
    from: 'noreply@rgvinsulation.com',
    replyTo: data.email || 'noreply@rgvinsulation.com',
    subject: `New Quote Request from ${data.name}`,
    text: `
      New quote request received:
      
      Name: ${data.name}
      Phone: ${data.phone}
      Email: ${data.email || 'Not provided'}
      Service Type: ${data.serviceType || 'Not specified'}
      Address: ${data.address || 'Not provided'}
      Message: ${data.message || 'No message'}
      
      Submitted at: ${new Date().toLocaleString()}
    `,
    html: `
      <h2>New Quote Request</h2>
      <table style="width: 100%; max-width: 600px; font-family: Arial, sans-serif;">
        <tr>
          <td style="padding: 10px; background: #f5f5f5;"><strong>Name:</strong></td>
          <td style="padding: 10px;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f5f5f5;"><strong>Phone:</strong></td>
          <td style="padding: 10px;"><a href="tel:${data.phone}">${data.phone}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f5f5f5;"><strong>Email:</strong></td>
          <td style="padding: 10px;">${data.email ? `<a href="mailto:${data.email}">${data.email}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f5f5f5;"><strong>Service Type:</strong></td>
          <td style="padding: 10px;">${data.serviceType || 'Not specified'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f5f5f5;"><strong>Address:</strong></td>
          <td style="padding: 10px;">${data.address || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f5f5f5;"><strong>Message:</strong></td>
          <td style="padding: 10px;">${data.message || 'No message'}</td>
        </tr>
      </table>
      <hr>
      <p style="color: #666; font-size: 12px;">Submitted on ${new Date().toLocaleString()}</p>
    `
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send notification email' })
    };
  }
  */

  // For now, just log the submission (in production, remove this)
  console.log('Form submission received:', {
    ...data,
    timestamp: new Date().toISOString()
  });

  // Return success response
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      success: true,
      message: 'Thank you for your submission. We will contact you within 24 hours.'
    })
  };
};