"use client";

import React, { useState } from "react";

export default function Home() {
  // State untuk mengatur konten tab utama
  const [activeTab, setActiveTab] = useState("produk");
  // State untuk filter brand di dalam tab produk
  const [selectedBrand, setSelectedBrand] = useState("Semua");

  // Data Produk yang disederhanakan berdasarkan Brand & Solusi Utamanya
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
      desc: "Infrastruktur jaringan bisnis, Access Point High-Density anti-lemot, dan Smart Managed Switch yang bisa dimonitor jarak jauh via Cloud.",
      image: "/ryujie.png",
    },
    {
      id: 4,
      name: "Dahua WizSense Digital Video Recorder",
      brand: "Dahua",
      category: "Storage & Recorder Systems",
      desc: "Penta-brid DVR/NVR tangguh penyangga rekaman 24/7 dengan kestabilan tinggi dan fitur pencarian pintar berbasis kecerdasan buatan.",
      image: "/dahua-wizSense.png",
    },
  ];

  // Data Layanan
  const services = [
    { title: "Instalasi CCTV", desc: "Pemasangan rapi menggunakan pipa conduit, meminimalkan blind spot.", icon: "🛠️" },
    { title: "Maintenance & Repair", desc: "Pengecekan berkala, penggantian part hardware, dan pembersihan lensa.", icon: "⚙️" },
    { title: "Infrastruktur Jaringan", desc: "Setting Mikrotik, Wi-Fi Hotspot Cafe, dan penarikan kabel LAN.", icon: "🌐" },
  ];

  // Data Paket Terima Beres
  const packages = [
    { name: "Paket 4 Kamera Dahua 2MP no audio", price: "Rp 3.700.000", feature: ["4x Kamera Dahua 2MP", "DVR 4 Channel", "Harddisk 1TB", "Kabel Coaxial 150M","PSU Dahua 4CH", "Gratis Jasa Pasang & Setting HP"] },
    { name: "Paket 8 Kamera Dahua 2MP Color non audio", price: "Rp 7.000.000", feature: ["8x Kamera Dahua 2MP Color", "DVR 8 Channel", "Harddisk 2TB", "Kabel RG59 200M","PSU dahua 8ch", "Gratis Jasa Pasang & Setting HP"] },
    { name: "Paket 8 Kamera Dahua 5MP Color non audio", price: "Rp 9.700.000", feature: ["8x Kamera Dahua 5MP Color", "DVR 8 Channel", "Harddisk 2TB", "Kabel RG59 200M","PSU dahua 8ch", "Gratis Jasa Pasang & Setting HP"] },
    { name: "Paket 16 Kamera Dahua 5MP Color non audio", price: "Rp 15.000.000", feature: ["16x Kamera Dahua 5MP Color", "DVR 16 Channel", "Harddisk 2TB", "Kabel RG59 300M","PSU dahua 16ch", "Gratis Jasa Pasang & Setting HP"] },
  ];

  // Data Review Pelanggan
  const reviews = [
    { name: "Budi Setiadi", role: "Pemilik Kosan", text: "Pasang Access Point Ruijie di cafe, sekarang gak ada komplain WiFi lemot lagi dari pelanggan. Settingan bandwidth-nya mantap!", rating: 5 },
    { name: "Lita", role: "Kosan Karet", text: "Teknisinya berpengalaman banget. Penarikan kabel CCTV Dahua di rumah saya rapi dan respon nya cepat . Recommended!", rating: 5 },
    { name: "Siti Rahma", role: "Pemilik Ruko", text: "Beli Ezviz Wireless buat pantau toko beras. Dibantu setting sampai beres ke HP saya. Pelayanan ramah!", rating: 5 }
  ];

  // Logika filter produk berdasarkan brand yang dipilih
  const filteredProducts = selectedBrand === "Semua" 
    ? products 
    : products.filter(p => p.brand === selectedBrand);

  return (
    <main className="min-h-screen bg-[#050a12] text-blue-100 font-sans antialiased relative selection:bg-yellow-400 selection:text-black">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1524_1px,transparent_1px),linear-gradient(to_bottom,#0b1524_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-70 z-0"></div>
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none z-0"></div>

      {/* HEADER / NAVBAR */}
      <header className="bg-[#050a12]/80 backdrop-blur-xl border-b border-blue-950/50 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-wider cursor-pointer text-white" onClick={() => { setActiveTab("produk"); setSelectedBrand("Semua"); }}>
            PANON<span className="text-yellow-400">-TECH</span>
          </div>
          
          <nav className="flex gap-4 md:gap-8 text-sm font-semibold">
            <button onClick={() => setActiveTab("produk")} className={`transition-colors duration-200 ${activeTab === "produk" ? "text-yellow-400" : "text-blue-300/70 hover:text-white"}`}>Produk</button>
            <button onClick={() => setActiveTab("layanan")} className={`transition-colors duration-200 ${activeTab === "layanan" ? "text-yellow-400" : "text-blue-300/70 hover:text-white"}`}>Layanan</button>
            <button onClick={() => setActiveTab("paket")} className={`transition-colors duration-200 ${activeTab === "paket" ? "text-yellow-400" : "text-blue-300/70 hover:text-white"}`}>Paket Harga</button>
            <button onClick={() => setActiveTab("hubungi")} className={`transition-colors duration-200 ${activeTab === "hubungi" ? "text-yellow-400" : "text-blue-300/70 hover:text-white"}`}>Hubungi Kami</button>
          </nav>
        </div>
      </header>

      {/* HERO TITLE SECTION */}
      <section className="relative pt-20 pb-12 px-6 text-center z-10">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-cyan-400 uppercase">
              Authorized Solutions Provider • Dahua • Ezviz • Ruijie
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            {activeTab === "produk" && "Katalog Brand Resmi"}
            {activeTab === "layanan" && "Layanan Profesional IT"}
            {activeTab === "paket" && "Paket Lengkap Terima Beres"}
            {activeTab === "hubungi" && "Hubungi & Lokasi Toko"}
          </h1>
          <p className="text-blue-200/60 text-sm max-w-xl mx-auto leading-relaxed">
            {activeTab === "produk" && "Kami menyediakan unit original bergaransi resmi. Silakan pilih brand di bawah dan tanyakan langsung tipe spesifik yang Anda butuhkan."}
            {activeTab === "layanan" && "Didukung teknisi berpengalaman untuk instalasi terstruktur, rapi, dan kokoh jangka panjang."}
            {activeTab === "paket" && "Opsi bundling hemat operasional tanpa biaya siluman. Transparan sejak awal survei."}
            {activeTab === "hubungi" && "Silakan hubungi tim support kami atau kunjungi workshop fisik toko kami secara langsung."}
          </p>
        </div>
      </section>

      {/* DYNAMIC CONTENT AREA */}
      <section className="max-w-6xl mx-auto px-6 pb-12 relative z-10">
        
        {/* VIEW: PRODUK (Dengan Sistem Filter Brand) */}
        {activeTab === "produk" && (
          <div className="space-y-10">
            {/* Navigasi Filter Brand Sub-Menu */}
            <div className="flex flex-wrap justify-center gap-2 bg-[#0b1524]/30 p-2 rounded-2xl border border-blue-950/40 max-w-md mx-auto">
              {["Semua", "Dahua", "Ezviz", "Ruijie"].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedBrand === brand 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                      : "text-blue-300/60 hover:text-white hover:bg-blue-950/30"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Grid Tampilan Brand/Produk */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {filteredProducts.map((p) => (
                <div key={p.id} className="bg-[#0b1524]/50 backdrop-blur-sm rounded-3xl border border-blue-950/60 overflow-hidden group hover:border-blue-700/50 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/30">
                  <div>
                    <div className="h-52 overflow-hidden relative bg-[#070e17]">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-60 group-hover:opacity-90" />
                      <div className="absolute top-4 left-4 bg-[#050a12]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-black tracking-wide text-yellow-400 border border-blue-950/40">
                        {p.brand} Official unit
                      </div>
                    </div>
                    <div className="p-8 space-y-3">
                      <p className="text-cyan-400 text-[10px] font-black uppercase tracking-widest">{p.category}</p>
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{p.name}</h3>
                      <p className="text-blue-200/60 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                  <div className="p-8 pt-0">
                    <a 
                      href={`https://wa.me/6285882171193?text=Halo%20Panon-Tech,%20saya%20tertarik%20tanya%20tipe,%20spesifikasi,%20dan%20harga%20terbaru%20untuk%20produk%20${encodeURIComponent(p.brand)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-center bg-[#101e33] border border-blue-900/30 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 text-blue-200"
                    >
                      Tanya Tipe & Harga via WA
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: LAYANAN */}
        {activeTab === "layanan" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-[#0b1524]/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-950/60 space-y-4 hover:border-blue-900 transition shadow-lg shadow-black/30">
                <div className="w-12 h-12 bg-[#101e33] border border-blue-900/30 flex items-center justify-center text-2xl rounded-xl">{s.icon}</div>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-blue-200/60 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: PAKET */}
        {activeTab === "paket" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0b1524] to-[#050a12] p-8 rounded-3xl border-2 border-blue-900/20 relative flex flex-col justify-between shadow-xl">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-black text-yellow-400 mb-6">{pkg.price}</p>
                  <ul className="space-y-3.5 mb-8 border-t border-blue-950/80 pt-6">
                    {pkg.feature.map((f, idx) => (
                      <li key={idx} className="text-xs text-blue-200/70 flex items-center gap-2.5">
                        <span className="text-yellow-400 text-sm">✔</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={`https://wa.me/6285882171193?text=Halo%20Panon-Tech,%20saya%20ingin%20pesan%20${encodeURIComponent(pkg.name)}`} target="_blank" rel="noopener noreferrer" className="block text-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-4 rounded-2xl font-black text-xs hover:brightness-110 transition shadow-lg shadow-yellow-400/10">
                  PESAN SEKARANG
                </a>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: HUBUNGI KAMI & LOKASI */}
        {activeTab === "hubungi" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[#0b1524]/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-950/60 space-y-6 flex flex-col justify-between shadow-lg shadow-black/30">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-blue-950/80 pb-4">Kontak Resmi PANON-TECH</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-xl bg-[#101e33] p-2.5 border border-blue-900/30 rounded-xl text-yellow-400">📱</div>
                    <div>
                      <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-wider">WhatsApp Chat</p>
                      <a href="https://wa.me/6285882171193" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-yellow-400 text-sm transition-colors">0858 8217 1193</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-xl bg-[#101e33] p-2.5 border border-blue-900/30 rounded-xl text-yellow-400">✉️</div>
                    <div>
                      <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-wider">Email Bisnis</p>
                      <a href="mailto:panontech.id@gmail.com" className="text-white font-bold hover:text-yellow-400 text-sm transition-colors">panontech369@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-xl bg-[#101e33] p-2.5 border border-blue-900/30 rounded-xl text-yellow-400">📍</div>
                    <div>
                      <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-wider">Alamat Workshop</p>
                      <p className="text-blue-200/80 text-xs leading-relaxed">Jl. Raya Semplak No.348, RT.02/RW.10, Semplak, Kec. Kemang, Kota Bogor, Jawa Barat 16114</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-xl bg-[#101e33] p-2.5 border border-blue-900/30 rounded-xl text-yellow-400">⏰</div>
                    <div>
                      <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-wider">Jam Operasional</p>
                      <p className="text-blue-200/70 text-xs">Senin – Minggu: 08:00 – 20:00 WIB (jika toko tertutup, silakan hubungi kami melalui WhatsApp untuk layanan lebih lanjut)</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="https://wa.me/6285882171193?text=Halo%20Panon-Tech,%20saya%20ingin%20konsultasi%20pemasangan" target="_blank" rel="noopener noreferrer" className="block text-center bg-yellow-400 text-black py-3.5 rounded-xl text-xs font-black hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/5">
                HUBUNGI VIA WHATSAPP SEKARANG
              </a>
            </div>

            <div className="bg-[#0b1524]/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-950/60 flex flex-col justify-between space-y-6 shadow-lg shadow-black/30">
              <div className="space-y-4 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white border-b border-blue-950/80 pb-4">Pin Google Maps</h3>
                <div className="bg-[#03070d] border border-blue-950/60 rounded-2xl flex-grow flex flex-col items-center justify-center p-6 text-center relative overflow-hidden min-h-[200px]">
                  <div className="text-3xl mb-2">🗺️</div>
                  <h4 className="font-bold text-sm text-white">PANON-TECH Semplak Bogor</h4>
                  <p className="text-blue-300/40 text-xs max-w-xs mt-1 leading-relaxed">Klik tombol di bawah ini untuk langsung membuka rute navigasi akurat menuju toko kami di Google Maps.</p>
                </div>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="block text-center bg-[#101e33] border border-blue-900/30 hover:border-blue-700 text-white py-3.5 rounded-xl text-xs font-bold transition-all">
                📍 Buka Rute Peta Google Maps
              </a>
            </div>
          </div>
        )}

      </section>

      {/* SECTION: REVIEW / TESTIMONI */}
      <section className="py-20 px-6 bg-[#03070d]/60 border-t border-blue-950/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-md mx-auto mb-12">
            <h2 className="text-2xl font-extrabold text-white">Review & Kepuasan Pelanggan</h2>
            <p className="text-blue-400 text-xs mt-1">Ulasan murni dari konsumen yang telah mempercayakan sistem keamanannya pada kami.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-[#0b1524]/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-950/40 space-y-3 flex flex-col justify-between shadow-md">
                <div className="space-y-2">
                  <div className="flex gap-1 text-yellow-400 text-sm">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-blue-100/70 text-xs leading-relaxed italic">"{rev.text}"</p>
                </div>
                <div className="pt-4 border-t border-blue-950/40">
                  <h4 className="font-bold text-xs text-white">{rev.name}</h4>
                  <p className="text-blue-400 text-[10px]">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION: AREA LAYANAN */}
      <section className="py-16 px-6 relative z-10 border-t border-blue-950/40">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-950/20 to-transparent p-8 rounded-3xl border border-blue-900/30 flex flex-col md:flex-row items-center gap-8">
          <div className="text-4xl">🚚</div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Area Jangkauan Layanan</h2>
            <p className="text-blue-200/60 text-xs leading-relaxed mb-4">
              Kami melayani jasa survei, instalasi, dan maintenance untuk wilayah <strong>Jakarta, Depok, dan Bogor</strong>. 
              Tim kami siap datang ke lokasi untuk memastikan sistem keamanan Anda terpasang dengan optimal dan rapi.
            </p>
            <div className="flex gap-2">
              {["Jakarta", "Depok", "Bogor"].map((city) => (
                <span key={city} className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-[10px] font-bold border border-blue-800/50">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#03060a] text-blue-500/50 py-12 px-6 text-center text-sm border-t border-blue-950/40 relative z-10">
        <p className="text-xl font-black text-white tracking-widest mb-2">PANON<span className="text-yellow-400">-TECH</span></p>
        <p className="text-blue-400/40 text-[10px]">Dahua • Ezviz • Ruijie Solution Provider Resmi Terpercaya.</p>
        <div className="mt-8 text-[10px] text-blue-950/60">© {new Date().getFullYear()} PANON-TECH. All rights reserved.</div>
      </footer>

    </main>
  );
}