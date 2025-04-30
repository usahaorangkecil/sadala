import React from "react";
import AdminLayout from "@/components/AdminLayout";
import ValidatorSidebar from "@/components/sidebars/ValidatorSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Check, X, AlertCircle, Activity } from "lucide-react";

const ValidatorDashboard: React.FC = () => {
  const pendingValidation = [
    { 
      id: 1, 
      title: "Statistik Kependudukan per Kecamatan", 
      opd: "Disdukcapil", 
      submitted: "2025-04-23"
    },
    { 
      id: 2, 
      title: "Anggaran Belanja Langsung 2024", 
      opd: "BPKAD", 
      submitted: "2025-04-22"
    },
    { 
      id: 3, 
      title: "Data Panen Padi 2023", 
      opd: "Dinas Pertanian", 
      submitted: "2025-04-22"
    },
    { 
      id: 4, 
      title: "Statistik Kesehatan Ibu dan Anak", 
      opd: "Dinas Kesehatan", 
      submitted: "2025-04-21"
    },
  ];
  
  const validationHistory = [
    { 
      id: 101, 
      title: "Data Pengunjung Wisata 2023", 
      opd: "Dinas Pariwisata",
      date: "2025-04-20", 
      status: "approved"
    },
    { 
      id: 102, 
      title: "Kondisi Jalan Kabupaten", 
      opd: "Dinas PU", 
      date: "2025-04-19", 
      status: "revision"
    },
    { 
      id: 103, 
      title: "Laporan Perizinan Usaha", 
      opd: "DPMPTSP", 
      date: "2025-04-18", 
      status: "approved"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "approved":
        return <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700"><Check className="w-3 h-3 mr-1" /> Disetujui</span>;
      case "revision":
        return <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-50 text-yellow-700"><AlertCircle className="w-3 h-3 mr-1" /> Revisi</span>;
      case "rejected":
        return <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700"><X className="w-3 h-3 mr-1" /> Ditolak</span>;
      default:
        return null;
    }
  };

  return (
    <AdminLayout sidebarContent={<ValidatorSidebar />}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard Validasi</h1>
          <p className="text-muted-foreground">
            Selamat datang di portal validasi metadata SADALA.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Metadata Menunggu</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14</div>
              <p className="text-xs text-muted-foreground">
                Perlu divalidasi
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Divalidasi Minggu Ini</CardTitle>
              <Check className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                18 disetujui, 5 perlu revisi
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Rata-rata Waktu Validasi</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2 hari</div>
              <p className="text-xs text-muted-foreground">
                Turun dari 1.5 hari bulan lalu
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Validation Progress */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Metadata Masuk</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4">
                {pendingValidation.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <div className="text-sm text-muted-foreground">{item.opd} - {item.submitted}</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-md hover:bg-green-100">
                        <span className="flex items-center"><Check className="mr-1 h-4 w-4" /> Setuju</span>
                      </button>
                      <button className="px-3 py-1 text-sm bg-yellow-50 text-yellow-700 rounded-md hover:bg-yellow-100">
                        <span className="flex items-center"><AlertCircle className="mr-1 h-4 w-4" /> Revisi</span>
                      </button>
                      <button className="px-3 py-1 text-sm bg-red-50 text-red-700 rounded-md hover:bg-red-100">
                        <span className="flex items-center"><X className="mr-1 h-4 w-4" /> Tolak</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Validation History */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Riwayat Validasi</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 border-b">
                  <th className="pb-2 text-left font-medium">Judul Dataset</th>
                  <th className="pb-2 text-left font-medium">OPD</th>
                  <th className="pb-2 text-left font-medium">Tanggal</th>
                  <th className="pb-2 text-left font-medium">Status</th>
                  <th className="pb-2 text-left font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {validationHistory.map((item) => (
                  <tr key={item.id} className="border-b last:border-0">
                    <td className="py-3 text-sm">{item.title}</td>
                    <td className="py-3 text-sm">{item.opd}</td>
                    <td className="py-3 text-sm">{item.date}</td>
                    <td className="py-3 text-sm">{getStatusBadge(item.status)}</td>
                    <td className="py-3 text-sm">
                      <button className="text-xs px-2 py-1 text-blue-600 hover:underline">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ValidatorDashboard;
