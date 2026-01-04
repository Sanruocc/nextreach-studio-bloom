/// <reference types="vite/client" />

// Global gtag function for Google Analytics
declare global {
  function gtag(command: string, targetId: string, config?: any): void;
}

export {};
