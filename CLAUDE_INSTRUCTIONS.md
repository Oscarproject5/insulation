# Instructions for Claude to Follow the Workflow

## 🤖 How to Make Claude Follow the Workflow Exactly

### **Method 1: Direct Reference Instructions**

When asking Claude to create a page, use this prompt template:

```
Please create the [PAGE NAME] page following these requirements:

1. Use WORKFLOW.md located at /home/oscar/landing/WORKFLOW.md
2. Get page specifications from PAGE_PLAN.md section [SECTION NUMBER]
3. Use components from src/components/common/
4. Apply styles from src/data/siteConfig.js
5. Get content from src/data/pageContent.js

Specifically:
- Use PageTemplate as the base
- Include SEO component with meta tags from pageContent
- Use consistent button styles from siteConfig.buttonStyles
- Follow the mobile/desktop patterns in ConsistentStyles.md
- Test against the checklist in WORKFLOW.md section 4

Do NOT:
- Create custom styles
- Hardcode colors or sizes
- Skip the PageTemplate
- Create new components
```

---

### **Method 2: Structured Task Breakdown**

```
Create the Spray Foam Service page:

STEP 1 - Read Requirements:
- Check PAGE_PLAN.md section 2.1 for Spray Foam page specs
- Note the required sections and content

STEP 2 - Follow Workflow:
- Use WORKFLOW.md Step 2 (Page Template)
- Import from siteConfig.js
- Import from pageContent.js

STEP 3 - Build Page:
- Create file: src/pages/services/SprayFoam.jsx
- Use PageTemplate component
- Add sections in this order:
  1. Hero (from pageContent.services['spray-foam'].hero)
  2. Benefits grid
  3. Open vs Closed Cell comparison
  4. Process timeline
  5. FAQ section
  6. CTA section

STEP 4 - Apply Consistency:
- Buttons: Use siteConfig.buttonStyles.primary
- Cards: Use siteConfig.cardStyles.default
- Typography: Use siteConfig.typography scales
- Sections: Use siteConfig.sectionPadding

STEP 5 - Verify:
- Check mobile responsiveness
- Verify SEO meta tags
- Test internal links
```

---

### **Method 3: Validation Checklist Prompt**

```
After creating the page, verify it follows the workflow:

WORKFLOW COMPLIANCE CHECK:
□ Uses PageTemplate component from src/components/common/PageTemplate.jsx
□ Imports styles from siteConfig.js, not custom CSS
□ Uses predefined button classes (buttonStyles.primary, etc.)
□ Includes SEO component with proper meta tags
□ Has breadcrumbs navigation
□ Uses consistent section padding
□ Includes CTA section
□ Mobile navigation clearance (56px bottom)
□ No hardcoded colors (uses siteConfig.colors)
□ Typography follows siteConfig.typography scales

If any item is not checked, revise the code to comply with WORKFLOW.md
```

---

## 📋 **Copy-Paste Prompts for Common Tasks**

### **Creating a Service Page:**
```
Create the [SERVICE NAME] page following:
- WORKFLOW.md process at /home/oscar/landing/WORKFLOW.md
- Content from PAGE_PLAN.md section 2.[X]
- Components from src/components/common/
- Styles from src/data/siteConfig.js
- Content from src/data/pageContent.js key services['SERVICE-SLUG']

Required sections: Hero, Benefits, Process, FAQ, CTA
Mobile: Sticky quote button, collapsible sections
Desktop: Side-by-side comparisons, extended content
```

### **Creating an Area Page:**
```
Create the [CITY] area page following:
- WORKFLOW.md at /home/oscar/landing/WORKFLOW.md
- Specs from PAGE_PLAN.md section 3.[X]
- Local data from pageContent.areas['CITY-SLUG']
- Include neighborhoods list, local testimonials, weather data
- Use ServiceCard component for services grid
- Add local phone number in hero
```

### **Creating a Combo Page:**
```
Generate the [SERVICE] in [CITY] combo page:
- Follow comboTemplate in pageContent.js
- Combine service data + area data
- Use contentVariations for unique opening
- Include local testimonials
- Add neighborhood-specific content
- Reference both parent pages in breadcrumbs
```

---

## 🎯 **Enforcement Strategies**

### **1. Pre-Task Setup**
Before asking Claude to create pages, first say:
```
I need you to create pages for my site. 

First, acknowledge you've reviewed these files:
1. WORKFLOW.md - the process to follow
2. PAGE_PLAN.md - the page specifications
3. siteConfig.js - the style constants
4. pageContent.js - the content database

Confirm you will:
- ONLY use existing components
- NEVER create custom styles
- ALWAYS use PageTemplate
- FOLLOW the exact workflow

Reply with "Confirmed" and I'll give you the first page to create.
```

### **2. Reference Enforcement**
```
When creating this page, you MUST:
- Reference WORKFLOW.md line 51-82 for Page Template usage
- Use styles from siteConfig.js lines 15-45
- Get content from pageContent.js lines [XXX]
- Follow mobile patterns from ConsistentStyles.md lines 170-210

Show me the exact line numbers you're referencing for each section.
```

### **3. Component-Only Mode**
```
You are in COMPONENT-ONLY mode:

ALLOWED:
✅ Import from src/components/common/
✅ Import from src/data/siteConfig.js
✅ Use PageTemplate
✅ Use existing button/card styles

FORBIDDEN:
❌ Creating new components
❌ Writing custom CSS
❌ Hardcoding any values
❌ Creating new style classes

If you need something that doesn't exist, ask first.
```

---

## 🔄 **Iterative Correction Method**

If Claude creates something that doesn't follow the workflow:

```
This doesn't follow WORKFLOW.md. Please revise:

ISSUES:
1. Line 23: Custom button style instead of siteConfig.buttonStyles.primary
2. Line 45: Hardcoded color #FF6B35 instead of siteConfig.colors.primary.orange
3. Missing PageTemplate wrapper
4. No SEO component

REVISE following WORKFLOW.md exactly. Reference the specific line numbers from siteConfig.js for each style you use.
```

---

## 🚀 **Batch Creation Prompt**

For creating multiple pages efficiently:

```
Create all 5 service pages in sequence:

For EACH page:
1. Read PAGE_PLAN.md section 2.[1-5]
2. Follow WORKFLOW.md exactly
3. Use pageContent.services[slug] for content
4. Apply consistent structure:
   - PageTemplate wrapper
   - SEO from seoTemplates
   - Hero → Benefits → Process → FAQ → CTA
5. Name files: src/pages/services/[ServiceName].jsx

Create them in this order:
1. SprayFoam.jsx (section 2.1)
2. BlownIn.jsx (section 2.2)
3. Attic.jsx (section 2.3)
4. Wall.jsx (section 2.4)
5. Commercial.jsx (section 2.5)

After each page, confirm it follows the workflow before proceeding.
```

---

## 💡 **Pro Tips for Consistency**

### **1. Start with a Reference**
Always begin prompts with:
```
Following WORKFLOW.md and using components from src/components/common/...
```

### **2. Prohibit Creativity**
Add to prompts:
```
Do not create any new components or styles. Only use what exists in siteConfig.js.
```

### **3. Require Verification**
End prompts with:
```
After creating, list which workflow steps you followed and which components you used.
```

### **4. Use Examples**
Reference existing pages:
```
Create this page similar to how SprayFoam.jsx was created, following the same pattern.
```

---

## 📝 **Master Prompt Template**

Here's the ultimate prompt to ensure Claude follows the workflow:

```
TASK: Create [PAGE NAME] page

STRICT REQUIREMENTS:
1. Follow WORKFLOW.md at /home/oscar/landing/WORKFLOW.md
2. Use specifications from PAGE_PLAN.md section [X.X]
3. Get content from pageContent.js key [KEY]
4. Use ONLY existing components from src/components/common/
5. Apply ONLY styles from siteConfig.js
6. Wrap everything in PageTemplate
7. Include SEO component with proper meta
8. Follow mobile/desktop patterns from ConsistentStyles.md

FORBIDDEN:
- Creating new components
- Writing custom styles
- Hardcoding values
- Skipping PageTemplate
- Using style attributes

VERIFICATION:
After creating, confirm:
- [ ] Uses PageTemplate
- [ ] Imports from siteConfig
- [ ] No hardcoded values
- [ ] Includes all required sections
- [ ] Follows naming convention

Create the page now following these requirements exactly.
```

---

## 🔍 **Verification Commands**

After Claude creates a page, verify with:

```
Check this page for workflow compliance:

1. Does it use PageTemplate? (Show line number)
2. Are all styles from siteConfig? (List imports)
3. Are components from common/? (List components used)
4. Is content from pageContent.js? (Show import)
5. Does it have proper SEO? (Show meta tags)
6. Does it follow mobile patterns? (List mobile features)

If any answer is NO, revise immediately.
```

---

## 🎯 **The Golden Rule**

**Always start your prompt with:**
```
Using ONLY the components and styles defined in our workflow files...
```

**Always end your prompt with:**
```
Verify this follows WORKFLOW.md before showing me the code.
```

This ensures Claude stays within the established system and maintains perfect consistency across all pages.