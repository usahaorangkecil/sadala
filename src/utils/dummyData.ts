
export const recentDatasets = [
  { id: 1, title: "Data Kesehatan Masyarakat 2024", opd: "Dinas Kesehatan", year: "2024", category: "Kesehatan" },
  { id: 2, title: "Statistik Pendidikan Dasar", opd: "Dinas Pendidikan", year: "2024", category: "Pendidikan" },
  { id: 3, title: "Data UMKM Aktif", opd: "Dinas Koperasi", year: "2024", category: "Ekonomi" },
  { id: 4, title: "Infrastruktur Jalan Raya", opd: "Dinas PU", year: "2024", category: "Infrastruktur" },
  { id: 5, title: "Data Kependudukan", opd: "Disdukcapil", year: "2024", category: "Kependudukan" },
  { id: 6, title: "Anggaran Daerah", opd: "BPKAD", year: "2024", category: "Keuangan" }
];

export const strategicTopics = [
  { id: 1, title: "Stunting", color: "#28a745", icon: "Activity" },
  { id: 2, title: "Kemiskinan", color: "#dc3545", icon: "TrendingDown" },
  { id: 3, title: "Pendidikan", color: "#4FC9DA", icon: "GraduationCap" },
  { id: 4, title: "Kesehatan", color: "#fd7e14", icon: "Heart" }
];

export const recentDataRequests = [
  { id: 1, title: "Data Penerima Bantuan Sosial", opd: "Dinsos", date: "2024-04-20", status: "Selesai" },
  { id: 2, title: "Statistik Sekolah Dasar", opd: "Dinas Pendidikan", date: "2024-04-19", status: "Diproses" },
  { id: 3, title: "Data Pelaku UMKM", opd: "Dinas Koperasi", date: "2024-04-18", status: "Selesai" },
  { id: 4, title: "Data Posyandu Aktif", opd: "Dinas Kesehatan", date: "2024-04-17", status: "Menunggu" },
  { id: 5, title: "Anggaran Pembangunan", opd: "BAPPEDA", date: "2024-04-16", status: "Selesai" }
];

export const statisticData = {
  monthlyDatasets: [
    { month: 'Jan', count: 45 },
    { month: 'Feb', count: 52 },
    { month: 'Mar', count: 49 },
    { month: 'Apr', count: 63 },
    { month: 'May', count: 55 },
    { month: 'Jun', count: 58 },
    { month: 'Jul', count: 65 },
    { month: 'Aug', count: 71 },
    { month: 'Sep', count: 68 },
    { month: 'Oct', count: 75 },
    { month: 'Nov', count: 82 },
    { month: 'Dec', count: 89 }
  ],
  dataByCategory: [
    { name: 'Kesehatan', value: 235, color: '#4FC9DA' },
    { name: 'Pendidikan', value: 187, color: '#FD7E14' },
    { name: 'Ekonomi', value: 156, color: '#28A745' },
    { name: 'Infrastruktur', value: 142, color: '#DC3545' },
    { name: 'Sosial', value: 123, color: '#6F42C1' }
  ],
  dataByStatus: [
    { name: 'Terverifikasi', value: 456, color: '#4FC9DA' },
    { name: 'Menunggu', value: 234, color: '#FFA500' },
    { name: 'Ditolak', value: 87, color: '#DC3545' }
  ]
};

export const mapData = {
  center: [-122.4194, 37.7749],
  zoom: 12,
  markers: [
    { id: 1, lat: -122.4194, lng: 37.7749, title: 'Kecamatan A' },
    { id: 2, lat: -122.4124, lng: 37.7824, title: 'Kecamatan B' },
    { id: 3, lat: -122.4284, lng: 37.7829, title: 'Kecamatan C' }
  ]
};

export const publikasiTerbaru = [
  {
    id: 1,
    title: 'Statistik Daerah 2024',
    type: 'Laporan',
    category: 'Statistik',
    date: '2024-04-01',
    description: 'Laporan statistik daerah terbaru mencakup berbagai aspek pembangunan.',
    downloadUrl: '#'
  },
  {
    id: 2,
    title: 'Infografis Ekonomi Q1 2024',
    type: 'Infografis',
    category: 'Ekonomi',
    date: '2024-03-15',
    description: 'Visualisasi data ekonomi daerah pada kuartal pertama 2024.',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'Profil Kesehatan 2024',
    type: 'Laporan',
    category: 'Kesehatan',
    date: '2024-03-01',
    description: 'Data komprehensif mengenai status kesehatan masyarakat.',
    downloadUrl: '#'
  }
];

export const kebijakanTerbaru = [
  {
    id: 1,
    nomor: 'Perda No. 4 Tahun 2024',
    title: 'Perda Satu Data Indonesia',
    category: 'Perda',
    date: '2024-01-15',
    status: 'Berlaku',
    description: 'Peraturan daerah tentang implementasi satu data Indonesia di tingkat daerah.'
  },
  {
    id: 2,
    nomor: 'Perbup No. 12 Tahun 2024',
    title: 'Perbup Tata Kelola Data',
    category: 'Perbup',
    date: '2024-02-01',
    status: 'Berlaku',
    description: 'Peraturan bupati tentang tata kelola data di lingkungan pemerintah daerah.'
  }
];

export const lidStats = {
  totalRequests: 1245,
  completedRequests: 987,
  pendingRequests: 234,
  rejectedRequests: 24,
  monthlySummary: [
    { month: 'Jan', completed: 82, pending: 23, rejected: 2 },
    { month: 'Feb', completed: 91, pending: 19, rejected: 3 },
    { month: 'Mar', completed: 87, pending: 25, rejected: 1 },
    { month: 'Apr', completed: 95, pending: 21, rejected: 4 }
  ]
};

export const beranda = {
  stats: {
    totalDatasets: 1234,
    verifiedDatasets: 987,
    totalPublikasi: 156,
    totalRequests: 342
  },
  featuredDatasets: [
    {
      id: 1,
      title: 'Data Kesehatan 2024',
      opd: 'Dinas Kesehatan',
      category: 'Kesehatan',
      downloads: 234
    },
    {
      id: 2,
      title: 'Statistik Pendidikan',
      opd: 'Dinas Pendidikan',
      category: 'Pendidikan',
      downloads: 187
    }
  ],
  recentActivities: [
    {
      id: 1,
      type: 'DATASET_ADDED',
      title: 'Dataset Baru: Statistik Kesehatan 2024',
      date: '2024-04-23',
      opd: 'Dinas Kesehatan'
    },
    {
      id: 2,
      type: 'PUBLICATION_ADDED',
      title: 'Publikasi: Infografis Ekonomi Q1',
      date: '2024-04-22',
      opd: 'Bappeda'
    }
  ]
};

// Add the missing opdList export
export const opdList = [
  { id: 1, name: "Dinas Kesehatan", datasets: 78, color: "#4FC9DA" },
  { id: 2, name: "Dinas Pendidikan", datasets: 64, color: "#FD7E14" },
  { id: 3, name: "Dinas Koperasi", datasets: 52, color: "#28A745" },
  { id: 4, name: "Dinas PU", datasets: 47, color: "#DC3545" },
  { id: 5, name: "Disdukcapil", datasets: 42, color: "#6F42C1" },
  { id: 6, name: "BPKAD", datasets: 38, color: "#20C997" },
  { id: 7, name: "Dinas Lingkungan Hidup", datasets: 35, color: "#FFC107" },
  { id: 8, name: "Dinas Pertanian", datasets: 32, color: "#17A2B8" },
  { id: 9, name: "Dinas Sosial", datasets: 29, color: "#6C757D" },
  { id: 10, name: "BAPPEDA", datasets: 26, color: "#343A40" },
  { id: 11, name: "Dinas Perikanan", datasets: 23, color: "#007BFF" },
  { id: 12, name: "Dinas Perhubungan", datasets: 21, color: "#9C27B0" }
];

// Add the missing wilayahData export
export const wilayahData = {
  regions: [
    { name: "Lamongan Utara", datasets: 145, color: "#4FC9DA" },
    { name: "Lamongan Selatan", datasets: 120, color: "#FD7E14" },
    { name: "Lamongan Timur", datasets: 95, color: "#28A745" },
    { name: "Lamongan Barat", datasets: 110, color: "#DC3545" }
  ],
  yearlyData: [
    {
      year: "2020",
      north: 85,
      south: 65,
      east: 55,
      west: 70
    },
    {
      year: "2021",
      north: 100,
      south: 80,
      east: 65,
      west: 85
    },
    {
      year: "2022",
      north: 115,
      south: 95,
      east: 75,
      west: 95
    },
    {
      year: "2023",
      north: 130,
      south: 105,
      east: 85,
      west: 100
    },
    {
      year: "2024",
      north: 145,
      south: 120,
      east: 95,
      west: 110
    }
  ],
  kecamatan: [
    { id: 1, name: "Sukodadi", datasets: 24 },
    { id: 2, name: "Paciran", datasets: 18 },
    { id: 3, name: "Babat", datasets: 22 },
    { id: 4, name: "Brondong", datasets: 15 },
    { id: 5, name: "Lamongan", datasets: 25 },
    { id: 6, name: "Sugio", datasets: 14 },
    { id: 7, name: "Kedungpring", datasets: 13 },
    { id: 8, name: "Mantup", datasets: 12 },
    { id: 9, name: "Modo", datasets: 10 }
  ]
};
