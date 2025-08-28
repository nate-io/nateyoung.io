# Gatsby to Astro Migration Checklist

## Project Setup

- [x] Create new Astro project
  ```bash
  npm create astro@latest nateyoung-astro
  cd nateyoung-astro
  ```
- [x] Install necessary dependencies
  ```bash
  npm install @astrojs/react @astrojs/image @astrojs/tailwind
  npm install react react-dom
  ```
- [x] Configure Astro integrations in astro.config.mjs
  ```bash
  npm run astro add react
  npm run astro add tailwind
  npm run astro add image
  ```
- [x] Set up basic project structure
- [x] Create essential directories (components, layouts, pages, styles, data)

## Component Migration

- [x] Create base layout component (`src/layouts/BaseLayout.astro`)
- [ ] Convert React components to Astro components:
  - [x] NavMenu
  - [x] Footer
  - [x] PageContentWrapper
  - [x] ProjectCard
  - [ ] SEO
- [ ] Keep React components for interactive elements:
  - [x] ThanksModal (React component)
- [ ] Test components in isolation

## Page Migration

- [x] Create `src/pages/index.astro`
- [x] Create `src/pages/work.astro` 
- [x] Create `src/pages/tools.astro`
- [x] Create `src/pages/404.astro`

## Data Migration

- [x] Copy project data to `src/data/projects.json`
- [x] Set up proper data imports in pages
- [ ] Move images from `src/images` to `public/images`
- [ ] Convert icons to Astro components or move to `public/icons`

## Styling

- [x] Choose styling approach (scoped CSS or Tailwind)
- [ ] Migrate SCSS styles to Astro components
- [x] Set up global styles
- [x] Implement Netflix-inspired color palette
  - [x] Create color variables
  - [x] Apply to components
  - [ ] Test across all pages

## Blog Setup (New Feature)

- [x] Set up content collections
- [x] Create `src/pages/blog/index.astro` for blog listing
- [x] Create `src/pages/blog/[...slug].astro` for blog posts
- [x] Add sample blog post for testing
- [x] Style blog components

## Testing & Optimization

- [ ] Test site locally
  ```bash
  npm run dev
  ```
- [ ] Verify all pages render correctly
- [ ] Check responsive design
- [ ] Test JavaScript functionality
- [ ] Run performance optimization
  ```bash
  npm run build
  ```
- [ ] Run accessibility checks

## Deployment Setup for GCP

- [x] Choose deployment option (Firebase or Cloud Storage)
- [ ] Set up Firebase project (if using Firebase)
  ```bash
  npm install -g firebase-tools
  firebase login
  firebase init hosting
  ```
- [x] Configure firebase.json for Astro
- [ ] Or set up Google Cloud Storage bucket (if using GCS)
- [x] Configure CI/CD with GitHub Actions
  - [x] Create `.github/workflows/deploy.yml`

## DNS & Domain Setup

- [ ] Create Cloud DNS zone for domain
- [ ] Set up A or CNAME records
- [ ] Update nameservers at registrar (if using Cloud DNS)
- [ ] Test domain propagation
- [ ] Configure SSL

## Final Steps

- [ ] Test production deployment
- [ ] Update website documentation
- [ ] Archive old Gatsby site
