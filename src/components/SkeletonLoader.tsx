import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  animation?: 'pulse' | 'wave' | 'none';
  width?: string | number;
  height?: string | number;
}

export const Skeleton = ({
  className,
  variant = 'rectangular',
  animation = 'pulse',
  width,
  height,
  ...props
}: SkeletonProps) => {
  const baseClasses = "bg-muted animate-pulse";
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-none",
    rounded: "rounded-lg"
  };

  const animationVariants = {
    pulse: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    wave: {
      backgroundPosition: ["-200px 0", "calc(200px + 100%) 0"],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }
    },
    none: {}
  };

  const style = {
    width: width || undefined,
    height: height || undefined,
    ...(animation === 'wave' && {
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
      backgroundSize: "200px 100%"
    })
  };

  return (
    <motion.div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      animate={animation !== 'none' ? animationVariants[animation] : undefined}
      style={style}
      {...props}
    />
  );
};

// Predefined skeleton components for common use cases
export const CardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("p-6 space-y-4", className)}>
    <Skeleton variant="rectangular" height={200} className="w-full" />
    <div className="space-y-2">
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
    </div>
    <div className="flex space-x-2">
      <Skeleton variant="rounded" width={60} height={24} />
      <Skeleton variant="rounded" width={80} height={24} />
    </div>
  </div>
);

export const ProjectCardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("border border-border rounded-xl overflow-hidden", className)}>
    <Skeleton variant="rectangular" height={200} className="w-full" />
    <div className="p-6 space-y-4">
      <div className="flex items-center space-x-2">
        <Skeleton variant="circular" width={16} height={16} />
        <Skeleton variant="text" className="w-32" />
      </div>
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-3/4" />
      <div className="flex space-x-2">
        <Skeleton variant="rounded" width={50} height={20} />
        <Skeleton variant="rounded" width={60} height={20} />
        <Skeleton variant="rounded" width={45} height={20} />
      </div>
    </div>
  </div>
);

export const TestimonialSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("p-6 border border-border rounded-xl space-y-4", className)}>
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} variant="circular" width={16} height={16} />
      ))}
    </div>
    <div className="space-y-2">
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-2/3" />
    </div>
    <div className="flex items-center space-x-3">
      <Skeleton variant="circular" width={40} height={40} />
      <div className="space-y-1">
        <Skeleton variant="text" className="w-24" />
        <Skeleton variant="text" className="w-32" />
      </div>
    </div>
  </div>
);

export const StatsSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("text-center space-y-2", className)}>
    <Skeleton variant="circular" width={48} height={48} className="mx-auto" />
    <Skeleton variant="text" className="w-16 mx-auto text-2xl" />
    <Skeleton variant="text" className="w-20 mx-auto" />
  </div>
);

export const NavigationSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center justify-between p-4", className)}>
    <div className="flex items-center space-x-2">
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" className="w-24" />
    </div>
    <div className="hidden md:flex space-x-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} variant="text" className="w-16" />
      ))}
    </div>
    <Skeleton variant="rounded" width={100} height={36} />
  </div>
);

export const HeroSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("text-center space-y-6 py-20", className)}>
    <div className="space-y-4">
      <Skeleton variant="text" className="w-3/4 mx-auto h-12" />
      <Skeleton variant="text" className="w-2/3 mx-auto h-12" />
    </div>
    <div className="space-y-2">
      <Skeleton variant="text" className="w-1/2 mx-auto" />
      <Skeleton variant="text" className="w-2/3 mx-auto" />
    </div>
    <div className="flex justify-center space-x-4">
      <Skeleton variant="rounded" width={150} height={48} />
      <Skeleton variant="rounded" width={120} height={48} />
    </div>
  </div>
);

export const FormSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("space-y-4", className)}>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Skeleton variant="text" className="w-20" />
        <Skeleton variant="rounded" height={40} className="w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" className="w-20" />
        <Skeleton variant="rounded" height={40} className="w-full" />
      </div>
    </div>
    <div className="space-y-2">
      <Skeleton variant="text" className="w-16" />
      <Skeleton variant="rounded" height={40} className="w-full" />
    </div>
    <div className="space-y-2">
      <Skeleton variant="text" className="w-20" />
      <Skeleton variant="rounded" height={100} className="w-full" />
    </div>
    <Skeleton variant="rounded" height={48} className="w-full" />
  </div>
);

// Page-level skeleton loaders
export const PageSkeleton = ({ 
  showNavigation = true,
  showHero = true,
  sections = 3,
  className 
}: {
  showNavigation?: boolean;
  showHero?: boolean;
  sections?: number;
  className?: string;
}) => (
  <div className={cn("min-h-screen bg-background", className)}>
    {showNavigation && <NavigationSkeleton />}
    
    {showHero && (
      <div className="container mx-auto px-4">
        <HeroSkeleton />
      </div>
    )}
    
    {Array.from({ length: sections }).map((_, i) => (
      <div key={i} className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Skeleton variant="text" className="w-1/3 mx-auto h-8 mb-4" />
          <Skeleton variant="text" className="w-1/2 mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, j) => (
            <CardSkeleton key={j} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Skeleton;