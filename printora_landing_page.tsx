import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Star,
  Quote,
  Printer,
  Palette,
  FileText,
  Image as ImageIcon,
  PenTool,
  ChevronDown,
  ChevronUp,
  Map,
  ShoppingBag
} from 'lucide-react';

const pageData = {
  name: "Printora",
  phone: "6289529605601",
  address: "Jl. Diponegoro No. 10, Palangka Raya, Kalteng",
  title: "Solusi Cetak Cepat, Tepat, & Berkualitas",
  description: "Pusat percetakan digital dan offset terpercaya. Kami menghadirkan kualitas cetak premium dengan harga bersahabat untuk segala kebutuhan personal dan bisnis Anda.",
  profileImg: "./images/logo-printora.png", 
  heroImg: "./images/background-printora.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id/",
    maps: "https://www.google.com/maps/place/Palangka+Raya", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  highlights: [
    { time: "Ekspres", place: "Bisa Ditunggu" },
    { time: "24 Jam", place: "Order Online" },
    { time: "Premium", place: "Quality Control" }
  ],
  about: "Printora adalah mitra percetakan terpadu yang memadukan teknologi mesin cetak terkini dengan tenaga ahli profesional. Kami berkomitmen untuk selalu memberikan hasil cetak dengan akurasi warna yang tajam dan presisi tinggi.",
  history: "Berdiri sejak 2018 berawal dari sebuah studio desain kecil, Printora kini telah berevolusi menjadi pusat digital printing skala besar yang melayani ribuan UMKM dan perusahaan besar di seluruh Kalimantan Tengah.",
  catalog: [
    { name: "Spanduk & Banner", icon: "ImageIcon", desc: "Flexi China, Korea, Jerman" },
    { name: "Brosur & Flyer", icon: "FileText", desc: "Art Paper 120g - 150g" },
    { name: "Kartu Nama", icon: "Printer", desc: "Laminasi Doff/Glossy" },
    { name: "Merchandise", icon: "Palette", desc: "Mug, Pin, Lanyard, Kaos" },
    { name: "Undangan Custom", icon: "PenTool", desc: "Desain eksklusif & elegan" }
  ],
  pricing: [
    { item: "Spanduk Flexi", spec: "280gr", price: "Rp 15.000", unit: "/ m²" },
    { item: "Kartu Nama", spec: "1 Muka", price: "Rp 25.000", unit: "/ box" },
    { item: "Brosur A4", spec: "1 Rim", price: "Rp 250.000", unit: "/ rim" },
    { item: "X-Banner", spec: "+ Rangka", price: "Rp 65.000", unit: "/ set" },
    { item: "Stiker Chromo", spec: "A3+", price: "Rp 12.000", unit: "/ lbr" }
  ],
  faq: [
    { q: "Berapa lama proses pengerjaan banner?", a: "Untuk cetak banner dengan desain yang sudah siap (ready to print), proses memakan waktu 1-2 jam dan bisa ditunggu." },
    { q: "Apakah Printora menyediakan jasa desain?", a: "Tentu! Kami memiliki tim desainer profesional yang siap membantu merancang kebutuhan cetak Anda dari nol." },
    { q: "Apakah ada minimum order?", a: "Tergantung produk. Untuk banner, stiker, dan kartu nama bisa dipesan satuan (tanpa minimum order). Untuk cetak offset/brosur, minimum order biasanya 1 rim." }
  ],
  testimonials: [
    { name: "Dimas Aditya", rating: 5, text: "Hasil cetak banner sangat tajam, warnanya pas banget dengan file aslinya. Proses pengerjaan super cepat, bisa ditunggu. Mantap Printora!" },
    { name: "Rina Kartika", rating: 5, text: "Pesan kartu nama dan stiker kemasan untuk usaha saya. Kualitas kertasnya bagus, potongannya rapi. CS juga ramah saat diajak diskusi desain." },
    { name: "Kopi Senja (UMKM)", rating: 4, text: "Sering cetak stiker cup dan brosur promosi di sini. Harganya bersahabat untuk UMKM dan selalu tepat waktu." }
  ],
  galleryPhotos: [
    "./images/galeri-1.webp",
    "./images/galeri-2.webp",
    "./images/galeri-3.webp",
    "./images/galeri-4.webp"
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToForm = () => {
    document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const category = formData.get('category');
    const quantity = formData.get('quantity');
    const notes = formData.get('notes');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%0A%0ASaya%20ingin%20konsultasi/pesan%20cetak:%0A-%20Jenis:%20${category}%0A-%20Jumlah:%20${quantity}%0A-%20Catatan/Link%20Desain:%20${notes}%0A%0AMohon%20infokan%20total%20harga%20dan%20prosesnya.%20Terima%20kasih.`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank');
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank');
  };

  const renderCatalogIcon = (iconName) => {
    switch(iconName) {
      case 'Printer': return <Printer size={20} />;
      case 'Palette': return <Palette size={20} />;
      case 'FileText': return <FileText size={20} />;
      case 'ImageIcon': return <ImageIcon size={20} />;
      case 'PenTool': return <PenTool size={20} />;
      default: return <Check size={20} />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #F1F5F9;
          color: #0F172A;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Brand Colors: Primary (Indigo #4F46E5), Accent (Amber #F59E0B) */
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-[#0C4A8E]">
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-slate-900/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-slate-900/60 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-3xl p-2.5 bg-white backdrop-blur-md mb-6 shadow-2xl border border-white/40 rotate-3 hover:rotate-0 transition-all duration-300 flex items-center justify-center">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-2 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-[#F26522] font-bold text-sm tracking-widest uppercase mb-4">
              {pageData.title}
            </p>
            <p className="text-slate-300 font-light text-sm leading-relaxed mb-8 max-w-[95%]">
              {pageData.description}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
              <a 
                href={pageData.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-semibold"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a 
                href={pageData.links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-semibold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="col-span-2 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-semibold"
              >
                <MapPin size={18} /> Lokasi Kami
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#F26522] text-white rounded-2xl font-bold text-[14px] uppercase tracking-wide hover:bg-[#d9581a] transition-all shadow-[0_8px_30px_rgba(242,101,34,0.4)]"
            >
              Mulai Pesanan
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {}
        <section className="py-6 px-6 bg-[#0F172A] shadow-inner border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-3 w-full max-w-md mx-auto">
            {pageData.highlights.map((loc, idx) => (
              <span key={idx} className="flex items-center gap-1.5 px-4 py-2 bg-slate-800/80 rounded-full border border-slate-700 text-[11px] text-slate-200 font-bold uppercase tracking-wide shadow-sm">
                <Clock size={14} className="text-[#F26522]" />
                {loc.time} <span className="opacity-70 font-medium">{loc.place}</span>
              </span>
            ))}
          </div>
        </section>

        {}
        <section className="py-12 px-6 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0C4A8E]">
              <Printer size={20} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Tentang Kami</h2>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm mb-6">
            <p className="text-slate-600 text-[14px] leading-relaxed mb-4">
              {pageData.about}
            </p>
            <div className="w-12 h-1 bg-[#F26522] rounded-full mb-4"></div>
            <h3 className="text-slate-900 font-bold text-lg mb-2">Perjalanan Kami</h3>
            <p className="text-slate-600 text-[14px] leading-relaxed">
              {pageData.history}
            </p>
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-slate-50 border-t border-b border-slate-200">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#F26522]">
                <ShoppingBag size={20} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Katalog Produk</h2>
            </div>
            <p className="text-slate-500 text-[13px] ml-14">Melayani berbagai macam kebutuhan cetak Anda.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {pageData.catalog.map((cat, idx) => {
              const isLastOdd = idx === pageData.catalog.length - 1 && pageData.catalog.length % 2 !== 0;
              return (
                <div key={idx} className={`p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#0C4A8E] hover:shadow-md transition-all group ${isLastOdd ? 'col-span-2 flex flex-row items-center gap-4' : 'flex flex-col gap-3'}`}>
                  <div className="bg-slate-100 p-2.5 rounded-xl text-slate-600 w-fit shrink-0 group-hover:bg-blue-50 group-hover:text-[#0C4A8E] transition-colors">
                    {renderCatalogIcon(cat.icon)}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-800 leading-tight mb-1">{cat.name}</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">{cat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold text-slate-900 mb-4 ml-2">Portofolio Cetak</h3>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
              {pageData.galleryPhotos.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => openLightbox(pageData.galleryPhotos, idx)}
                  className="snap-center shrink-0 w-[180px] aspect-[4/5] rounded-[1rem] overflow-hidden cursor-pointer relative group border border-slate-200 shadow-sm bg-white"
                >
                  <img 
                    src={img} 
                    alt={"Galeri Printora " + (idx + 1)} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DAFTAR HARGA */}
        <section className="py-10 px-6 bg-white">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <FileText size={20} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Daftar Harga</h2>
            </div>
            <p className="text-slate-500 text-[13px] ml-13">Estimasi harga cetak terpopuler dengan kualitas terbaik.</p>
          </div>
          
          <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full border-collapse">
              <tbody>
                {pageData.pricing.map((price, idx) => (
                  <tr 
                    key={idx} 
                    className={`transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                    } hover:bg-blue-50/30 ${
                      idx !== pageData.pricing.length - 1 ? 'border-b border-slate-100' : ''
                    }`}
                  >
                    <td className="py-3.5 pl-4 sm:pl-5 font-bold text-slate-800 text-[13px] sm:text-[14px] whitespace-nowrap">
                      {price.item}
                    </td>
                    <td className="py-3.5 px-1 sm:px-2 w-[72px] sm:w-[80px]">
                      <span className="block text-center text-[10px] sm:text-[11px] font-semibold text-slate-500 bg-slate-100/90 px-1.5 py-0.5 rounded-md border border-slate-200/70 whitespace-nowrap">
                        {price.spec}
                      </span>
                    </td>
                    <td className="py-3.5 pl-2 text-right font-extrabold text-[#0C4A8E] text-[13px] sm:text-[15px] tabular-nums whitespace-nowrap">
                      {price.price}
                    </td>
                    <td className="py-3.5 pr-4 sm:pr-5 pl-1.5 text-left font-medium text-slate-400 text-[11px] sm:text-[12px] whitespace-nowrap w-[42px] sm:w-[48px]">
                      {price.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 mt-4 text-center italic">*Harga dapat berubah sewaktu-waktu tanpa pemberitahuan.</p>
        </section>

        {/* LOKASI WORKSHOP */}
        <section className="py-10 px-6 bg-[#0C4A8E] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#F26522]">
              <Map size={20} />
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight">Lokasi Workshop</h2>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative z-10">
            <h3 className="font-bold text-lg mb-2 text-slate-100">{pageData.name}</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed flex items-start gap-2">
              <MapPin size={16} className="text-[#F26522] shrink-0 mt-0.5" />
              {pageData.address}
            </p>
            <a 
              href={pageData.links.maps} 
              target="_blank" 
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[13px] font-bold rounded-xl transition-colors"
            >
              Buka di Google Maps
            </a>
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-white border-b border-slate-200">
           <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <MessageCircle size={20} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Tanya Jawab</h2>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faq.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-800 text-[14px] pr-4">{item.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp size={20} className="text-[#0C4A8E] shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-4 pb-4 text-[13px] text-slate-600 leading-relaxed transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'block' : 'hidden'}`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-slate-50 border-b border-slate-200">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                <Quote size={20} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Kata Pelanggan</h2>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar mt-4">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#F26522] text-[#F26522]" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0C4A8E] flex items-center justify-center text-white font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-slate-800">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ORDER FORM */}
        <section id="order-form" className="py-12 px-6 bg-[#0C4A8E] text-white">
          <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26522]/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 mb-8 text-center">
              <h2 className="text-2xl font-extrabold text-white mb-2">Mulai Konsultasi Cetak</h2>
              <p className="text-slate-400 text-[13px] leading-relaxed">Isi form di bawah ini, admin kami akan merespon via WhatsApp untuk konfirmasi pesanan & desain.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wide ml-1">Nama / Nama Usaha</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik di sini..."
                  className="w-full bg-slate-900/50 border border-white/20 rounded-xl px-4 py-3.5 text-[14px] text-white placeholder-slate-400 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wide ml-1">Kategori Cetakan</label>
                <select 
                  name="category" 
                  required
                  className="w-full bg-slate-900/50 border border-white/20 rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-all appearance-none"
                >
                  <option value="" className="text-slate-900">Pilih kebutuhan Anda...</option>
                  <option value="Spanduk / Banner" className="text-slate-900">Spanduk / Banner</option>
                  <option value="Kartu Nama" className="text-slate-900">Kartu Nama</option>
                  <option value="Brosur / Flyer" className="text-slate-900">Brosur / Flyer</option>
                  <option value="Stiker Label" className="text-slate-900">Stiker Label kemasan</option>
                  <option value="Merchandise (Mug/Kaos/Pin)" className="text-slate-900">Merchandise (Mug/Kaos/Pin)</option>
                  <option value="Lainnya" className="text-slate-900">Lainnya (Bisa di diskusikan)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wide ml-1">Jumlah (Estimasi)</label>
                <input 
                  type="text" 
                  name="quantity" 
                  required
                  placeholder="Cth: 2 Banner ukuran 2x1m / 5 Box Kartu Nama"
                  className="w-full bg-slate-900/50 border border-white/20 rounded-xl px-4 py-3.5 text-[14px] text-white placeholder-slate-400 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wide ml-1">Keterangan / Link GDrive Desain</label>
                <textarea 
                  name="notes" 
                  rows="3"
                  placeholder="Opsional, jelaskan detail atau tempel link desain Anda..."
                  className="w-full bg-slate-900/50 border border-white/20 rounded-xl px-4 py-3.5 text-[14px] text-white placeholder-slate-400 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-[#25D366] text-slate-900 font-extrabold text-[14px] tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition-colors shadow-lg"
              >
                Kirim via WhatsApp
                <MessageCircle size={20} className="fill-current" />
              </button>
            </form>
          </div>
        </section>

        {}
        <footer className="pt-10 pb-16 text-center flex flex-col items-center justify-center mx-6 bg-white">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-4 p-2 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-slate-900 text-sm tracking-tight">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-[#0C4A8E] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#0C4A8E] backdrop-blur-xl border border-blue-400/50 rounded-2xl text-white shadow-[0_10px_40px_rgba(12,74,142,0.4)] hover:bg-[#09386c] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-white">Order Cetak Sekarang</span>
            <div className="bg-[#F26522] text-white p-2 rounded-xl">
              <Printer size={18} />
            </div>
          </button>
        </div>

      </main>

      {}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Lightbox View" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-slate-900 font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-500 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                <img 
                  src="./og-image.png" 
                  alt="SEO Social Share Preview" 
                  className="w-full h-full object-cover object-top" 
                />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] text-white font-bold tracking-wide uppercase">
                  Pratinjau Tautan
                </span>
              </div>
              <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-slate-900 font-bold text-[14px] leading-tight">Printora</h4>
                  <p className="text-slate-500 text-[11px] leading-tight mt-0.5">Solusi Cetak Cepat, Tepat, & Berkualitas</p>
                </div>
                <span className="text-[11px] font-bold text-[#0C4A8E] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  Palangka Raya
                </span>
              </div>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all shadow-sm border border-slate-200"
                >
                  {copied ? <Check size={26} className="text-green-600" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToTwitter}
                  className="w-[60px] h-[60px] rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToFacebook}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToWhatsApp}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-200 mb-4"></div>
            
            <div className="flex flex-col items-center text-center">
              <h5 className="text-slate-900 font-bold text-[13px] mb-1">Ikuti Kami</h5>
              <p className="text-slate-500 text-[11px] mb-4">Follow media sosial kami untuk lihat portofolio terbaru.</p>
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="w-full py-3 bg-[#0C4A8E] text-white text-sm font-bold rounded-xl hover:bg-[#09386c] transition-colors">
                Kunjungi Instagram
              </a>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}