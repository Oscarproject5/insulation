# Netlify Forms Setup

The contact forms are now configured to work with Netlify Forms.

## What I've Done:

1. **Updated the form submission handler** in `src/App.jsx`:
   - Modified `handleSubmit` to send data to Netlify's form handler
   - Uses the Netlify Forms API endpoint

2. **Added Netlify form attributes**:
   - Added `data-netlify="true"` to enable Netlify Forms
   - Added `data-netlify-honeypot="bot-field"` for spam protection
   - Added hidden `form-name` input field
   - Added hidden `bot-field` for honeypot spam protection

3. **Created static form detection file** (`public/forms.html`):
   - Netlify needs to detect forms at build time
   - This file contains hidden versions of both forms (mobile and desktop)

## How It Works:

1. When a user submits the form, it sends data to Netlify
2. Netlify stores the submission and can notify you via:
   - Email notifications
   - Webhook integrations
   - Netlify dashboard

## To Complete Setup:

1. **Deploy to Netlify**:
   ```bash
   git add .
   git commit -m "Add Netlify Forms integration"
   git push
   ```

2. **Configure notifications** (after deployment):
   - Go to Netlify Dashboard > Site Settings > Forms
   - Set up email notifications to receive form submissions
   - You can also integrate with services like Slack, Zapier, etc.

## Testing:

- Forms will only work on the deployed Netlify site
- They won't work in local development
- Check the Netlify dashboard under "Forms" to see submissions

## Free Tier Limits:

- 100 form submissions per month
- Unlimited forms
- Spam filtering included

## Form Names:

- Desktop form: `quote-form`
- Mobile form: `quote-form-mobile`

You'll see these names in your Netlify dashboard to differentiate submissions.