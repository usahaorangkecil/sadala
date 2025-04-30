
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Lid = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Layanan Informasi Data</h1>
      <p className="text-[#555] mb-8">
        Layanan Informasi Data (LID) Kabupaten Lamongan menyediakan akses permintaan data untuk keperluan penelitian, akademik, 
        jurnalistik, dan keperluan lainnya. Silakan isi formulir di bawah untuk mengajukan permintaan data.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form permintaan data */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Form Permintaan Data</CardTitle>
              <CardDescription>
                Silakan lengkapi formulir berikut untuk mengajukan permintaan data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nama">Nama Pemohon</Label>
                    <Input id="nama" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instansi">Instansi / Organisasi</Label>
                    <Input id="instansi" placeholder="Instansi atau Organisasi" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Alamat email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telepon">No. Telepon</Label>
                    <Input id="telepon" placeholder="Nomor telepon" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jenis-data">Jenis Data yang Dibutuhkan</Label>
                  <Select>
                    <SelectTrigger id="jenis-data">
                      <SelectValue placeholder="Pilih jenis data" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="statistik">Data Statistik</SelectItem>
                      <SelectItem value="kependudukan">Data Kependudukan</SelectItem>
                      <SelectItem value="kesehatan">Data Kesehatan</SelectItem>
                      <SelectItem value="pendidikan">Data Pendidikan</SelectItem>
                      <SelectItem value="ekonomi">Data Ekonomi</SelectItem>
                      <SelectItem value="lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tujuan">Tujuan Penggunaan Data</Label>
                  <Textarea id="tujuan" placeholder="Tuliskan tujuan penggunaan data secara detail" rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deskripsi">Deskripsi Data yang Dibutuhkan</Label>
                  <Textarea id="deskripsi" placeholder="Jelaskan secara rinci data yang Anda butuhkan" rows={5} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="surat">Surat Pengantar (Opsional)</Label>
                  <Input id="surat" type="file" />
                  <p className="text-xs text-[#555]">Format file: PDF, maks 2MB</p>
                </div>

                <Button type="submit" className="bg-[#174785] w-full">Kirim Permintaan</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar informasi */}
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Informasi Layanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Waktu Layanan</h3>
                  <p className="text-sm text-[#555]">Senin - Jumat, 08:00 - 16:00 WIB</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Estimasi Proses</h3>
                  <p className="text-sm text-[#555]">3 - 7 hari kerja</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Kontak</h3>
                  <p className="text-sm text-[#555]">
                    Email: data@lamongan.go.id<br/>
                    Telepon: (0322) 321080
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Apakah semua permintaan data pasti dipenuhi?</h3>
                  <p className="text-sm text-[#555]">
                    Tidak semua permintaan dapat dipenuhi. Permintaan akan diproses sesuai dengan 
                    ketersediaan data dan regulasi yang berlaku.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Apakah layanan ini berbayar?</h3>
                  <p className="text-sm text-[#555]">
                    Tidak, layanan ini diberikan secara gratis sebagai bentuk transparansi dan 
                    pelayanan publik.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Berapa lama proses permintaan data?</h3>
                  <p className="text-sm text-[#555]">
                    Proses permintaan data membutuhkan waktu 3-7 hari kerja tergantung 
                    kompleksitas data yang diminta.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Lid;
