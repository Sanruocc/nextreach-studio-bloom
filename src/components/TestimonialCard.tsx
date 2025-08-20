import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { EnhancedCard, EnhancedCardContent } from "./EnhancedCard";
import { Testimonial } from "@/data/projects";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'card' | 'quote' | 'featured';
  showCompanyLogo?: boolean;
  index?: number;
}

export const TestimonialCard = ({
  testimonial,
  variant = 'card',
  showCompanyLogo = false,
  index = 0
}: TestimonialCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.5 + i * 0.1,
          ease: "easeOut"
        }}
      >
        <Star
          className={`w-4 h-4 ${
            i < rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
        />
      </motion.div>
    ));
  };

  if (variant === 'featured') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <EnhancedCard variant="elevated" className="p-8 text-center">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Quote className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <EnhancedCardContent className="p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center mb-4"
            >
              {renderStars(testimonial.rating)}
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg italic text-muted-foreground mb-6 leading-relaxed"
            >
              "{testimonial.content}"
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center justify-center space-x-4"
            >
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div className="text-left">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position}
                </div>
                <div className="text-sm font-medium text-primary">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          </EnhancedCardContent>
        </EnhancedCard>
      </motion.div>
    );
  }

  if (variant === 'quote') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary">
          <div className="absolute -top-2 -left-2">
            <Quote className="w-8 h-8 text-primary/20" />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex mb-3"
          >
            {renderStars(testimonial.rating)}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground mb-4 italic"
          >
            "{testimonial.content}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="font-semibold text-foreground">
              {testimonial.author}
            </div>
            <div className="text-sm text-muted-foreground">
              {testimonial.position}, {testimonial.company}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // Default card variant
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <EnhancedCard variant="default" hoverEffect="lift" className="h-full">
        <EnhancedCardContent className="p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex mb-4"
          >
            {renderStars(testimonial.rating)}
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground mb-6 leading-relaxed"
          >
            "{testimonial.content}"
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <div className="font-semibold text-foreground text-sm">
                {testimonial.author}
              </div>
              <div className="text-xs text-muted-foreground">
                {testimonial.position}
              </div>
              <div className="text-xs font-medium text-primary">
                {testimonial.company}
              </div>
            </div>
          </motion.div>

          {showCompanyLogo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mt-4 pt-4 border-t border-border"
            >
              <div className="w-16 h-8 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                Logo
              </div>
            </motion.div>
          )}
        </EnhancedCardContent>
      </EnhancedCard>
    </motion.div>
  );
};

export default TestimonialCard;