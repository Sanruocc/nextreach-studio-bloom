/**
 * SEO utilities and meta tag management for NextReach Studio
 * Comprehensive SEO infrastructure - REBRANDED FOR AI AUTOMATION
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
    description: 'Custom AI automation company specializing in intelligent AI agents, chatbots, and workflow automation that work 24/7 for businesses worldwide.',
    url: 'https://nextreachstudio.com',
    logo: 'https://nextreachstudio.com/nextreach-logo.jpg',
    email: 'admin@nextreachstudio.com',
    phone: '+91-9876543210',
    address: {
        streetAddress: 'Global Remote',
        addressLocality: 'Global',
        addressRegion: 'Worldwide',
        postalCode: '000000',
        addressCountry: 'GLOBAL'
    },
    socialMedia: {
        linkedin: 'https://linkedin.com/company/nextreach-studio',
        twitter: 'https://twitter.com/nextreachstudio',
        instagram: 'https://instagram.com/nextreachstudio'
    },
    services: [
        'Custom AI Agents',
        'WhatsApp AI Chatbots',
        'Website AI Chatbots',
        'AI Workflow Automation',
        'Multi-Agent Systems',
        'Lead Qualification AI',
        'Customer Support AI',
        'Data Processing AI'
    ]
} as const;

// Default SEO configuration
export const DEFAULT_SEO: SEOMetadata = {
    title: 'NextReach Studio - Custom AI Agents & Automation Solutions',
    description: 'Build intelligent AI agents that work 24/7. Custom AI automation for customer support, lead qualification, workflow automation, and chatbots. Global AI solutions.',
    keywords: [
        'AI agents',
        'custom AI automation',
        'AI chatbots',
        'WhatsApp AI bot',
        'workflow automation',
        'AI customer support',
        'lead qualification AI',
        'multi-agent systems',
        'AI automation company',
        'NextReach Studio'
    ],
    canonical: BUSINESS_INFO.url,
    author: BUSINESS_INFO.name,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    openGraph: {
        title: 'NextReach Studio - Custom AI Agents & Automation Solutions',
        description: 'Build intelligent AI agents that work 24/7. Custom AI automation for customer support, lead qualification, workflow automation, and chatbots.',
        image: `${BUSINESS_INFO.url}/nextreach-logo.jpg`,
        imageAlt: 'NextReach Studio - AI Automation Company',
        url: BUSINESS_INFO.url,
        type: 'business.business',
        siteName: BUSINESS_INFO.name,
        locale: 'en_US'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NextReach Studio - Custom AI Agents & Automation Solutions',
        description: 'Build intelligent AI agents that work 24/7. Custom AI automation for businesses worldwide.',
        image: `${BUSINESS_INFO.url}/nextreach-logo.jpg`,
        imageAlt: 'NextReach Studio - AI Automation Company',
        site: '@nextreachstudio',
        creator: '@nextreachstudio'
    }
};

// Page-specific SEO configurations
export const PAGE_SEO: Record<string, Partial<SEOMetadata>> = {
    home: {
        title: 'NextReach Studio - Custom AI Agents That Automate Your Business 24/7',
        description: 'Transform your business with custom AI agents. We build intelligent automation for customer support, lead qualification, chatbots, and workflows. Global AI solutions.',
        keywords: ['AI agents', 'custom AI automation', 'AI chatbots', 'WhatsApp AI', 'workflow automation', '24/7 AI support', 'AI business automation'],
        structuredData: createOrganizationSchema()
    },
    about: {
        title: 'About NextReach Studio - AI Automation Specialists',
        description: 'Meet the NextReach Studio team. Expert AI specialists building custom AI agents, chatbots, and automation systems for businesses worldwide.',
        keywords: ['about nextreach studio', 'AI automation team', 'AI specialists', 'AI agent developers', 'OpenAI experts'],
        structuredData: createAboutPageSchema()
    },
    services: {
        title: 'AI Agent Solutions - NextReach Studio',
        description: 'Comprehensive AI automation services including custom AI agents, WhatsApp chatbots, workflow automation, and multi-agent systems for businesses worldwide.',
        keywords: ['AI agent services', 'AI automation services', 'chatbot development', 'workflow automation', 'AI integration'],
        structuredData: createServiceSchema()
    },
    portfolio: {
        title: 'AI Solutions Portfolio - NextReach Studio',
        description: 'Explore our portfolio of successful AI automation projects. See how we\'ve helped businesses automate with custom AI agents, chatbots, and workflows.',
        keywords: ['AI automation portfolio', 'AI agent examples', 'chatbot case studies', 'AI automation success stories'],
        structuredData: createPortfolioSchema()
    },
    aiAgents: {
        title: 'Custom AI Agents That Help Your Business Reach the Next Level | NextReach Studio',
        description: 'Get custom AI agents that automate customer support, lead qualification, and workflows 24/7. Free WhatsApp consultation. Built by NextReach AI specialists.',
        keywords: ['custom AI agents', 'AI automation', 'AI chatbot', 'WhatsApp AI', 'AI customer support', '24/7 AI agents', 'workflow automation AI', 'lead qualification AI', 'AI business automation', 'intelligent agents'],
        structuredData: createServiceSchema()
    },
    pricing: {
        title: 'AI Automation Consultation - NextReach Studio',
        description: 'Get custom pricing for AI automation and intelligent agent services. Free consultation to discuss your automation needs.',
        keywords: ['AI automation pricing', 'AI agent cost', 'custom AI consultation', 'AI automation quote'],
        structuredData: createPricingSchema()
    },
    contact: {
        title: 'Contact NextReach Studio - Get Your Custom AI Agent',
        description: 'Ready to automate with AI? Contact NextReach Studio for a free consultation. Custom AI agents, chatbots, and workflow automation for businesses worldwide.',
        keywords: ['contact nextreach studio', 'AI agent consultation', 'free AI consultation', 'WhatsApp AI inquiry', 'AI automation quote'],
        structuredData: createContactSchema()
    },
    privacy: {
        title: 'Privacy Policy - NextReach Studio',
        description: 'NextReach Studio privacy policy. Learn how we protect your personal information and data when you use our website and services.',
        keywords: ['privacy policy', 'data protection', 'nextreach studio privacy'],
        robots: 'index, nofollow'
    },
    terms: {
        title: 'Terms of Service - NextReach Studio',
        description: 'NextReach Studio terms of service. Clear, transparent terms that protect both you and us in our business relationship.',
        keywords: ['terms of service', 'terms and conditions', 'nextreach studio terms'],
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
        areaServed: {
            '@type': 'Place',
            name: 'Worldwide'
        },
        serviceType: BUSINESS_INFO.services,
        foundingDate: '2025',
        numberOfEmployees: '5-10'
    };
}

function createServiceSchema(): StructuredData {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Custom AI Agents and Automation Services',
        description: 'Comprehensive AI automation services including custom AI agents, chatbots, and workflow automation',
        provider: {
            '@type': 'Organization',
            name: BUSINESS_INFO.name,
            url: BUSINESS_INFO.url
        },
        areaServed: 'Worldwide',
        serviceType: BUSINESS_INFO.services
    };
}

function createAboutPageSchema(): StructuredData {
    return {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About NextReach Studio',
        description: 'Learn about NextReach Studio team and our AI automation expertise',
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
        name: 'NextReach Studio AI Solutions Portfolio',
        description: 'Portfolio of AI automation and custom AI agent projects by NextReach Studio',
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
        name: 'AI Automation Consultation',
        description: 'Custom pricing for AI automation and intelligent agent services',
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
        description: 'Get in touch with NextReach Studio for AI automation services',
        mainEntity: {
            '@type': 'Organization',
            name: BUSINESS_INFO.name,
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: BUSINESS_INFO.phone,
                email: BUSINESS_INFO.email,
                contactType: 'customer service',
                areaServed: 'Worldwide',
                availableLanguage: ['English']
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
        { url: '/ai-agents', priority: '0.9', changefreq: 'weekly' },
        { url: '/services', priority: '0.9', changefreq: 'monthly' },
        { url: '/portfolio', priority: '0.8', changefreq: 'weekly' },
        { url: '/contact', priority: '0.7', changefreq: 'monthly' },
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
