
import React from "react";
import AdminLayout from "@/components/AdminLayout";
import UserSidebar from "@/components/sidebars/UserSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Database, 
  BarChart2, 
  FileText,
  ArrowRight,
  Download
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UserDashboard: React.FC = () => {
  const featuredDatasets = [
    { 
      id: 1, 
      title: "Data Kependudukan Kabupaten Lamongan 2023", 
      opd: "Disdukcapil", 
      downloads: 245 
    },
    { 
      id: 2, 
      title: "Statistik Pendidikan Kabupaten Lamongan", 
      opd: "Dinas Pendidikan", 
      downloads: 185 
    },
    { 
      id: 3, 
      title: "Data Kesehatan Masyarakat", 
      opd: "Dinas Kesehatan", 
      downloads: 167 
    },
  ];
  
  const stats = [
    { label: "Total Dataset", value: "324" },
    { label: "Total OPD", value: "38" },
    { label: "Total Visualisasi", value: "126" },
    { label: "Total Unduhan", value: "12.4K" },
  ];
  
  return (
    <AdminLayout sidebarContent={<UserSidebar />}>
      <div className="space-y-6">
        <Card className="dashboard-card bg-gradient-to-r from-blue-600 to-blue-700">
          <CardContent className="p-8">
            <div className="max-w-3xl">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Selamat Datang di SADALA
              </h1>
              <p className="text-blue-100 mb-6">
                Portal Satu Data Lamongan (SADALA) menyediakan data terbuka dari seluruh Organisasi Perangkat Daerah (OPD) 
                di Kabupaten Lamongan untuk mendukung pembangunan dan inovasi.
              </p>
              
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Cari dataset, organisasi, atau topik..."
                  className="pl-10 py-6 bg-white/90 backdrop-blur-sm border-0"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="dashboard-card">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* About SADALA */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Tentang SADALA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Satu Data Lamongan (SADALA) adalah portal data terbuka resmi dari Pemerintah Kabupaten Lamongan yang dibangun 
                untuk mendukung kebijakan Satu Data Indonesia. SADALA bertujuan untuk menyediakan data yang akurat, 
                mutakhir, terpadu, dan dapat dipertanggungjawabkan, serta mudah diakses dan dibagi antarlembaga.
              </p>
              <p>
                Melalui portal ini, Anda dapat mengakses berbagai data terbuka dari seluruh OPD di Kabupaten Lamongan, 
                melakukan visualisasi data, serta mengunduh dataset untuk dimanfaatkan dalam analisis, riset, 
                atau pengembangan aplikasi.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <Card className="flex-1 min-w-[200px] bg-blue-50 border-blue-100">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Database className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="font-medium">Jelajahi Data</h3>
                    <p className="text-sm text-muted-foreground mb-4">Temukan data dari berbagai OPD</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/admin/user/explore">
                        <span className="flex items-center">
                          Mulai <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="flex-1 min-w-[200px] bg-indigo-50 border-indigo-100">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <BarChart2 className="h-8 w-8 text-indigo-600 mb-2" />
                    <h3 className="font-medium">Visualisasi Data</h3>
                    <p className="text-sm text-muted-foreground mb-4">Lihat data dalam bentuk grafik</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/admin/user/visualizations">
                        <span className="flex items-center">
                          Lihat <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="flex-1 min-w-[200px] bg-violet-50 border-violet-100">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <FileText className="h-8 w-8 text-violet-600 mb-2" />
                    <h3 className="font-medium">Berita & Informasi</h3>
                    <p className="text-sm text-muted-foreground mb-4">Update terbaru SADALA</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/admin/user/news">
                        <span className="flex items-center">
                          Baca <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Featured Datasets */}
        <Card className="dashboard-card">
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Data Populer</CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link to="/admin/user/explore">Lihat Semua</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredDatasets.map((dataset) => (
                <Card key={dataset.id} className="border">
                  <CardContent className="p-4">
                    <div className="text-sm text-blue-600 mb-1">{dataset.opd}</div>
                    <h3 className="font-medium mb-2">{dataset.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Download className="h-4 w-4 mr-1" /> 
                      {dataset.downloads} unduhan
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default UserDashboard;
