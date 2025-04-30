
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import Map from "@/components/Map";
import { wilayahData } from "@/utils/dummyData";

const COLORS = ["#4FC9DA", "#FD7E14", "#28A745", "#DC3545"];

const Wilayah = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8 text-[#1A1A1A]">Wilayah</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Map */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Peta Lamongan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
          <img
            src="https://awsimages.detik.net.id/community/media/visual/2021/08/18/tak-ada-lagi-kecamatan-zona-merah-di-lamongan.jpeg"
        alt="Peta Lamongan"
        className="w-full h-full object-cover rounded-lg shadow"
      />
          </CardContent>
        </Card>
        
        {/* Distribution chart */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Distribusi Data per Wilayah</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={wilayahData.regions}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="datasets"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {wilayahData.regions.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Line chart */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Tren Dataset per Kecamatan (2020-2024)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={wilayahData.yearlyData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="north" name="Lamongan Utara" stroke="#4FC9DA" strokeWidth={2} />
                <Line type="monotone" dataKey="south" name="Lamongan Selatan" stroke="#FD7E14" strokeWidth={2} />
                <Line type="monotone" dataKey="east" name="Lamongan Timur" stroke="#28A745" strokeWidth={2} />
                <Line type="monotone" dataKey="west" name="Lamongan Barat" stroke="#DC3545" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Kecamatan list */}
      <h2 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Daftar Kecamatan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wilayahData.kecamatan.map((kecamatan) => (
          <Card key={kecamatan.id} className="hover:shadow-md transition-shadow border-[#4FC9DA]/20">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">{kecamatan.name}</h3>
              <p className="text-sm text-[#555] mb-4">{kecamatan.datasets} dataset tersedia</p>
              <Button variant="outline" size="sm" className="w-full hover:bg-[#4FC9DA]/10">Lihat Dataset Wilayah</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </MainLayout>
  );
};

export default Wilayah;
