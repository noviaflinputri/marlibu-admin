'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
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
      <body className="bg-gray-50 flex h-screen w-screen overflow-hidden font-sans">
        {isLoginPage ? (
          <main className="w-full h-full overflow-y-auto">{children}</main>
        ) : (
          <div className="flex w-full h-full overflow-hidden">
            {/* Sidebar dengan Tombol Toggle Gandeng */}
            <Sidebar 
              isOpen={isSidebarOpen} 
              onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
            />

            {/* Area Utama */}
            <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
              {/* Header Topbar */}
              <header className="bg-white border-b border-gray-100 py-3 px-6 flex justify-end items-center shrink-0 z-10">
                {/* Badge Status Admin */}
                <span className="text-xs font-semibold text-white bg-[#0A64BC] px-3.5 py-1.5 rounded-full shadow-2xs">
                  Admin Marlibu
                </span>
              </header>

              {/* Konten Utama */}
              <main className="p-6 md:p-8 flex-1 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}