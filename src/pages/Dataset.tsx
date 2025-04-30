
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { recentDatasets } from "@/utils/dummyData";

const Dataset = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8 text-[#1A1A1A]">Dataset</h1>
      
      {/* Search and Filters Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Cari dataset..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="OPD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua OPD</SelectItem>
              {["Dinas Kominfo", "Dinas Kesehatan", "Dinas Pendidikan"].map((opd) => (
                <SelectItem key={opd} value={opd.toLowerCase()}>{opd}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tahun" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Tahun</SelectItem>
              {[2024, 2023, 2022].map((year) => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex space-x-2">
            <Button variant="outline" className="w-1/2">Reset</Button>
            <Button className="w-1/2 bg-[#4FC9DA] hover:bg-[#3BA7B8]">Filter</Button>
          </div>
        </div>
      </div>
      
      {/* Dataset Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {recentDatasets.map((dataset) => (
          <Card key={dataset.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">{dataset.title}</h3>
              <p className="text-sm text-[#555] mb-2">{dataset.opd} • {dataset.year}</p>
              <p className="text-sm text-[#555] mb-4 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis erat ut magna.
              </p>
              <div className="flex justify-between">
                <Button variant="outline" size="sm" className="hover:bg-[#4FC9DA]/10">Detail</Button>
                <Button variant="outline" size="sm" className="hover:bg-[#4FC9DA]/10">
                  <Download className="h-4 w-4 mr-1" />
                  Unduh
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center">
        <div className="join">
          <Button variant="outline" className="join-item">«</Button>
          <Button variant="outline" className="join-item">1</Button>
          <Button variant="outline" className="join-item bg-[#4FC9DA] text-white">2</Button>
          <Button variant="outline" className="join-item">3</Button>
          <Button variant="outline" className="join-item">»</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dataset;
