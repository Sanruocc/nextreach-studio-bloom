/**
 * Network utilities for handling connection status and performance
 */

export interface NetworkInfo {
  isOnline: boolean;
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
}

// Check if the connection is slow
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  const connection = (navigator as unknown as { connection?: { effectiveType?: string; rtt?: number; downlink?: number } }).connection;
  
  if (!connection) return false;
  
  // Consider connection slow if:
  // - Effective type is 'slow-2g' or '2g'
  // - RTT is greater than 1000ms
  // - Downlink is less than 0.5 Mbps
  return (
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g' ||
    connection.rtt > 1000 ||
    connection.downlink < 0.5
  );
};

// Get network information
export const getNetworkInfo = (): NetworkInfo => {
  const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
  
  if (typeof navigator === 'undefined') {
    return { isOnline };
  }
  
  const connection = (navigator as unknown as { connection?: { effectiveType?: string; rtt?: number; downlink?: number } }).connection;
  
  if (!connection) {
    return { isOnline };
  }
  
  return {
    isOnline,
    effectiveType: connection.effectiveType,
    downlink: connection.downlink,
    rtt: connection.rtt,
  };
};

// Create a promise that resolves when the network is available
export const waitForNetwork = (timeout = 5000): Promise<boolean> => {
  return new Promise((resolve) => {
    if (navigator.onLine) {
      resolve(true);
      return;
    }
    
    const timeoutId = setTimeout(() => {
      cleanup();
      resolve(false);
    }, timeout);
    
    const handleOnline = () => {
      cleanup();
      resolve(true);
    };
    
    const cleanup = () => {
      clearTimeout(timeoutId);
      window.removeEventListener('online', handleOnline);
    };
    
    window.addEventListener('online', handleOnline);
  });
};

// Retry function with exponential backoff
export const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
): Promise<T> => {
  let lastError: Error;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }
      
      // Wait for network if offline
      if (!navigator.onLine) {
        await waitForNetwork();
      }
      
      // Exponential backoff delay
      const delay = baseDelay * Math.pow(2, attempt);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError!;
};

// Monitor network status changes
export const createNetworkMonitor = (
  onStatusChange: (info: NetworkInfo) => void
) => {
  const handleStatusChange = () => {
    onStatusChange(getNetworkInfo());
  };
  
  // Listen for online/offline events
  window.addEventListener('online', handleStatusChange);
  window.addEventListener('offline', handleStatusChange);
  
  // Listen for connection changes (if supported)
  const connection = (navigator as any).connection || 
                    (navigator as any).mozConnection || 
                    (navigator as any).webkitConnection;
  
  if (connection) {
    connection.addEventListener('change', handleStatusChange);
  }
  
  // Return cleanup function
  return () => {
    window.removeEventListener('online', handleStatusChange);
    window.removeEventListener('offline', handleStatusChange);
    
    if (connection) {
      connection.removeEventListener('change', handleStatusChange);
    }
  };
};

export default {
  isSlowConnection,
  getNetworkInfo,
  waitForNetwork,
  retryWithBackoff,
  createNetworkMonitor,
};