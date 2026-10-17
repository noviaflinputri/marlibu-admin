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
      <body className="bg-gray-50 flex min-h-screen font-sans">
        {isLoginPage ? (
          <main className="w-full">{children}</main>
        ) : (
          <div className="flex w-full min-h-screen relative overflow-x-hidden">
            {/* Sidebar dengan prop isOpen */}
            <Sidebar isOpen={isSidebarOpen} />

            <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
              <header className="bg-white border-b border-gray-100 p-4 flex justify-between items-center px-8">
                {/* Tombol Toggle Buka/Tutup Sidebar */}
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 cursor-pointer transition active:scale-95"
                  title="Buka/Tutup Sidebar"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-xl">
                  Admin Marlibu
                </span>
              </header>
              <main className="p-8 flex-1 overflow-y-auto">{children}</main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}