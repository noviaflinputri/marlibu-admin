'use client';

import React, { useState } from 'react';

// Data Mockup Awal Pelanggan
const initialCustomersData = [
  { id: 1, name: 'Andi Pratama', email: 'andi@email.com', phone: '0812 3456 7890', totalBooking: 5 },
  { id: 2, name: 'Siti Aisyah', email: 'siti@email.com', phone: '0813 5678 9012', totalBooking: 3 },
  { id: 3, name: 'Budi Santoso', email: 'budi@email.com', phone: '0821 2345 6789', totalBooking: 7 },
  { id: 4, name: 'Rina Lestari', email: 'rina@email.com', phone: '0832 9876 5432', totalBooking: 2 },
  { id: 5, name: 'Dewi Anggraini', email: 'dewi@email.com', phone: '0813 1112 1314', totalBooking: 4 },
  { id: 6, name: 'Agus Setiawan', email: 'agus@email.com', phone: '0812 2233 4543', totalBooking: 1 },
  { id: 7, name: 'Putri Kencana', email: 'putri@email.com', phone: '0821 5566 0066', totalBooking: 6 },
  { id: 8, name: 'Fajar Nugroho', email: 'fajar@email.com', phone: '0813 7777 8888', totalBooking: 3 },
];

export default function PelangganPage() {
  const [customers, setCustomers] = useState(initialCustomersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // State Modal Konfirmasi Hapus
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCustomerForDelete, setSelectedCustomerForDelete] = useState<{ id: number; name: string } | null>(null);

  // Handle Pencarian
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  );

  // Buka Modal Hapus
  const openDeleteModal = (id: number, name: string) => {
    setSelectedCustomerForDelete({ id, name });
    setIsDeleteModalOpen(true);
  };

  // Eksekusi Hapus Pelanggan
  const confirmDeleteCustomer = () => {
    if (selectedCustomerForDelete) {
      setCustomers(customers.filter((customer) => customer.id !== selectedCustomerForDelete.id));
      setIsDeleteModalOpen(false);
      setSelectedCustomerForDelete(null);
    }
  };

  return (
    <div className="p-6 md:p-8 space-y-6 w-full font-sans relative">
      
      {/* Search Bar Atas */}
      <div className="relative w-80 md:w-96">
        <input
          type="text"
          placeholder="Cari nama, email, atau nomor telepon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white text-xs pl-10 pr-4 py-2.5 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A64BC] text-gray-700 placeholder:text-gray-400"
        />
        <svg
          className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Header Area Judul Halaman */}
      <div>
        <h1 className="text-2xl font-bold text-[#0A64BC] tracking-tight">Data Pelanggan</h1>
        <p className="text-xs text-gray-500 mt-1">Kelola data pelanggan dan riwayat pemesanan.</p>
      </div>

      {/* Tabel Data Pelanggan */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-gray-200 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="py-4 px-6">NO</th>
                <th className="py-4 px-6">NAMA</th>
                <th className="py-4 px-6">EMAIL</th>
                <th className="py-4 px-6">NO. TELEPON</th>
                <th className="py-4 px-6 text-center">TOTAL BOOKING</th>
                <th className="py-4 px-6 text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-700">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer, index) => (
                  <tr key={customer.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-4 px-6 text-gray-400 font-medium">{index + 1}</td>
                    <td className="py-4 px-6 font-semibold text-gray-800">{customer.name}</td>
                    <td className="py-4 px-6 text-gray-500">{customer.email}</td>
                    <td className="py-4 px-6 text-gray-500">{customer.phone}</td>
                    <td className="py-4 px-6 text-center font-medium">{customer.totalBooking}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-3">
                        {/* Eye / View Icon */}
                        <button className="text-blue-500 hover:text-blue-700 transition-colors cursor-pointer" title="Lihat Detail">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        
                        {/* Hapus Icon (Memanggil Modal Pop-up) */}
                        <button
                          onClick={() => openDeleteModal(customer.id, customer.name)}
                          className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                          title="Hapus Pelanggan"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-400 text-xs">
                    Data pelanggan tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1 mx-auto">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                  currentPage === page
                    ? 'bg-[#0A64BC] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <select className="bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 px-2 py-1 focus:outline-none">
              <option>10 / page</option>
              <option>20 / page</option>
              <option>50 / page</option>
            </select>
          </div>
        </div>
      </div>

      {/* MODAL POP-UP KONFIRMASI HAPUS PELANGGAN */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6 text-center space-y-5 animate-in fade-in zoom-in duration-200">
            {/* Icon Warning Red */}
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>

            {/* Content Text */}
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-gray-800">Hapus Data Pelanggan?</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Apakah Anda yakin ingin menghapus data pelanggan{' '}
                <span className="font-semibold text-gray-800">
                  "{selectedCustomerForDelete?.name}"
                </span>
                ? Tindakan ini tidak dapat dibatalkan.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
                className="w-1/2 py-2.5 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={confirmDeleteCustomer}
                className="w-1/2 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}