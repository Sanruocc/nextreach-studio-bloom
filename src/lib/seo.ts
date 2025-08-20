/**
 * SEO utilities and meta tag management for NextReach Studio
 * Comprehensive SEO infrastructure for professional portfolio
 */

// SEO metadata interface
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: OpenGraphData;
  twitter?: TwitterCardData;
  structuredData?: StructuredData;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

// Open Graph metadata
export interface OpenGraphData {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  url: string;
  type: 'website' | 'article' | 'profile' | 'business.business';
  siteName: string;
  locale?: string;
}

// Twitter Card metadata
export interface TwitterCardData {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  site?: string;
  creator?: string;
}

// Structured data types
export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

// NextReach Studio business information
export const BUSINESS_INFO = {
  name: 'NextReach Studio',
  description: 'Professional web design and development agency specializing in modern, performance-optimized websites for businesses in Pune, Mumbai, and beyond.',
  url: 'https://nextreachstudio.com',
  logo: 'https://nextreachstudio.com/logo.png',
  email: 'hello@nextreachstudio.com',
  phone: '+91-XXXXXXXXXX',
  address: {
    streetAddress: 'Business Address',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411001',
    addressCountry: 'IN'
  },
  socialMedia: {
    linkedin: 'https://linkedin.com/company/nextreach-studio',
    twitter: 'https://twitter.com/nextreachstudio',
    instagram: 'https://instagram.com/nextreachstudio'
  },
  services: [
    'Web Design',
    'Web Development',
    'E-commerce Development',
    'Mobile App Development',
    'SEO Optimization',
    'Digital Marketing'
  ]
} as const;

// Default SEO configuration
export const DEFAULT_SEO: SEOMetadata = {
  title: 'NextReach Studio - Professional Web Design & Development',
  description: 'Premium web design and development services for businesses in Pune and Mumbai. Mobile-first, SEO-optimized websites that drive results and grow your business.',
  keywords: [
    'web design',
    'web development',
    'Pune web design',
    'Mumbai web development',
    'professional websites',
    'responsive design',
    'SEO optimization',
    'e-commerce development',
    'digital agency',
    'NextReach Studio'
  ],
  canonical: BUSINESS_INFO.url,
  author: BUSINESS_INFO.name,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'NextReach Studio - Professional Web Design & Development',
    description: 'Premium web design and development services for businesses in Pune and Mumbai. Mobile-first, SEO-optimized websites that drive results.',
    image: `${BUSINESS_INFO.url}/og-image.jpg`,
    imageAlt: 'NextReach Studio - Professional Web Design Agency',
    url: BUSINESS_INFO.url,
    type: 'business.business',
    siteName: BUSINESS_INFO.name,
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextReach Studio - Professional Web Design & Development',
    description: 'Premium web design and development services for businesses in Pune and Mumbai.',
    image: `${BUSINESS_INFO.url}/twitter-card.jpg`,
    imageAlt: 'NextReach Studio - Professional Web Design Agency',
    site: '@nextreachstudio',
    creator: '@nextreachstudio'
  }
};

// Page-specific SEO configurations
export const PAGE_SEO: Record<string, Partial<SEOMetadata>> = {
  home: {
    title: 'NextReach Studio - Professional Web Design & Development Agency',
    description: 'Transform your business with professional web design and development services. Specializing in modern, mobile-first websites for businesses in Pune, Mumbai, and beyond.',
    keywords: ['web design agency', 'professional web development', 'Pune web design', 'Mumbai web development', 'responsive websites'],
    structuredData: createOrganizationSchema()
  },
  about: {
    title: 'About NextReach Studio - Professional Web Design Team',
    description: 'Meet the NextReach Studio team. Experienced web designers and developers creating exceptional digital experiences for businesses across India.',
    keywords: ['about nextreach studio', 'web design team', 'professional developers', 'digital agency team'],
    structuredData: createAboutPageSchema()
  },
  services: {
    title: 'Web Design & Development Services - NextReach Studio',
    description: 'Comprehensive web design and development services including responsive design, e-commerce development, SEO optimization, and digital marketing solutions.',
    keywords: ['web design services', 'web development services', 'e-commerce development', 'SEO services', 'digital marketing'],
    structuredData: createServiceSchema()
  },
  portfolio: {
    title: 'Portfolio - NextReach Studio Web Design Projects',
    description: 'Explore our portfolio of successful web design and development projects. See how we\'ve helped businesses grow with professional websites.',
    keywords: ['web design portfolio', 'website examples', 'nextreach studio projects', 'professional websites'],
    structuredData: createPortfolioSchema()
  },
  pricing: {
    title: 'Web Design Pricing - NextReach Studio',
    description: 'Transparent pricing for professional web design and development services. Choose the perfect package for your business needs and budget.',
    keywords: ['web design pricing', 'website development cost', 'professional web design packages'],
    structuredData: createPricingSchema()
  },
  contact: {
    title: 'Contact NextReach Studio - Get Your Web Design Quote',
    description: 'Ready to start your web design project? Contact NextReach Studio for a free consultation and quote. Serving businesses in Pune, Mumbai, and beyond.',
    keywords: ['contact nextreach studio', 'web design quote', 'free consultation', 'web development inquiry'],
    structuredData: createContactSchema()
  },
  privacy: {
    title: 'Privacy Policy - NextReach Studio',
    description: 'NextReach Studio privacy policy. Learn how we protect your personal information and data when you use our website and services.',
    keywords: ['privacy policy', 'data protection', 'nextreach studio privacy'],
    robots: 'index, nofollow'
  }
};

// Utility function to generate complete SEO metadata
export const generateSEOMetadata = (
  pageKey: keyof typeof PAGE_SEO,
  customMetadata?: Partial<SEOMetadata>
): SEOMetadata => {
  const pageDefaults = PAGE_SEO[pageKey] || {};
  
  return {
    ...DEFAULT_SEO,
    ...pageDefaults,
    ...customMetadata,
    openGraph: {
      ...DEFAULT_SEO.openGraph!,
      ...pageDefaults.openGraph,
      ...customMetadata?.openGraph
    },
    twitter: {
      ...DEFAULT_SEO.twitter!,
      ...pageDefaults.twitter,
      ...customMetadata?.twitter
    }
  };
};

// Structured data generators
function createOrganizationSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    email: BUSINESS_INFO.email,
    telephone: BUSINESS_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_INFO.address
    },
    sameAs: Object.values(BUSINESS_INFO.socialMedia),
    areaServed: [
      {
        '@type': 'City',
        name: 'Pune',
        containedInPlace: {
          '@type': 'State',
          name: 'Maharashtra'
        }
      },
      {
        '@type': 'City',
        name: 'Mumbai',
        containedInPlace: {
          '@type': 'State',
          name: 'Maharashtra'
        }
      }
    ],
    serviceType: BUSINESS_INFO.services,
    foundingDate: '2024',
    numberOfEmployees: '5-10'
  };
}

function createServiceSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Web Design and Development Services',
    description: 'Comprehensive web design and development services for businesses',
    provider: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.url
    },
    areaServed: ['Pune', 'Mumbai', 'Maharashtra', 'India'],
    serviceType: BUSINESS_INFO.services
  };
}

function createAboutPageSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About NextReach Studio',
    description: 'Learn about NextReach Studio team and our web design expertise',
    mainEntity: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      description: BUSINESS_INFO.description
    }
  };
}

function createPortfolioSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'NextReach Studio Portfolio',
    description: 'Portfolio of web design and development projects by NextReach Studio',
    mainEntity: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name
    }
  };
}

function createPricingSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Web Design Pricing',
    description: 'Transparent pricing for professional web design services',
    mainEntity: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name
    }
  };
}

function createContactSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact NextReach Studio',
    description: 'Get in touch with NextReach Studio for web design services',
    mainEntity: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phone,
        email: BUSINESS_INFO.email,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi']
      }
    }
  };
}

// Utility function to create meta tags
export const createMetaTags = (metadata: SEOMetadata): string => {
  const tags: string[] = [];

  // Basic meta tags
  tags.push(`<title>${metadata.title}</title>`);
  tags.push(`<meta name="description" content="${metadata.description}" />`);
  
  if (metadata.keywords?.length) {
    tags.push(`<meta name="keywords" content="${metadata.keywords.join(', ')}" />`);
  }
  
  if (metadata.author) {
    tags.push(`<meta name="author" content="${metadata.author}" />`);
  }
  
  if (metadata.robots) {
    tags.push(`<meta name="robots" content="${metadata.robots}" />`);
  }
  
  if (metadata.canonical) {
    tags.push(`<link rel="canonical" href="${metadata.canonical}" />`);
  }

  // Open Graph tags
  if (metadata.openGraph) {
    const og = metadata.openGraph;
    tags.push(`<meta property="og:title" content="${og.title}" />`);
    tags.push(`<meta property="og:description" content="${og.description}" />`);
    tags.push(`<meta property="og:image" content="${og.image}" />`);
    tags.push(`<meta property="og:url" content="${og.url}" />`);
    tags.push(`<meta property="og:type" content="${og.type}" />`);
    tags.push(`<meta property="og:site_name" content="${og.siteName}" />`);
    
    if (og.imageAlt) {
      tags.push(`<meta property="og:image:alt" content="${og.imageAlt}" />`);
    }
    
    if (og.locale) {
      tags.push(`<meta property="og:locale" content="${og.locale}" />`);
    }
  }

  // Twitter Card tags
  if (metadata.twitter) {
    const twitter = metadata.twitter;
    tags.push(`<meta name="twitter:card" content="${twitter.card}" />`);
    tags.push(`<meta name="twitter:title" content="${twitter.title}" />`);
    tags.push(`<meta name="twitter:description" content="${twitter.description}" />`);
    tags.push(`<meta name="twitter:image" content="${twitter.image}" />`);
    
    if (twitter.imageAlt) {
      tags.push(`<meta name="twitter:image:alt" content="${twitter.imageAlt}" />`);
    }
    
    if (twitter.site) {
      tags.push(`<meta name="twitter:site" content="${twitter.site}" />`);
    }
    
    if (twitter.creator) {
      tags.push(`<meta name="twitter:creator" content="${twitter.creator}" />`);
    }
  }

  // Structured data
  if (metadata.structuredData) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(metadata.structuredData, null, 2)}</script>`);
  }

  return tags.join('\n');
};

// Sitemap generation utility
export const generateSitemap = (): string => {
  const baseUrl = BUSINESS_INFO.url;
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/portfolio', priority: '0.8', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Robots.txt generation utility
export const generateRobotsTxt = (): string => {
  const baseUrl = BUSINESS_INFO.url;
  
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /.well-known/

# Allow all other content
Allow: /`;
};