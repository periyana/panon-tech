"use client";

import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("produk");
  const [selectedBrand, setSelectedBrand] = useState("Semua");

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

  const reviews = [
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
  ];


  const filteredProducts =
    selectedBrand === "Semua"
      ? products
      : products.filter((p) => p.brand === selectedBrand);

  return (
    <main className="min-h-screen bg-[#050a12] text-blue-100 font-sans antialiased relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1524_1px,transparent_1px),linear-gradient(to_bottom,#0b1524_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none"></div>

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
      <div className="leading-tight text-center md:text-left">

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
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:hidden">

    {[
      "produk",
      "layanan",
      "paket",
      "hubungi",
    ].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`w-full px-2 py-2 rounded-xl text-[11px] font-bold transition-all duration-300 ${
          activeTab === tab
            ? "bg-yellow-400 text-black"
            : "text-blue-300/70 bg-[#101e33]/40 hover:text-white hover:bg-blue-950/40"
        }`}
      >
        {tab === "produk" && "Produk"}
        {tab === "layanan" && "Layanan"}
        {tab === "paket" && "Paket Harga"}
        {tab === "hubungi" && "Hubungi Kami"}
      </button>
    ))}

  </div>

  {/* TABLET & DESKTOP */}
  <div className="hidden md:flex justify-center gap-3">

    {[
      "produk",
      "layanan",
      "paket",
      "hubungi",
    ].map((tab) => (
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
      <section className="relative z-10 pt-14 md:pt-20 pb-10 px-4 md:px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest text-cyan-400 uppercase mb-5">
            Authorized Solutions Provider
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">

            {activeTab === "produk" && "Katalog Brand Resmi"}

            {activeTab === "layanan" && "Layanan Profesional IT"}

            {activeTab === "paket" && "Paket Lengkap Terima Beres"}

            {activeTab === "hubungi" && "Hubungi Kami"}

          </h1>

        </div>
      </section>

      {/* PRODUK */}
      {activeTab === "produk" && (
        <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-16">

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

                <h3 className="text-lg font-bold text-white mb-3">
                  {s.title}
                </h3>

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
                  <p className="text-white font-bold">
                    panontech369@gmail.com
                  </p>
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
                  href="https://maps.google.com"
                  target="_blank"
                  className="inline-block mt-4 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
                >
                  Buka Maps
                </a>

              </div>
            </div>

          </div>
        </section>
      )}

      {/* REVIEW */}
      {/* SECTION: REVIEW / TESTIMONI */}
<section className="py-16 md:py-20 px-4 md:px-6 bg-[#03070d]/60 border-t border-blue-950/50 relative z-10">
  <div className="max-w-6xl mx-auto">

    <div className="text-center max-w-md mx-auto mb-10 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white">
        Review & Kepuasan Pelanggan
      </h2>

      <p className="text-blue-400 text-xs md:text-sm mt-2">
        Ulasan murni dari konsumen yang telah mempercayakan sistem keamanan kepada kami.
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
            <h4 className="font-bold text-sm text-white">
              {rev.name}
            </h4>

            <p className="text-blue-400 text-[11px] md:text-xs">
              {rev.role}
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

{/* SECTION: AREA LAYANAN */}
<section className="py-14 md:py-16 px-4 md:px-6 relative z-10 border-t border-blue-950/40">

  <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-950/20 to-transparent p-6 md:p-8 rounded-3xl border border-blue-900/30 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">

    <div className="text-4xl md:text-5xl">
      🚚
    </div>

    <div className="flex-1">

      <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
        Area Jangkauan Layanan
      </h2>

      <p className="text-blue-200/60 text-xs md:text-sm leading-relaxed mb-5">
        Kami melayani jasa survei, instalasi, dan maintenance untuk wilayah
        <strong> Jakarta, Depok, dan Bogor</strong>.
        Tim kami siap datang ke lokasi untuk memastikan sistem keamanan Anda
        terpasang dengan optimal, aman, dan rapi.
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
    </main>
  );
}