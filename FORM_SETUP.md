# RGV Insulation Experts - Form Setup Guide

This guide covers the complete form setup for your landing page, including backend processing, email notifications, and deployment configuration.

## Current Form Implementation

Your landing page has two forms configured for Netlify Forms:
- **Desktop Form**: `quote-form`
- **Mobile Form**: `quote-form-mobile`

Both forms are properly configured with:
- ✅ `data-netlify="true"` attribute
- ✅ `data-netlify-honeypot="bot-field"` for spam protection
- ✅ Hidden `form-name` input fields
- ✅ Form validation (client-side)
- ✅ Success/error message handling

## Backend Setup Options

### Option 1: Netlify Forms (Recommended - Currently Configured)

Your forms are already set up to work with Netlify Forms. Here's what you need to do:

1. **Deploy to Netlify**:
   ```bash
   # Build your project
   npm run build
   
   # Deploy using Netlify CLI
   netlify deploy --prod
   
   # Or drag and drop the 'dist' folder to Netlify dashboard
   ```

2. **Configure Email Notifications**:
   - Go to your Netlify site dashboard
   - Navigate to Forms → Settings → Form notifications
   - Add email notification:
     - Email to notify: your-email@example.com
     - You can add multiple email addresses

3. **View Form Submissions**:
   - Netlify Dashboard → Forms
   - Download as CSV or integrate with services like Zapier

4. **Netlify Forms Pricing**:
   - Free tier: 100 submissions/month
   - Pro tier: 1,000 submissions/month
   - Business tier: Unlimited

### Option 2: Custom Backend with Email Service

If you need more control or want to avoid Netlify's submission limits:

#### A. Using Netlify Functions (Serverless)

1. **Install dependencies**:
   ```bash
   npm install @sendgrid/mail
   # or
   npm install nodemailer
   ```

2. **Create Netlify Function** (`netlify/functions/submit-form.js`):
   ```javascript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   exports.handler = async (event, context) => {
     if (event.httpMethod !== 'POST') {
       return { statusCode: 405, body: 'Method Not Allowed' };
     }

     try {
       const data = JSON.parse(event.body);
       
       // Validate form data
       if (!data.name || !data.phone) {
         return { 
           statusCode: 400, 
           body: JSON.stringify({ error: 'Required fields missing' })
         };
       }

       // Send email
       const msg = {
         to: 'your-email@example.com',
         from: 'noreply@rgvinsulation.com',
         subject: 'New Quote Request - RGV Insulation',
         html: `
           <h2>New Quote Request</h2>
           <p><strong>Name:</strong> ${data.name}</p>
           <p><strong>Phone:</strong> ${data.phone}</p>
           <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
           <p><strong>Service:</strong> ${data.serviceType || 'Not specified'}</p>
           <p><strong>Address:</strong> ${data.address || 'Not provided'}</p>
           <p><strong>Message:</strong> ${data.message || 'No message'}</p>
           <hr>
           <p><small>Submitted on ${new Date().toLocaleString()}</small></p>
         `
       };

       await sgMail.send(msg);

       return {
         statusCode: 200,
         body: JSON.stringify({ success: true })
       };
     } catch (error) {
       console.error('Error:', error);
       return {
         statusCode: 500,
         body: JSON.stringify({ error: 'Failed to submit form' })
       };
     }
   };
   ```

3. **Update form submission in App.jsx**:
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     
     if (!validateForm()) return;
     
     setIsSubmitting(true);
     
     try {
       const response = await fetch('/.netlify/functions/submit-form', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
       });
       
       if (!response.ok) throw new Error('Submission failed');
       
       // Handle success
     } catch (error) {
       // Handle error
     }
   };
   ```

#### B. Using External Services

**1. EmailJS (No Backend Required)**:
```javascript
// Install: npm install @emailjs/browser

import emailjs from '@emailjs/browser';

const sendEmail = async (formData) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
  } catch (error) {
    console.error('Email error:', error);
  }
};
```

**2. Formspree**:
```javascript
// Update form action
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* Your form fields */}
</form>
```

## Environment Variables Setup

Create a `.env` file in your project root:

```env
# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key

# Or SMTP Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# EmailJS (if using)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Email Templates

### Professional Email Template (HTML):
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #ff6b35 0%, #f23005 100%); 
              color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; margin-top: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; margin-left: 10px; }
    .footer { text-align: center; margin-top: 30px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Quote Request</h1>
      <p>RGV Insulation Experts</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">{{name}}</span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">{{phone}}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">{{email}}</span>
      </div>
      <div class="field">
        <span class="label">Service Type:</span>
        <span class="value">{{serviceType}}</span>
      </div>
      <div class="field">
        <span class="label">Address:</span>
        <span class="value">{{address}}</span>
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="value">{{message}}</div>
      </div>
    </div>
    <div class="footer">
      <p>Submitted on {{date}} at {{time}}</p>
    </div>
  </div>
</body>
</html>
```

## Security Best Practices

1. **Input Validation**:
   ```javascript
   const sanitizeInput = (input) => {
     return input.trim().replace(/<[^>]*>?/gm, '');
   };
   
   const validatePhone = (phone) => {
     return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
   };
   ```

2. **Rate Limiting** (for custom backend):
   ```javascript
   const rateLimit = new Map();
   
   const checkRateLimit = (ip) => {
     const now = Date.now();
     const windowMs = 15 * 60 * 1000; // 15 minutes
     const limit = 5; // max 5 requests per window
     
     if (!rateLimit.has(ip)) {
       rateLimit.set(ip, []);
     }
     
     const requests = rateLimit.get(ip).filter(time => now - time < windowMs);
     
     if (requests.length >= limit) {
       return false;
     }
     
     requests.push(now);
     rateLimit.set(ip, requests);
     return true;
   };
   ```

3. **CORS Configuration** (Netlify):
   ```toml
   # netlify.toml
   [[headers]]
     for = "/*"
     [headers.values]
       Access-Control-Allow-Origin = "https://yourdomain.com"
   ```

## Testing Your Forms

1. **Local Testing**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Run with Netlify Dev (includes form handling)
   netlify dev
   ```

2. **Test Scenarios**:
   - ✅ Valid submission
   - ✅ Missing required fields
   - ✅ Invalid phone number
   - ✅ Invalid email format
   - ✅ Long message text
   - ✅ Special characters
   - ✅ Rapid submissions (rate limiting)

3. **Mobile Testing**:
   - Test form on actual mobile devices
   - Test progressive form steps
   - Test touch interactions
   - Test keyboard behavior

## Monitoring & Analytics

1. **Track Form Submissions**:
   ```javascript
   // Google Analytics 4
   gtag('event', 'form_submit', {
     'form_name': 'quote_form',
     'service_type': formData.serviceType
   });
   ```

2. **Monitor Conversion Rate**:
   - Set up goals in Google Analytics
   - Track form abandonment
   - A/B test form variations

## Troubleshooting

### Common Issues:

1. **Form not submitting to Netlify**:
   - Ensure `netlify.toml` is in root directory
   - Check form has `data-netlify="true"`
   - Verify hidden `form-name` input matches form name

2. **Not receiving emails**:
   - Check spam folder
   - Verify email configuration in Netlify dashboard
   - Test with different email providers

3. **CORS errors**:
   - Add proper headers in `netlify.toml`
   - Use relative URLs for API calls

## Next Steps

1. Deploy to Netlify
2. Configure email notifications
3. Test form submissions
4. Set up Google Analytics
5. Monitor form performance
6. Consider adding:
   - SMS notifications (Twilio)
   - CRM integration (HubSpot, Salesforce)
   - Calendar booking integration
   - Auto-responder emails

## Support

For issues or questions:
- Netlify Forms: https://docs.netlify.com/forms/setup/
- SendGrid: https://docs.sendgrid.com/
- EmailJS: https://www.emailjs.com/docs/