"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [activeTab, setActiveTab] = useState("produk");
  const [selectedBrand, setSelectedBrand] = useState("Semua");

  const [reviews, setReviews] = useState([
    {
      name: "Budi Setiadi",
      role: "Pemilik Cafe",
      text: "WiFi sekarang stabil banget setelah pasang Ruijie.",
      rating: 5,
    },
    {
      name: "Lita",
      role: "Pemilik Rumah",
      text: "Penarikan kabel rapi dan hasil CCTV bagus.",
      rating: 5,
    },
    {
      name: "Siti Rahma",
      role: "Pemilik Ruko",
      text: "Setting Ezviz dibantu sampai connect ke HP.",
      rating: 5,
    },
  ]);

  const products = [
    {
      id: 1,
      name: "Dahua Smart CCTV Analog System",
      brand: "Dahua",
      category: "CCTV Analog / HDCVI",
      desc: "Solusi kamera analog resolusi tinggi (2MP - 5MP) dengan kompresi WizSense AI. Gambar tajam, hemat penyimpanan, cocok untuk rumah & ruko.",
      image: "/dahua.png",
    },
    {
      id: 2,
      name: "Ezviz Smart Wireless IP Camera",
      brand: "Ezviz",
      category: "Wireless IP Cam (Indoor/Outdoor)",
      desc: "Kamera praktis tanpa kabel dengan fitur Smart Pan & Tilt, Auto-Tracking Manusia, dan komunikasi dua arah langsung lewat aplikasi HP.",
      image: "/ezviz.png",
    },
    {
      id: 3,
      name: "Ruijie Reyee Enterprise Networking",
      brand: "Ruijie",
      category: "Networking & Cloud Switch",
      desc: "Infrastruktur jaringan bisnis, Access Point High-Density anti-lemot, dan Smart Managed Switch yang bisa dimonitor via Cloud.",
      image: "/ryujie.png",
    },
    {
      id: 4,
      name: "Dahua WizSense Digital Video Recorder",
      brand: "Dahua",
      category: "Storage & Recorder Systems",
      desc: "Penta-brid DVR/NVR tangguh penyangga rekaman 24/7 dengan kestabilan tinggi.",
      image: "/dahua-wizSense.png",
    },
  ];

  const services = [
    {
      title: "Instalasi CCTV",
      desc: "Pemasangan rapi menggunakan pipa conduit dan minim blind spot.",
      icon: "🛠️",
    },
    {
      title: "Maintenance & Repair",
      desc: "Pengecekan berkala dan penggantian part hardware.",
      icon: "⚙️",
    },
    {
      title: "Infrastruktur Jaringan",
      desc: "Setting Mikrotik, Access Point, Hotspot Cafe & kabel LAN.",
      icon: "🌐",
    },
  ];

  const packages = [
    {
      name: "Paket 4 Kamera Dahua 2MP",
      price: "Rp 3.750.000",
      feature: [
        "4x Kamera Dahua 2MP Indoor & Outdoor",
        "DVR Dahua 4 Channel",
        "Harddisk WD Purple Surveillance 1TB",
        "Kabel RG59 150 Meter",
        "Power Supply Dahua 4 Channel",
        "4x Box Duradus",
        "8x Konektor BNC + Power",
        "Gratis Setting Monitoring HP",
        "Termasuk Jasa Instalasi & Pemasangan",
      ],
    },
    {
      name: "Paket 8 Kamera Dahua 2MP",
      price: "Rp 5.900.000",
      feature: [
        "8x Kamera Dahua 2MP Indoor & Outdoor",
        "DVR Dahua 8 Channel",
        "Harddisk WD Purple Surveillance 1TB",
        "Kabel RG59 200 Meter",
        "Power Supply Dahua 8 Channel",
        "8x Box Duradus",
        "16x Konektor BNC + Power",
        "Gratis Setting Monitoring HP",
        "Termasuk Jasa Instalasi & Pemasangan",
      ],
    },
    {
      name: "Paket 16 Kamera Dahua 2 mp",
      price: "Rp 12.110.000",
      feature: [
        "16x Kamera Dahua 2MP Indoor & Outdoor",
        "DVR Dahua 16 Channel",
        "Harddisk WD Purple Surveillance 4TB",
        "Kabel RG59 300 Meter",
        "Power Supply Hiview 16 Channel",
        "16x Box Duradus",
        "32x Konektor BNC + Power",
        "Gratis Setting Monitoring HP",
        "Termasuk Jasa Instalasi & Pemasangan",
      ],
    },
    {
      name: "Paket Custom CCTV",
      price: "Hubungi Kami",
      feature: [
        "Pilih Kamera 2MP / 5MP / 8MP",
        "Bisa Indoor & Outdoor",
        "Pilih Jumlah Kamera Sesuai Kebutuhan",
        "Support Monitoring HP",
        "Free Survey Lokasi",
        "Kabel & Instalasi Menyesuaikan Lokasi",
        "Gratis Setting Monitoring HP",
        "Termasuk Jasa Instalasi & Pemasangan",
      ],
    },
  ];

  const filteredProducts =
    selectedBrand === "Semua"
      ? products
      : products.filter((p) => p.brand === selectedBrand);

  return (
    <main className="min-h-screen bg-[#050a12] text-blue-100 font-sans antialiased relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1524_1px,transparent_1px),linear-gradient(to_bottom,#0b1524_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 pointer-events-none"></div>

      <div className="absolute top-[-10%] left-[-5%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute top-[20%] right-[-10%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#050a12]/95 backdrop-blur-xl border-b border-blue-950/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 flex flex-col gap-3">
          {/* TOP */}
          <div
            onClick={() => {
              setActiveTab("produk");
              setSelectedBrand("Semua");
            }}
            className="flex items-center justify-center md:justify-start gap-3 cursor-pointer"
          >
            {/* LOGO */}
            <div className="relative w-[58px] h-[58px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] flex-shrink-0">
              {/* WIFI */}
              <div className="absolute top-0 right-0 z-20">
                <div className="relative w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16">
                  <div className="absolute top-0 right-0 w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 border-[4px] border-yellow-400 border-b-transparent border-l-transparent rounded-full rotate-45"></div>

                  <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-[4px] border-yellow-400 border-b-transparent border-l-transparent rounded-full rotate-45"></div>

                  <div className="absolute top-4 right-4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-[4px] border-yellow-400 border-b-transparent border-l-transparent rounded-full rotate-45"></div>
                </div>
              </div>

              {/* EYE */}
              <div className="relative w-[56px] h-[34px] sm:w-[68px] sm:h-[42px] md:w-[85px] md:h-[50px]">
                <div className="absolute inset-0 border-t-[8px] md:border-t-[12px] border-[#001b66] rounded-full"></div>

                <div className="absolute inset-0 border-b-[8px] md:border-b-[12px] border-[#001b66] rounded-full"></div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-r-[12px] md:border-r-[18px] border-transparent border-r-[#001b66]"></div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] md:border-l-[18px] border-transparent border-l-[#001b66]"></div>

                {/* LENS */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px] rounded-full bg-gradient-to-br from-blue-300 via-blue-700 to-[#001133] border-[3px] border-[#0d2f7a]">
                  <div className="absolute inset-[5px] rounded-full bg-gradient-to-br from-[#001133] to-black"></div>

                  <div className="absolute top-[4px] left-[5px] w-[6px] h-[6px] rounded-full bg-white/90 blur-[1px]"></div>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="leading-none text-center md:text-left">
              <h1 className="text-[28px] sm:text-[34px] md:text-4xl font-black tracking-tight">
                <span className="text-white">PANON</span>
                <span className="text-yellow-400">TECH</span>
              </h1>

              <p className="text-[8px] sm:text-[9px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-blue-200/70 font-semibold mt-1">
                KOMPUTER • JARINGAN • CCTV
              </p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="w-full">
            {/* MOBILE */}
            <div className="flex md:hidden overflow-x-auto gap-2 pb-1">
              {["produk", "layanan", "paket", "hubungi"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-yellow-400 text-black"
                      : "bg-[#101e33] text-blue-300"
                  }`}
                >
                  {tab === "produk" && "Produk"}
                  {tab === "layanan" && "Layanan"}
                  {tab === "paket" && "Paket"}
                  {tab === "hubungi" && "Hubungi"}
                </button>
              ))}
            </div>

            {/* TABLET & DESKTOP */}
            <div className="hidden md:flex justify-center gap-3">
              {["produk", "layanan", "paket", "hubungi"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-yellow-400 text-black"
                      : "text-blue-300/70 hover:text-white hover:bg-blue-950/40"
                  }`}
                >
                  {tab === "produk" && "Produk"}
                  {tab === "layanan" && "Layanan"}
                  {tab === "paket" && "Paket Harga"}
                  {tab === "hubungi" && "Hubungi Kami"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
      {/* HERO */}
      {activeTab === "produk" && (
        <>
          <section className="relative z-10 max-w-7xl mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div>
                <h1
                  className="font-black leading-[1.05] tracking-tight"
                  style={{
                    fontSize: "clamp(2.8rem, 6vw, 5.8rem)",
                  }}
                >
                  <span className="text-white block">CCTV, Jaringan &</span>

                  <span className="text-yellow-400 block">Solusi Komputer</span>
                </h1>

                <p className="mt-6 text-blue-200/70 text-lg max-w-xl leading-relaxed">
                  Instalasi profesional, jaringan stabil, dan dukungan teknis
                  terpercaya untuk rumah, kantor, toko, dan usaha Anda.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="https://wa.me/6285882171193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-6 py-4 rounded-xl font-bold"
                  >
                    Konsultasi Gratis
                  </a>

                  <button
                    onClick={() => setActiveTab("paket")}
                    className="border border-blue-700 px-6 py-4 rounded-xl"
                  >
                    Lihat Paket CCTV
                  </button>
                </div>
                <div className="flex flex-wrap gap-4 mt-6 text-sm text-blue-300 font-medium">
                  <span className="bg-[#0b1524]/50 px-3 py-2 rounded-xl border border-blue-900/30">
                    ✅ 100+ Instalasi
                  </span>

                  <span className="bg-[#0b1524]/50 px-3 py-2 rounded-xl border border-blue-900/30">
                    ✅ Garansi Pemasangan
                  </span>

                  <span className="bg-[#0b1524]/50 px-3 py-2 rounded-xl border border-blue-900/30">
                    ✅ Gratis Survey
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <img src="/hero-cctv.png" alt="CCTV" className="w-full" />
              </div>
            </div>
          </section>
        </>
      )}
      {activeTab === "produk" && (
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="grid md:grid-cols-4 gap-5">
            <div className="bg-[#0b1524]/50 p-5 rounded-2xl">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold">CCTV Berkualitas</h3>
              <p className="text-sm text-blue-300/60">Gambar Jernih</p>
            </div>

            <div className="bg-[#0b1524]/50 p-5 rounded-2xl">
              <div className="text-4xl mb-3">📡</div>
              <h3 className="font-bold">Jaringan Stabil</h3>
              <p className="text-sm text-blue-300/60">Tanpa Lemot</p>
            </div>

            <div className="bg-[#0b1524]/50 p-5 rounded-2xl">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-bold">Instalasi Profesional</h3>
              <p className="text-sm text-blue-300/60">Rapi & Aman</p>
            </div>

            <div className="bg-[#0b1524]/50 p-5 rounded-2xl">
              <div className="text-4xl mb-3">🎧</div>
              <h3 className="font-bold">Support Cepat</h3>
              <p className="text-sm text-blue-300/60">Siap Membantu</p>
            </div>
          </div>
        </section>
      )}

      {/* PRODUK */}

      {activeTab === "produk" && (
        <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-16">
          {/* KATEGORI */}
          <section className="max-w-7xl mx-auto px-4 pb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white">
                Kategori Produk
              </h2>

              <p className="text-blue-300/60 mt-3">
                Solusi CCTV, Jaringan dan Komputer
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[#0b1524]/50 rounded-3xl overflow-hidden">
                <img
                  src="/cctv-category.png"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-xl">CCTV</h3>
                </div>
              </div>

              <div className="bg-[#0b1524]/50 rounded-3xl overflow-hidden">
                <img
                  src="/network-category.png"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-xl">Jaringan</h3>
                </div>
              </div>

              <div className="bg-[#0b1524]/50 rounded-3xl overflow-hidden">
                <img
                  src="/computer-category.png"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-xl">Komputer</h3>
                </div>
              </div>

              <div className="bg-[#0b1524]/50 rounded-3xl overflow-hidden">
                <img
                  src="/accessories-category.png"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-xl">Aksesoris</h3>
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["Semua", "Dahua", "Ezviz", "Ruijie"].map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  selectedBrand === brand
                    ? "bg-blue-600 text-white"
                    : "bg-[#101e33] text-blue-300/70 hover:text-white"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-[#0b1524]/50 backdrop-blur-sm rounded-3xl border border-blue-950/60 overflow-hidden hover:border-blue-700/50 transition-all duration-300 shadow-lg"
              >
                <div className="relative h-52 md:h-64 overflow-hidden bg-[#070e17]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover opacity-70 hover:scale-105 transition duration-500"
                  />

                  <div className="absolute top-3 left-3 bg-[#050a12]/90 px-3 py-1 rounded-full text-[10px] font-black tracking-wide text-yellow-400">
                    {p.brand}
                  </div>
                </div>

                <div className="p-5 md:p-8">
                  <p className="text-cyan-400 text-[10px] uppercase font-bold tracking-widest mb-2">
                    {p.category}
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {p.name}
                  </h3>

                  <p className="text-blue-200/60 text-xs leading-relaxed">
                    {p.desc}
                  </p>

                  <a
                    href="https://wa.me/6285882171193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block text-center bg-[#101e33] hover:bg-yellow-400 hover:text-black text-blue-200 py-3 rounded-xl text-xs font-bold transition-all"
                  >
                    Tanya Harga via WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LAYANAN */}
      {activeTab === "layanan" && (
        <section className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-[#0b1524]/50 p-6 md:p-8 rounded-3xl border border-blue-950/60"
              >
                <div className="text-4xl mb-4">{s.icon}</div>

                <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>

                <p className="text-blue-200/60 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PAKET */}
      {activeTab === "paket" && (
        <section className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="bg-[#0b1524]/50 p-6 md:p-8 rounded-3xl border border-blue-950/60"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>

                <p className="text-3xl font-black text-yellow-400 mb-6">
                  {pkg.price}
                </p>

                <ul className="space-y-3 mb-6">
                  {pkg.feature.map((f, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-blue-200/70 flex items-center gap-2"
                    >
                      ✔ {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6285882171193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-yellow-400 text-black py-3 rounded-xl text-sm font-bold hover:bg-yellow-300 transition"
                >
                  PESAN SEKARANG
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* HUBUNGI */}
      {activeTab === "hubungi" && (
        <section className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#0b1524]/50 p-6 md:p-8 rounded-3xl border border-blue-950/60">
              <h3 className="text-2xl font-bold text-white mb-6">
                Kontak Kami
              </h3>

              <div className="space-y-5">
                <div>
                  <p className="text-cyan-400 text-xs mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/6285882171193"
                    className="text-white font-bold"
                  >
                    0858 8217 1193
                  </a>
                </div>

                <div>
                  <p className="text-cyan-400 text-xs mb-1">Email</p>
                  <p className="text-white font-bold">panontech369@gmail.com</p>
                </div>

                <div>
                  <p className="text-cyan-400 text-xs mb-1">Alamat</p>
                  <p className="text-blue-200/70 text-sm leading-relaxed">
                    Jl. Raya Semplak No.348, Bogor, Jawa Barat
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0b1524]/50 p-6 md:p-8 rounded-3xl border border-blue-950/60 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-4">🗺️</div>

                <h3 className="text-xl font-bold text-white mb-2">
                  Lokasi Google Maps
                </h3>

                <a
                  href="https://maps.google.com/?q=Jl+Raya+Semplak+348+Bogor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
                >
                  Buka Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PAKET LAYANAN */}
      {activeTab === "layanan" && (
        <section className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-xs font-bold tracking-widest text-cyan-400 uppercase mb-4">
              Layanan Tambahan
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white">
              Paket Layanan Panon Tech
            </h2>

            <p className="text-blue-300/60 mt-4 max-w-2xl mx-auto">
              Solusi komputer, jaringan dan CCTV untuk rumah, kantor, toko dan
              usaha Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SERVICE KOMPUTER */}
            <div className="bg-[#0b1524]/50 p-6 rounded-3xl border border-blue-950/60">
              <div className="text-5xl mb-4">💻</div>

              <h3 className="text-xl font-bold text-white mb-4">
                Service Komputer
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-blue-950/50 pb-2">
                  <span>Install Windows</span>
                  <span className="text-yellow-400 font-bold">Rp100.000</span>
                </div>

                <div className="flex justify-between border-b border-blue-950/50 pb-2">
                  <span>Cleaning Laptop</span>
                  <span className="text-yellow-400 font-bold">Rp50.000</span>
                </div>

                <div className="flex justify-between border-b border-blue-950/50 pb-2">
                  <span>Upgrade SSD</span>
                  <span className="text-yellow-400 font-bold">Rp100.000</span>
                </div>
              </div>

              <a
                href="https://wa.me/6285882171193"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-6 bg-yellow-400 text-black py-3 rounded-xl font-bold"
              >
                Konsultasi
              </a>
            </div>

            {/* JARINGAN */}
            <div className="bg-[#0b1524]/50 p-6 rounded-3xl border border-blue-950/60">
              <div className="text-5xl mb-4">🌐</div>

              <h3 className="text-xl font-bold text-white mb-4">
                Instalasi Jaringan
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-blue-950/50 pb-2">
                  <span>Setting Router</span>
                  <span className="text-yellow-400 font-bold">Rp150.000</span>
                </div>

                <div className="flex justify-between border-b border-blue-950/50 pb-2">
                  <span>Tarik Kabel LAN</span>
                  <span className="text-yellow-400 font-bold">Rp10.000/m</span>
                </div>

                <div className="flex justify-between border-b border-blue-950/50 pb-2">
                  <span>Instalasi Access Point</span>
                  <span className="text-yellow-400 font-bold">Rp200.000</span>
                </div>
              </div>

              <a
                href="https://wa.me/6285882171193"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-6 bg-yellow-400 text-black py-3 rounded-xl font-bold"
              >
                Konsultasi
              </a>
            </div>

            {/* CCTV */}
            <div className="bg-[#0b1524]/50 p-6 rounded-3xl border border-blue-950/60">
              <div className="text-5xl mb-4">📹</div>

              <h3 className="text-xl font-bold text-white mb-4">
                Layanan CCTV
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-blue-950/50 pb-2">
                  <span>Survey Lokasi</span>
                  <span className="text-green-400 font-bold">GRATIS</span>
                </div>

                <div className="flex justify-between border-b border-blue-950/50 pb-2">
                  <span>Pemasangan CCTV</span>
                  <span className="text-yellow-400 font-bold">
                    Mulai 600.000
                  </span>
                </div>

                <div className="flex justify-between border-b border-blue-950/50 pb-2">
                  <span>Maintenance CCTV</span>
                  <span className="text-yellow-400 font-bold">
                    Hubungi Kami
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/6285882171193"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-6 bg-yellow-400 text-black py-3 rounded-xl font-bold"
              >
                Konsultasi
              </a>
            </div>
          </div>
        </section>
      )}

      {/* REVIEW */}
      {/* SECTION: REVIEW / TESTIMONI */}
      {activeTab === "produk" && (
        <section className="py-16 md:py-20 px-4 md:px-6 bg-[#03070d]/60 border-t border-blue-950/50 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-md mx-auto mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Review & Kepuasan Pelanggan
              </h2>

              <p className="text-blue-400 text-xs md:text-sm mt-2">
                Ulasan murni dari konsumen yang telah mempercayakan sistem
                keamanan kepada kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b1524]/40 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-blue-950/40 space-y-4 shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex gap-1 text-yellow-400 text-sm">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    <p className="text-blue-100/70 text-xs md:text-sm leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-blue-950/40">
                    <h4 className="font-bold text-sm text-white">{rev.name}</h4>

                    <p className="text-blue-400 text-[11px] md:text-xs">
                      {rev.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION: AREA LAYANAN */}
      {activeTab === "hubungi" && (
        <section className="py-14 md:py-16 px-4 md:px-6 relative z-10 border-t border-blue-950/40">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-950/20 to-transparent p-6 md:p-8 rounded-3xl border border-blue-900/30 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="text-4xl md:text-5xl">🚚</div>

            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                Area Jangkauan Layanan
              </h2>

              <p className="text-blue-200/60 text-xs md:text-sm leading-relaxed mb-5">
                Kami melayani jasa survei, instalasi, dan maintenance untuk
                wilayah
                <strong> Jakarta, Depok, dan Bogor</strong>. Tim kami siap
                datang ke lokasi untuk memastikan sistem keamanan Anda terpasang
                dengan optimal, aman, dan rapi.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Jakarta", "Depok", "Bogor"].map((city) => (
                  <span
                    key={city}
                    className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold border border-blue-800/50"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTab === "produk" && (
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-950/70 via-[#081525] to-cyan-950/40 rounded-3xl border border-blue-800/40 p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-xs font-bold mb-5">
              GRATIS SURVEY LOKASI
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none">
              <span className="text-white">Amankan Rumah & Usaha</span>
              <br />
              <span className="text-yellow-400">Dengan CCTV Berkualitas</span>
            </h2>
            <p className="text-blue-300/80 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              Gratis survey lokasi, rekomendasi jumlah kamera, serta estimasi
              biaya pemasangan yang sesuai dengan kebutuhan Anda.
            </p>

            <a
              href="https://wa.me/6285882171193"
              target="_blank"
              rel="noopener noreferrer"
              className="
    mt-8
    inline-flex
    items-center
    justify-center
    gap-4
    bg-green-500
    hover:bg-green-600
    text-white
    px-8
    py-4
    rounded-2xl
    font-bold
    text-lg
    shadow-lg
    shadow-green-500/30
    transition-all
    duration-300
    hover:scale-105
    relative
    z-10
  "
            >
              <FaWhatsapp className="text-3xl flex-shrink-0" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>
        </section>
      )}
      {/* FOOTER */}
      <footer className="relative z-10 bg-[#03060a] border-t border-blue-950/40 py-10 px-4 text-center">
        <h2 className="text-2xl font-black text-white tracking-widest">
          PANON<span className="text-yellow-400">TECH</span>
        </h2>

        <p className="text-blue-400/50 text-[10px] mt-2">
          Dahua • Ezviz • Ruijie Official Solution
        </p>

        <div className="mt-6 text-[10px] text-blue-950/60">
          © {new Date().getFullYear()} PANON-TECH
        </div>
      </footer>
      <a
        href="https://wa.me/6285882171193?text=Halo%20PanonTech,%20saya%20ingin%20konsultasi%20CCTV"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl"
      >
        <FaWhatsapp size={34} />
      </a>
    </main>
  );
}
