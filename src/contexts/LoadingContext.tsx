import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  loadingMessage: string;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
  setLoadingMessage: (message: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
  initialLoadingDuration?: number;
  timeoutDuration?: number;
}

export const LoadingProvider = ({ 
  children, 
  initialLoadingDuration = 2500,
  timeoutDuration = 6000 
}: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('Loading NextReach Studio');

  useEffect(() => {
    console.log('LoadingProvider: Starting initialization');
    
    // Simple timeout-based loading
    const loadingTimer = setTimeout(() => {
      console.log('LoadingProvider: Timer completed, hiding loading screen');
      setIsLoading(false);
    }, initialLoadingDuration);

    // Failsafe timeout
    const failsafeTimer = setTimeout(() => {
      console.log('LoadingProvider: Failsafe triggered, forcing completion');
      setIsLoading(false);
    }, timeoutDuration);

    // Cleanup
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(failsafeTimer);
    };
  }, [initialLoadingDuration, timeoutDuration]);

  const showLoading = (message = 'Loading...') => {
    setLoadingMessage(message);
    setIsLoading(true);
  };

  const hideLoading = () => {
    console.log('LoadingProvider: hideLoading called');
    setIsLoading(false);
  };

  const contextValue: LoadingContextType = {
    isLoading,
    loadingMessage,
    showLoading,
    hideLoading,
    setLoadingMessage,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Hook for page transitions
export const usePageTransition = () => {
  const { showLoading, hideLoading } = useLoading();

  const startTransition = (message = 'Loading page...') => {
    showLoading(message);
  };

  const endTransition = () => {
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      hideLoading();
    }, 300);
  };

  return { startTransition, endTransition };
};

export default LoadingContext;