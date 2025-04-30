
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Download, FileText, FileImage } from "lucide-react";

const Publikasi = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8 text-[#1A1A1A]">Publikasi</h1>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="all">Semua</TabsTrigger>
          <TabsTrigger value="statistik">Statistik</TabsTrigger>
          <TabsTrigger value="pembangunan">Pembangunan</TabsTrigger>
          <TabsTrigger value="sosial">Sosial</TabsTrigger>
          <TabsTrigger value="ekonomi">Ekonomi</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Publikasi Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                {i % 2 === 0 ? (
                  <FileText className="h-8 w-8 text-red-500" />
                ) : (
                  <FileImage className="h-8 w-8 text-blue-500" />
                )}
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {i % 2 === 0 ? "Laporan" : "Infografis"}
                </span>
              </div>
              <h3 className="font-semibold mb-2">
                {i % 2 === 0 
                  ? `Laporan Statistik Kabupaten Lamongan ${2020 + i}`
                  : `Infografis Pembangunan Kabupaten ${2020 + i}`}
              </h3>
              <p className="text-sm text-[#555] mb-2">Dinas Kominfo • {2020 + i}</p>
              <p className="text-sm text-[#555] mb-4 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis erat ut magna.
              </p>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  Lihat
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Unduh
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="join">
          <Button variant="outline" className="join-item">«</Button>
          <Button variant="outline" className="join-item">1</Button>
          <Button variant="outline" className="join-item bg-[#174785] text-white">2</Button>
          <Button variant="outline" className="join-item">3</Button>
          <Button variant="outline" className="join-item">»</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Publikasi;
