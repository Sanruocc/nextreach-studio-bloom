# Project Structure

## Root Directory
```
├── src/                    # Main source code
├── public/                 # Static assets
├── .kiro/                  # Kiro configuration and specs
├── node_modules/           # Dependencies
└── Configuration files     # Build and tooling configs
```

## Source Directory (`src/`)
```
src/
├── components/             # Reusable UI components
│   └── ui/                # shadcn/ui components
├── pages/                 # Route components
│   ├── Index.tsx          # Home page
│   ├── About.tsx          # About page
│   ├── Services.tsx       # Services page
│   ├── Portfolio.tsx      # Portfolio showcase
│   ├── Pricing.tsx        # Pricing information
│   ├── Contact.tsx        # Contact form
│   ├── PrivacyPolicy.tsx  # Privacy policy
│   └── NotFound.tsx       # 404 error page
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and configurations
├── assets/                # Images, fonts, and other assets
├── App.tsx                # Main app component with routing
├── main.tsx               # Application entry point
├── index.css              # Global styles and Tailwind imports
└── vite-env.d.ts          # Vite type definitions
```

## Public Directory (`public/`)
- `nextreach-logo.jpg` - Company logo
- `placeholder.svg` - Generic placeholder image
- `robots.txt` - Search engine crawling instructions

## Configuration Files
- `components.json` - shadcn/ui configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `vite.config.ts` - Vite build configuration with path aliases
- `tsconfig.json` - TypeScript configuration with path mapping
- `package.json` - Dependencies and scripts

## Routing Structure
- `/` - Home page (Index component)
- `/about` - About the agency
- `/services` - Service offerings
- `/portfolio` - Project showcase
- `/pricing` - Pricing information
- `/contact` - Contact form
- `/privacy` - Privacy policy
- `/*` - Catch-all for 404 errors

## Component Organization
- **UI Components**: Located in `src/components/ui/` following shadcn/ui patterns
- **Page Components**: Each route has its own component in `src/pages/`
- **Custom Components**: Business logic components in `src/components/`
- **Hooks**: Reusable logic in `src/hooks/`
- **Utilities**: Helper functions and configurations in `src/lib/`

## Asset Management
- Images should be placed in `public/` for static assets
- Use descriptive filenames for easy identification
- Implement proper alt text and lazy loading for images
- Follow responsive image practices with multiple sizes