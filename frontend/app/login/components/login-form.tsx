'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mengarahkan ke /dashboard
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-white grid grid-cols-1 md:grid-cols-2 font-sans overflow-hidden">
      
      {/* Sisi Kiri: Hero Image */}
      <div className="relative hidden md:block w-full h-full bg-gray-100 overflow-hidden">
        <Image
          src="/login-bg.jpg"
          alt="Marlibu Travel Background"
          fill
          className="object-cover z-0"
          priority
        />
      </div>

      {/* Sisi Kanan: Form Login */}
      <div className="w-full h-full flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-24 bg-white">
        
        {/* Area Tengah: Form Input */}
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Header Judul */}
          <div>
            <h1 className="text-3xl font-bold text-[#FF6B00] tracking-tight">
              Login Admin
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Masuk untuk mengakses dashboard admin.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
            {/* Input Email */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email"
                required
                autoComplete="off"
                className="w-full text-sm px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:bg-white text-gray-800 transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Input Kata Sandi */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 block">
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi"
                  required
                  autoComplete="new-password"
                  className="w-full text-sm px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:bg-white text-gray-800 pr-12 transition-all placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Tombol Masuk */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#0A64BC] hover:bg-[#08529B] text-white font-semibold rounded-xl text-sm shadow-md hover:shadow-lg transition-all cursor-pointer mt-4"
            >
              Masuk
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}