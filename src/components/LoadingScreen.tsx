import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  variant?: 'initial' | 'page-transition' | 'content';
  showProgress?: boolean;
  customMessage?: string;
  onComplete?: () => void;
  isVisible?: boolean;
}

export const LoadingScreen = ({ 
  variant = 'initial', 
  showProgress = true, 
  customMessage,
  onComplete,
  isVisible = true 
}: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Start fade out animation after a brief delay
          setTimeout(() => {
            setIsAnimating(false);
            setTimeout(() => {
              onComplete?.();
            }, 600); // Match fade out duration
          }, 300);
          return 100;
        }
        // Simulate realistic loading progress
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [isVisible, onComplete]);

  if (!isVisible && !isAnimating) return null;

  const getMessage = () => {
    if (customMessage) return customMessage;
    
    switch (variant) {
      case 'initial':
        return 'Loading NextReach Studio';
      case 'page-transition':
        return 'Loading...';
      case 'content':
        return 'Loading content...';
      default:
        return 'Loading...';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center",
        "bg-gradient-to-br from-blue-50 via-white to-green-50",
        "dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(221,83%,53%)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(142,71%,45%)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(45,93%,47%)_0%,transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2 
          }}
          className="relative"
        >
          {/* Logo Container */}
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-green-500"
            />
            
            {/* Inner Logo */}
            <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
              <motion.img
                src="/nextreach-logo.jpg"
                alt="NextReach Studio Logo"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200 
                }}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.8,
            ease: "easeOut" 
          }}
          className="text-center"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            NextReach Studio
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Professional Web Design & Development
          </p>
        </motion.div>

        {/* Loading Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.4, 
            delay: 1.2 
          }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {getMessage()}
          </p>
          
          {/* Progress Bar */}
          {showProgress && (
            <div className="w-64 md:w-80">
              <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                />
              </div>
              <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                {Math.round(progress)}%
              </div>
            </div>
          )}
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex space-x-1"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
          ))}
        </motion.div>

        {/* Skip Button (appears after 3 seconds) */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          onClick={() => {
            console.log('Skip button clicked');
            onComplete?.();
          }}
          className="mt-8 px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all border border-border/50"
        >
          Skip loading →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;