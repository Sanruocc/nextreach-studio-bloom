/**
 * Motion configuration and global settings for NextReach Studio
 * Centralized animation configuration for consistency
 */

// Global motion configuration
export const motionConfig = {
  // Respect user preferences for reduced motion
  respectMotionPreferences: true,
  
  // Default animation settings
  defaults: {
    duration: 0.6,
    ease: [0.0, 0.0, 0.2, 1] as const,
    staggerDelay: 0.1,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  },

  // Animation performance settings
  performance: {
    // Use transform and opacity for better performance
    preferredProperties: ['transform', 'opacity'],
    // Reduce animations on low-end devices
    reduceOnLowPerformance: true,
    // Maximum concurrent animations
    maxConcurrentAnimations: 10
  },

  // Breakpoint-specific settings
  breakpoints: {
    mobile: {
      reducedAnimations: true,
      fasterDuration: 0.4,
      smallerDistance: 20
    },
    tablet: {
      normalAnimations: true,
      duration: 0.5,
      distance: 30
    },
    desktop: {
      fullAnimations: true,
      duration: 0.6,
      distance: 40
    }
  }
};

// Utility to check if animations should be reduced
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    // Check for low-end device indicators
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
    // Check for slow connection
    ('connection' in navigator && 
     (navigator as any).connection?.effectiveType === 'slow-2g')
  );
};

// Get device-appropriate animation settings
export const getDeviceAnimationSettings = () => {
  if (typeof window === 'undefined') return motionConfig.defaults;

  const width = window.innerWidth;
  
  if (width < 768) {
    return {
      ...motionConfig.defaults,
      ...motionConfig.breakpoints.mobile,
      duration: motionConfig.breakpoints.mobile.fasterDuration
    };
  } else if (width < 1024) {
    return {
      ...motionConfig.defaults,
      ...motionConfig.breakpoints.tablet
    };
  } else {
    return {
      ...motionConfig.defaults,
      ...motionConfig.breakpoints.desktop
    };
  }
};

// Animation presets for common use cases
export const animationPresets = {
  // Subtle animations for professional feel
  subtle: {
    duration: 0.4,
    distance: 10,
    ease: [0.25, 0.46, 0.45, 0.94] as const
  },
  
  // Standard animations for most elements
  standard: {
    duration: 0.6,
    distance: 30,
    ease: [0.0, 0.0, 0.2, 1] as const
  },
  
  // Bouncy animations for interactive elements
  bouncy: {
    duration: 0.8,
    distance: 40,
    ease: [0.68, -0.55, 0.265, 1.55] as const
  },
  
  // Fast animations for micro-interactions
  fast: {
    duration: 0.3,
    distance: 15,
    ease: [0.4, 0.0, 0.2, 1] as const
  }
};

// Initialize motion configuration
export const initializeMotionConfig = () => {
  // Set up global motion preferences
  if (typeof window !== 'undefined') {
    // Listen for changes in motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      // Update global CSS custom property for motion preference
      document.documentElement.style.setProperty(
        '--motion-reduce', 
        e.matches ? '1' : '0'
      );
    };

    mediaQuery.addEventListener('change', handleMotionPreferenceChange);
    
    // Set initial value
    handleMotionPreferenceChange(mediaQuery as any);
    
    // Set device-specific animation settings
    const settings = getDeviceAnimationSettings();
    document.documentElement.style.setProperty(
      '--animation-duration', 
      `${settings.duration}s`
    );
  }
};