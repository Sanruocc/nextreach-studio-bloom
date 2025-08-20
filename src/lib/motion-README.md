# Motion Animation System

This document outlines the Motion animation system implemented for NextReach Studio, providing professional, performant animations that respect user preferences and accessibility guidelines.

## Overview

The animation system is built using the Motion library, which provides:
- High-performance animations using the Web Animations API
- Automatic respect for `prefers-reduced-motion`
- Smooth scroll-triggered animations
- Professional micro-interactions

## Core Files

- `motion.ts` - Animation variants and utilities
- `motion-config.ts` - Global configuration and settings
- `useScrollAnimation.ts` - Custom hooks for scroll-based animations
- `MotionWrapper.tsx` - Reusable animation components

## Basic Usage

### Simple Fade In Animation

```tsx
import { MotionWrapper } from "@/components/MotionWrapper";

<MotionWrapper>
  <div>This content will fade in when scrolled into view</div>
</MotionWrapper>
```

### Custom Animation Variants

```tsx
import { MotionWrapper } from "@/components/MotionWrapper";
import { fadeInLeftVariants } from "@/lib/motion";

<MotionWrapper variants={fadeInLeftVariants}>
  <div>This content will slide in from the left</div>
</MotionWrapper>
```

### Staggered Animations

```tsx
import { StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";

<StaggerWrapper>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</StaggerWrapper>
```

## Available Animation Variants

### Fade Animations
- `fadeInVariants` - Basic fade in from bottom
- `fadeInUpVariants` - Fade in from bottom with more distance
- `fadeInDownVariants` - Fade in from top
- `fadeInLeftVariants` - Fade in from left
- `fadeInRightVariants` - Fade in from right

### Interactive Animations
- `scaleVariants` - Scale on hover/tap for buttons
- `cardHoverVariants` - Card lift effect with shadow
- `buttonVariants` - Professional button interactions

### Layout Animations
- `staggerContainer` - Container for staggered children
- `staggerItem` - Individual items in staggered layout
- `pageTransitionVariants` - Page transition effects

## Custom Hooks

### useScrollAnimation
Triggers animations when elements enter the viewport:

```tsx
const { ref, isInView } = useScrollAnimation({
  threshold: 0.1,
  triggerOnce: true,
  delay: 200
});
```

### useScrollProgress
Tracks scroll progress for navigation bars:

```tsx
const scrollProgress = useScrollProgress();
```

### useScrollDirection
Detects scroll direction for hiding/showing navigation:

```tsx
const { scrollDirection, isScrolled } = useScrollDirection();
```

## Configuration

### Global Settings
The motion system respects user preferences and device capabilities:

- Automatically reduces animations for `prefers-reduced-motion`
- Adjusts animation complexity based on device performance
- Provides different settings for mobile, tablet, and desktop

### Animation Presets
Pre-configured animation settings for common use cases:

- `subtle` - Minimal animations for professional feel
- `standard` - Default animations for most content
- `bouncy` - Playful animations for interactive elements
- `fast` - Quick animations for micro-interactions

## Best Practices

### Performance
- Use `transform` and `opacity` properties for animations
- Limit concurrent animations
- Respect user motion preferences
- Test on low-end devices

### Accessibility
- Always provide fallbacks for reduced motion
- Ensure animations don't interfere with screen readers
- Use appropriate timing for different user needs
- Test with keyboard navigation

### Design Guidelines
- Keep animations subtle and professional
- Use consistent timing and easing
- Ensure animations serve a purpose
- Maintain brand consistency

## Examples

### Animated Card Component

```tsx
import { motion } from "motion/react";
import { cardHoverVariants } from "@/lib/motion";

const AnimatedCard = ({ children }) => (
  <motion.div
    className="p-6 bg-white rounded-lg border"
    variants={cardHoverVariants}
    initial="initial"
    whileHover="hover"
  >
    {children}
  </motion.div>
);
```

### Scroll-Triggered Section

```tsx
import { MotionWrapper } from "@/components/MotionWrapper";
import { fadeInUpVariants } from "@/lib/motion";

const Section = ({ title, content }) => (
  <MotionWrapper 
    variants={fadeInUpVariants}
    threshold={0.2}
    delay={100}
  >
    <section className="py-16">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  </MotionWrapper>
);
```

### Navigation with Scroll Effects

```tsx
import { motion } from "motion/react";
import { useScrollDirection } from "@/hooks/useScrollAnimation";
import { navScrollVariants } from "@/lib/motion";

const Navigation = () => {
  const { isScrolled } = useScrollDirection();
  
  return (
    <motion.nav
      variants={navScrollVariants}
      animate={isScrolled ? "scrolled" : "top"}
      className="fixed top-0 w-full z-50"
    >
      {/* Navigation content */}
    </motion.nav>
  );
};
```

## Troubleshooting

### Animations Not Working
1. Check if Motion library is properly installed
2. Verify motion configuration is initialized in App.tsx
3. Ensure elements have proper refs for scroll animations
4. Check browser console for errors

### Performance Issues
1. Reduce number of concurrent animations
2. Use simpler animation variants
3. Check if device has limited resources
4. Verify animations respect reduced motion preferences

### Accessibility Concerns
1. Test with `prefers-reduced-motion` enabled
2. Ensure keyboard navigation works with animations
3. Verify screen reader compatibility
4. Check animation timing for different user needs

This animation system provides a solid foundation for professional, accessible animations throughout the NextReach Studio website.