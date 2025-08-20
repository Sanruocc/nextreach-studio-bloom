import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

interface StatisticItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  description?: string;
}

interface StatisticsCounterProps {
  stats: StatisticItem[];
  animateOnView?: boolean;
  layout?: 'horizontal' | 'grid' | 'vertical';
  variant?: 'default' | 'cards' | 'minimal';
}

const useCountAnimation = (
  endValue: number,
  duration: number = 2000,
  shouldStart: boolean = false
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration, shouldStart]);

  return count;
};

const StatisticCard = ({ 
  stat, 
  index, 
  shouldAnimate, 
  variant 
}: { 
  stat: StatisticItem; 
  index: number; 
  shouldAnimate: boolean;
  variant: string;
}) => {
  const animatedValue = useCountAnimation(stat.value, 2000 + index * 200, shouldAnimate);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.3,
        ease: "easeOut"
      }
    }
  };

  if (variant === 'minimal') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-2"
        >
          {stat.prefix}{shouldAnimate ? animatedValue : stat.value}{stat.suffix}
        </motion.div>
        <div className="text-sm md:text-base text-muted-foreground font-medium">
          {stat.label}
        </div>
        {stat.description && (
          <div className="text-xs text-muted-foreground mt-1">
            {stat.description}
          </div>
        )}
      </motion.div>
    );
  }

  if (variant === 'cards') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
      >
        {stat.icon && (
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary"
          >
            {stat.icon}
          </motion.div>
        )}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-2"
        >
          {stat.prefix}{shouldAnimate ? animatedValue : stat.value}{stat.suffix}
        </motion.div>
        <div className="text-base font-medium text-foreground mb-1">
          {stat.label}
        </div>
        {stat.description && (
          <div className="text-sm text-muted-foreground">
            {stat.description}
          </div>
        )}
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="text-center p-4"
    >
      {stat.icon && (
        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          className="w-10 h-10 mx-auto mb-3 text-primary"
        >
          {stat.icon}
        </motion.div>
      )}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-primary mb-2"
      >
        {stat.prefix}{shouldAnimate ? animatedValue : stat.value}{stat.suffix}
      </motion.div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">
        {stat.label}
      </div>
      {stat.description && (
        <div className="text-xs text-muted-foreground mt-1">
          {stat.description}
        </div>
      )}
    </motion.div>
  );
};

export const StatisticsCounter = ({
  stats,
  animateOnView = true,
  layout = 'horizontal',
  variant = 'default'
}: StatisticsCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = animateOnView ? isInView : true;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid':
        return 'grid grid-cols-2 md:grid-cols-4 gap-6';
      case 'vertical':
        return 'flex flex-col space-y-6';
      default:
        return 'flex flex-wrap justify-center gap-8 md:gap-12';
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      className={getLayoutClasses()}
    >
      {stats.map((stat, index) => (
        <StatisticCard
          key={index}
          stat={stat}
          index={index}
          shouldAnimate={shouldAnimate}
          variant={variant}
        />
      ))}
    </motion.div>
  );
};

// Predefined business statistics for NextReach Studio
export const businessStats: StatisticItem[] = [
  {
    value: 50,
    label: "Projects Completed",
    suffix: "+",
    icon: <Award className="w-6 h-6" />,
    description: "Successful websites delivered"
  },
  {
    value: 45,
    label: "Happy Clients",
    suffix: "+",
    icon: <Users className="w-6 h-6" />,
    description: "Across Pune and Mumbai"
  },
  {
    value: 98,
    label: "Client Satisfaction",
    suffix: "%",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Based on project reviews"
  },
  {
    value: 24,
    label: "Average Delivery",
    suffix: " days",
    icon: <Clock className="w-6 h-6" />,
    description: "From concept to launch"
  }
];

export default StatisticsCounter;