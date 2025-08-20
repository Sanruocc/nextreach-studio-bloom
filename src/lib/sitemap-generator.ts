/**
 * Sitemap and robots.txt generation utilities for NextReach Studio
 * SEO optimization for search engine crawling
 */

import { BUSINESS_INFO } from './seo';

// Page configuration for sitemap
interface SitemapPage {
  url: string;
  lastmod?: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

// Static pages configuration
const STATIC_PAGES: SitemapPage[] = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/services',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/portfolio',
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: '/pricing',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/privacy',
    changefreq: 'yearly',
    priority: '0.3'
  }
];

// Generate XML sitemap
export const generateSitemap = (additionalPages: SitemapPage[] = []): string => {
  const baseUrl = BUSINESS_INFO.url;
  const currentDate = new Date().toISOString().split('T')[0];
  
  const allPages = [...STATIC_PAGES, ...additionalPages];
  
  const urlEntries = allPages.map(page => {
    const lastmod = page.lastmod || currentDate;
    
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlEntries}
</urlset>`;
};

// Generate robots.txt
export const generateRobotsTxt = (): string => {
  const baseUrl = BUSINESS_INFO.url;
  
  return `# NextReach Studio - Robots.txt
# Professional Web Design & Development Agency

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1

# Block access to sensitive areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /.well-known/
Disallow: /temp/
Disallow: /cache/

# Block common bot traps
Disallow: /cgi-bin/
Disallow: /tmp/
Disallow: /logs/

# Allow important files
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /favicon.ico
Allow: /.well-known/security.txt

# Specific bot instructions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block problematic bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Additional directives
Host: ${baseUrl.replace('https://', '')}`;
};

// Generate security.txt for responsible disclosure
export const generateSecurityTxt = (): string => {
  return `# NextReach Studio Security Policy
# https://securitytxt.org/

Contact: mailto:security@nextreachstudio.com
Contact: ${BUSINESS_INFO.url}/contact
Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}
Encryption: ${BUSINESS_INFO.url}/.well-known/pgp-key.txt
Acknowledgments: ${BUSINESS_INFO.url}/security-acknowledgments
Policy: ${BUSINESS_INFO.url}/security-policy
Hiring: ${BUSINESS_INFO.url}/careers

# Preferred Languages
Preferred-Languages: en, hi

# Canonical URL
Canonical: ${BUSINESS_INFO.url}/.well-known/security.txt`;
};

// Generate humans.txt for team credits
export const generateHumansTxt = (): string => {
  return `/* TEAM */
NextReach Studio Team
Site: ${BUSINESS_INFO.url}
Email: ${BUSINESS_INFO.email}
Location: Pune, Maharashtra, India

/* THANKS */
Fonts: Inter by Rasmus Andersson
Icons: Lucide Icons
Framework: React + Vite
Styling: Tailwind CSS
Components: shadcn/ui
Animations: Motion
Hosting: Vercel

/* SITE */
Last update: ${new Date().toISOString().split('T')[0]}
Language: English
Doctype: HTML5
IDE: Visual Studio Code, Kiro IDE
Standards: HTML5, CSS3, ES2022
Components: React, TypeScript
Software: Vite, Tailwind CSS, Motion`;
};

// Utility to create and download files (for development)
export const downloadFile = (content: string, filename: string, mimeType: string = 'text/plain') => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Generate all SEO files
export const generateAllSEOFiles = () => {
  const sitemap = generateSitemap();
  const robotsTxt = generateRobotsTxt();
  const securityTxt = generateSecurityTxt();
  const humansTxt = generateHumansTxt();
  
  return {
    'sitemap.xml': sitemap,
    'robots.txt': robotsTxt,
    'security.txt': securityTxt,
    'humans.txt': humansTxt
  };
};

// Validate sitemap URLs
export const validateSitemapUrls = (pages: SitemapPage[]): boolean => {
  const baseUrl = BUSINESS_INFO.url;
  
  return pages.every(page => {
    // Check if URL is valid
    try {
      new URL(page.url, baseUrl);
      return true;
    } catch {
      console.error(`Invalid URL in sitemap: ${page.url}`);
      return false;
    }
  });
};

// Generate sitemap index for large sites
export const generateSitemapIndex = (sitemaps: string[]): string => {
  const baseUrl = BUSINESS_INFO.url;
  const currentDate = new Date().toISOString();
  
  const sitemapEntries = sitemaps.map(sitemap => `  <sitemap>
    <loc>${baseUrl}/${sitemap}</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;
};