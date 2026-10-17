'use client';

import React from 'react';

export default function DashboardView() {
  const recentBookings = [
    { code: 'TRV-001234', name: 'Andi Pratama', route: 'Malang - Surabaya', date: '15 Okt 2025', status: 'Dikonfirmasi', color: 'bg-emerald-100 text-emerald-700' },
    { code: 'TRV-001233', name: 'Siti Aisyah', route: 'Jakarta - Bandung', date: '15 Okt 2025', status: 'Menunggu', color: 'bg-amber-100 text-amber-700' },
    { code: 'TRV-001232', name: 'Budi Santoso', route: 'Yogyakarta - Jakarta', date: '14 Okt 2025', status: 'Dalam Perjalanan', color: 'bg-sky-100 text-sky-700' },
    { code: 'TRV-001231', name: 'Rina Lestari', route: 'Surabaya - Bali', date: '14 Okt 2025', status: 'Dikonfirmasi', color: 'bg-emerald-100 text-emerald-700' },
  ];

  const popularRoutes = [
    { rank: 1, route: 'Jakarta - Bandung', count: 48 },
    { rank: 2, route: 'Surabaya - Malang', count: 42 },
    { rank: 3, route: 'Yogyakarta - Jakarta', count: 36 },
    { rank: 4, route: 'Bandung - Surabaya', count: 28 },
    { rank: 5, route: 'Bali - Denpasar', count: 24 },
  ];

  return (
    <div className="p-6 md:p-8 space-y-6 w-full font-sans bg-white min-h-screen">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold text-[#0A64BC] tracking-tight">
            Selamat datang, Admin!
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Berikut ringkasan aktivitas dan data terbaru di TravelEase.
          </p>
        </div>
        <span className="text-xs text-gray-400 font-medium">Sen, 13 Okt 2025</span>
      </div>

      {/* 4 Cards Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0A64BC] text-white p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <span className="text-xs text-blue-100 font-medium">Total Booking</span>
          <div className="mt-3">
            <h2 className="text-3xl font-extrabold">248</h2>
            <p className="text-[11px] text-blue-200 mt-1">
              <span className="text-emerald-300 font-bold">↑ 12%</span> dari bulan lalu
            </p>
          </div>
        </div>

        <div className="bg-[#FF6B00] text-white p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <span className="text-xs text-orange-100 font-medium">Pelanggan Baru</span>
          <div className="mt-3">
            <h2 className="text-3xl font-extrabold">56</h2>
            <p className="text-[11px] text-orange-200 mt-1">
              <span className="text-emerald-200 font-bold">↑ 20%</span> dari bulan lalu
            </p>
          </div>
        </div>

        <div className="bg-[#30475E] text-white p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <span className="text-xs text-gray-300 font-medium">Total Pendapatan</span>
          <div className="mt-3">
            <h2 className="text-2xl font-extrabold">Rp 24.800.000</h2>
            <p className="text-[11px] text-gray-300 mt-1">
              <span className="text-emerald-400 font-bold">↑ 15%</span> dari bulan lalu
            </p>
          </div>
        </div>

        <div className="bg-white text-gray-800 p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <span className="text-xs text-gray-500 font-medium">Keberangkatan Hari Ini</span>
          <div className="mt-3">
            <h2 className="text-3xl font-extrabold text-[#0A64BC]">12</h2>
            <p className="text-[11px] text-gray-500 mt-1">
              <span className="text-emerald-600 font-bold">↑ 2%</span> dari kemarin
            </p>
          </div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-800">Tren Booking (7 Hari Terakhir)</h3>
          <div className="h-44 w-full flex flex-col justify-between pt-4">
            <div className="relative w-full h-32 flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 100">
                <path
                  d="M 10 70 L 90 60 L 170 40 L 250 50 L 330 30 L 410 45 L 490 20"
                  fill="none"
                  stroke="#0A64BC"
                  strokeWidth="2.5"
                />
                <circle cx="10" cy="70" r="4" fill="#0A64BC" />
                <circle cx="90" cy="60" r="4" fill="#0A64BC" />
                <circle cx="170" cy="40" r="4" fill="#0A64BC" />
                <circle cx="250" cy="50" r="4" fill="#0A64BC" />
                <circle cx="330" cy="30" r="4" fill="#0A64BC" />
                <circle cx="410" cy="45" r="4" fill="#0A64BC" />
                <circle cx="490" cy="20" r="4" fill="#0A64BC" />
              </svg>
            </div>
            <div className="flex justify-between text-[11px] text-gray-400 border-t border-gray-100 pt-2">
              <span>6 Okt</span>
              <span>7 Okt</span>
              <span>8 Okt</span>
              <span>9 Okt</span>
              <span>10 Okt</span>
              <span>11 Okt</span>
              <span>12 Okt</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-800">Status Booking</h3>
          <div className="flex items-center gap-4">
            <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-emerald-500" strokeWidth="4" strokeDasharray="62, 100" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-[#FF6B00]" strokeWidth="4" strokeDasharray="18, 100" strokeDashoffset="-62" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-sky-500" strokeWidth="4" strokeDasharray="12, 100" strokeDashoffset="-80" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute text-center">
                <span className="text-base font-bold text-gray-800 block leading-tight">248</span>
                <span className="text-[10px] text-gray-400">Total</span>
              </div>
            </div>

            <div className="space-y-1 text-[11px] flex-1">
              <div className="flex justify-between items-center"><span className="flex items-center gap-1.5 text-gray-600"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Dikonfirmasi</span><span className="font-semibold text-gray-800">62%</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-1.5 text-gray-600"><span className="w-2 h-2 rounded-full bg-[#FF6B00]"></span> Menunggu</span><span className="font-semibold text-gray-800">18%</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-1.5 text-gray-600"><span className="w-2 h-2 rounded-full bg-sky-500"></span> Dalam Perjalanan</span><span className="font-semibold text-gray-800">12%</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-1.5 text-gray-600"><span className="w-2 h-2 rounded-full bg-gray-300"></span> Selesai</span><span className="font-semibold text-gray-800">6%</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-1.5 text-gray-600"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Dibatalkan</span><span className="font-semibold text-gray-800">2%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-800">Booking Terbaru</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 font-medium">
                  <th className="pb-3 font-medium">Kode Booking</th>
                  <th className="pb-3 font-medium">Nama Pelanggan</th>
                  <th className="pb-3 font-medium">Rute</th>
                  <th className="pb-3 font-medium">Tanggal Berangkat</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-700">
                {recentBookings.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="py-3 font-semibold text-gray-800">{item.code}</td>
                    <td className="py-3">{item.name}</td>
                    <td className="py-3">{item.route}</td>
                    <td className="py-3 text-gray-500">{item.date}</td>
                    <td className="py-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${item.color}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-800">Rute Populer</h3>
          <div className="space-y-3">
            {popularRoutes.map((route) => (
              <div key={route.rank} className="flex items-center justify-between text-xs py-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-400 w-4">{route.rank}.</span>
                  <span className="font-medium text-gray-700">{route.route}</span>
                </div>
                <span className="text-gray-400 font-medium">{route.count} booking</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}