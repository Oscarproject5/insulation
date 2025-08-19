# SEO Page Creation Workflow

## Overview
This workflow ensures consistency across all pages while maintaining SEO best practices and responsive design.

## 🎯 Core Principles

1. **Single Source of Truth**: All configuration in `src/data/siteConfig.js`
2. **Component Reusability**: Use existing components from `src/components/common/`
3. **Mobile-First Design**: Build for mobile, enhance for desktop
4. **SEO by Default**: Every page includes proper meta tags and structure

## 📁 Project Structure

```
src/
├── components/
│   ├── common/         # Reusable components
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── CTASection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── PageTemplate.jsx
│   │   └── SEO.jsx
│   └── layout/         # Layout components
│       ├── Header.jsx
│       ├── Footer.jsx
│       ├── Layout.jsx
│       └── MobileNav.jsx
├── data/
│   └── siteConfig.js   # Central configuration
├── pages/              # Page components
│   ├── Home.jsx
│   ├── services/
│   └── areas/
└── App.jsx            # Original landing (becomes Home.jsx)
```

## 🚀 Creating a New SEO Page

### Step 1: Plan the Page
```javascript
// Define page requirements:
- Target keywords
- User intent
- Content sections needed
- Call-to-actions
- Mobile/Desktop variations
```

### Step 2: Use Page Template
```jsx
// src/pages/services/SprayFoam.jsx
import PageTemplate from '../../components/common/PageTemplate'
import { siteConfig, services, seoTemplates } from '../../data/siteConfig'

const SprayFoamPage = () => {
  const service = services.find(s => s.id === 'spray-foam')
  
  return (
    <PageTemplate
      seo={seoTemplates.service(service)}
      hero={{
        badge: 'Most Efficient',
        title: service.name,
        description: service.description,
        cta: {
          primary: { text: 'Get Free Quote', link: '/quote' },
          secondary: { text: 'Call Now', link: 'tel:9568540899' }
        }
      }}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: service.name }
      ]}
    >
      {/* Page content using consistent components */}
    </PageTemplate>
  )
}
```

### Step 3: Use Consistent Components

```jsx
// Always use predefined components for consistency:

// Service display
<ServiceCard service={service} showFullDetails={true} />

// Testimonials
<TestimonialCard testimonial={testimonial} />

// Call-to-action
<CTASection 
  title="Ready to Save on Energy Bills?"
  variant="gradient"
/>

// FAQs
<FAQSection items={serviceFaqs} />
```

### Step 4: Apply Consistent Styles

```jsx
// Use styles from siteConfig:

// Buttons
<button className={siteConfig.buttonStyles.primary}>
  Get Quote
</button>

// Cards
<div className={siteConfig.cardStyles.default}>
  Content
</div>

// Typography
<h1 className={siteConfig.typography.heading1.desktop}>
  Title
</h1>

// Sections
<section className={siteConfig.sectionPadding.desktop}>
  Content
</section>
```

## 📱 Mobile Responsiveness Checklist

### Mobile-Specific Considerations:
- [ ] Font size minimum 14px for body text
- [ ] Touch targets minimum 44px
- [ ] Bottom padding for mobile nav (56px)
- [ ] Horizontal scrolling prevented
- [ ] Images optimized for mobile
- [ ] Forms use proper input types
- [ ] Test on 375px, 414px screens

### Desktop Enhancements:
- [ ] Hover states on interactive elements
- [ ] Multi-column layouts where appropriate
- [ ] Enhanced animations
- [ ] Larger imagery
- [ ] Extended content sections

## 🔍 SEO Checklist for Each Page

### Technical SEO:
- [ ] Unique title tag (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Schema markup
- [ ] Mobile-friendly
- [ ] Fast loading (< 3 seconds)

### Content SEO:
- [ ] H1 with primary keyword
- [ ] Structured headings (H2, H3)
- [ ] Internal linking (3-5 per page)
- [ ] Image alt text
- [ ] Keyword density (1-2%)
- [ ] Unique content (800+ words)
- [ ] Local keywords for area pages

## 🎨 Component Usage Guide

### ServiceCard
```jsx
<ServiceCard 
  service={serviceObject}
  showFullDetails={false}  // true for detail pages
  currentArea={areaObject} // optional for local pages
/>
```

### TestimonialCard
```jsx
<TestimonialCard 
  testimonial={testimonialObject}
/>
```

### CTASection
```jsx
<CTASection 
  title="Custom Title"
  description="Custom description"
  variant="gradient|solid|outline"
  primaryButton={{ text: 'CTA Text', link: '/path' }}
  secondaryButton={{ text: 'Alt CTA', link: '/path' }}
/>
```

### FAQSection
```jsx
<FAQSection 
  items={customFaqs}  // or uses default faqs
  title="Custom Title"
/>
```

## 🔄 Workflow for Creating Multiple Pages

### 1. Service Pages (5 pages)
```bash
/services/spray-foam
/services/blown-in
/services/attic
/services/wall
/services/commercial
```

### 2. Area Pages (6 pages)
```bash
/areas/mcallen
/areas/edinburg
/areas/brownsville
/areas/harlingen
/areas/mission
/areas/pharr
```

### 3. Combination Pages (30 pages)
```bash
/services/spray-foam/mcallen
/services/spray-foam/edinburg
# ... etc for each service/area combination
```

### Batch Creation Process:

1. **Create Base Template**
```jsx
// src/pages/templates/ServicePageTemplate.jsx
const ServicePageTemplate = ({ serviceId, areaId = null }) => {
  // Reusable logic for all service pages
}
```

2. **Generate Pages Programmatically**
```jsx
// src/pages/generatePages.js
services.forEach(service => {
  // Create service page
  // Create area combination pages
})
```

3. **Test Batch**
- Run through mobile simulator
- Check desktop breakpoints
- Validate SEO meta tags
- Test internal links

## 🧪 Quality Assurance

### Before Publishing:
1. **Visual Consistency**
   - [ ] Colors match palette
   - [ ] Typography follows scale
   - [ ] Spacing is consistent
   - [ ] Components look uniform

2. **Functionality**
   - [ ] All links work
   - [ ] Forms submit correctly
   - [ ] Phone numbers clickable
   - [ ] Navigation works

3. **Performance**
   - [ ] Images optimized
   - [ ] Code minified
   - [ ] Lazy loading implemented
   - [ ] Cache headers set

4. **SEO Validation**
   - [ ] Google Rich Results Test
   - [ ] Mobile-Friendly Test
   - [ ] PageSpeed Insights
   - [ ] Structured data validation

## 📊 Monitoring & Iteration

### Track Performance:
- Google Analytics events
- Conversion tracking
- Heat maps
- User feedback

### Iterate Based on Data:
- A/B test CTAs
- Optimize conversion paths
- Improve page speed
- Update content regularly

## 🔧 Maintenance

### Regular Updates:
- Update testimonials monthly
- Refresh seasonal content
- Check for broken links
- Update service information
- Monitor keyword rankings

### Version Control:
- Commit with descriptive messages
- Tag releases
- Document changes
- Maintain changelog

## 💡 Pro Tips

1. **Always test on real devices** - Simulators don't catch everything
2. **Keep content scannable** - Users skim, especially on mobile
3. **Load critical CSS inline** - Improves perceived performance
4. **Use native lazy loading** - loading="lazy" on images
5. **Implement breadcrumbs** - Helps SEO and user navigation
6. **Add FAQ schema** - Increases SERP visibility
7. **Use local business schema** - Essential for local SEO
8. **Monitor Core Web Vitals** - Google ranking factor

## 🚨 Common Pitfalls to Avoid

- ❌ Hardcoding values instead of using siteConfig
- ❌ Creating one-off styles instead of reusable classes
- ❌ Forgetting mobile navigation clearance
- ❌ Missing alt text on images
- ❌ Duplicate meta descriptions
- ❌ Inconsistent button styles
- ❌ Breaking responsive layouts
- ❌ Forgetting to test forms

## 📝 Example Implementation

See `src/pages/services/SprayFoam.jsx` for a complete example implementing all best practices.

---

By following this workflow, every page will:
- ✅ Look consistent across devices
- ✅ Load quickly
- ✅ Rank well in search engines
- ✅ Convert visitors effectively
- ✅ Maintain brand consistency