'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'Booking', href: '/booking' },
  { name: 'Pelanggan', href: '/pelanggan' },
  { name: 'Jadwal & Rute', href: '/jadwal' },
  { name: 'Transportasi', href: '/transportasi' },
  { name: 'Laporan', href: '/laporan' },
  { name: 'Pengaturan', href: '/pengaturan' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0A64BC] text-white min-h-screen p-6 flex flex-col justify-between shrink-0">
      <div>
        <div className="flex items-center gap-2 mb-8">
          <div className="font-bold text-xl tracking-wide">TravelEase</div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white font-semibold'
                    : 'text-blue-100 hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-blue-400/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
            AD
          </div>
          <div className="text-xs">
            <p className="font-semibold">Admin</p>
            <p className="text-blue-200 text-[10px]">admin@travelease.com</p>
          </div>
        </div>
        <Link
          href="/login"
          className="flex items-center gap-2 text-xs text-blue-100 hover:text-white transition-colors"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
}