
import React from "react";
import AdminLayout from "@/components/AdminLayout";
import PemkabSidebar from "@/components/sidebars/PemkabSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart2, 
  Database, 
  FileText, 
  UserCheck,
  AlertTriangle,
  Check,
  X,
  Users,
  Activity
} from "lucide-react";

const Dashboard: React.FC = () => {
  const todayActivity = [
    { time: "09:15", user: "Dinas Pendidikan", action: "Upload dataset baru", type: "upload" },
    { time: "10:22", user: "Validator", action: "Validasi metadata Disdukcapil", type: "validation_success" },
    { time: "11:05", user: "Dinas Kesehatan", action: "Revisi metadata", type: "edit" },
    { time: "13:30", user: "Validator", action: "Menolak metadata BPKAD", type: "validation_failed" },
    { time: "14:45", user: "Admin Sistem", action: "Update kategori data", type: "system" },
  ];

  const opdStats = [
    { name: "Dinas Kependudukan", progress: 95, datasets: 42, validated: 40 },
    { name: "Dinas Kesehatan", progress: 80, datasets: 36, validated: 29 },
    { name: "Dinas Pendidikan", progress: 75, datasets: 31, validated: 23 },
    { name: "BPKAD", progress: 65, datasets: 28, validated: 18 },
    { name: "Dinas Pertanian", progress: 60, datasets: 25, validated: 15 },
  ];

  const pendingValidation = [
    { 
      id: 1, 
      title: "Statistik Kependudukan per Kecamatan", 
      opd: "Disdukcapil", 
      submitted: "2025-04-23", 
      status: "waiting"
    },
    { 
      id: 2, 
      title: "Anggaran Belanja Langsung 2024", 
      opd: "BPKAD", 
      submitted: "2025-04-22", 
      status: "waiting" 
    },
    { 
      id: 3, 
      title: "Data Panen Padi 2023", 
      opd: "Dinas Pertanian", 
      submitted: "2025-04-22",
      status: "revisi"
    },
    { 
      id: 4, 
      title: "Statistik Kesehatan Ibu dan Anak", 
      opd: "Dinas Kesehatan", 
      submitted: "2025-04-21",
      status: "waiting"
    },
  ];
  
  const getActivityIcon = (type: string) => {
    switch(type) {
      case "upload":
        return <Database className="h-4 w-4 text-blue-500" />;
      case "edit":
        return <FileText className="h-4 w-4 text-yellow-500" />;
      case "validation_success":
        return <Check className="h-4 w-4 text-green-500" />;
      case "validation_failed":
        return <X className="h-4 w-4 text-red-500" />;
      default:
        return <BarChart2 className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <AdminLayout sidebarContent={<PemkabSidebar />}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard Utama</h1>
          <p className="text-muted-foreground">
            Selamat datang di portal SADALA Kabupaten Lamongan.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total OPD Terdaftar</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">38</div>
              <p className="text-xs text-muted-foreground">
                35 OPD aktif, 3 OPD nonaktif
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Dataset</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324</div>
              <p className="text-xs text-muted-foreground">
                +12 dalam 30 hari terakhir
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Validasi Tertunda</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14</div>
              <p className="text-xs text-muted-foreground">
                4 memerlukan revisi
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pengguna Aktif</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87</div>
              <p className="text-xs text-muted-foreground">
                +5 dalam 30 hari terakhir
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* OPD Performance */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Statistik Data OPD</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {opdStats.map((opd, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">{opd.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {opd.validated}/{opd.datasets} tervalidasi
                    </div>
                  </div>
                  <Progress value={opd.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Recent Activity */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Aktivitas Terkini</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {todayActivity.map((activity, index) => (
                  <div key={index} className="flex">
                    <div className="w-9 text-xs text-gray-500">{activity.time}</div>
                    <div className="flex items-center justify-center mr-2">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{activity.user}</div>
                      <div className="text-xs text-gray-500">{activity.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Validation List */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Validasi Tertunda</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="waiting">
              <TabsList className="mb-4">
                <TabsTrigger value="waiting">Menunggu</TabsTrigger>
                <TabsTrigger value="revision">Perlu Revisi</TabsTrigger>
              </TabsList>
              <TabsContent value="waiting" className="space-y-4">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs text-gray-500 border-b">
                      <th className="pb-2 text-left font-medium">Judul Dataset</th>
                      <th className="pb-2 text-left font-medium">OPD</th>
                      <th className="pb-2 text-left font-medium">Tanggal Submit</th>
                      <th className="pb-2 text-left font-medium">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingValidation.filter(item => item.status === "waiting").map((item) => (
                      <tr key={item.id} className="border-b last:border-0">
                        <td className="py-3 text-sm">{item.title}</td>
                        <td className="py-3 text-sm">{item.opd}</td>
                        <td className="py-3 text-sm">{item.submitted}</td>
                        <td className="py-3 text-sm">
                          <div className="flex space-x-2">
                            <button className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded">Validasi</button>
                            <button className="text-xs px-2 py-1 bg-red-50 text-red-600 rounded">Tolak</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabsContent>
              <TabsContent value="revision" className="space-y-4">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs text-gray-500 border-b">
                      <th className="pb-2 text-left font-medium">Judul Dataset</th>
                      <th className="pb-2 text-left font-medium">OPD</th>
                      <th className="pb-2 text-left font-medium">Tanggal Submit</th>
                      <th className="pb-2 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingValidation.filter(item => item.status === "revisi").map((item) => (
                      <tr key={item.id} className="border-b last:border-0">
                        <td className="py-3 text-sm">{item.title}</td>
                        <td className="py-3 text-sm">{item.opd}</td>
                        <td className="py-3 text-sm">{item.submitted}</td>
                        <td className="py-3 text-sm">
                          <span className="text-xs px-2 py-1 bg-yellow-50 text-yellow-600 rounded">Perlu Revisi</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
