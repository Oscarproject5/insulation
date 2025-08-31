# Enhanced Conversions Testing Guide

## What's Been Fixed

We've implemented enhanced conversion tracking for your Google Ads contact form to properly track user data when forms are submitted. This will help Google Ads match conversions more accurately and improve your campaign optimization.

## Changes Made

### 1. **Enhanced Conversions Enabled in Google Tag** (`index.html`)
- Added `'allow_enhanced_conversions': true` to the Google Ads tag configuration
- This enables Google to accept user data for conversion matching

### 2. **Conversion Tracking Utility** (`src/utils/conversionTracking.js`)
- Created centralized conversion tracking functions
- Properly formats phone numbers for Google (adds country code)
- Sends structured user data with conversions
- Includes debugging capabilities

### 3. **Quote Form Updates** (`src/pages/Quote.jsx`)
- Form now sends enhanced conversion data on successful submission
- Includes: email, phone, name, address, city, state, country
- Also tracks form submissions in Google Analytics

### 4. **Phone Click Tracking** (`src/App.jsx`)
- Updated phone click handlers to use centralized tracking
- Properly tracks phone conversions with enhanced data

### 5. **App Initialization** (`src/main.jsx`)
- Enhanced conversions are initialized when the app loads
- Sets up proper configuration for manual user data mode

## Testing Instructions

### Step 1: Install Google Tag Assistant
1. Install the [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Enable it for your website

### Step 2: Test Form Submission
1. Open your website in Chrome with Tag Assistant enabled
2. Navigate to the Quote page (/quote)
3. Fill out the form with test data:
   - Name: Test User
   - Phone: (956) 123-4567
   - Email: test@example.com
   - Service Type: Spray Foam Insulation
   - Address: 123 Test St
   - City: McAllen
4. Submit the form

### Step 3: Verify in Tag Assistant
1. Click on the Tag Assistant icon
2. Look for the Google Ads tag (AW-17335802483)
3. Verify you see:
   - Conversion event fired
   - User data included (email, phone, address)
   - Status should be "No Issues Found" or "Working"

### Step 4: Test Phone Click Conversions
1. Click on any phone number link on the site
2. Check Tag Assistant for phone conversion tracking
3. Verify the conversion event is fired

### Step 5: Debug Mode Testing
1. Open browser console (F12)
2. Run: `window.testConversionTracking()`
3. Check console for debug output
4. Verify test conversion is sent to Google Ads

## Verification in Google Ads

### After 24-48 Hours:
1. Log into Google Ads
2. Go to Tools & Settings > Conversions
3. Click on your "Contact" conversion action
4. Check the "Diagnostics" tab
5. Enhanced conversions should show as "Recording conversions"

### What to Look For:
- **Status**: Should change from "Needs attention" to "Active" or "Recording"
- **Enhanced conversions**: Should show "Enabled" and "Recording"
- **Match rate**: After enough conversions, you'll see a match rate percentage

## Common Issues & Solutions

### Issue: Enhanced conversions not recording
**Solution**: 
- Ensure you're testing with real data (Google validates email/phone formats)
- Wait 24-48 hours for Google to process the data
- Check that JavaScript is enabled in the browser

### Issue: Low match rate
**Solution**:
- Ensure email addresses are valid
- Phone numbers should include area code
- Names should be complete (first and last)

### Issue: Tag Assistant shows errors
**Solution**:
- Clear browser cache and cookies
- Disable ad blockers temporarily
- Try in incognito mode

## Testing Checklist

- [ ] Google Tag Assistant installed
- [ ] Form submission sends enhanced data
- [ ] Phone clicks track conversions
- [ ] Console debug test works
- [ ] No JavaScript errors in console
- [ ] Tag Assistant shows conversions firing
- [ ] Enhanced data visible in Tag Assistant

## Production Monitoring

Once deployed:
1. Monitor Google Ads conversion tracking daily for first week
2. Check "Diagnostics" tab for any issues
3. Review match rates after 100+ conversions
4. Adjust data collection if match rate is below 30%

## Support

If you encounter issues:
1. Check browser console for errors
2. Use `window.testConversionTracking()` to debug
3. Review Tag Assistant output
4. Check Google Ads Diagnostics tab

## Notes

- Enhanced conversions use SHA256 hashing for privacy
- Google only uses this data for conversion matching
- User data is not stored or used for remarketing
- Complies with privacy regulations when properly disclosed