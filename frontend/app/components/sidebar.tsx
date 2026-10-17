'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Ticket,
  Users,
  Calendar,
  Bus,
  CreditCard,
  Tag,
  BarChart3,
  Settings,
  LogOut,
  Compass,
} from 'lucide-react';

const menuItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="w-4 h-4 shrink-0" />,
  },
  {
    name: 'Booking',
    href: '/booking',
    icon: <Ticket className="w-4 h-4 shrink-0" />,
  },
  {
    name: 'Pelanggan',
    href: '/pelanggan',
    icon: <Users className="w-4 h-4 shrink-0" />,
  },
  {
    name: 'Jadwal & Rute',
    href: '/jadwal',
    icon: <Calendar className="w-4 h-4 shrink-0" />,
  },
  {
    name: 'Transportasi',
    href: '/transportasi',
    icon: <Bus className="w-4 h-4 shrink-0" />,
  },
  {
    name: 'Pembayaran',
    href: '/pembayaran',
    icon: <CreditCard className="w-4 h-4 shrink-0" />,
  },
  {
    name: 'Promo',
    href: '/promo',
    icon: <Tag className="w-4 h-4 shrink-0" />,
  },
  {
    name: 'Laporan',
    href: '/laporan',
    icon: <BarChart3 className="w-4 h-4 shrink-0" />,
  },
  {
    name: 'Pengaturan',
    href: '/pengaturan',
    icon: <Settings className="w-4 h-4 shrink-0" />,
  },
];

interface SidebarProps {
  isOpen?: boolean;
}

export default function Sidebar({ isOpen = true }: SidebarProps) {
  const pathname = usePathname();
  const [imgError, setImgError] = useState(false);

  return (
    <aside
      className={`bg-[#0A64BC] text-white min-h-screen flex flex-col justify-between p-4 shrink-0 transition-all duration-300 ${
        isOpen ? 'w-64 opacity-100' : 'w-0 p-0 overflow-hidden opacity-0'
      }`}
    >
      <div className="space-y-6 w-56">
        {/* Brand Logo & Header Sidebar (Diperbesar w-16 h-16 agar sejajar dari teks atas ke bawah) */}
        <div className="px-2 py-1 flex items-center gap-3">
          {!imgError ? (
            <img
              src="/logo.png"
              alt="Marlibu Logo"
              className="w-16 h-16 shrink-0 object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <Compass className="w-12 h-12 shrink-0 text-white" />
          )}
          <div>
            <h1 className="font-bold text-sm tracking-wide leading-tight">
              Marlibu Tour & Travel
            </h1>
            <p className="text-[10px] text-blue-200 mt-0.5">Admin Panel</p>
          </div>
        </div>

        {/* Menu Navigasi */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/dashboard' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-[#0A64BC] shadow-sm'
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Profil Bottom & Logout */}
      <div className="pt-4 border-t border-blue-400/30 space-y-3 w-56">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
            AD
          </div>
          <div className="text-xs">
            <p className="font-bold text-white leading-none">Admin</p>
            <p className="text-[10px] text-blue-200 mt-0.5">admin@marlibu.com</p>
          </div>
        </div>

        <Link
          href="/login"
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-blue-200 hover:bg-white/10 hover:text-white transition"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}