import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  variant?: 'initial' | 'page-transition' | 'content';
  showProgress?: boolean;
  customMessage?: string;
  onComplete?: () => void;
  isVisible?: boolean;
  timeoutDuration?: number;
}

export const LoadingScreen = ({
  variant = 'initial',
  showProgress = true,
  customMessage,
  onComplete,
  isVisible = true,
  timeoutDuration = 7000
}: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
  const timerRef = useRef<NodeJS.Timeout[]>([]);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup function for all timers
  const cleanupTimers = useCallback(() => {
    timerRef.current.forEach(timer => clearTimeout(timer));
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    timerRef.current = [];
  }, []);

  // Handle loading completion
  const handleComplete = useCallback(() => {
    cleanupTimers();
    setIsAnimating(false);

    // Allow fade out animation to complete
    const fadeOutTimer = setTimeout(() => {
      onComplete?.();
    }, 600);
    timerRef.current.push(fadeOutTimer);
  }, [onComplete, cleanupTimers]);

  // Handle timeout redirect
  const handleTimeout = useCallback(() => {
    if (!isTimedOut) {
      setIsTimedOut(true);
      console.warn('LoadingScreen: Timeout reached, forcing redirect');
      handleComplete();
    }
  }, [handleComplete, isTimedOut]);

  useEffect(() => {
    if (!isVisible) return;

    // Reset state
    setProgress(0);
    setIsAnimating(true);
    setShowSkipButton(false);
    setIsTimedOut(false);
    setLoadingStage(0);

    // Performance-optimized progress simulation
    let stage = 0;
    const stages = [
      { progress: 15, duration: 800 },
      { progress: 35, duration: 1200 },
      { progress: 60, duration: 1500 },
      { progress: 85, duration: 1800 },
      { progress: 100, duration: 2000 }
    ];

    const simulateProgress = () => {
      if (stage < stages.length && isVisible) {
        const { progress: targetProgress, duration } = stages[stage];
        const startProgress = stage === 0 ? 0 : stages[stage - 1].progress;
        const increment = (targetProgress - startProgress) / (duration / 50);

        progressIntervalRef.current = setInterval(() => {
          setProgress(prev => {
            const newProgress = Math.min(prev + increment, targetProgress);
            if (newProgress >= targetProgress) {
              clearInterval(progressIntervalRef.current!);
              stage++;
              setLoadingStage(stage);

              if (stage < stages.length) {
                setTimeout(simulateProgress, 300);
              } else {
                // Loading complete
                handleComplete();
              }
            }
            return newProgress;
          });
        }, 50);
      }
    };

    // Start progress simulation
    setTimeout(simulateProgress, 500);

    // Show skip button after 3 seconds
    const skipTimer = setTimeout(() => {
      setShowSkipButton(true);
    }, 3000);
    timerRef.current.push(skipTimer);

    // Set timeout for automatic redirect
    const timeoutTimer = setTimeout(handleTimeout, timeoutDuration);
    timerRef.current.push(timeoutTimer);

    return () => {
      cleanupTimers();
    };
  }, [isVisible, timeoutDuration, handleComplete, cleanupTimers, handleTimeout]);

  if (!isVisible && !isAnimating) return null;

  const getMessage = () => {
    if (customMessage) return customMessage;

    switch (variant) {
      case 'initial':
        return 'Initializing NextReach Studio';
      case 'page-transition':
        return 'Transitioning...';
      case 'content':
        return 'Loading content...';
      default:
        return 'Loading...';
    }
  };

  const getStageMessage = () => {
    const messages = [
      "Preparing AI workspace...",
      "Loading intelligent agents...",
      "Optimizing automation....",
      "Finalizing AI setup...",
      "Ready to automate!"
    ];
    return messages[Math.min(loadingStage, messages.length - 1)];
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimating ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={cn(
            "fixed inset-0 z-50 flex flex-col items-center justify-center",
            "bg-gradient-to-br from-blue-50 via-white to-green-50",
            "dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
          )}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.15, 0.25, 0.15],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 right-1/3 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"
            />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.gray.200/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.200/20)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.gray.700/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.700/20)_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center space-y-6">
            {/* Enhanced Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.1
              }}
              className="relative"
            >
              {/* Outer glow ring */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-green-500/30 blur-xl"
              />

              {/* Logo Container */}
              <div className="relative w-28 h-28 md:w-36 md:h-36">
                {/* Multi-layered rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500/60 border-r-green-500/60"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-1 rounded-full border-2 border-transparent border-b-blue-400/40 border-l-green-400/40"
                />

                {/* Inner Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute inset-3 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
                >
                  <motion.img
                    src="/nextreach-logo.jpg"
                    alt="NextReach Studio Logo"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      type: "spring",
                      stiffness: 150,
                      damping: 15
                    }}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Typography */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-center space-y-2"
            >
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                NextReach Studio
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-light">
                Custom AI Agents & Automation
              </p>
            </motion.div>

            {/* Loading Progress Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.0
              }}
              className="text-center space-y-4"
            >
              {/* Stage Message */}
              <motion.p
                key={loadingStage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-gray-500 dark:text-gray-400 font-medium"
              >
                {getStageMessage()}
              </motion.p>

              {/* Enhanced Progress Bar */}
              {showProgress && (
                <div className="w-72 md:w-96 space-y-2">
                  <div className="relative h-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                    {/* Progress track */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-full"
                    />
                    {/* Progress glow */}
                    <motion.div
                      animate={{
                        opacity: progress === 100 ? [0, 1, 0] : 0,
                        scale: progress === 100 ? [1, 1.5, 1] : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-green-400/50 rounded-full blur-sm"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500">
                    <span>Initializing</span>
                    <motion.span
                      key={progress}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="font-mono"
                    >
                      {Math.round(progress)}%
                    </motion.span>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Animated Particles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center justify-center space-x-3"
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 1, 0.4],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                />
              ))}
            </motion.div>

            {/* Enhanced Skip Button */}
            <AnimatePresence>
              {showSkipButton && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    console.log('LoadingScreen: Skip button clicked');
                    handleComplete();
                  }}
                  className="mt-6 px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600"
                >
                  Skip to Experience →
                </motion.button>
              )}
            </AnimatePresence>

            {/* Timeout Warning */}
            <AnimatePresence>
              {isTimedOut && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="mt-4 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700/50 rounded-lg"
                >
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">
                    Taking longer than expected... redirecting now
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;