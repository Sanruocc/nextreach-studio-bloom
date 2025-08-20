# Technology Stack

## Core Technologies
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Tailwind CSS** for utility-first styling with custom design system
- **shadcn/ui** component library for consistent, accessible UI components
- **React Router DOM** for client-side routing

## Key Dependencies
- **@tanstack/react-query** for server state management
- **React Hook Form** with Zod validation for form handling
- **Lucide React** for consistent iconography
- **next-themes** for dark/light mode support
- **Sonner** and custom toaster for notifications

## Development Tools
- **ESLint** with TypeScript rules for code quality
- **PostCSS** with Autoprefixer for CSS processing
- **SWC** for fast compilation via Vite plugin

## Path Aliases
- `@/` maps to `./src/` for clean imports
- `@/components` for reusable components
- `@/lib` for utilities and configurations
- `@/hooks` for custom React hooks
- `@/pages` for route components

## Common Commands
```bash
# Development
npm run dev          # Start development server on port 8080

# Building
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint checks
```

## Code Style Guidelines
- Use TypeScript for all new components and utilities
- Follow shadcn/ui patterns for component structure
- Utilize Tailwind CSS classes with custom CSS variables
- Implement proper error boundaries and loading states
- Use React Query for data fetching and caching
- Follow mobile-first responsive design principles