import React from 'react';
import Sidebar from '@/app/components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Area Konten Utama */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar / Header */}
        <header className="h-16 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="w-96">
            <input
              type="text"
              placeholder="Cari booking, pelanggan, rute..."
              className="w-full text-xs px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-600">Admin</span>
          </div>
        </header>

        {/* Halaman Konten Dinamis */}
        <main className="p-8 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}