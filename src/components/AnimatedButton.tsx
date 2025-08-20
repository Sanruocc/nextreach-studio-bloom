/**
 * Animated button component demonstrating Motion library integration
 * Professional micro-interactions for NextReach Studio
 */

import { motion } from "motion/react";
import { ReactNode } from "react";
import { scaleVariants, ANIMATION_DURATION, EASING } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export const AnimatedButton = ({
  children,
  className = "",
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false
}: AnimatedButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
  };

  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg"
  };

  // Enhanced hover animation with shadow
  const buttonVariants = {
    initial: { 
      scale: 1,
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.15)",
      transition: { 
        duration: ANIMATION_DURATION.fast, 
        ease: EASING.easeOut 
      }
    },
    tap: { 
      scale: 0.98,
      transition: { 
        duration: ANIMATION_DURATION.fast, 
        ease: EASING.easeOut 
      }
    }
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      variants={buttonVariants}
      initial="initial"
      whileHover={!disabled ? "hover" : "initial"}
      whileTap={!disabled ? "tap" : "initial"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};