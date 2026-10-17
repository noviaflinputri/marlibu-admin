'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import Sidebar from './components/sidebar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  // State untuk kontrol Buka / Tutup Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <html lang="id">
      <body className="bg-gray-50 flex min-h-screen font-sans">
        {isLoginPage ? (
          <main className="w-full">{children}</main>
        ) : (
          <div className="flex w-full min-h-screen relative overflow-x-hidden">
            {/* Sidebar dengan prop isOpen */}
            <Sidebar isOpen={isSidebarOpen} />

            <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
              {/* Header Topbar: Padding dikurangi (px-3 md:px-5) agar tombol toggle mepet ke kiri */}
              <header className="bg-white border-b border-gray-100 py-3 px-3 md:px-5 flex justify-between items-center">
                {/* Tombol Toggle Murni Ikon (Tanpa Border/Card, Bebas Shadow) */}
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-1 text-gray-600 hover:text-[#0A64BC] hover:bg-gray-100/60 rounded-lg cursor-pointer transition active:scale-95"
                  title={isSidebarOpen ? 'Sembunyikan Sidebar' : 'Tampilkan Sidebar'}
                >
                  {isSidebarOpen ? (
                    <PanelLeftClose className="w-5 h-5" />
                  ) : (
                    <PanelLeftOpen className="w-5 h-5" />
                  )}
                </button>

                {/* Badge Status Admin (Kanan) */}
                <span className="text-xs font-semibold text-white bg-[#0A64BC] px-3.5 py-1.5 rounded-full shadow-2xs">
                  Admin Marlibu
                </span>
              </header>

              <main className="p-6 md:p-8 flex-1 overflow-y-auto">{children}</main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}