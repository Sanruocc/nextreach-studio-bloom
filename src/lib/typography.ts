/**
 * Typography utilities for NextReach Studio
 * Professional typography system with Inter font family
 */

import { cn } from "@/lib/utils";

// Typography variant types
export type TypographyVariant = 
  | 'display-1' 
  | 'display-2' 
  | 'display-3'
  | 'headline-1' 
  | 'headline-2' 
  | 'headline-3'
  | 'body-large' 
  | 'body' 
  | 'body-small'
  | 'caption' 
  | 'overline';

export type TypographyWeight = 
  | 'thin' 
  | 'extralight' 
  | 'light' 
  | 'normal' 
  | 'medium' 
  | 'semibold' 
  | 'bold' 
  | 'extrabold' 
  | 'black';

// Typography variant classes
export const typographyVariants: Record<TypographyVariant, string> = {
  'display-1': 'text-display-1',
  'display-2': 'text-display-2',
  'display-3': 'text-display-3',
  'headline-1': 'text-headline-1',
  'headline-2': 'text-headline-2',
  'headline-3': 'text-headline-3',
  'body-large': 'text-body-large',
  'body': 'text-body',
  'body-small': 'text-body-small',
  'caption': 'text-caption',
  'overline': 'text-overline',
};

// Font weight classes
export const fontWeights: Record<TypographyWeight, string> = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

// Typography utility function
export const getTypographyClasses = (
  variant: TypographyVariant,
  weight?: TypographyWeight,
  className?: string
): string => {
  return cn(
    typographyVariants[variant],
    weight && fontWeights[weight],
    className
  );
};

// Professional text color utilities
export const textColors = {
  primary: 'text-foreground',
  secondary: 'text-muted-foreground',
  accent: 'text-accent',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-destructive',
  brand: 'text-primary',
  highlight: 'text-highlight',
} as const;

// Professional spacing utilities for typography
export const typographySpacing = {
  tight: 'space-y-2',
  normal: 'space-y-4',
  relaxed: 'space-y-6',
  loose: 'space-y-8',
} as const;

// Responsive typography breakpoints
export const responsiveText = {
  xs: 'text-xs sm:text-sm',
  sm: 'text-sm sm:text-base',
  base: 'text-base sm:text-lg',
  lg: 'text-lg sm:text-xl',
  xl: 'text-xl sm:text-2xl',
  '2xl': 'text-2xl sm:text-3xl',
  '3xl': 'text-3xl sm:text-4xl',
  '4xl': 'text-4xl sm:text-5xl',
} as const;

// Professional line height utilities
export const lineHeights = {
  none: 'leading-none',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
} as const;

// Letter spacing utilities
export const letterSpacing = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
} as const;

// Professional text alignment utilities
export const textAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
} as const;

// Typography presets for common use cases
export const typographyPresets = {
  heroTitle: cn(
    typographyVariants['display-1'],
    fontWeights.bold,
    letterSpacing.tight,
    textColors.primary
  ),
  sectionTitle: cn(
    typographyVariants['headline-1'],
    fontWeights.semibold,
    letterSpacing.tight,
    textColors.primary
  ),
  cardTitle: cn(
    typographyVariants['headline-3'],
    fontWeights.medium,
    letterSpacing.tight,
    textColors.primary
  ),
  bodyText: cn(
    typographyVariants.body,
    fontWeights.normal,
    lineHeights.relaxed,
    textColors.primary
  ),
  caption: cn(
    typographyVariants.caption,
    fontWeights.medium,
    letterSpacing.wide,
    textColors.secondary
  ),
  buttonText: cn(
    fontWeights.medium,
    letterSpacing.wide,
    'text-sm'
  ),
  linkText: cn(
    fontWeights.medium,
    'text-primary hover:text-primary/80 transition-colors'
  ),
} as const;

// Utility function to create responsive typography
export const createResponsiveTypography = (
  baseSize: keyof typeof responsiveText,
  weight: TypographyWeight = 'normal',
  className?: string
): string => {
  return cn(
    responsiveText[baseSize],
    fontWeights[weight],
    className
  );
};

// Professional text truncation utilities
export const textTruncation = {
  truncate: 'truncate',
  ellipsis: 'text-ellipsis overflow-hidden',
  clip: 'text-clip overflow-hidden',
  lineClamp1: 'line-clamp-1',
  lineClamp2: 'line-clamp-2',
  lineClamp3: 'line-clamp-3',
  lineClamp4: 'line-clamp-4',
} as const;