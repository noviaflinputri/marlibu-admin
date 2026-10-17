'use client';

import React, { useState } from 'react';

export default function LaporanPage() {
  const [dateRange, setDateRange] = useState('01/10/2025 - 31/10/2025');
  const [routeFilter, setRouteFilter] = useState('Semua Rute');

  // Data ringkasan statistik
  const stats = [
    {
      title: 'Total Booking',
      value: '248',
      change: '+ 12%',
      isPositive: true,
    },
    {
      title: 'Total Pendapatan',
      value: 'Rp 24.800.000',
      change: '+ 15%',
      isPositive: true,
    },
    {
      title: 'Rata-rata Perjalanan',
      value: '3.2 hari',
      change: '+ 0%',
      isPositive: true,
    },
    {
      title: 'Tingkat Kepuasan',
      value: '4.8 /5',
      change: '+ 6%',
      isPositive: true,
    },
  ];

  // Data Grafik Bar Pendapatan
  const revenueData = [
    { date: '6 Okt', height: '35%' },
    { date: '7 Okt', height: '55%' },
    { date: '8 Okt', height: '70%' },
    { date: '9 Okt', height: '70%' },
    { date: '10 Okt', height: '90%' },
    { date: '11 Okt', height: '70%' },
    { date: '12 Okt', height: '85%' },
  ];

  // Data Status Booking (Donut Chart Legend)
  const bookingStatusData = [
    { label: 'Dikonfirmasi', percentage: '62%', color: 'bg-[#0A64BC]' },
    { label: 'Menunggu Konfirmasi', percentage: '18%', color: 'bg-[#FF6B00]' },
    { label: 'Dalam Perjalanan', percentage: '12%', color: 'bg-sky-400' },
    { label: 'Selesai', percentage: '6%', color: 'bg-gray-300' },
    { label: 'Dibatalkan', percentage: '2%', color: 'bg-red-500' },
  ];

  return (
    <div className="p-6 md:p-8 space-y-6 w-full font-sans bg-white min-h-screen">
      
      {/* Header Area & Tombol Ekspor */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0A64BC] tracking-tight">
            Laporan & Statistik
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Pantau performa dan unduh laporan.
          </p>
        </div>

        {/* Tombol Ekspor Laporan */}
        <button
          onClick={() => alert('Mengunduh laporan...')}
          className="flex items-center gap-2 bg-white border border-[#0A64BC] text-[#0A64BC] hover:bg-blue-50 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer self-start sm:self-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Ekspor Laporan</span>
        </button>
      </div>

      {/* Filter Bar (Tanggal & Rute) */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Input Tanggal */}
        <div className="relative">
          <input
            type="text"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-gray-50 text-xs border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A64BC]"
          />
        </div>

        {/* Dropdown Rute */}
        <select
          value={routeFilter}
          onChange={(e) => setRouteFilter(e.target.value)}
          className="bg-gray-50 text-xs border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A64BC]"
        >
          <option>Semua Rute</option>
          <option>Jakarta - Bandung</option>
          <option>Surabaya - Malang</option>
          <option>Yogyakarta - Solo</option>
        </select>

        {/* Tombol Tampilkan */}
        <button className="bg-[#0A64BC] hover:bg-[#08529B] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer">
          Tampilkan
        </button>
      </div>

      {/* 4 Card Stats Ringkasan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <p className="text-xs font-semibold text-gray-400">{item.title}</p>
            <h3 className="text-xl font-extrabold text-gray-800">{item.value}</h3>
            <p className="text-[11px] font-semibold text-emerald-500 flex items-center gap-1">
              <span>↑</span>
              <span>{item.change}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Section Grafik: Pendapatan & Status Booking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card Grafik Pendapatan (2 Kolom) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-sm font-bold text-gray-800">Pendapatan (Rp)</h2>
          
          {/* Visualisasi Bar Chart */}
          <div className="h-48 flex items-end justify-between gap-3 pt-6 border-b border-gray-100 pb-2">
            {revenueData.map((bar, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div
                  style={{ height: bar.height }}
                  className="w-full max-w-[36px] bg-[#0A64BC] rounded-t-lg hover:bg-[#08529B] transition-all cursor-pointer"
                  title={`${bar.date}: ${bar.height}`}
                />
                <span className="text-[10px] font-medium text-gray-400">{bar.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Donut Chart Status Booking (1 Kolom) */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-sm font-bold text-gray-800">Status Booking</h2>

          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-6">
            {/* Simulation Donut Chart */}
            <div className="relative w-36 h-36 rounded-full border-[14px] border-[#0A64BC] border-t-[#FF6B00] border-r-sky-400 border-b-gray-300 flex items-center justify-center shrink-0">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-800">248</p>
                <p className="text-[10px] text-gray-400 font-medium">Total</p>
              </div>
            </div>

            {/* Legend List */}
            <div className="w-full space-y-2 text-xs">
              {bookingStatusData.map((status, idx) => (
                <div key={idx} className="flex items-center justify-between text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${status.color}`} />
                    <span className="text-[11px] text-gray-600">{status.label}</span>
                  </div>
                  <span className="font-bold text-gray-800 text-[11px]">{status.percentage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}