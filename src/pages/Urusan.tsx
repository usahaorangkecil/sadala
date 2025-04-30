
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Urusan = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8 text-[#1A1A1A]">Urusan</h1>

      <Tabs defaultValue="pemerintahan" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="pemerintahan">Pemerintahan</TabsTrigger>
          <TabsTrigger value="pembangunan">Pembangunan</TabsTrigger>
          <TabsTrigger value="sosial">Sosial</TabsTrigger>
          <TabsTrigger value="ekonomi">Ekonomi</TabsTrigger>
        </TabsList>

        {["pemerintahan", "pembangunan", "sosial", "ekonomi"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Dataset {tab.charAt(0).toUpperCase() + tab.slice(1)} {i + 1}</h3>
                    <p className="text-sm text-[#555] mb-2">OPD: Dinas Terkait</p>
                    <p className="text-sm text-[#555] mb-4">Indikator: {["Kinerja", "Pelayanan", "Program", "Anggaran"][i % 4]}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="#detail">
                        Lihat Detail
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </MainLayout>
  );
};

export default Urusan;
