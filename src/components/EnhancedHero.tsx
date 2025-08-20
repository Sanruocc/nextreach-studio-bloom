import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EnhancedHeroProps {
  title: string;
  subtitle: string;
  ctaButtons: Array<{
    text: string;
    variant: 'primary' | 'secondary';
    href: string;
  }>;
  backgroundVariant?: 'gradient' | 'video' | 'image';
  showScrollIndicator?: boolean;
}

export const EnhancedHero = ({
  title,
  subtitle,
  ctaButtons,
  backgroundVariant = 'gradient',
  showScrollIndicator = true
}: EnhancedHeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const backgroundClasses = {
    gradient: "bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",
    video: "bg-gray-900 relative overflow-hidden",
    image: "bg-cover bg-center relative"
  };

  return (
    <section className={`relative py-20 lg:py-32 ${backgroundClasses[backgroundVariant]}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            {title.split(' ').map((word, index) => {
              // Check if this word should be highlighted
              const isHighlighted = word.includes('Trust') || word.includes('Customers') || word.includes('NextReach');
              
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className={isHighlighted ? 
                    "inline-block bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent" : 
                    "inline-block"
                  }
                >
                  {word}{' '}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            {ctaButtons.map((button, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={button.variant === 'primary' ? 'default' : 'outline'}
                  size="xl"
                  className={button.variant === 'primary' ? 
                    "group bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" : 
                    "group"
                  }
                  onClick={() => window.location.href = button.href}
                >
                  {button.text}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          {showScrollIndicator && (
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <p className="text-sm text-muted-foreground mb-4">Scroll to explore</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="cursor-pointer"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                  });
                }}
              >
                <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Gradient Overlay for better text readability */}
      {backgroundVariant !== 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
      )}
    </section>
  );
};

export default EnhancedHero;