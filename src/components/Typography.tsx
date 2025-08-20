/**
 * Typography component for NextReach Studio
 * Provides consistent, professional text rendering with Inter font
 */

import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";
import { 
  TypographyVariant, 
  TypographyWeight, 
  getTypographyClasses,
  textColors,
  lineHeights,
  letterSpacing,
  textAlign
} from "@/lib/typography";

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: keyof typeof textColors;
  align?: keyof typeof textAlign;
  lineHeight?: keyof typeof lineHeights;
  tracking?: keyof typeof letterSpacing;
  className?: string;
  as?: ElementType;
}

export const Typography = ({
  children,
  variant = 'body',
  weight,
  color = 'primary',
  align = 'left',
  lineHeight,
  tracking,
  className,
  as
}: TypographyProps) => {
  // Determine the appropriate HTML element based on variant
  const getDefaultElement = (): ElementType => {
    if (as) return as;
    
    switch (variant) {
      case 'display-1':
      case 'display-2':
      case 'display-3':
        return 'h1';
      case 'headline-1':
        return 'h2';
      case 'headline-2':
        return 'h3';
      case 'headline-3':
        return 'h4';
      case 'caption':
      case 'overline':
        return 'span';
      default:
        return 'p';
    }
  };

  const Component = getDefaultElement();

  const classes = cn(
    getTypographyClasses(variant, weight),
    textColors[color],
    textAlign[align],
    lineHeight && lineHeights[lineHeight],
    tracking && letterSpacing[tracking],
    className
  );

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

// Specialized typography components for common use cases
export const DisplayText = ({ children, className, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="display-1" className={className} {...props}>
    {children}
  </Typography>
);

export const HeadlineText = ({ children, className, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="headline-1" className={className} {...props}>
    {children}
  </Typography>
);

export const BodyText = ({ children, className, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body" className={className} {...props}>
    {children}
  </Typography>
);

export const CaptionText = ({ children, className, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="caption" className={className} {...props}>
    {children}
  </Typography>
);

// Professional text components with preset styling
export const HeroTitle = ({ children, className, ...props }: Omit<TypographyProps, 'variant' | 'weight'>) => (
  <Typography 
    variant="display-1" 
    weight="bold" 
    tracking="tight"
    className={cn("text-center lg:text-left", className)} 
    {...props}
  >
    {children}
  </Typography>
);

export const SectionTitle = ({ children, className, ...props }: Omit<TypographyProps, 'variant' | 'weight'>) => (
  <Typography 
    variant="headline-1" 
    weight="semibold" 
    tracking="tight"
    className={cn("text-center", className)} 
    {...props}
  >
    {children}
  </Typography>
);

export const CardTitle = ({ children, className, ...props }: Omit<TypographyProps, 'variant' | 'weight'>) => (
  <Typography 
    variant="headline-3" 
    weight="medium" 
    tracking="tight"
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const Subtitle = ({ children, className, ...props }: Omit<TypographyProps, 'variant' | 'color'>) => (
  <Typography 
    variant="body-large" 
    color="secondary"
    lineHeight="relaxed"
    className={cn("text-center lg:text-left", className)} 
    {...props}
  >
    {children}
  </Typography>
);

export const Label = ({ children, className, ...props }: Omit<TypographyProps, 'variant' | 'weight'>) => (
  <Typography 
    variant="caption" 
    weight="medium" 
    tracking="wide"
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

// Link component with professional styling
interface LinkTextProps extends Omit<TypographyProps, 'color'> {
  href?: string;
  external?: boolean;
}

export const LinkText = ({ 
  children, 
  href, 
  external = false, 
  className, 
  ...props 
}: LinkTextProps) => {
  const linkProps = href ? {
    href,
    ...(external && { target: '_blank', rel: 'noopener noreferrer' })
  } : {};

  return (
    <Typography 
      as={href ? 'a' : 'span'}
      weight="medium"
      className={cn(
        "text-primary hover:text-primary/80 transition-colors duration-200 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm",
        className
      )}
      {...linkProps}
      {...props}
    >
      {children}
    </Typography>
  );
};