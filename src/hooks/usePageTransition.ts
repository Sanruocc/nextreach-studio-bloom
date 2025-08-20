import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '@/contexts/LoadingContext';

interface UsePageTransitionOptions {
  transitionDuration?: number;
  loadingMessage?: string;
}

export const usePageTransition = (options: UsePageTransitionOptions = {}) => {
  const { 
    transitionDuration = 500, 
    loadingMessage = 'Loading page...' 
  } = options;
  
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();

  const navigateWithTransition = useCallback((
    to: string, 
    customMessage?: string
  ) => {
    // Show loading screen
    showLoading(customMessage || loadingMessage);

    // Navigate after a brief delay to show the loading state
    setTimeout(() => {
      navigate(to);
      
      // Hide loading screen after navigation
      setTimeout(() => {
        hideLoading();
      }, transitionDuration);
    }, 100);
  }, [navigate, showLoading, hideLoading, loadingMessage, transitionDuration]);

  const startTransition = useCallback((message?: string) => {
    showLoading(message || loadingMessage);
  }, [showLoading, loadingMessage]);

  const endTransition = useCallback(() => {
    setTimeout(() => {
      hideLoading();
    }, transitionDuration);
  }, [hideLoading, transitionDuration]);

  return {
    navigateWithTransition,
    startTransition,
    endTransition,
  };
};

export default usePageTransition;