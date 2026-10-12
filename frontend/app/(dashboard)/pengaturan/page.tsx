'use client';

import React, { useState } from 'react';

export default function SettingsPage() {
  const [adminProfile, setAdminProfile] = useState({
    name: 'Admin Marlibu',
    email: 'admin@marlibu.com',
    phone: '081234567890',
    role: 'Administrator Utama',
  });

  const [isGoogleConnected, setIsGoogleConnected] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Konfirmasi kata sandi baru tidak cocok!');
      return;
    }
    setPasswordSaved(true);
    setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  // Fungsi Putuskan / Hubungkan kembali Akun Google
  const handleGoogleToggle = () => {
    if (isGoogleConnected) {
      if (confirm('Yakin ingin memutuskan tautan akun Google admin@marlibu.com?')) {
        setIsGoogleConnected(false);
      }
    } else {
      setIsConnecting(true);
      // Simulasi proses autentikasi OAuth Google
      setTimeout(() => {
        setIsGoogleConnected(true);
        setIsConnecting(false);
        alert('Berhasil menghubungkan kembali ke akun Google admin@marlibu.com!');
      }, 1000);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header Halaman */}
      <div>
        <h1 className="text-xl font-bold text-gray-800">Pengaturan Akun & Sistem</h1>
        <p className="text-xs text-gray-500 mt-1">
          Kelola profil pengelola, tautan integrasi Google SSO, dan keamanan kata sandi admin Marlibu Tour & Travel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Kolom Kiri: Profil Admin */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h2 className="text-sm font-bold text-gray-800">Profil Admin</h2>
            {profileSaved && (
              <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                ✓ Profil tersimpan
              </span>
            )}
          </div>

          <form onSubmit={handleProfileSubmit} className="space-y-3.5 text-xs">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Nama Lengkap</label>
              <input
                type="text"
                required
                value={adminProfile.name}
                onChange={(e) => setAdminProfile({ ...adminProfile, name: e.target.value })}
                className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-[#0A64BC] text-gray-700 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Alamat Email</label>
              <input
                type="email"
                required
                value={adminProfile.email}
                onChange={(e) => setAdminProfile({ ...adminProfile, email: e.target.value })}
                className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-[#0A64BC] text-gray-700 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">No. WhatsApp / Telepon</label>
              <input
                type="text"
                required
                value={adminProfile.phone}
                onChange={(e) => setAdminProfile({ ...adminProfile, phone: e.target.value })}
                className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-[#0A64BC] text-gray-700 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Peran Akses</label>
              <input
                type="text"
                disabled
                value={adminProfile.role}
                className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed font-medium"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-[#0A64BC] text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-xs"
              >
                Simpan Perubahan Profil
              </button>
            </div>
          </form>
        </div>

        {/* Kolom Kanan: Integrasi Google & Keamanan Sandi */}
        <div className="space-y-6">
          {/* Kartu Integrasi Google SSO */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h2 className="text-sm font-bold text-gray-800">Integrasi Akun Google</h2>
              <span
                className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                  isGoogleConnected
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-gray-100 text-gray-500 border-gray-200'
                }`}
              >
                {isGoogleConnected ? '● Terhubung' : '○ Belum Terhubung'}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 p-3.5 bg-gray-50/80 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                {/* Logo Google SVG */}
                <div className="w-9 h-9 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Google Single Sign-On</p>
                  <p className="text-[11px] text-gray-500">
                    {isGoogleConnected ? 'admin@marlibu.com' : 'Tautkan akun Google untuk login cepat'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleToggle}
                disabled={isConnecting}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition shrink-0 ${
                  isGoogleConnected
                    ? 'border border-red-200 text-red-600 hover:bg-red-50'
                    : 'bg-[#0A64BC] text-white hover:bg-blue-700 shadow-xs'
                }`}
              >
                {isConnecting
                  ? 'Menghubungkan...'
                  : isGoogleConnected
                  ? 'Putuskan'
                  : 'Hubungkan Akun'}
              </button>
            </div>
            <p className="text-[11px] text-gray-400">
              {isGoogleConnected
                ? 'Akun Google ini aktif digunakan untuk masuk tanpa sandi. Anda bisa memutuskan tautan kapan saja.'
                : 'Klik "Hubungkan Akun" untuk mengaitkan alamat Gmail admin dengan sistem login sekali klik.'}
            </p>
          </div>

          {/* Kartu Ubah Kata Sandi Manual */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h2 className="text-sm font-bold text-gray-800">Ubah Kata Sandi Manual</h2>
              {passwordSaved && (
                <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                  ✓ Sandi diperbarui
                </span>
              )}
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Kata Sandi Saat Ini</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={passwordForm.oldPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, oldPassword: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-[#0A64BC] text-gray-700 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Kata Sandi Baru</label>
                <input
                  type="password"
                  required
                  placeholder="Minimal 8 karakter"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-[#0A64BC] text-gray-700 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Konfirmasi Kata Sandi Baru</label>
                <input
                  type="password"
                  required
                  placeholder="Ulangi kata sandi baru"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-[#0A64BC] text-gray-700 transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0A64BC] text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-xs"
                >
                  Ubah Kata Sandi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}