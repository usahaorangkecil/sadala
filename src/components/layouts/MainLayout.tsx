
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img
                    src="/lovable-uploads/323b466a-00c8-4cae-ae5d-8c00d89f1996.png"
                    alt="SADALA Logo"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/dataset" className="text-[#1A1A1A] hover:text-[#174785] px-3 py-2 text-sm font-medium">
                  Dataset
                </Link>
                <Link to="/urusan" className="text-[#1A1A1A] hover:text-[#174785] px-3 py-2 text-sm font-medium">
                  Urusan
                </Link>
                <Link to="/organisasi" className="text-[#1A1A1A] hover:text-[#174785] px-3 py-2 text-sm font-medium">
                  Organisasi
                </Link>
                <Link to="/wilayah" className="text-[#1A1A1A] hover:text-[#174785] px-3 py-2 text-sm font-medium">
                  Wilayah
                </Link>
                <Link to="/publikasi" className="text-[#1A1A1A] hover:text-[#174785] px-3 py-2 text-sm font-medium">
                  Publikasi
                </Link>
                <Link to="/kebijakan" className="text-[#1A1A1A] hover:text-[#174785] px-3 py-2 text-sm font-medium">
                  Kebijakan
                </Link>
                <Link to="/lid" className="text-[#1A1A1A] hover:text-[#174785] px-3 py-2 text-sm font-medium">
                  LID
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Button asChild variant="outline" className="mr-2">
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumbs will be added here */}
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">SADALA</h3>
              <p className="text-[#555] text-sm">
                Portal Satu Data Kabupaten Lamongan
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Kontak</h3>
              <p className="text-[#555] text-sm">
                Dinas Komunikasi dan Informatika<br />
                Kabupaten Lamongan<br />
                Email: kominfo@lamongan.go.id
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Tautan</h3>
              <div className="space-y-2">
                <a href="https://ppid.lamongan.go.id" className="text-[#555] hover:text-[#174785] text-sm block">
                  PPID Lamongan
                </a>
                <Link to="/kebijakan" className="text-[#555] hover:text-[#174785] text-sm block">
                  Kebijakan
                </Link>
                <Link to="/lid" className="text-[#555] hover:text-[#174785] text-sm block">
                  Layanan Informasi Data
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
