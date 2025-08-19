# Consistent Style Guide for RGV Insulation Site

## Design System Overview

This document ensures consistency across all pages (mobile & desktop).

## 1. COLOR PALETTE
```css
Primary Colors:
- Dark: #0A0A0A (headings, primary text)
- Gray: #171717 (secondary elements)
- Orange: #FF6B35 (CTAs, accents)
- Green: #10B981 (success, eco-friendly)

Text Colors:
- Primary: #0A0A0A
- Secondary: #525252
- Light: #6B7280

Backgrounds:
- White: #FFFFFF
- Light: #FAFAFA
- Gray: #F3F4F6
```

## 2. TYPOGRAPHY SYSTEM

### Desktop
- Hero: text-5xl lg:text-6xl font-bold
- H1: text-4xl lg:text-5xl font-bold
- H2: text-3xl lg:text-4xl font-bold
- H3: text-2xl lg:text-3xl font-semibold
- Body: text-base lg:text-lg
- Small: text-sm

### Mobile
- Hero: text-3xl font-bold
- H1: text-2xl font-bold
- H2: text-xl font-bold
- H3: text-lg font-semibold
- Body: text-sm
- Small: text-xs

## 3. COMPONENT PATTERNS

### Buttons (Consistent across all pages)
```jsx
// Primary CTA
className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"

// Secondary
className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"

// Outline
className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
```

### Cards
```jsx
// Standard Card
className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"

// Glass Card
className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"

// Bordered Card
className="bg-white rounded-2xl border border-gray-200 hover:border-orange-500 transition-all duration-300"
```

### Sections
```jsx
// Desktop
className="py-16 px-4"

// Mobile
className="py-12 px-4"

// Container
className="container mx-auto max-w-7xl"
```

## 4. RESPONSIVE BREAKPOINTS
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 5. ANIMATION PATTERNS
```css
/* Hover Lift */
hover:transform hover:-translate-y-2 transition-all duration-300

/* Fade In */
animate-fadeIn (0.8s ease-out)

/* Slide In */
animate-slideIn (1s ease-out)

/* Scale on Hover */
hover:scale-105 transition-transform duration-300
```

## 6. SPACING SYSTEM
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

## 7. SHADOW SYSTEM
```css
/* Small */
shadow-sm: 0 1px 2px rgba(0,0,0,0.05)

/* Medium */
shadow-md: 0 4px 6px rgba(0,0,0,0.1)

/* Large */
shadow-lg: 0 10px 15px rgba(0,0,0,0.1)

/* XL */
shadow-xl: 0 20px 25px rgba(0,0,0,0.1)
```

## 8. MOBILE-SPECIFIC PATTERNS

### Mobile Navigation
- Fixed bottom tab bar (56px height)
- 5 main navigation items
- Active state with orange accent

### Mobile Cards
- Full-width with 1rem margin
- Reduced padding (1.5rem)
- Simplified shadows

### Mobile Forms
- 16px font size (prevents zoom)
- 44px min touch targets
- Progressive disclosure pattern

## 9. SEO CONSISTENCY

### Page Structure
1. SEO meta tags (title, description, keywords)
2. Breadcrumbs for navigation
3. H1 with primary keyword
4. Structured content sections
5. Internal linking
6. CTA sections

### URL Structure
- Services: /services/[service-slug]
- Areas: /areas/[city-slug]
- Combo: /services/[service-slug]/[city-slug]

## 10. CONTENT PATTERNS

### Hero Sections
- Badge (optional)
- H1 Title
- Description paragraph
- CTA buttons (primary + secondary)
- Stats grid (optional)

### Service Cards
- Image
- Icon
- Title
- Short description
- Benefits list
- CTA button

### Testimonial Cards
- Customer name
- Location
- Star rating
- Review text
- Service type

### FAQ Sections
- Question (button)
- Expandable answer
- Consistent spacing

## IMPLEMENTATION WORKFLOW

1. **Create New Page**:
   - Use PageTemplate component
   - Import siteConfig for consistent styles
   - Use predefined button/card classes
   - Follow typography scale

2. **Mobile Optimization**:
   - Test at 375px, 414px, 768px widths
   - Ensure touch targets are 44px+
   - Check font sizes (min 14px body)
   - Verify bottom navigation clearance

3. **Desktop Optimization**:
   - Test at 1280px, 1440px, 1920px
   - Ensure max-width containers
   - Check hover states
   - Verify spacing and alignment

4. **Quality Checklist**:
   - [ ] Colors match palette
   - [ ] Typography follows scale
   - [ ] Buttons use standard styles
   - [ ] Cards have consistent shadows
   - [ ] Mobile navigation works
   - [ ] SEO meta tags present
   - [ ] Images optimized
   - [ ] Loading states defined
   - [ ] Error states handled
   - [ ] Accessibility checked