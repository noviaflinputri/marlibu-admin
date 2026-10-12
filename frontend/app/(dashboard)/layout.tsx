'use client';

import React, { useState } from 'react';
import Sidebar from '../components/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out">
        {/* Header Simpel & Bersih */}
        <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-10 shadow-xs">
          <div className="flex items-center gap-4">
            {/* Tombol Toggle Sidebar */}
            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors"
              title={isSidebarOpen ? 'Sembunyikan sidebar' : 'Tampilkan sidebar'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg">
              Admin Marlibu
            </span>
          </div>
        </header>

        <main className="p-8 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}