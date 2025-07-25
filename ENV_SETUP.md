# Environment Variables Setup

## Quick Start

1. The `.env` file has been created with your API key
2. The app is already configured to use environment variables
3. No additional setup needed!

## Environment Variables

```bash
# Weather API Configuration
VITE_OPENWEATHER_API_KEY=your_api_key_here
VITE_WEATHER_CITY=McAllen,TX,US

# API Update Interval (in milliseconds)
VITE_WEATHER_UPDATE_INTERVAL=300000
```

## Security Notes

- ✅ `.env` is already in `.gitignore` - won't be committed
- ✅ API key is now stored securely
- ✅ Using Vite's `VITE_` prefix for client-side env vars

## For Production Deployment

### Netlify
Add these in Netlify dashboard under Site Settings > Environment Variables

### Vercel
Add in Vercel dashboard under Settings > Environment Variables

### Other Hosts
Check your hosting provider's documentation for setting environment variables

## Testing Different Cities

You can change the city in `.env`:
```bash
VITE_WEATHER_CITY=Brownsville,TX,US
VITE_WEATHER_CITY=Harlingen,TX,US
VITE_WEATHER_CITY=Edinburg,TX,US
```

## API Limits

- Free tier: 1,000 calls/day
- Current usage: ~288 calls/day (every 5 minutes)
- Plenty of headroom!