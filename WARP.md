# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

TPS Apps Hub is an internal web application that serves as a centralized landing page for TPS Printing's various web tools and calculators. The app showcases pricing calculators, production tools, and provides branding/roadmap information for the company's digital transformation initiative.

## Architecture & Tech Stack

- **Framework**: React 18.2+ with Vite 7.1+ build system
- **Routing**: React Router DOM v7.8+ with file-based routing structure
- **Styling**: Tailwind CSS 3.4+ with custom brand color system
- **Typography**: Google Fonts (Raleway for headings, Open Sans for body text)
- **Build Tool**: Vite with React plugin and PostCSS for Tailwind processing

### Key Design Patterns

- **CSS Variables for Branding**: All components use CSS custom properties (`--brand-*`) for consistent theming across the app
- **Static Data Architecture**: App data is currently stored as static arrays in `App.jsx` (ESTIMATE_APPS and GENERAL_APPS) - designed to be easily migrated to backend API later
- **Component Status System**: Apps have `status` field (`'active'` or `'in-process'`) that controls UI rendering and user interaction
- **Responsive Design**: Mobile-first approach with sm/lg breakpoints for all layouts

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev
# Alternative: npm start

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## File Structure & Key Components

```
src/
├── main.jsx           # React Router setup with 3 routes: /, /branding, /roadmap
├── App.jsx            # Main homepage with app galleries and hero section
├── Branding.jsx       # Brand guidelines, colors, typography, logo downloads
├── Roadmap.jsx        # Project roadmap with development phases and progress
└── index.css          # Tailwind imports and Google Fonts loading
```

### Brand Color System

The app uses a comprehensive brand color system defined as CSS custom properties:

- `--brand-indigo` (#40358B): Primary headers, buttons, navigation
- `--brand-gold` (#F9B729): Highlights, gradients, key accents
- `--brand-orange` (#F9920B): CTA text, badges, emphasis
- `--brand-pale-gold` (#FFF4DB): Section backgrounds, cards
- `--brand-pale-blue` (#C9D8FA): Soft accents, pills, tags
- `--brand-dark-blue` (#DDE6FA): Dividers, borders, subtle fills
- `--brand-screened-indigo` (#d7d6dc): Muted backgrounds and tints

## App Data Management

Applications are categorized into two main arrays in `App.jsx`:

### ESTIMATE_APPS
Pricing and calculator tools with status tracking for development progress.

### GENERAL_APPS  
Production tools including imposition calculators, proofing systems, and template generators.

**App Object Structure**:
```javascript
{
  name: "App Name",
  description: "Detailed description of functionality",
  href: "https://external-url.com" or "#" for in-development,
  image: "/screenshot.jpg",
  status: "active" | "in-process"
}
```

## Component Patterns

### ScrollLink Component
Custom smooth-scrolling navigation helper for single-page sections (App.jsx only).

### Status-Based Rendering
Components conditionally render based on `app.status`:
- `active`: Full interactive card with external link
- `in-process`: Overlay with "Coming Soon" and disabled interaction

### Image Handling
- Equipment images use `object-cover` by default
- Booklet Proofing uses `object-contain` for proper aspect ratio
- All images are lazy-loaded except header logo (`loading="eager"`)

## Deployment Notes

- **Port Configuration**: Uses port 3000 (never use port 5000 - conflicts with macOS AirPlay)
- **External Links**: All app links open in new tabs with `target="_blank"` and proper rel attributes
- **SEO**: Includes proper meta tags with `noindex, nofollow` for internal tools
- **Asset Optimization**: Vite handles asset bundling and optimization automatically

## Development Best Practices

- Maintain consistent font family declarations using inline styles for Raleway/Open Sans
- Use CSS custom properties for all brand colors instead of hardcoded values
- Follow the existing responsive grid patterns (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- Preserve the gradient overlay system for equipment imagery
- Keep app data arrays in sync when adding new tools
- Test both desktop and mobile layouts for new features

## Future Migration Path

The static app data structure is designed for easy migration to a backend API. The component architecture supports dynamic data loading with existing loading/error state handling already implemented.
