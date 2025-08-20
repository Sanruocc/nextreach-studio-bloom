/**
 * Optimized Image component for NextReach Studio
 * Professional image loading with WebP support, lazy loading, and placeholders
 */

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  PlaceholderConfig, 
  generateImageConfig, 
  PLACEHOLDER_PRESETS,
  PlaceholderCategory 
} from '@/lib/image-placeholders';

interface OptimizedImageProps {
  src?: string;
  alt: string;
  preset?: keyof typeof PLACEHOLDER_PRESETS;
  category?: PlaceholderCategory;
  width?: number;
  height?: number;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  blur?: boolean;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: 'blur' | 'empty' | 'skeleton';
  fallbackSrc?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  preset,
  category = 'project',
  width = 600,
  height,
  aspectRatio = '4:3',
  className = '',
  priority = false,
  quality = 80,
  blur = true,
  onClick,
  onLoad,
  onError,
  placeholder = 'blur',
  fallbackSrc
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate image configuration
  const config = preset 
    ? generateImageConfig(preset)
    : generateImageConfig('projectCard', {
        category,
        width,
        height,
        alt,
        priority,
        quality,
        aspectRatio: aspectRatio as any
      });

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Get image source
  const getImageSrc = () => {
    if (hasError && fallbackSrc) return fallbackSrc;
    if (hasError || !src) return config.urls.fallback;
    return src;
  };

  // Get srcSet for responsive images
  const getSrcSet = () => {
    if (hasError || !src) return config.urls.srcSet;
    // If custom src is provided, generate responsive versions
    return `${src} ${config.width}w`;
  };

  // Render placeholder
  const renderPlaceholder = () => {
    if (placeholder === 'empty') return null;
    
    if (placeholder === 'skeleton') {
      return (
        <div 
          className={cn(
            "animate-pulse bg-gray-200 rounded",
            className
          )}
          style={{
            width: config.width,
            height: config.height,
            aspectRatio: config.aspectRatio
          }}
        />
      );
    }

    // Blur placeholder
    return (
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        style={{
          backgroundImage: `url(${config.blurUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          transform: 'scale(1.1)'
        }}
      />
    );
  };

  // Render fallback when no src and error
  const renderFallback = () => {
    const pattern = config.category;
    
    return (
      <div
        className={cn(
          "flex items-center justify-center text-white font-medium",
          className
        )}
        style={{
          width: config.width,
          height: config.height,
          aspectRatio: config.aspectRatio,
          background: 'linear-gradient(135deg, #3B82F6, #10B981)'
        }}
      >
        <div className="text-center">
          <div className="text-2xl mb-2">📷</div>
          <div className="text-sm opacity-90">Image Placeholder</div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-gray-100",
        onClick && "cursor-pointer",
        className
      )}
      style={{
        width: config.width,
        height: config.height,
        aspectRatio: config.aspectRatio
      }}
      onClick={onClick}
    >
      {/* Placeholder */}
      {blur && placeholder !== 'empty' && renderPlaceholder()}
      
      {/* Main image */}
      {isInView && (
        <>
          {src || !hasError ? (
            <picture>
              {/* WebP source */}
              <source
                srcSet={config.urls.srcSet.replace(/&fm=jpg/g, '&fm=webp')}
                sizes={config.sizes}
                type="image/webp"
              />
              
              {/* Fallback source */}
              <img
                ref={imgRef}
                src={getImageSrc()}
                srcSet={getSrcSet()}
                sizes={config.sizes}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
                className={cn(
                  "w-full h-full object-cover transition-opacity duration-300",
                  isLoaded ? "opacity-100" : "opacity-0"
                )}
                style={{
                  aspectRatio: config.aspectRatio
                }}
              />
            </picture>
          ) : (
            renderFallback()
          )}
        </>
      )}
      
      {/* Loading indicator */}
      {!isLoaded && !hasError && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
};

// Specialized image components for different use cases
export const HeroImage = ({ className, ...props }: Omit<OptimizedImageProps, 'preset'>) => (
  <OptimizedImage
    preset="heroLarge"
    priority={true}
    className={cn("w-full", className)}
    {...props}
  />
);

export const ProjectImage = ({ className, ...props }: Omit<OptimizedImageProps, 'preset'>) => (
  <OptimizedImage
    preset="projectCard"
    className={cn("rounded-lg", className)}
    {...props}
  />
);

export const TeamMemberImage = ({ className, ...props }: Omit<OptimizedImageProps, 'preset'>) => (
  <OptimizedImage
    preset="teamMember"
    className={cn("rounded-full", className)}
    {...props}
  />
);

export const ClientLogo = ({ className, ...props }: Omit<OptimizedImageProps, 'preset'>) => (
  <OptimizedImage
    preset="clientLogo"
    className={cn("grayscale hover:grayscale-0 transition-all duration-300", className)}
    {...props}
  />
);

export const TestimonialAvatar = ({ className, ...props }: Omit<OptimizedImageProps, 'preset'>) => (
  <OptimizedImage
    preset="testimonialAvatar"
    className={cn("rounded-full", className)}
    {...props}
  />
);

export const ServiceIcon = ({ className, ...props }: Omit<OptimizedImageProps, 'preset'>) => (
  <OptimizedImage
    preset="serviceIcon"
    className={cn("rounded-lg", className)}
    {...props}
  />
);

// Image gallery component
interface ImageGalleryProps {
  images: Array<{
    src?: string;
    alt: string;
    caption?: string;
  }>;
  className?: string;
  columns?: number;
}

export const ImageGallery = ({ 
  images, 
  className = '', 
  columns = 3 
}: ImageGalleryProps) => {
  return (
    <div 
      className={cn(
        "grid gap-4",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {images.map((image, index) => (
        <div key={index} className="group">
          <OptimizedImage
            preset="galleryThumb"
            src={image.src}
            alt={image.alt}
            className="w-full transition-transform duration-300 group-hover:scale-105"
          />
          {image.caption && (
            <p className="mt-2 text-sm text-muted-foreground text-center">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};