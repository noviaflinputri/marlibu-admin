'use client';

import React, { useState } from 'react';

interface ScheduleItem {
  id: number;
  rute: string;
  tanggal: string;
  waktu: string;
  harga: string;
  kendaraan: string;
}

const initialSchedules: ScheduleItem[] = [
  { id: 1, rute: 'Jakarta - Bandung', tanggal: '2026-10-13', waktu: '08:00', harga: 'Rp 130.000', kendaraan: 'Toyota Hiace' },
  { id: 2, rute: 'Surabaya - Malang', tanggal: '2026-10-13', waktu: '08:00', harga: 'Rp 100.000', kendaraan: 'Innova Reborn' },
  { id: 3, rute: 'Yogyakarta - Jakarta', tanggal: '2026-10-14', waktu: '07:30', harga: 'Rp 180.000', kendaraan: 'Elf Long' },
  { id: 4, rute: 'Bandung - Surabaya', tanggal: '2026-10-14', waktu: '09:00', harga: 'Rp 220.000', kendaraan: 'Innova Zenix' },
  { id: 5, rute: 'Bali - Denpasar', tanggal: '2026-10-15', waktu: '10:00', harga: 'Rp 200.000', kendaraan: 'Avanza Veloz' },
  { id: 6, rute: 'Malang - Surabaya', tanggal: '2026-10-15', waktu: '12:00', harga: 'Rp 120.000', kendaraan: 'Toyota Hiace' },
];

export default function SchedulePage() {
  const [schedules, setSchedules] = useState<ScheduleItem[]>(initialSchedules);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    rute: '',
    tanggal: '',
    waktu: '',
    harga: '',
    kendaraan: 'Toyota Hiace',
  });

  const filteredSchedules = schedules.filter(
    (item) =>
      item.rute.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.kendaraan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rute || !formData.tanggal || !formData.waktu || !formData.harga) return;

    const newSchedule: ScheduleItem = {
      id: Date.now(),
      ...formData,
    };

    setSchedules([newSchedule, ...schedules]);
    setIsModalOpen(false);
    setFormData({ rute: '', tanggal: '', waktu: '', harga: '', kendaraan: 'Toyota Hiace' });
  };

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus jadwal ini?')) {
      setSchedules(schedules.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Filter Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Jadwal Keberangkatan & Rute</h1>
          <p className="text-xs text-gray-500 mt-1">Kelola jadwal perjalanan dan penentuan unit armada.</p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Cari rute atau armada..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-[#0A64BC] text-gray-700 shadow-xs"
            />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-[#0A64BC] text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition shrink-0 shadow-xs"
          >
            + Tambah Jadwal
          </button>
        </div>
      </div>

      {/* Tabel Data Jadwal */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-100">
              <tr>
                <th className="p-4">No</th>
                <th className="p-4">Rute</th>
                <th className="p-4">Tanggal Keberangkatan</th>
                <th className="p-4">Waktu</th>
                <th className="p-4">Harga</th>
                <th className="p-4">Kendaraan</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition">
                    <td className="p-4 font-medium">{index + 1}</td>
                    <td className="p-4 font-semibold text-gray-800">{item.rute}</td>
                    <td className="p-4">{item.tanggal}</td>
                    <td className="p-4">{item.waktu}</td>
                    <td className="p-4 font-medium text-emerald-600">{item.harga}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                        {item.kendaraan}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-700 text-xs font-medium"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-gray-400">
                    Data rute atau jadwal tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah Jadwal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-100 space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Tambah Jadwal Baru</h3>
            <form onSubmit={handleAddSchedule} className="space-y-3 text-xs">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Rute Perjalanan</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Jakarta - Bandung"
                  value={formData.rute}
                  onChange={(e) => setFormData({ ...formData, rute: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Tanggal</label>
                  <input
                    type="date"
                    required
                    value={formData.tanggal}
                    onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Waktu</label>
                  <input
                    type="time"
                    required
                    value={formData.waktu}
                    onChange={(e) => setFormData({ ...formData, waktu: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Harga Tiket</label>
                <input
                  type="text"
                  required
                  placeholder="Rp 150.000"
                  value={formData.harga}
                  onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Unit Kendaraan</label>
                <select
                  value={formData.kendaraan}
                  onChange={(e) => setFormData({ ...formData, kendaraan: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Toyota Hiace">Toyota Hiace</option>
                  <option value="Innova Reborn">Innova Reborn</option>
                  <option value="Innova Zenix">Innova Zenix</option>
                  <option value="Avanza Veloz">Avanza Veloz</option>
                  <option value="Avanza">Avanza</option>
                  <option value="Elf Long">Elf Long</option>
                  <option value="Toyota Alphard">Toyota Alphard</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0A64BC] text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Simpan Jadwal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}