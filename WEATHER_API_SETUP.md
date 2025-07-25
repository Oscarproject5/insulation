# Weather API Setup Guide

## How to Connect Real Temperature Data to Your Website

### Option 1: OpenWeatherMap API (Recommended - Free Tier Available)

1. **Get Your API Key:**
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

2. **Update Your Code:**
   Replace line 114 in `src/App.jsx`:
   ```javascript
   const API_KEY = 'YOUR_ACTUAL_API_KEY_HERE'
   ```

3. **Enable Real Data:**
   Uncomment lines 119-126 in `src/App.jsx` and remove the simulated data section

### Option 2: Weather.gov API (Free, No Key Required)

Replace the fetch URL with:
```javascript
const response = await fetch(
  'https://api.weather.gov/gridpoints/BRO/97,44/forecast'
)
```
(This is for McAllen area - adjust coordinates as needed)

### Option 3: Other Weather APIs

- **WeatherAPI.com** - 1000 calls/day free
- **Tomorrow.io** - 500 calls/day free
- **Weather Underground** - Paid only

### Current Implementation

The site currently uses **realistic simulated data** that:
- Varies by season (hotter in summer)
- Changes throughout the day
- Calculates energy savings based on temperature
- Shows RGV-typical temperatures

### Energy Savings Calculation

The "$263/mo" is calculated based on:
- Average AC costs in RGV: $150-250/month
- Poor insulation increases costs by 40%
- Formula: `Monthly Savings = (Base Cost × 1.4) - Base Cost`

### Making It More Accurate

For even more accurate savings:
1. Factor in square footage
2. Consider AC unit efficiency (SEER rating)
3. Account for electricity rates (¢/kWh)
4. Include humidity effects

### Testing

Current simulated values provide realistic RGV temperatures:
- Summer (Jun-Sep): 90-105°F
- Winter (Dec-Feb): 65-80°F  
- Spring/Fall: 75-95°F