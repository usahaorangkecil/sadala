
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  LogOut,
  ChevronDown,
  User,
  Bell,
  Menu,
  X
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
  sidebarContent: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, sidebarContent }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm z-20 sticky top-0">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hidden md:block"
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            
            <Link to="/" className="flex items-center ml-2">
              <img 
                src="/lovable-uploads/323b466a-00c8-4cae-ae5d-8c00d89f1996.png" 
                alt="SADALA Logo" 
                className="h-8" 
              />
              <div className="ml-2">
                <h1 className="text-sm font-bold text-gray-900">SADALA</h1>
                <p className="text-xs text-gray-600">Satu Data Lamongan</p>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Bell className="h-5 w-5" />
            </Button>
            
            <div className="relative">
              <div className="flex items-center space-x-1 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <User className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium hidden md:block">{user?.name}</span>
                <ChevronDown className="h-4 w-4 text-gray-500 hidden md:block" />
              </div>
            </div>
            
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-gray-600">
              <LogOut className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Desktop */}
        <aside 
          className={`bg-white border-r dashboard-sidebar overflow-y-auto transition-all duration-300 ease-in-out ${
            sidebarOpen ? "w-64" : "w-20"
          } hidden md:block`}
        >
          {sidebarContent}
        </aside>

        {/* Sidebar - Mobile */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
            <aside className="bg-white h-full w-64 overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <img 
                  src="/lovable-uploads/323b466a-00c8-4cae-ae5d-8c00d89f1996.png" 
                  alt="SADALA Logo" 
                  className="h-8" 
                />
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              {sidebarContent}
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
