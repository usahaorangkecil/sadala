
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Kebijakan = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8 text-[#1A1A1A]">Kebijakan</h1>

      {/* Filter by Tipe Kebijakan */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex items-center">
          <span className="mr-3 text-[#555]">Filter berdasarkan:</span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipe Kebijakan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua</SelectItem>
              <SelectItem value="perda">Peraturan Daerah</SelectItem>
              <SelectItem value="perbup">Peraturan Bupati</SelectItem>
              <SelectItem value="se">Surat Edaran</SelectItem>
              <SelectItem value="surat">Surat Dinas</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tabel Dokumen Kebijakan */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Daftar Kebijakan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-2 text-left">Judul</th>
                  <th className="border px-4 py-2 text-left">Tipe</th>
                  <th className="border px-4 py-2 text-left">Nomor</th>
                  <th className="border px-4 py-2 text-left">Tahun</th>
                  <th className="border px-4 py-2 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">
                      {["Perda tentang APBD", "Perda tentang Pendapatan Daerah", "Perbup tentang SOTK", 
                        "Perbup tentang Pengadaan Barang Jasa", "SE tentang Efisiensi Anggaran"][i % 5]} {2020 + i}
                    </td>
                    <td className="border px-4 py-2">
                      {["Perda", "Perbup", "SE", "Surat Dinas"][i % 4]}
                    </td>
                    <td className="border px-4 py-2">{i + 1} / {["PD", "BP", "SE", "SD"][i % 4]} / {2020 + i}</td>
                    <td className="border px-4 py-2">{2020 + i}</td>
                    <td className="border px-4 py-2">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Detail</Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Unduh
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Detail Kebijakan Sample */}
      <h2 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Detail Kebijakan Terbaru</h2>
      <Card>
        <CardHeader>
          <CardTitle>Peraturan Bupati Lamongan No 5 Tahun 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start mb-4">
            <FileText className="h-12 w-12 mr-4 text-[#174785]" />
            <div>
              <h3 className="font-semibold mb-1">Tentang Tata Kelola Sistem Informasi dan Data</h3>
              <p className="text-sm text-[#555] mb-4">Tanggal Berlaku: 15 Januari 2024</p>
              <p className="text-sm text-[#555] mb-6">
                Peraturan ini mengatur tentang tata kelola sistem informasi dan data di lingkungan Pemerintah Kabupaten Lamongan, 
                termasuk pengumpulan, pengolahan, penyimpanan, dan publikasi data.
              </p>
              <Button className="bg-[#174785]">
                <Download className="h-4 w-4 mr-2" />
                Unduh Dokumen
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Kebijakan;
