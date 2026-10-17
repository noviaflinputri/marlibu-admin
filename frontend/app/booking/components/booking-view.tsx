'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface BookingItem {
  no: number;
  kode: string;
  nama: string;
  rute: string;
  tanggal: string;
  status: 'Dikonfirmasi' | 'Menunggu' | 'Dalam Perjalanan' | 'Selesai' | 'Dibatalkan';
}

const initialBookings: BookingItem[] = [
  { no: 1, kode: 'TRV001234', nama: 'Andi Pratama', rute: 'Malang - Surabaya', tanggal: '13 Okt 2026', status: 'Dikonfirmasi' },
  { no: 2, kode: 'TRV001233', nama: 'Siti Aisyah', rute: 'Jakarta - Bandung', tanggal: '14 Okt 2026', status: 'Menunggu' },
  { no: 3, kode: 'TRV001232', nama: 'Budi Santoso', rute: 'Yogyakarta - Jakarta', tanggal: '14 Okt 2026', status: 'Dalam Perjalanan' },
  { no: 4, kode: 'TRV001231', nama: 'Rina Lestari', rute: 'Surabaya - Bali', tanggal: '15 Okt 2026', status: 'Dikonfirmasi' },
  { no: 5, kode: 'TRV001230', nama: 'Dewi Anggraini', rute: 'Bandung - Malang', tanggal: '16 Okt 2026', status: 'Selesai' },
];

export default function BookingView() {
  const [bookings] = useState<BookingItem[]>(initialBookings);

  const getStatusBadge = (status: BookingItem['status']) => {
    switch (status) {
      case 'Dikonfirmasi':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Menunggu':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Dalam Perjalanan':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Selesai':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'Dibatalkan':
        return 'bg-red-100 text-red-700 border-red-200';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Data Booking</h1>
          <p className="text-xs text-gray-500 mt-1">
            Kelola dan pantau semua pesanan travel.
          </p>
        </div>
        <button className="px-4 py-2.5 bg-[#F97316] hover:bg-[#ea6407] text-white font-semibold text-xs rounded-xl shadow-xs transition cursor-pointer">
          + Booking Baru
        </button>
      </div>

      {/* Filter Options */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-2.5 items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="01/10/2026 - 31/10/2026"
            className="text-xs px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none text-gray-700"
            readOnly
          />
          <select className="text-xs px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none text-gray-700">
            <option>Semua Rute</option>
            <option>Malang - Surabaya</option>
            <option>Jakarta - Bandung</option>
          </select>
          <select className="text-xs px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none text-gray-700">
            <option>Semua Status</option>
            <option>Dikonfirmasi</option>
            <option>Menunggu</option>
            <option>Dalam Perjalanan</option>
            <option>Selesai</option>
          </select>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Cari kode booking, nama..."
            className="text-xs px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none w-full sm:w-64 text-gray-700"
          />
          <button className="px-4 py-2 bg-[#0A64BC] text-white font-semibold text-xs rounded-xl hover:bg-[#08529B] transition">
            Cari
          </button>
        </div>
      </div>

      {/* Tabel */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-400 font-semibold border-b border-gray-100">
              <tr>
                <th className="py-3.5 px-4 text-center w-12">No</th>
                <th className="py-3.5 px-4">Kode Booking</th>
                <th className="py-3.5 px-4">Nama Pelanggan</th>
                <th className="py-3.5 px-4">Rute</th>
                <th className="py-3.5 px-4">Tanggal Berangkat</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4 text-center w-24">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {bookings.map((item) => (
                <tr key={item.kode} className="hover:bg-gray-50/60 transition">
                  <td className="py-3.5 px-4 text-center text-gray-400 font-medium">{item.no}</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">{item.kode}</td>
                  <td className="py-3.5 px-4 font-semibold text-gray-800">{item.nama}</td>
                  <td className="py-3.5 px-4">{item.rute}</td>
                  <td className="py-3.5 px-4 text-gray-500">{item.tanggal}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${getStatusBadge(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <Link
                      href={`/booking/${item.kode}`}
                      className="p-1.5 text-gray-400 hover:text-[#0A64BC] hover:bg-blue-50 rounded-lg transition inline-block"
                      title="Lihat Detail"
                    >
                      👁️
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}