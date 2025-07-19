# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Next.js 15.2.2 landing page for Rubben, an AI-powered investor intelligence platform. The project uses the App Router architecture with TypeScript, Tailwind CSS v4, and various animation libraries.

## Key Commands

```bash
# Development
npm run dev       # Start development server with Turbopack

# Production
npm run build     # Build for production
npm run start     # Start production server

# Code Quality
npm run lint      # Run ESLint
```

## Architecture Overview

### Tech Stack
- **Next.js 15.2.2** with App Router
- **React 19.0.0** 
- **TypeScript 5** with strict mode
- **Tailwind CSS v4** using @tailwindcss/postcss
- **Radix UI** for accessible components
- **Motion (v12.5.0)** for animations
- **next-themes** for dark mode

### Project Structure
```
src/
├── app/              # Next.js pages (App Router)
├── components/
│   ├── sections/     # Page sections (hero, features, etc.)
│   └── ui/          # Reusable UI components
├── lib/
│   ├── config.tsx   # Site content and configuration
│   └── utils.ts     # Utility functions (cn helper)
└── hooks/           # Custom React hooks
```

### Key Patterns

1. **Component Variants**: Uses CVA (class-variance-authority) for component styling
   ```tsx
   // Example: src/components/ui/button.tsx
   const buttonVariants = cva("base-classes", {
     variants: { variant: { default: "...", outline: "..." } }
   })
   ```

2. **Styling**: Tailwind CSS v4 with custom design tokens
   - Design system in `rubben-design-system.json`
   - OKLCH color space for better color manipulation
   - CSS variables for theming in `globals.css`

3. **Content Management**: All content centralized in `src/lib/config.tsx`
   - Site metadata
   - Section content (hero, features, pricing, etc.)
   - Easy to update without touching components

4. **Animation Components**:
   - `FlickeringGrid` - Background animation
   - `OrbitingCircle` - Orbital animations
   - `FeatureSlideshow` - Interactive carousels
   - `Globe` - 3D visualization using Cobe

5. **Path Aliases**: Use `@/` for imports from `src/`
   ```tsx
   import { Button } from "@/components/ui/button"
   ```

## Important Conventions

1. **File Naming**: 
   - Components: PascalCase (e.g., `HeroSection.tsx`)
   - Utilities/hooks: camelCase (e.g., `useTheme.ts`)
   - Config files: kebab-case (e.g., `rubben-design-system.json`)

2. **Component Structure**:
   - Export component as default
   - Keep related types/interfaces in same file
   - Use `cn()` utility for className merging

3. **Section Components**: All page sections follow pattern:
   ```tsx
   export default function SectionName() {
     return (
       <section id="section-id" className="...">
         {/* Content */}
       </section>
     )
   }
   ```

4. **Responsive Design**: Mobile-first approach
   - Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
   - Container with responsive padding: `container px-4 sm:px-6 lg:px-8`

## Development Tips

1. **Adding New Sections**: 
   - Create component in `src/components/sections/`
   - Add content to `src/lib/config.tsx`
   - Import and add to `src/app/page.tsx`

2. **Creating UI Components**:
   - Place in `src/components/ui/`
   - Use CVA for variants
   - Include TypeScript interfaces
   - Consider accessibility (use Radix UI when applicable)

3. **Animations**:
   - Use Motion library for complex animations
   - Tailwind animate classes for simple transitions
   - Consider performance on mobile devices

4. **Dark Mode**:
   - All colors should use CSS variables
   - Test components in both light and dark themes
   - Use `dark:` prefix for dark mode styles

## Performance Considerations

- Images: Use Next.js `Image` component with appropriate sizes
- Fonts: Already optimized with `next/font`
- Animations: Use `will-change` and GPU-accelerated properties
- Code splitting: Automatic with Next.js App Router

## Deployment

- Configured for Netlify (see `netlify.toml`)
- Also optimized for Vercel deployment
- Environment variables not currently required