/**
 * Image optimization utilities for NextReach Studio
 * Performance optimization and image processing utilities
 */

// Image format detection and optimization
export interface ImageOptimizationConfig {
  quality?: number;
  format?: 'webp' | 'jpg' | 'png' | 'avif';
  width?: number;
  height?: number;
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  progressive?: boolean;
  blur?: number;
}

// Supported image formats by browser
export const getSupportedFormats = (): Promise<{
  webp: boolean;
  avif: boolean;
  jpeg: boolean;
  png: boolean;
}> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      resolve({ webp: false, avif: false, jpeg: true, png: true });
      return;
    }

    const results = {
      webp: false,
      avif: false,
      jpeg: true,
      png: true
    };

    // Test WebP support
    const webpTest = canvas.toDataURL('image/webp');
    results.webp = webpTest.indexOf('data:image/webp') === 0;

    // Test AVIF support (newer format)
    try {
      const avifTest = canvas.toDataURL('image/avif');
      results.avif = avifTest.indexOf('data:image/avif') === 0;
    } catch {
      results.avif = false;
    }

    resolve(results);
  });
};

// Generate optimized image URL
export const generateOptimizedUrl = (
  baseUrl: string,
  config: ImageOptimizationConfig = {}
): string => {
  const {
    quality = 80,
    format = 'webp',
    width,
    height,
    fit = 'cover',
    progressive = true,
    blur
  } = config;

  const params = new URLSearchParams();
  
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());
  params.set('fm', format);
  params.set('fit', fit);
  
  if (progressive) params.set('fl', 'progressive');
  if (blur) params.set('blur', blur.toString());

  return `${baseUrl}?${params.toString()}`;
};

// Generate responsive image srcSet
export const generateResponsiveSrcSet = (
  baseUrl: string,
  widths: number[],
  config: Omit<ImageOptimizationConfig, 'width'> = {}
): string => {
  return widths
    .map(width => {
      const url = generateOptimizedUrl(baseUrl, { ...config, width });
      return `${url} ${width}w`;
    })
    .join(', ');
};

// Image preloading utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch image preloading
export const preloadImages = async (
  urls: string[],
  options: { concurrent?: number; timeout?: number } = {}
): Promise<void> => {
  const { concurrent = 3, timeout = 10000 } = options;
  
  const chunks = [];
  for (let i = 0; i < urls.length; i += concurrent) {
    chunks.push(urls.slice(i, i + concurrent));
  }

  for (const chunk of chunks) {
    const promises = chunk.map(url => 
      Promise.race([
        preloadImage(url),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), timeout)
        )
      ]).catch(() => {
        // Silently fail for individual images
        console.warn(`Failed to preload image: ${url}`);
      })
    );
    
    await Promise.all(promises);
  }
};

// Image lazy loading intersection observer
export const createImageObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px 0px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, defaultOptions);
};

// Image compression utility (client-side)
export const compressImage = (
  file: File,
  options: {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    format?: string;
  } = {}
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const {
      maxWidth = 1920,
      maxHeight = 1080,
      quality = 0.8,
      format = 'image/jpeg'
    } = options;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    if (!ctx) {
      reject(new Error('Canvas context not available'));
      return;
    }

    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;

      // Draw and compress
      ctx.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to compress image'));
          }
        },
        format,
        quality
      );
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
};

// Generate blur placeholder data URL
export const generateBlurDataUrl = (
  width: number = 10,
  height: number = 10,
  color: string = '#f3f4f6'
): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';

  canvas.width = width;
  canvas.height = height;
  
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

// Image format conversion utility
export const convertImageFormat = (
  imageUrl: string,
  targetFormat: string,
  quality: number = 0.8
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx.drawImage(img, 0, 0);
      
      const dataUrl = canvas.toDataURL(targetFormat, quality);
      resolve(dataUrl);
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = imageUrl;
  });
};

// Performance monitoring for images
export interface ImagePerformanceMetrics {
  loadTime: number;
  size: number;
  format: string;
  dimensions: { width: number; height: number };
}

export const measureImagePerformance = (
  imageUrl: string
): Promise<ImagePerformanceMetrics> => {
  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      
      // Estimate file size (approximate)
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
      const size = Math.round((dataUrl.length * 3) / 4); // Approximate size

      resolve({
        loadTime,
        size,
        format: 'unknown', // Would need server-side detection
        dimensions: { width: img.width, height: img.height }
      });
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = imageUrl;
  });
};

// Image accessibility utilities
export const generateAltText = (
  category: string,
  context?: string
): string => {
  const templates = {
    hero: 'Professional web design and development services hero image',
    project: `${context || 'Web development'} project showcase`,
    team: `${context || 'Team member'} professional photo`,
    'client-logo': `${context || 'Client'} company logo`,
    testimonial: `${context || 'Customer'} testimonial photo`,
    service: `${context || 'Service'} icon illustration`,
    background: 'Professional background pattern',
    icon: `${context || 'Feature'} icon`,
    gallery: `${context || 'Portfolio'} gallery image`
  };

  return templates[category as keyof typeof templates] || 'Professional image';
};

// Critical image identification
export const identifyCriticalImages = (): string[] => {
  const criticalSelectors = [
    'img[data-priority="true"]',
    '.hero img',
    '.above-fold img',
    'img[loading="eager"]'
  ];

  const criticalImages: string[] = [];
  
  criticalSelectors.forEach(selector => {
    const images = document.querySelectorAll(selector) as NodeListOf<HTMLImageElement>;
    images.forEach(img => {
      if (img.src) {
        criticalImages.push(img.src);
      }
    });
  });

  return [...new Set(criticalImages)]; // Remove duplicates
};