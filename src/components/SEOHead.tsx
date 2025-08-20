import { Helmet } from "react-helmet-async";

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title: string;
    description: string;
    image: string;
    type: 'website' | 'article';
    url?: string;
  };
  twitter?: {
    card: 'summary_large_image' | 'summary';
    title: string;
    description: string;
    image: string;
    creator?: string;
  };
  structuredData?: object;
  noIndex?: boolean;
}

interface SEOHeadProps {
  metadata: SEOMetadata;
}

export const SEOHead = ({ metadata }: SEOHeadProps) => {
  const {
    title,
    description,
    keywords = [],
    canonical,
    openGraph,
    twitter,
    structuredData,
    noIndex = false
  } = metadata;

  // Default values
  const defaultImage = "https://nextreachstudio.com/og-image.jpg";
  const defaultUrl = "https://nextreachstudio.com";
  const siteName = "NextReach Studio";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph Tags */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={openGraph?.title || title} />
      <meta property="og:description" content={openGraph?.description || description} />
      <meta property="og:image" content={openGraph?.image || defaultImage} />
      <meta property="og:type" content={openGraph?.type || 'website'} />
      <meta property="og:url" content={openGraph?.url || canonical || defaultUrl} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitter?.card || 'summary_large_image'} />
      <meta name="twitter:title" content={twitter?.title || title} />
      <meta name="twitter:description" content={twitter?.description || description} />
      <meta name="twitter:image" content={twitter?.image || defaultImage} />
      {twitter?.creator && <meta name="twitter:creator" content={twitter.creator} />}
      
      {/* Additional Meta Tags */}
      <meta name="author" content="NextReach Studio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3b82f6" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Predefined SEO configurations for different pages
export const seoConfigs = {
  home: {
    title: "NextReach Studio - Professional Web Design & Development in Pune & Mumbai",
    description: "Premium web design and development services for businesses in Pune and Mumbai. Mobile-first, SEO-optimized websites that drive results. Get your professional website today!",
    keywords: [
      "web design Pune",
      "web development Mumbai", 
      "website design Pune",
      "professional websites",
      "mobile-first design",
      "SEO optimization",
      "NextReach Studio"
    ],
    canonical: "https://nextreachstudio.com/",
    openGraph: {
      title: "NextReach Studio - Professional Web Design & Development",
      description: "Premium web design services for businesses in Pune and Mumbai. Mobile-first, SEO-optimized websites that bring customers.",
      image: "https://nextreachstudio.com/og-home.jpg",
      type: "website" as const,
      url: "https://nextreachstudio.com/"
    },
    twitter: {
      card: "summary_large_image" as const,
      title: "NextReach Studio - Professional Web Design",
      description: "Premium web design services in Pune & Mumbai",
      image: "https://nextreachstudio.com/twitter-home.jpg"
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NextReach Studio",
      "url": "https://nextreachstudio.com",
      "logo": "https://nextreachstudio.com/logo.png",
      "description": "Professional web design and development agency specializing in mobile-first, SEO-optimized websites for businesses in Pune and Mumbai.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-98765-43210",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/nextreach-studio",
        "https://twitter.com/nextreachstudio"
      ],
      "areaServed": ["Pune", "Mumbai", "Maharashtra", "India"],
      "serviceType": ["Web Design", "Web Development", "SEO Optimization", "Mobile-First Design"]
    }
  },
  
  about: {
    title: "About NextReach Studio - Web Design Experts in Pune & Mumbai",
    description: "Learn about NextReach Studio's mission to help local businesses grow with professional, mobile-first websites. Serving Pune, Mumbai, and beyond since 2023.",
    keywords: ["about NextReach", "web design company Pune", "Mumbai web developers", "professional web design"],
    canonical: "https://nextreachstudio.com/about"
  },
  
  services: {
    title: "Web Design Services - Healthcare, Business & E-commerce Websites",
    description: "Specialized web design services for doctors, clinics, restaurants, and local businesses in Pune & Mumbai. Mobile-first design, SEO optimization, and fast delivery.",
    keywords: [
      "web design services",
      "healthcare website design",
      "restaurant website design", 
      "business website Pune",
      "clinic website Mumbai"
    ],
    canonical: "https://nextreachstudio.com/services"
  },
  
  portfolio: {
    title: "Portfolio - Successful Websites for Pune & Mumbai Businesses",
    description: "View our portfolio of successful websites for doctors, restaurants, and businesses in Pune and Mumbai. Real results, real clients, measurable growth.",
    keywords: ["web design portfolio", "Pune websites", "Mumbai web design", "client success stories"],
    canonical: "https://nextreachstudio.com/portfolio"
  },
  
  pricing: {
    title: "Web Design Pricing - Transparent Packages for Pune & Mumbai",
    description: "Clear, transparent pricing for professional websites. Packages starting from ₹9,999. No hidden costs. Perfect for businesses in Pune and Mumbai.",
    keywords: ["web design pricing", "website cost Pune", "affordable web design Mumbai", "transparent pricing"],
    canonical: "https://nextreachstudio.com/pricing"
  },
  
  contact: {
    title: "Contact NextReach Studio - Get Your Website Quote Today",
    description: "Ready to grow your business with a professional website? Contact NextReach Studio for a free consultation. Serving Pune, Mumbai, and surrounding areas.",
    keywords: ["contact NextReach", "web design consultation", "website quote Pune", "Mumbai web design contact"],
    canonical: "https://nextreachstudio.com/contact"
  }
};

export default SEOHead;