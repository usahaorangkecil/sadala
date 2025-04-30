
import React from "react";
import AdminLayout from "@/components/AdminLayout";
import OpdSidebar from "@/components/sidebars/OpdSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart2, 
  Database, 
  FileText, 
  Check,
  X,
  Users
} from "lucide-react";

const OpdDashboard: React.FC = () => {
  const recentData = [
    { id: 1, title: "Data Kependudukan Kecamatan Lamongan", status: "validated", date: "2025-04-20" },
    { id: 2, title: "Statistik Pernikahan dan Perceraian 2024", status: "pending", date: "2025-04-22" },
    { id: 3, title: "Data Kelahiran per Kecamatan 2023", status: "validated", date: "2025-04-15" },
    { id: 4, title: "Jumlah Penduduk Berdasarkan Usia", status: "rejected", date: "2025-04-10" },
  ];
  
  const userActivity = [
    { 
      user: "Andi Wahyudi", 
      action: "Upload dataset baru", 
      time: "Hari ini, 09:15", 
      type: "upload" 
    },
    { 
      user: "Siti Rahayu", 
      action: "Revisi metadata", 
      time: "Hari ini, 11:05", 
      type: "edit" 
    },
    { 
      user: "Bambang Sutrisno", 
      action: "Menambahkan visualisasi", 
      time: "Kemarin, 14:30", 
      type: "visualization" 
    },
  ];
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "validated":
        return <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700"><Check className="w-3 h-3 mr-1" /> Tervalidasi</span>;
      case "pending":
        return <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-50 text-yellow-700">Menunggu</span>;
      case "rejected":
        return <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700"><X className="w-3 h-3 mr-1" /> Ditolak</span>;
      default:
        return null;
    }
  };

  const getActivityIcon = (type: string) => {
    switch(type) {
      case "upload":
        return <Database className="h-4 w-4 text-blue-500" />;
      case "edit":
        return <FileText className="h-4 w-4 text-yellow-500" />;
      case "visualization":
        return <BarChart2 className="h-4 w-4 text-purple-500" />;
      default:
        return <BarChart2 className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <AdminLayout sidebarContent={<OpdSidebar />}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard OPD</h1>
          <p className="text-muted-foreground">
            Selamat datang di portal pengelolaan data OPD Anda.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Dataset</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">
                45 tervalidasi, 3 tertunda
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Unduhan Bulan Ini</CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                +24 dari bulan sebelumnya
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pengguna OPD</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">
                1 admin, 5 editor
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Data Validation Progress */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Statistik Validasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Tervalidasi</span>
                  <span className="text-sm text-muted-foreground">45/48</span>
                </div>
                <Progress value={93.75} className="h-2" />
              </div>
              
              <div className="pt-4 grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-blue-700">42</div>
                  <div className="text-xs text-muted-foreground">Dataset Publik</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-yellow-700">3</div>
                  <div className="text-xs text-muted-foreground">Menunggu</div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-red-700">2</div>
                  <div className="text-xs text-muted-foreground">Ditolak</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Activity */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Aktivitas Pengguna OPD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {userActivity.map((activity, index) => (
                  <div key={index} className="flex">
                    <div className="flex items-center justify-center mr-3">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{activity.user}</div>
                      <div className="text-xs">{activity.action}</div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Data */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Data Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-gray-500 border-b">
                    <th className="pb-2 text-left font-medium">Judul Dataset</th>
                    <th className="pb-2 text-left font-medium">Tanggal</th>
                    <th className="pb-2 text-left font-medium">Status</th>
                    <th className="pb-2 text-left font-medium">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {recentData.map((item) => (
                    <tr key={item.id} className="border-b last:border-0">
                      <td className="py-3 text-sm">{item.title}</td>
                      <td className="py-3 text-sm">{item.date}</td>
                      <td className="py-3 text-sm">{getStatusBadge(item.status)}</td>
                      <td className="py-3 text-sm">
                        <button className="text-xs px-2 py-1 text-blue-600 hover:underline">
                          Lihat
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default OpdDashboard;
