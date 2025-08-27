# Personal Website Refactoring Plan

## Modern Alternatives to Gatsby

Gatsby has faced some challenges with maintenance and community perception. Here are strong alternatives that work well with Node.js and support blog functionality:

### Next.js
- **Pros**: Industry-leading React framework, excellent static site generation, incremental static regeneration, strong community support
- **Cons**: Full-stack capabilities might be more than needed for a simple site
- **Blog Support**: Excellent through MDX or headless CMS integration

### Astro
- **Pros**: Fast becoming the top choice for content-focused sites, partial hydration ("islands architecture") for minimal JS, excellent DX
- **Cons**: Newer than some alternatives (though very stable now)
- **Blog Support**: First-class built-in support for MDX and Markdown

### Eleventy (11ty)
- **Pros**: Purely static output (minimal JS), extremely fast builds, flexible template languages
- **Cons**: Less React integration (if that's important to you)
- **Blog Support**: Excellent blog capabilities, designed for content-first sites

### SvelteKit
- **Pros**: Less boilerplate than React, highly performant, excellent DX
- **Cons**: Smaller ecosystem than React-based options
- **Blog Support**: Good through MDsveX or headless CMS

**Recommendation**: Astro would be an excellent fit for your use case - it's modern, focused on content, performs well with blogs, and has excellent DX.

## Astro.js Migration Plan

### 1. Project Setup & Structure

```bash
# Create new Astro project
npm create astro@latest nateyoung-astro
cd nateyoung-astro

# Install necessary integrations
npm install @astrojs/react @astrojs/image @astrojs/tailwind
npm install react react-dom
```

#### Project Structure
```
nateyoung-astro/
├── public/
│   └── images/
│       ├── favicon.png
│       ├── profile.jpg
│       └── liquid.jpeg
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Layout.astro
│   │   ├── NavMenu.astro
│   │   ├── PageContentWrapper.astro
│   │   ├── ProjectCard.astro
│   │   ├── SEO.astro
│   │   └── react/  # For React components that need interactivity
│   │       └── ThanksModal.jsx
│   ├── data/
│   │   └── projects.json
│   ├── icons/
│   │   └── [icon files]
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── work.astro
│   │   ├── tools.astro
│   │   ├── blog/
│   │   │   └── index.astro
│   │   └── 404.astro
│   └── styles/
│       ├── global.css
│       └── [other style files]
└── astro.config.mjs
```

### 2. Component Migration

#### Convert React Components to Astro Components

For simple components without state or client-side interactivity:

```astro
---
// Example: src/components/ProjectCard.astro
const { project } = Astro.props;
---

<div class="card">
  <h5>{project.name}</h5>
  {project.title && <h6>{project.title}</h6>}
  <p class="time-period">{project.timePeriod}</p>
  <p>{project.description}</p>
  <p class="tech-stack">{project.techStack}</p>
</div>

<style>
  .card {
    /* Styles from ProjectCard.scss */
  }
</style>
```

#### Keep React for Interactive Components

```jsx
// src/components/react/ThanksModal.jsx
import React from 'react';

export default function ThanksModal({ isModalOpen, handleClose }) {
  // Modal implementation
  return (
    // Modal JSX
  );
}
```

### 3. Page Migration

```astro
---
// Example: src/pages/index.astro
import Layout from '../layouts/BaseLayout.astro';
---

<Layout title="Nate Young - Full Stack Developer">
  <h2>
    hi, i'm <span class="accented">nate</span>
  </h2>
  <p class="big-text">
    a <span class="accented">full stack developer</span> focused on
    delivering <span class="accented">business value</span> through
    <span class="accented"> code</span>
  </p>
</Layout>
```

```astro
---
// Example: src/pages/work.astro
import Layout from '../layouts/BaseLayout.astro';
import ProjectCard from '../components/ProjectCard.astro';

// Import data directly in Astro component
import projects from '../data/projects.json';
const { current, past } = projects;
---

<Layout title="Work - Nate Young">
  <h3 class="accented">work</h3>

  <h4>current</h4>
  <div id="CurrentWork">
    {current.map((project) => <ProjectCard project={project} />)}
  </div>

  <h4>past</h4>
  <div id="PastWork">
    {past.map((project) => <ProjectCard project={project} />)}
  </div>
</Layout>
```

### 4. Data & Configuration Migration

1. **JSON Data**: Copy `projects.json` directly into `src/data/`
2. **Images**: Move all images from `src/images` to `public/images`
3. **Icons**: Transform SVG icons into Astro components in `src/icons/`

### 5. Styling Strategy

#### Option 1: Scoped CSS in Astro Components

```astro
<style>
  /* Styles scoped to this component */
  h3 {
    color: #E50914; /* Netflix Red */
  }
</style>
```

#### Option 2: Global Styles with Astro's Integration

```js
// astro.config.mjs
export default defineConfig({
  integrations: [
    tailwind(),
  ],
});
```

### 6. Add New Blog Functionality

```astro
---
// src/pages/blog/[...slug].astro
import { getCollection } from 'astro:content';
import Layout from '../../layouts/BaseLayout.astro';

// Generate routes for each blog post dynamically
export async function getStaticPaths() {
  const blogEntries = await getCollection('blog');
  return blogEntries.map(entry => ({
    params: { slug: entry.slug }, props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Layout title={entry.data.title}>
  <article>
    <h1>{entry.data.title}</h1>
    <time datetime={entry.data.pubDate.toISOString()}>
      {entry.data.pubDate.toLocaleDateString()}
    </time>
    <Content />
  </article>
</Layout>
```

## Migrating from AWS to GCP

Moving your static website from AWS to Google Cloud Platform offers several benefits including Google's global CDN and simplified management. Here's a migration path:

### GCP Hosting Options

1. **Cloud Storage + Cloud CDN** (Recommended)
   - **Setup**: Upload static files to a Cloud Storage bucket and enable Cloud CDN
   - **Benefits**: Cost-effective, simple, global edge caching
   - **Steps**:
     - Create a Cloud Storage bucket with public access
     - Configure it for website hosting
     - Set up a load balancer with Cloud CDN for edge caching
     - Point your domain to GCP using Cloud DNS

2. **Firebase Hosting**
   - **Benefits**: Free SSL, global CDN, built-in CI/CD, easy rollbacks
   - **Ideal for**: Sites built with modern frameworks (Next.js, Astro, etc.)
   - **Commands**: Simple deployment with `firebase deploy`

3. **Cloud Run** (if you need server components)
   - **Benefits**: Fully managed, auto-scaling, pay-per-use
   - **Use case**: If your site evolves to need API endpoints

### Specific Deployment Steps for Astro on GCP

#### Option 1: Firebase Hosting (Recommended for Astro)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize project
firebase login
firebase init hosting

# Configure firebase.json for Astro
# {
#   "hosting": {
#     "public": "dist",
#     "ignore": []
#   }
# }

# Build and deploy
npm run build
firebase deploy
```

#### Option 2: Google Cloud Storage + Cloud CDN

```bash
# Build site
npm run build

# Create a bucket (replace with your domain)
gcloud storage buckets create gs://www.nateyoung.io --location=us-central1

# Make it publicly readable
gcloud storage buckets add-iam-policy-binding gs://www.nateyoung.io --member=allUsers --role=roles/storage.objectViewer

# Upload files
gcloud storage rsync ./dist gs://www.nateyoung.io -r

# Configure website settings
gcloud storage buckets update gs://www.nateyoung.io --web-main-page-suffix=index.html --web-error-page=404.html
```

### CI/CD Pipeline with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
```

### Domain & DNS Migration

1. Keep your domain registration where it is
2. In GCP Console:
   - Create a Cloud DNS zone for your domain
   - Add necessary A or CNAME records pointing to your hosting
3. At your registrar:
   - Update nameservers to Google's Cloud DNS nameservers

## Netflix-Inspired Color Palette

Netflix uses a distinctive color scheme that's both modern and visually striking. Here's a palette inspired by their design:

### Primary Colors
- **Netflix Red**: `#E50914` - The iconic Netflix red, perfect for call-to-action elements and accents
- **Dark Background**: `#141414` - The characteristic Netflix dark background that makes content pop
- **Light Text**: `#FFFFFF` - Clean white text for maximum readability on dark backgrounds

### Secondary & Accent Colors
- **Dark Gray**: `#222222` - For secondary backgrounds and UI elements
- **Medium Gray**: `#6D6D6E` - For less prominent text and UI elements
- **Light Gray**: `#B3B3B3` - For subtle UI elements and inactive states
- **Highlight Blue**: `#0071EB` - For interactive elements and secondary CTAs

### Implementation Tips
- Use the dark background (`#141414`) as your base color
- Apply Netflix Red (`#E50914`) sparingly for important buttons and highlights
- Keep most text white for readability against the dark background
- Use the gray tones to create depth and hierarchy in your UI
