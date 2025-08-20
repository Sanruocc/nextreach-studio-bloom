/**
 * Professional image placeholder system for NextReach Studio
 * Provides optimized placeholders with WebP support and lazy loading
 */

// Image placeholder categories
export type PlaceholderCategory = 
  | 'hero'
  | 'project'
  | 'team'
  | 'client-logo'
  | 'testimonial'
  | 'service'
  | 'background'
  | 'icon'
  | 'gallery';

// Image aspect ratios
export type AspectRatio = 
  | '1:1'
  | '4:3'
  | '16:9'
  | '3:2'
  | '2:1'
  | '9:16'
  | '3:4'
  | 'auto';

// Image sizes for responsive loading
export interface ImageSize {
  width: number;
  height: number;
  breakpoint?: string;
}

// Placeholder configuration
export interface PlaceholderConfig {
  category: PlaceholderCategory;
  aspectRatio: AspectRatio;
  width: number;
  height?: number;
  alt: string;
  priority?: boolean;
  quality?: number;
  blur?: boolean;
  sizes?: ImageSize[];
}

// Professional color palette for placeholders
const PLACEHOLDER_COLORS = {
  primary: '#3B82F6',      // Blue
  secondary: '#6B7280',    // Gray
  accent: '#10B981',       // Green
  highlight: '#F59E0B',    // Yellow
  neutral: '#F3F4F6',      // Light gray
  dark: '#1F2937',         // Dark gray
  gradient: 'linear-gradient(135deg, #3B82F6, #10B981)'
} as const;

// Placeholder patterns and designs
const PLACEHOLDER_PATTERNS = {
  hero: {
    background: PLACEHOLDER_COLORS.gradient,
    icon: '🚀',
    text: 'Hero Image',
    style: 'modern'
  },
  project: {
    background: PLACEHOLDER_COLORS.neutral,
    icon: '💻',
    text: 'Project Screenshot',
    style: 'mockup'
  },
  team: {
    background: PLACEHOLDER_COLORS.primary,
    icon: '👤',
    text: 'Team Member',
    style: 'avatar'
  },
  'client-logo': {
    background: PLACEHOLDER_COLORS.neutral,
    icon: '🏢',
    text: 'Client Logo',
    style: 'logo'
  },
  testimonial: {
    background: PLACEHOLDER_COLORS.accent,
    icon: '💬',
    text: 'Testimonial',
    style: 'quote'
  },
  service: {
    background: PLACEHOLDER_COLORS.highlight,
    icon: '⚡',
    text: 'Service Icon',
    style: 'icon'
  },
  background: {
    background: PLACEHOLDER_COLORS.gradient,
    icon: '🎨',
    text: 'Background',
    style: 'pattern'
  },
  icon: {
    background: PLACEHOLDER_COLORS.primary,
    icon: '✨',
    text: 'Icon',
    style: 'minimal'
  },
  gallery: {
    background: PLACEHOLDER_COLORS.secondary,
    icon: '🖼️',
    text: 'Gallery Image',
    style: 'frame'
  }
} as const;

// Generate aspect ratio dimensions
export const getAspectRatioDimensions = (
  aspectRatio: AspectRatio,
  baseWidth: number
): { width: number; height: number } => {
  const ratios = {
    '1:1': { width: baseWidth, height: baseWidth },
    '4:3': { width: baseWidth, height: Math.round(baseWidth * 0.75) },
    '16:9': { width: baseWidth, height: Math.round(baseWidth * 0.5625) },
    '3:2': { width: baseWidth, height: Math.round(baseWidth * 0.6667) },
    '2:1': { width: baseWidth, height: Math.round(baseWidth * 0.5) },
    '9:16': { width: baseWidth, height: Math.round(baseWidth * 1.7778) },
    '3:4': { width: baseWidth, height: Math.round(baseWidth * 1.3333) },
    'auto': { width: baseWidth, height: baseWidth }
  };

  return ratios[aspectRatio];
};

// Generate placeholder URL using a service like Unsplash or custom generator
export const generatePlaceholderUrl = (config: PlaceholderConfig): string => {
  const { width, height, category, quality = 80 } = config;
  const dimensions = height ? { width, height } : getAspectRatioDimensions(config.aspectRatio, width);
  
  // For development, use a placeholder service
  // In production, replace with your own placeholder generation
  const baseUrl = 'https://images.unsplash.com';
  
  const categoryKeywords = {
    hero: 'office,workspace,technology,modern',
    project: 'website,computer,screen,interface',
    team: 'professional,portrait,business,person',
    'client-logo': 'logo,brand,company,business',
    testimonial: 'happy,customer,review,satisfaction',
    service: 'service,solution,professional,quality',
    background: 'abstract,pattern,gradient,modern',
    icon: 'icon,symbol,minimal,clean',
    gallery: 'portfolio,showcase,creative,design'
  };

  const keywords = categoryKeywords[category] || 'professional,business';
  
  return `${baseUrl}/${dimensions.width}x${dimensions.height}/?${keywords}&q=${quality}`;
};

// Generate WebP placeholder with fallback
export const generateWebPPlaceholder = (config: PlaceholderConfig): {
  webp: string;
  fallback: string;
  srcSet: string;
} => {
  const baseUrl = generatePlaceholderUrl(config);
  
  // Generate responsive sizes
  const sizes = config.sizes || [
    { width: config.width, height: config.height || getAspectRatioDimensions(config.aspectRatio, config.width).height },
    { width: Math.round(config.width * 0.75), height: Math.round((config.height || getAspectRatioDimensions(config.aspectRatio, config.width).height) * 0.75) },
    { width: Math.round(config.width * 0.5), height: Math.round((config.height || getAspectRatioDimensions(config.aspectRatio, config.width).height) * 0.5) }
  ];

  const srcSet = sizes
    .map(size => `${generatePlaceholderUrl({ ...config, width: size.width, height: size.height })} ${size.width}w`)
    .join(', ');

  return {
    webp: `${baseUrl}&fm=webp`,
    fallback: `${baseUrl}&fm=jpg`,
    srcSet
  };
};

// Generate blur placeholder for loading states
export const generateBlurPlaceholder = (config: PlaceholderConfig): string => {
  const smallConfig = {
    ...config,
    width: 20,
    height: Math.round(20 * (config.height || getAspectRatioDimensions(config.aspectRatio, config.width).height) / config.width),
    quality: 10
  };
  
  return generatePlaceholderUrl(smallConfig);
};

// Generate CSS for placeholder styling
export const generatePlaceholderCSS = (category: PlaceholderCategory): string => {
  const pattern = PLACEHOLDER_PATTERNS[category];
  
  return `
    background: ${pattern.background};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: Inter, sans-serif;
    font-weight: 500;
    text-align: center;
    position: relative;
    overflow: hidden;
  `;
};

// Professional placeholder presets
export const PLACEHOLDER_PRESETS: Record<string, PlaceholderConfig> = {
  heroLarge: {
    category: 'hero',
    aspectRatio: '16:9',
    width: 1920,
    height: 1080,
    alt: 'Hero banner showcasing professional web design services',
    priority: true,
    quality: 90
  },
  heroMedium: {
    category: 'hero',
    aspectRatio: '16:9',
    width: 1200,
    height: 675,
    alt: 'Professional web design hero image',
    priority: true,
    quality: 85
  },
  projectCard: {
    category: 'project',
    aspectRatio: '4:3',
    width: 600,
    height: 450,
    alt: 'Project showcase image',
    quality: 80
  },
  projectFeatured: {
    category: 'project',
    aspectRatio: '16:9',
    width: 800,
    height: 450,
    alt: 'Featured project showcase',
    quality: 85
  },
  teamMember: {
    category: 'team',
    aspectRatio: '1:1',
    width: 400,
    height: 400,
    alt: 'Team member professional photo',
    quality: 85
  },
  clientLogo: {
    category: 'client-logo',
    aspectRatio: '3:2',
    width: 200,
    height: 133,
    alt: 'Client company logo',
    quality: 90
  },
  testimonialAvatar: {
    category: 'testimonial',
    aspectRatio: '1:1',
    width: 80,
    height: 80,
    alt: 'Client testimonial photo',
    quality: 80
  },
  serviceIcon: {
    category: 'service',
    aspectRatio: '1:1',
    width: 100,
    height: 100,
    alt: 'Service icon illustration',
    quality: 85
  },
  backgroundPattern: {
    category: 'background',
    aspectRatio: '16:9',
    width: 1600,
    height: 900,
    alt: 'Background pattern',
    quality: 70
  },
  galleryThumb: {
    category: 'gallery',
    aspectRatio: '1:1',
    width: 300,
    height: 300,
    alt: 'Gallery thumbnail',
    quality: 80
  }
};

// Utility function to get placeholder by name
export const getPlaceholder = (presetName: keyof typeof PLACEHOLDER_PRESETS): PlaceholderConfig => {
  return PLACEHOLDER_PRESETS[presetName];
};

// Generate responsive image sizes string
export const generateSizesString = (config: PlaceholderConfig): string => {
  const { category, width } = config;
  
  // Default responsive sizes based on category
  const responsiveSizes = {
    hero: '100vw',
    project: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    team: '(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw',
    'client-logo': '(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 15vw',
    testimonial: '80px',
    service: '100px',
    background: '100vw',
    icon: '50px',
    gallery: '(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'
  };

  return responsiveSizes[category] || `${width}px`;
};

// Image loading priorities
export const getImagePriority = (category: PlaceholderCategory): boolean => {
  const highPriorityCategories: PlaceholderCategory[] = ['hero', 'project'];
  return highPriorityCategories.includes(category);
};

// Generate complete image configuration
export const generateImageConfig = (
  presetName: keyof typeof PLACEHOLDER_PRESETS,
  customConfig?: Partial<PlaceholderConfig>
): PlaceholderConfig & {
  urls: ReturnType<typeof generateWebPPlaceholder>;
  blurUrl: string;
  sizes: string;
  css: string;
} => {
  const baseConfig = { ...PLACEHOLDER_PRESETS[presetName], ...customConfig };
  
  return {
    ...baseConfig,
    urls: generateWebPPlaceholder(baseConfig),
    blurUrl: generateBlurPlaceholder(baseConfig),
    sizes: generateSizesString(baseConfig),
    css: generatePlaceholderCSS(baseConfig.category)
  };
};