/**
 * Motion animation utilities and variants for NextReach Studio
 * Using Motion library for performant, professional animations
 */

import { Variants } from "motion/react";

// Animation duration constants
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
} as const;

// Easing functions for professional animations
export const EASING = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
} as const;

// Fade in animation variants
export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: ANIMATION_DURATION.normal, 
      ease: EASING.easeOut 
    }
  }
};

// Fade in from different directions
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: ANIMATION_DURATION.normal, 
      ease: EASING.easeOut 
    }
  }
};

export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: ANIMATION_DURATION.normal, 
      ease: EASING.easeOut 
    }
  }
};

export const fadeInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: ANIMATION_DURATION.normal, 
      ease: EASING.easeOut 
    }
  }
};

export const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: ANIMATION_DURATION.normal, 
      ease: EASING.easeOut 
    }
  }
};

// Scale animations for buttons and cards
export const scaleVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: ANIMATION_DURATION.fast, 
      ease: EASING.easeOut 
    }
  },
  tap: { 
    scale: 0.95,
    transition: { 
      duration: ANIMATION_DURATION.fast, 
      ease: EASING.easeOut 
    }
  }
};

// Stagger container for lists and grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: ANIMATION_DURATION.fast
    }
  }
};

// Stagger items for use within stagger containers
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut
    }
  }
};

// Card hover animations
export const cardHoverVariants: Variants = {
  initial: { 
    y: 0, 
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" 
  },
  hover: { 
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { 
      duration: ANIMATION_DURATION.fast, 
      ease: EASING.easeOut 
    }
  }
};

// Loading spinner animation
export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Text reveal animations
export const textRevealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    clipPath: "inset(100% 0 0 0)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { 
      duration: ANIMATION_DURATION.slow, 
      ease: EASING.easeOut 
    }
  }
};

// Navigation scroll animations
export const navScrollVariants: Variants = {
  top: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    backdropFilter: "blur(0px)",
    borderBottomColor: "rgba(0, 0, 0, 0)",
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.easeOut
    }
  },
  scrolled: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.easeOut
    }
  }
};

// Counter animation for statistics
export const counterVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: ANIMATION_DURATION.normal, 
      ease: EASING.bounce 
    }
  }
};

// Page transition animations
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: ANIMATION_DURATION.normal, 
      ease: EASING.easeOut 
    }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { 
      duration: ANIMATION_DURATION.fast, 
      ease: EASING.easeIn 
    }
  }
};

// Utility function to create custom variants
export const createFadeInVariant = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 40,
  duration: number = ANIMATION_DURATION.normal
): Variants => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      default: return { y: distance };
    }
  };

  return {
    hidden: { 
      opacity: 0, 
      ...getInitialPosition() 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        duration, 
        ease: EASING.easeOut 
      }
    }
  };
};

// Utility function for responsive animations (respects prefers-reduced-motion)
export const getResponsiveVariants = (variants: Variants): Variants => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Return simplified variants for users who prefer reduced motion
    return {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: ANIMATION_DURATION.fast }
      }
    };
  }
  return variants;
};