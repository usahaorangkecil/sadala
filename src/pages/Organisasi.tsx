
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { opdList } from "@/utils/dummyData";

const Organisasi = () => {
  const COLORS = ['#4FC9DA', '#fd7e14', '#28a745', '#dc3545', '#6f42c1', '#20c997'];
  
  const pieData = opdList.slice(0, 6).map(opd => ({
    name: opd.name,
    value: opd.datasets
  }));

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8 text-[#1A1A1A]">Organisasi Perangkat Daerah</h1>
      
      {/* Filter */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex items-center">
          <span className="mr-3 text-[#555]">Filter:</span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipe OPD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua</SelectItem>
              <SelectItem value="dinas">Dinas</SelectItem>
              <SelectItem value="badan">Badan</SelectItem>
              <SelectItem value="sekretariat">Sekretariat</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Grid OPD Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {opdList.map((opd) => (
          <Card key={opd.id} className="hover:shadow-md transition-shadow border-[#4FC9DA]/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white"
                   style={{ backgroundColor: opd.color }}>
                {opd.name.split(' ')[0].charAt(0)}{opd.name.split(' ')[1]?.charAt(0) || ''}
              </div>
              <h3 className="font-semibold mb-2">{opd.name}</h3>
              <p className="text-sm text-[#555] mb-4">{opd.datasets} dataset tersedia</p>
              <Button variant="outline" size="sm" className="w-full hover:bg-[#4FC9DA]/10">
                Lihat Dataset
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Dataset per OPD</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={opdList}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="datasets" fill="#4FC9DA">
                  {opdList.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Pie Chart */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Distribusi Dataset</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Organisasi;
