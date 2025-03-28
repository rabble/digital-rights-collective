
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BillOfRights from "./pages/BillOfRights";
import PlatformComparison from "./pages/PlatformComparison";
import AboutAuthor from "./pages/AboutAuthor";
import Resources from "./pages/Resources";
import TakeAction from "./pages/TakeAction";
import NotFound from "./pages/NotFound";

// Initialize the query client
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bill-of-rights" element={<BillOfRights />} />
            <Route path="/platform-comparison" element={<PlatformComparison />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/take-action" element={<TakeAction />} />
            <Route path="/about" element={<AboutAuthor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
