'use client';

import React, { useState } from 'react';

interface FleetItem {
  id: number;
  platNomor: string;
  jenis: string;
  kapasitas: number;
  status: 'Tersedia' | 'Dalam Perjalanan' | 'Perawatan';
}

const initialFleet: FleetItem[] = [
  { id: 1, platNomor: 'B 1234 KZ', jenis: 'Toyota Hiace', kapasitas: 14, status: 'Tersedia' },
  { id: 2, platNomor: 'B 5678 LP', jenis: 'Innova Reborn', kapasitas: 7, status: 'Tersedia' },
  { id: 3, platNomor: 'B 9012 MN', jenis: 'Avanza Veloz', kapasitas: 6, status: 'Dalam Perjalanan' },
  { id: 4, platNomor: 'B 3456 SW', jenis: 'Elf Long', kapasitas: 19, status: 'Tersedia' },
  { id: 5, platNomor: 'B 7890 RT', jenis: 'Toyota Alphard', kapasitas: 6, status: 'Perawatan' },
  { id: 6, platNomor: 'B 2468 TY', jenis: 'Innova Zenix', kapasitas: 7, status: 'Tersedia' },
];

export default function FleetPage() {
  const [fleetList, setFleetList] = useState<FleetItem[]>(initialFleet);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    platNomor: '',
    jenis: 'Toyota Hiace',
    kapasitas: 14,
    status: 'Tersedia' as 'Tersedia' | 'Dalam Perjalanan' | 'Perawatan',
  });

  const handleAddFleet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.platNomor) return;

    const newFleet: FleetItem = {
      id: Date.now(),
      ...formData,
    };

    setFleetList([newFleet, ...fleetList]);
    setIsModalOpen(false);
    setFormData({ platNomor: '', jenis: 'Toyota Hiace', kapasitas: 14, status: 'Tersedia' });
  };

  const getStatusBadge = (status: FleetItem['status']) => {
    switch (status) {
      case 'Tersedia':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'Dalam Perjalanan':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'Perawatan':
        return 'bg-amber-50 text-amber-600 border-amber-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Data Armada & Transportasi</h1>
          <p className="text-xs text-gray-500 mt-1">Kelola unit mobil kendaraan dan status operasional armada.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-[#0A64BC] text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition shadow-xs"
        >
          + Tambah Armada
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-100">
              <tr>
                <th className="p-4">No</th>
                <th className="p-4">Plat Nomor</th>
                <th className="p-4">Unit Mobil</th>
                <th className="p-4">Kapasitas</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {fleetList.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition">
                  <td className="p-4 font-medium">{index + 1}</td>
                  <td className="p-4 font-semibold text-gray-800">{item.platNomor}</td>
                  <td className="p-4 font-medium text-gray-800">{item.jenis}</td>
                  <td className="p-4">{item.kapasitas} Penumpang</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${getStatusBadge(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => setFleetList(fleetList.filter((f) => f.id !== item.id))}
                      className="text-red-500 hover:text-red-700 text-xs font-medium"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah Armada */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-100 space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Tambah Armada Baru</h3>
            <form onSubmit={handleAddFleet} className="space-y-3 text-xs">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Plat Nomor</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: B 1234 ABC"
                  value={formData.platNomor}
                  onChange={(e) => setFormData({ ...formData, platNomor: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Unit Mobil</label>
                  <select
                    value={formData.jenis}
                    onChange={(e) => setFormData({ ...formData, jenis: e.target.value })}
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
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Kapasitas</label>
                  <input
                    type="number"
                    required
                    value={formData.kapasitas}
                    onChange={(e) => setFormData({ ...formData, kapasitas: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Status Awal</label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as 'Tersedia' | 'Dalam Perjalanan' | 'Perawatan',
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Tersedia">Tersedia</option>
                  <option value="Dalam Perjalanan">Dalam Perjalanan</option>
                  <option value="Perawatan">Perawatan</option>
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
                  Simpan Armada
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}