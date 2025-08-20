import { motion } from "motion/react";
import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import LoadingSpinner from "./LoadingSpinner";

interface EnhancedCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'none';
  isLoading?: boolean;
  loadingHeight?: string;
  interactive?: boolean;
}

const EnhancedCard = forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({
    className,
    variant = 'default',
    hoverEffect = 'lift',
    isLoading = false,
    loadingHeight = '200px',
    interactive = false,
    children,
    ...props
  }, ref) => {
    const baseClasses = "rounded-xl transition-all duration-300 ease-out";

    const variants = {
      default: "bg-card text-card-foreground border border-border shadow-sm",
      elevated: "bg-card text-card-foreground shadow-lg border-0",
      outlined: "bg-transparent border-2 border-border",
      ghost: "bg-transparent"
    };

    const hoverEffects = {
      lift: "hover:shadow-xl hover:-translate-y-2",
      glow: "hover:shadow-2xl hover:shadow-primary/20",
      scale: "hover:scale-105",
      none: ""
    };

    const cardVariants = {
      initial: { 
        opacity: 0, 
        y: 20,
        scale: 1
      },
      animate: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      },
      hover: hoverEffect === 'lift' ? {
        y: -8,
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      } : hoverEffect === 'scale' ? {
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      } : hoverEffect === 'glow' ? {
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      } : {}
    };

    // Loading skeleton component
    const LoadingSkeleton = () => (
      <div className="p-6 space-y-4" style={{ minHeight: loadingHeight }}>
        <div className="flex items-center justify-center h-full">
          <LoadingSpinner size="lg" />
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-muted rounded animate-pulse" />
          <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
          <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
        </div>
      </div>
    );

    if (isLoading) {
      return (
        <motion.div
          ref={ref}
          className={cn(
            baseClasses,
            variants[variant],
            className
          )}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          {...props}
        >
          <LoadingSkeleton />
        </motion.div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          hoverEffects[hoverEffect],
          interactive && "cursor-pointer",
          className
        )}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover={interactive ? "hover" : undefined}
        whileTap={interactive ? { scale: 0.98 } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

EnhancedCard.displayName = "EnhancedCard";

// Card Header Component
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  gradient?: boolean;
}

const EnhancedCardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, gradient = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-1.5 p-6",
        gradient && "bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

EnhancedCardHeader.displayName = "EnhancedCardHeader";

// Card Content Component
const EnhancedCardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);

EnhancedCardContent.displayName = "EnhancedCardContent";

// Card Footer Component
const EnhancedCardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);

EnhancedCardFooter.displayName = "EnhancedCardFooter";

// Card Title Component
const EnhancedCardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <motion.h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.h3>
  )
);

EnhancedCardTitle.displayName = "EnhancedCardTitle";

// Card Description Component
const EnhancedCardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <motion.p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.p>
  )
);

EnhancedCardDescription.displayName = "EnhancedCardDescription";

export {
  EnhancedCard,
  EnhancedCardHeader,
  EnhancedCardContent,
  EnhancedCardFooter,
  EnhancedCardTitle,
  EnhancedCardDescription,
};

export default EnhancedCard;