
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Map from "@/components/Map";
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  Search,
  ArrowRight,
  Activity,
  Users,
  Shield,
  HeartPulse
} from "lucide-react";
import { beranda } from "@/utils/dummyData";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const healthData = [
    { name: "Stunting", value: 25.3 },
    { name: "Obesitas", value: 15.7 },
    { name: "Diabetes", value: 8.4 },
    { name: "Hipertensi", value: 12.8 }
  ];

  const crimeData = [
    { month: "Jan", cases: 45 },
    { month: "Feb", cases: 52 },
    { month: "Mar", cases: 49 },
    { month: "Apr", cases: 38 },
    { month: "May", cases: 42 },
    { month: "Jun", cases: 35 }
  ];

  const povertyData = [
    { year: "2020", percentage: 12.5 },
    { year: "2021", percentage: 11.8 },
    { year: "2022", percentage: 10.9 },
    { year: "2023", percentage: 10.2 },
    { year: "2024", percentage: 9.7 }
  ];

  const COLORS = ["#4FC9DA", "#FD7E14", "#28A745", "#DC3545"];

  return (
    <MainLayout>
      {/* Hero Section with Search */}
      <div className="bg-[#4FC9DA] text-white py-16 px-4 sm:px-6 lg:px-8 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Portal Satu Data Lamongan</h1>
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari Data, OPD, atau Topik Strategis..."
                className="w-full pl-10 pr-4 py-3 bg-white text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="bg-gradient-to-br from-[#4FC9DA] to-[#3DBBCC] text-white">
          <CardContent className="p-6">
            <Users className="h-8 w-8 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{beranda.stats.totalDatasets}</h3>
            <p>Total Dataset</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-[#FD7E14] to-[#E66C03] text-white">
          <CardContent className="p-6">
            <Activity className="h-8 w-8 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{beranda.stats.verifiedDatasets}</h3>
            <p>Dataset Terverifikasi</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-[#28A745] to-[#1E8535] text-white">
          <CardContent className="p-6">
            <Shield className="h-8 w-8 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{beranda.stats.totalPublikasi}</h3>
            <p>Total Publikasi</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-[#DC3545] to-[#C82333] text-white">
          <CardContent className="p-6">
            <HeartPulse className="h-8 w-8 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{beranda.stats.totalRequests}</h3>
            <p>Permintaan Data</p>
          </CardContent>
        </Card>
      </div>

      {/* Map and Health Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
        <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Peta Sebaran Data Lamongan</h2>
        <div className="h-[400px]">
          <img
            src="https://siila.lamongankab.go.id/mo/images/map_la_muchad.svg"
        alt="Peta Lamongan"
        className="w-full h-full object-cover rounded-lg shadow"
      />
    </div>
  </CardContent>
</Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Statistik Kesehatan</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={healthData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name} ${value}%`}
                  >
                    {healthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

      {/* Crime and Poverty Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Statistik Kriminalitas</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={crimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cases" fill="#4FC9DA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Tren Kemiskinan</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={povertyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="percentage" stroke="#4FC9DA" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Home;
