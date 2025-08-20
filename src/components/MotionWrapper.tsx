/**
 * Motion wrapper component for consistent animations across NextReach Studio
 * Provides scroll-triggered animations with accessibility support
 */

import { motion, Variants } from "motion/react";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInVariants, getResponsiveVariants } from "@/lib/motion";

interface MotionWrapperProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  as?: keyof typeof motion;
}

export const MotionWrapper = ({
  children,
  variants = fadeInVariants,
  className = "",
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  as = "div"
}: MotionWrapperProps) => {
  const { ref, isInView } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay
  });

  // Get responsive variants that respect user motion preferences
  const responsiveVariants = getResponsiveVariants(variants);

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      ref={ref}
      className={className}
      variants={responsiveVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </MotionComponent>
  );
};

// Specialized wrapper for staggered animations
interface StaggerWrapperProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export const StaggerWrapper = ({
  children,
  className = "",
  staggerDelay = 0.1,
  threshold = 0.1
}: StaggerWrapperProps) => {
  const { ref, isInView } = useScrollAnimation({ threshold });

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getResponsiveVariants(staggerVariants)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// Item component for use within StaggerWrapper
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

export const StaggerItem = ({
  children,
  className = "",
  variants
}: StaggerItemProps) => {
  const itemVariants: Variants = variants || {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.0, 0.0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={getResponsiveVariants(itemVariants)}
    >
      {children}
    </motion.div>
  );
};