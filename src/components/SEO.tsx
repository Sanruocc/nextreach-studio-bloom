/**
 * SEO component for NextReach Studio
 * Manages meta tags, structured data, and SEO optimization
 */

import { useEffect } from 'react';
import { SEOMetadata, generateSEOMetadata, PAGE_SEO } from '@/lib/seo';

interface SEOProps {
  pageKey: keyof typeof PAGE_SEO;
  customMetadata?: Partial<SEOMetadata>;
}

export const SEO = ({ pageKey, customMetadata }: SEOProps) => {
  useEffect(() => {
    const metadata = generateSEOMetadata(pageKey, customMetadata);
    
    // Update document title
    document.title = metadata.title;
    
    // Update or create meta tags
    updateMetaTag('description', metadata.description);
    
    if (metadata.keywords?.length) {
      updateMetaTag('keywords', metadata.keywords.join(', '));
    }
    
    if (metadata.author) {
      updateMetaTag('author', metadata.author);
    }
    
    if (metadata.robots) {
      updateMetaTag('robots', metadata.robots);
    }
    
    // Update canonical link
    if (metadata.canonical) {
      updateCanonicalLink(metadata.canonical);
    }
    
    // Update Open Graph tags
    if (metadata.openGraph) {
      const og = metadata.openGraph;
      updateMetaProperty('og:title', og.title);
      updateMetaProperty('og:description', og.description);
      updateMetaProperty('og:image', og.image);
      updateMetaProperty('og:url', og.url);
      updateMetaProperty('og:type', og.type);
      updateMetaProperty('og:site_name', og.siteName);
      
      if (og.imageAlt) {
        updateMetaProperty('og:image:alt', og.imageAlt);
      }
      
      if (og.locale) {
        updateMetaProperty('og:locale', og.locale);
      }
    }
    
    // Update Twitter Card tags
    if (metadata.twitter) {
      const twitter = metadata.twitter;
      updateMetaName('twitter:card', twitter.card);
      updateMetaName('twitter:title', twitter.title);
      updateMetaName('twitter:description', twitter.description);
      updateMetaName('twitter:image', twitter.image);
      
      if (twitter.imageAlt) {
        updateMetaName('twitter:image:alt', twitter.imageAlt);
      }
      
      if (twitter.site) {
        updateMetaName('twitter:site', twitter.site);
      }
      
      if (twitter.creator) {
        updateMetaName('twitter:creator', twitter.creator);
      }
    }
    
    // Update structured data
    if (metadata.structuredData) {
      updateStructuredData(metadata.structuredData);
    }
    
  }, [pageKey, customMetadata]);

  return null; // This component doesn't render anything
};

// Utility functions for updating meta tags
const updateMetaTag = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.name = name;
    element.content = content;
    document.head.appendChild(element);
  }
};

const updateMetaProperty = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    element.content = content;
    document.head.appendChild(element);
  }
};

const updateMetaName = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.name = name;
    element.content = content;
    document.head.appendChild(element);
  }
};

const updateCanonicalLink = (href: string) => {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (element) {
    element.href = href;
  } else {
    element = document.createElement('link');
    element.rel = 'canonical';
    element.href = href;
    document.head.appendChild(element);
  }
};

const updateStructuredData = (data: any) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);
};

// Hook for using SEO metadata in components
export const useSEO = (pageKey: keyof typeof PAGE_SEO, customMetadata?: Partial<SEOMetadata>) => {
  return generateSEOMetadata(pageKey, customMetadata);
};

// Component for adding additional meta tags
interface MetaTagProps {
  name?: string;
  property?: string;
  content: string;
}

export const MetaTag = ({ name, property, content }: MetaTagProps) => {
  useEffect(() => {
    if (name) {
      updateMetaTag(name, content);
    } else if (property) {
      updateMetaProperty(property, content);
    }
  }, [name, property, content]);

  return null;
};

// Component for adding structured data
interface StructuredDataProps {
  data: any;
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  useEffect(() => {
    updateStructuredData(data);
  }, [data]);

  return null;
};