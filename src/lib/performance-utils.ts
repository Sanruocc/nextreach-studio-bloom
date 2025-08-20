/**
 * Performance utilities for optimizing Core Web Vitals and user experience
 */

// Web Vitals tracking
export interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Performance observer for tracking metrics
export const initializePerformanceTracking = () => {
  if (typeof window === 'undefined') return;

  // Track Largest Contentful Paint (LCP)
  const observeLCP = () => {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (lastEntry) {
          const lcp = lastEntry.startTime;
          console.log('LCP:', lcp);
          
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(lcp),
              event_category: 'Web Vitals'
            });
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP observation not supported');
    }
  };

  // Track First Input Delay (FID)
  const observeFID = () => {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          console.log('FID:', fid);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(fid),
              event_category: 'Web Vitals'
            });
          }
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID observation not supported');
    }
  };

  // Track Cumulative Layout Shift (CLS)
  const observeCLS = () => {
    try {
      let clsValue = 0;
      let clsEntries: any[] = [];
      
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsEntries.push(entry);
            clsValue += entry.value;
          }
        });
        
        console.log('CLS:', clsValue);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            event_category: 'Web Vitals'
          });
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS observation not supported');
    }
  };

  // Initialize all observers
  observeLCP();
  observeFID();
  observeCLS();
};

// Image optimization utilities
export const optimizeImage = (src: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
} = {}) => {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // For Vercel Image Optimization
  if (src.startsWith('/') || src.includes('nextreachstudio.com')) {
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('q', quality.toString());
    params.set('f', format);
    
    return `/_next/image?url=${encodeURIComponent(src)}&${params.toString()}`;
  }
  
  return src;
};

// Lazy loading utility
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, defaultOptions);
};

// Resource hints for preloading
export const addResourceHints = () => {
  if (typeof document === 'undefined') return;

  const head = document.head;

  // Preload critical fonts
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  fontPreload.as = 'style';
  head.appendChild(fontPreload);

  // DNS prefetch for external domains
  const dnsPrefetch = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
    'https://vercel.live'
  ];

  dnsPrefetch.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    head.appendChild(link);
  });
};

// Bundle size monitoring
export const trackBundleSize = () => {
  if (typeof window === 'undefined') return;

  // Track JavaScript bundle size
  const trackJS = () => {
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    let totalSize = 0;

    scripts.forEach(async (script: any) => {
      try {
        const response = await fetch(script.src, { method: 'HEAD' });
        const size = parseInt(response.headers.get('content-length') || '0');
        totalSize += size;
      } catch (error) {
        console.warn('Could not fetch script size:', script.src);
      }
    });

    console.log('Total JS Bundle Size:', totalSize, 'bytes');
    
    if (window.gtag) {
      window.gtag('event', 'bundle_size', {
        value: totalSize,
        event_category: 'Performance'
      });
    }
  };

  // Track CSS bundle size
  const trackCSS = () => {
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    let totalSize = 0;

    stylesheets.forEach(async (link: any) => {
      try {
        const response = await fetch(link.href, { method: 'HEAD' });
        const size = parseInt(response.headers.get('content-length') || '0');
        totalSize += size;
      } catch (error) {
        console.warn('Could not fetch CSS size:', link.href);
      }
    });

    console.log('Total CSS Bundle Size:', totalSize, 'bytes');
  };

  // Run after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      trackJS();
      trackCSS();
    }, 1000);
  });
};

// Critical CSS inlining utility
export const inlineCriticalCSS = (css: string) => {
  if (typeof document === 'undefined') return;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Service Worker registration for caching
export const registerServiceWorker = async () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered:', registration);
    
    // Update available
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New content available, show update notification
            console.log('New content available, please refresh');
          }
        });
      }
    });
  } catch (error) {
    console.error('Service Worker registration failed:', error);
  }
};

// Performance budget monitoring
export const monitorPerformanceBudget = () => {
  const budgets = {
    LCP: 2500, // 2.5 seconds
    FID: 100,  // 100 milliseconds
    CLS: 0.1,  // 0.1 cumulative score
    TTI: 3800, // 3.8 seconds
    FCP: 1800  // 1.8 seconds
  };

  // Monitor and alert if budgets are exceeded
  const checkBudget = (metric: string, value: number) => {
    const budget = budgets[metric as keyof typeof budgets];
    if (budget && value > budget) {
      console.warn(`Performance budget exceeded for ${metric}: ${value} > ${budget}`);
      
      if (window.gtag) {
        window.gtag('event', 'performance_budget_exceeded', {
          metric_name: metric,
          metric_value: value,
          budget_value: budget,
          event_category: 'Performance'
        });
      }
    }
  };

  return checkBudget;
};

export default {
  initializePerformanceTracking,
  optimizeImage,
  createIntersectionObserver,
  addResourceHints,
  trackBundleSize,
  inlineCriticalCSS,
  registerServiceWorker,
  monitorPerformanceBudget
};