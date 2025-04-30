
import React from "react";
import AdminLayout from "@/components/AdminLayout";
import EditorSidebar from "@/components/sidebars/EditorSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Check, 
  X, 
  AlertCircle,
  Upload,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EditorDashboard: React.FC = () => {
  const myData = [
    { 
      id: 1, 
      title: "Statistik Kependudukan Kecamatan Lamongan", 
      created: "2025-04-20", 
      status: "published", 
      downloads: 35
    },
    { 
      id: 2, 
      title: "Data Pernikahan dan Perceraian", 
      created: "2025-04-15", 
      status: "published", 
      downloads: 28
    },
    { 
      id: 3, 
      title: "Statistik Kelahiran per Kecamatan", 
      created: "2025-04-23", 
      status: "pending", 
      downloads: 0
    },
    { 
      id: 4, 
      title: "Data Penduduk berdasarkan Golongan Darah", 
      created: "2025-04-10", 
      status: "revision", 
      downloads: 0
    },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "published":
        return <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700"><Check className="w-3 h-3 mr-1" /> Terbit</span>;
      case "pending":
        return <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-50 text-yellow-700">Menunggu</span>;
      case "revision":
        return <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-50 text-orange-700"><AlertCircle className="w-3 h-3 mr-1" /> Perlu Revisi</span>;
      case "rejected":
        return <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700"><X className="w-3 h-3 mr-1" /> Ditolak</span>;
      default:
        return null;
    }
  };

  return (
    <AdminLayout sidebarContent={<EditorSidebar />}>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard Pribadi</h1>
            <p className="text-muted-foreground">
              Selamat datang di portal pengelolaan dataset Anda.
            </p>
          </div>
          <Link to="/admin/editor/upload">
            <Button className="flex items-center">
              <Upload className="mr-2 h-4 w-4" />
              Upload Data
            </Button>
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Dataset Saya</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myData.length}</div>
              <p className="text-xs text-muted-foreground">
                {myData.filter(d => d.status === "published").length} terbit, {myData.filter(d => d.status !== "published").length} tertunda
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Unduhan</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myData.reduce((sum, item) => sum + item.downloads, 0)}</div>
              <p className="text-xs text-muted-foreground">
                Dari semua dataset Anda
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Perlu Perhatian</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myData.filter(d => d.status === "revision").length}</div>
              <p className="text-xs text-muted-foreground">
                Perlu revisi
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* My Data */}
        <Card className="dashboard-card">
          <CardHeader className="flex justify-between">
            <CardTitle>Data Saya</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 border-b">
                  <th className="pb-2 text-left font-medium">Judul Dataset</th>
                  <th className="pb-2 text-left font-medium">Tanggal Dibuat</th>
                  <th className="pb-2 text-left font-medium">Status</th>
                  <th className="pb-2 text-left font-medium">Unduhan</th>
                  <th className="pb-2 text-left font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {myData.map((item) => (
                  <tr key={item.id} className="border-b last:border-0">
                    <td className="py-3 text-sm">{item.title}</td>
                    <td className="py-3 text-sm">{item.created}</td>
                    <td className="py-3 text-sm">{getStatusBadge(item.status)}</td>
                    <td className="py-3 text-sm">{item.downloads}</td>
                    <td className="py-3 text-sm">
                      <div className="flex space-x-2">
                        <button className="text-xs px-2 py-1 text-blue-600 hover:underline">
                          Lihat
                        </button>
                        {item.status === "revision" && (
                          <button className="text-xs px-2 py-1 text-orange-600 hover:underline">
                            Edit
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
        
        {/* Upload Reminder */}
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-medium text-blue-800">Punya data baru untuk dibagikan?</h3>
                <p className="text-blue-700">Unggah dataset baru dan bantu Lamongan menjadi kota data terbuka.</p>
              </div>
              <Link to="/admin/editor/upload">
                <Button variant="default">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Data Sekarang
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default EditorDashboard;
