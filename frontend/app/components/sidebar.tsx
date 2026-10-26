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
  RefreshCcw,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard className="w-5 h-5 shrink-0" /> },
  { name: 'Booking', href: '/booking', icon: <Ticket className="w-5 h-5 shrink-0" /> },
  { name: 'Pelanggan', href: '/pelanggan', icon: <Users className="w-5 h-5 shrink-0" /> },
  { name: 'Jadwal & Rute', href: '/jadwal', icon: <Calendar className="w-5 h-5 shrink-0" /> },
  { name: 'Transportasi', href: '/transportasi', icon: <Bus className="w-5 h-5 shrink-0" /> },
  { name: 'Pembayaran', href: '/pembayaran', icon: <CreditCard className="w-5 h-5 shrink-0" /> },
  { name: 'Refund', href: '/refund', icon: <RefreshCcw className="w-5 h-5 shrink-0" /> },
  { name: 'Promo', href: '/promo', icon: <Tag className="w-5 h-5 shrink-0" /> },
  { name: 'Laporan', href: '/laporan', icon: <BarChart3 className="w-5 h-5 shrink-0" /> },
  { name: 'Pengaturan', href: '/pengaturan', icon: <Settings className="w-5 h-5 shrink-0" /> },
];

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function Sidebar({ isOpen = true, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const [imgError, setImgError] = useState(false);

  return (
    <aside
      className={`bg-gradient-to-b from-[#0A64BC] to-[#084C8D] text-white h-screen shrink-0 flex flex-col justify-between transition-all duration-300 relative z-40 ${
        isOpen ? 'w-64 p-4' : 'w-20 p-3 items-center'
      }`}
    >
      {/* Tombol Toggle Kotak Gandeng Menempel di Sisi Sidebar */}
      {onToggle && (
        <button
          onClick={onToggle}
          type="button"
          title={isOpen ? 'Tutup Sidebar' : 'Buka Sidebar'}
          className="absolute top-6 -right-3.5 z-50 w-7 h-7 bg-[#0A64BC] text-white border-2 border-white rounded-lg shadow-md flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all cursor-pointer"
        >
          {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      )}

      {/* Area Atas (Logo & Navigasi Scrollable) */}
      <div className="flex flex-col flex-1 min-h-0 w-full relative">
        {/* Header Logo */}
        <div className={`flex items-center mb-3.5 shrink-0 ${isOpen ? 'gap-2.5 px-0.5' : 'justify-center'}`}>
          {!imgError ? (
            <img
              src="/logo.png"
              alt="Marlibu Logo"
              className="w-[52px] h-[52px] shrink-0 object-contain drop-shadow"
              onError={() => setImgError(true)}
            />
          ) : (
            <Compass className="w-11 h-11 shrink-0 text-white" />
          )}

          {isOpen && (
            <div className="flex-1 min-w-0 overflow-hidden">
              <h1 className="font-extrabold text-[14px] tracking-tight text-white whitespace-nowrap leading-none">
                Marlibu Tour & Travel
              </h1>
              <p className="text-[11px] text-blue-200 font-semibold tracking-wider uppercase opacity-90 mt-1.5 whitespace-nowrap">
                Admin Panel
              </p>
            </div>
          )}
        </div>

        {/* GARIS PEMBATAS ATAS (Dibuat Lebih Jelas & Kontras) */}
        <div className="border-b border-white/25 my-2.5 shrink-0 w-full" />

        {/* Menu Navigasi dengan Custom Scrollbar yang Jelas */}
        <div className="relative flex-1 min-h-0 w-full flex flex-col pt-1">
          <nav
            className="space-y-1 w-full flex-1 overflow-y-auto pr-1.5 
                       [&::-webkit-scrollbar]:w-1.5 
                       [&::-webkit-scrollbar-track]:bg-white/10 
                       [&::-webkit-scrollbar-track]:rounded-full 
                       [&::-webkit-scrollbar-thumb]:bg-white/40 
                       [&::-webkit-scrollbar-thumb]:rounded-full 
                       hover:[&::-webkit-scrollbar-thumb]:bg-white/70"
          >
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/dashboard' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  title={!isOpen ? item.name : undefined}
                  className={`flex items-center font-medium rounded-xl transition-all text-xs py-2.5 ${
                    isOpen ? 'gap-3 px-3.5' : 'justify-center px-0'
                  } ${
                    isActive
                      ? 'bg-white text-[#0A64BC] font-semibold shadow-md translate-x-0.5'
                      : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {isOpen && <span className="whitespace-nowrap">{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* GARIS PEMBATAS BAWAH (Dibuat Lebih Jelas & Kontras) */}
      <div className={`pt-3 mt-2 border-t border-white/25 shrink-0 space-y-2 bg-[#084C8D]/40 rounded-xl p-2 ${isOpen ? 'w-full' : 'w-full flex flex-col items-center'}`}>
        <div className={`flex items-center ${isOpen ? 'gap-2.5 px-1' : 'justify-center'}`}>
          <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">
            AD
          </div>
          {isOpen && (
            <div className="text-xs whitespace-nowrap overflow-hidden">
              <p className="font-semibold text-white leading-tight">Admin</p>
              <p className="text-[10px] text-blue-200 truncate">admin@marlibu.com</p>
            </div>
          )}
        </div>

        <Link
          href="/login"
          title={!isOpen ? "Logout" : undefined}
          className={`flex items-center font-medium rounded-lg transition-all text-xs py-1.5 text-blue-100 hover:bg-red-500/80 hover:text-white ${
            isOpen ? 'gap-2 px-2' : 'justify-center px-0'
          }`}
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {isOpen && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
}