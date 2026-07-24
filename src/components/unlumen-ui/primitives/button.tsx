"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";

import { Slot, type WithAsChild } from "@/components/unlumen-ui/primitives/slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ButtonProps = WithAsChild<any> & VariantProps<typeof buttonVariants> & {
  hoverScale?: number;
  tapScale?: number;
  className?: string;
};

function Button({
  hoverScale = 1.05,
  tapScale = 0.95,
  asChild = false,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : motion.button;

  return (
    <Component
      className={buttonVariants({ variant, size, className })}
      whileTap={{ scale: tapScale }}
      whileHover={{ scale: hoverScale }}
      {...(props as any)}
    />
  );
}

export { Button, buttonVariants, type ButtonProps };
