
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Importing pages
import Home from "./pages/Home";
import Dataset from "./pages/Dataset";
import Urusan from "./pages/Urusan";
import Organisasi from "./pages/Organisasi";
import Wilayah from "./pages/Wilayah";
import Publikasi from "./pages/Publikasi";
import Kebijakan from "./pages/Kebijakan";
import Lid from "./pages/Lid";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Pemkab Admin
import PemkabDashboard from "./pages/admin/pemkab/Dashboard";
// OPD Admin
import OpdDashboard from "./pages/admin/opd/Dashboard";
// Validator
import ValidatorDashboard from "./pages/admin/validator/Dashboard";
// Editor
import EditorDashboard from "./pages/admin/editor/Dashboard";
// User
import UserDashboard from "./pages/admin/user/Dashboard";

// Protected Route Component
import { useAuth } from "./contexts/AuthContext";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  element: ReactNode;
  allowedRoles: string[];
}

const ProtectedRoute = ({ element, allowedRoles }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles.includes(user.role)) {
    return <>{element}</>;
  }
  
  return <Navigate to="/login" replace />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/urusan" element={<Urusan />} />
            <Route path="/organisasi" element={<Organisasi />} />
            <Route path="/wilayah" element={<Wilayah />} />
            <Route path="/publikasi" element={<Publikasi />} />
            <Route path="/kebijakan" element={<Kebijakan />} />
            <Route path="/lid" element={<Lid />} />
            <Route path="/login" element={<Login />} />
            
            {/* Pemkab Admin Routes */}
            <Route 
              path="/admin/pemkab" 
              element={<ProtectedRoute element={<PemkabDashboard />} allowedRoles={["pemkab"]} />} 
            />
            
            {/* OPD Admin Routes */}
            <Route 
              path="/admin/opd" 
              element={<ProtectedRoute element={<OpdDashboard />} allowedRoles={["opd"]} />} 
            />
            
            {/* Validator Routes */}
            <Route 
              path="/admin/validator" 
              element={<ProtectedRoute element={<ValidatorDashboard />} allowedRoles={["validator"]} />} 
            />
            
            {/* Editor Routes */}
            <Route 
              path="/admin/editor" 
              element={<ProtectedRoute element={<EditorDashboard />} allowedRoles={["editor"]} />} 
            />
            
            {/* User Routes */}
            <Route 
              path="/admin/user" 
              element={<ProtectedRoute element={<UserDashboard />} allowedRoles={["user"]} />} 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
