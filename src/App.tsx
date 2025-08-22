import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { initializeMotionConfig } from "@/lib/motion-config";
import { LoadingProvider, useLoading } from "@/contexts/LoadingContext";
import LoadingScreen from "@/components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

// Main App Content Component
const AppContent = () => {
  const { isLoading, loadingMessage, hideLoading } = useLoading();

  // Initialize motion configuration on app start
  useEffect(() => {
    initializeMotionConfig();
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen
        variant="initial"
        showProgress={true}
        customMessage={loadingMessage}
        isVisible={isLoading}
        onComplete={hideLoading}
        timeoutDuration={7000}
      />

      {/* Main Application */}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/admin-nextreach-studio-2024" element={<AdminDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider initialLoadingDuration={2500} timeoutDuration={8000}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContent />
          <Analytics />
        </TooltipProvider>
      </LoadingProvider>
    </QueryClientProvider>
  );
};

export default App;
