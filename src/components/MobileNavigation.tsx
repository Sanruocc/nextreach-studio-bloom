import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const MobileNavigation = ({ isOpen, onToggle, onClose }: MobileNavigationProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Swipe gesture detection
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && isOpen) {
      onClose();
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home", description: "Back to homepage" },
    { href: "/about", label: "About", description: "Learn about NextReach" },
    { href: "/services", label: "Services", description: "Our web design services" },
    { href: "/portfolio", label: "Portfolio", description: "View our work" },
    { href: "/pricing", label: "Pricing", description: "Transparent pricing" },
    { href: "/contact", label: "Contact", description: "Get in touch" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Mobile Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-2xl z-50 overflow-y-auto"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <img
                  src="/nextreach-logo.jpg"
                  alt="NextReach Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="font-bold text-lg text-foreground">NextReach</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Navigation Items */}
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  custom={index}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="block p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                  onClick={onClose}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="p-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <motion.a
                  href="tel:+919876543210"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Call Now</div>
                    <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:hello@nextreachstudio.com"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Email Us</div>
                    <div className="text-sm text-muted-foreground">hello@nextreachstudio.com</div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 border-t border-border">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white"
                  onClick={() => {
                    window.location.href = '/contact';
                    onClose();
                  }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="p-6 text-center border-t border-border">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-xs text-muted-foreground"
              >
                © 2024 NextReach Studio. All rights reserved.
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;