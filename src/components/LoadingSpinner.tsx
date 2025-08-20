import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const LoadingSpinner = ({ 
  size = 'md', 
  variant = 'primary',
  className 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const variantClasses = {
    primary: 'border-blue-500',
    secondary: 'border-gray-500',
    accent: 'border-green-500'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
      className={cn(
        "rounded-full border-2 border-transparent border-t-current",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    />
  );
};

export default LoadingSpinner;