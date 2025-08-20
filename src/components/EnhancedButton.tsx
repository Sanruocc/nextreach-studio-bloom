import { motion } from "motion/react";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  gradient?: boolean;
}

export const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    loadingText = 'Loading...',
    icon,
    iconPosition = 'right',
    fullWidth = false,
    gradient = false,
    children,
    disabled,
    ...props
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary: gradient 
        ? "bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-xl"
        : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      cta: "bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105"
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-lg",
      xl: "h-12 px-8 py-3 text-lg"
    };

    const buttonVariants = {
      initial: { scale: 1 },
      hover: { 
        scale: variant === 'cta' ? 1.05 : 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      },
      tap: { 
        scale: 0.98,
        transition: { duration: 0.1 }
      }
    };

    const iconVariants = {
      initial: { x: 0 },
      hover: { 
        x: iconPosition === 'right' ? 4 : -4,
        transition: { duration: 0.2 }
      }
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mr-2"
          >
            <Loader2 className="h-4 w-4 animate-spin" />
          </motion.div>
        )}

        {/* Left Icon */}
        {icon && iconPosition === 'left' && !isLoading && (
          <motion.div
            variants={iconVariants}
            className="mr-2"
          >
            {icon}
          </motion.div>
        )}

        {/* Button Text */}
        <span>
          {isLoading ? loadingText : children}
        </span>

        {/* Right Icon */}
        {icon && iconPosition === 'right' && !isLoading && (
          <motion.div
            variants={iconVariants}
            className="ml-2"
          >
            {icon}
          </motion.div>
        )}

        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ scale: 0, opacity: 0.5 }}
          whileTap={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: variant === 'outline' || variant === 'ghost' 
              ? 'rgba(0, 0, 0, 0.1)' 
              : 'rgba(255, 255, 255, 0.2)'
          }}
        />
      </motion.button>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";

export default EnhancedButton;