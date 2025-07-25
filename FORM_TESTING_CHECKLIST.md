# Form Testing Checklist

## Pre-Deployment Testing

### 1. Local Testing with Netlify Dev
```bash
# Install Netlify CLI if not already installed
npm install -g netlify-cli

# Run local development with Netlify forms support
netlify dev
```

### 2. Form Validation Tests

#### Desktop Form Tests
- [ ] Submit with all fields filled correctly
- [ ] Submit with only required fields (name, phone)
- [ ] Submit with missing name - should show error
- [ ] Submit with missing phone - should show error
- [ ] Submit with invalid phone format:
  - [ ] Too few digits: "956-123"
  - [ ] Too many digits: "956-123-45678"
  - [ ] Letters: "956-ABC-1234"
- [ ] Submit with invalid email format (if provided):
  - [ ] Missing @: "testexample.com"
  - [ ] Missing domain: "test@"
  - [ ] Invalid domain: "test@example"
- [ ] Submit with very long text in message field
- [ ] Submit with special characters in all fields
- [ ] Test rapid submissions (spam protection)

#### Mobile Form Tests
- [ ] Test progressive form flow (3 steps)
- [ ] Navigate back and forth between steps
- [ ] Validate that Step 1 fields are required before proceeding
- [ ] Test form on actual mobile devices:
  - [ ] iPhone Safari
  - [ ] Android Chrome
  - [ ] iPad
- [ ] Test touch interactions and swipe gestures
- [ ] Test keyboard appearance and dismissal
- [ ] Test form in landscape orientation

### 3. Success/Error State Tests
- [ ] Verify success message appears after submission
- [ ] Verify error message appears on failure
- [ ] Verify form resets after successful submission
- [ ] Test network failure scenarios (offline submission)

### 4. Accessibility Tests
- [ ] Navigate form using only keyboard (Tab, Enter)
- [ ] Test with screen reader
- [ ] Verify all form fields have proper labels
- [ ] Check color contrast ratios
- [ ] Test form at 200% zoom

### 5. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

## Post-Deployment Testing

### 1. Netlify Forms Configuration
- [ ] Deploy to Netlify
- [ ] Verify forms appear in Netlify dashboard
- [ ] Submit test form on live site
- [ ] Check form submission appears in Netlify Forms dashboard
- [ ] Configure email notifications in Netlify settings
- [ ] Test email delivery to configured addresses

### 2. Email Testing
- [ ] Verify email arrives within 5 minutes
- [ ] Check email formatting (HTML and plain text)
- [ ] Verify all form fields appear in email
- [ ] Test email on different clients:
  - [ ] Gmail
  - [ ] Outlook
  - [ ] Apple Mail
  - [ ] Mobile email apps
- [ ] Check spam folder if email doesn't arrive
- [ ] Verify reply-to address works correctly

### 3. Performance Testing
- [ ] Test form submission speed
- [ ] Monitor form conversion rates
- [ ] Check form analytics (if configured)
- [ ] Test under high load (multiple simultaneous submissions)

### 4. Security Testing
- [ ] Attempt XSS injection in form fields
- [ ] Test SQL injection attempts
- [ ] Verify honeypot field prevents bot submissions
- [ ] Check that sensitive data is not logged
- [ ] Verify HTTPS is enforced

## Test Data Examples

### Valid Test Data
```
Name: Maria Garcia
Phone: (956) 123-4567
Email: maria.garcia@email.com
Service: Spray Foam Insulation
Address: 123 Main St, McAllen, TX 78501
Message: I need insulation for my 2000 sq ft home. High energy bills.
```

### Edge Case Test Data
```
Name: José María González-Hernández
Phone: 956.123.4567 (test different formats)
Email: test+tag@subdomain.example.com
Service: Not Sure - Need Consultation
Address: 456 North Street, Apt #B2, Edinburg, TX 78539
Message: Testing special characters: ñ, á, é, í, ó, ú, ¿, ¡, $, &, @
```

### Invalid Test Data
```
Name: A (too short)
Phone: 123 (invalid)
Email: not-an-email
Address: <script>alert('test')</script>
Message: [Test with 5000+ characters]
```

## Troubleshooting Common Issues

### Form Not Appearing in Netlify
1. Check that `netlify.toml` exists in root
2. Verify `data-netlify="true"` attribute
3. Ensure form has unique `name` attribute
4. Check build logs for errors

### Emails Not Arriving
1. Check Netlify Forms settings
2. Verify email addresses are correct
3. Check spam/junk folders
4. Test with different email providers
5. Check Netlify function logs (if using custom handler)

### Validation Not Working
1. Verify JavaScript is loading
2. Check browser console for errors
3. Test in incognito/private mode
4. Clear browser cache

### Mobile Issues
1. Test on real devices, not just browser emulation
2. Check viewport meta tag
3. Verify touch event handlers
4. Test with slow network connection

## Sign-off Checklist
- [ ] All tests passed
- [ ] Email notifications configured
- [ ] Client has tested and approved
- [ ] Documentation provided to client
- [ ] Backup form handler configured (if needed)
- [ ] Analytics tracking implemented
- [ ] Form data retention policy communicated