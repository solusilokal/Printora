# Printora - Mini Website Percetakan

Solusi Cetak Cepat, Tepat, & Berkualitas di Palangka Raya.

## Cara Preview Halaman

Terdapat **2 cara** untuk melihat / mem-preview mini website ini:

### 1. Cara Paling Cepat (Langsung Double Click)
Buka file **`preview.html`** langsung dengan browser Anda (Chrome, Edge, Firefox, dll).
- Tidak memerlukan command line / instalasi Node.js tambahan.
- Menggunakan CDN React 18, Tailwind CSS, dan komponen ikon Lucide.

### 2. Menggunakan Vite Dev Server (Hot-Reload)
Jika Anda ingin mengembangkan atau mengedit dengan hot-reload:
- **Opsi A:** Cukup double-click file **`start-dev.bat`**. Browser akan otomatis terbuka di `http://localhost:3000`.
- **Opsi B:** Buka terminal / command prompt di folder ini, lalu jalankan:
  ```bash
  npm run dev
  ```
  atau di PowerShell Windows:
  ```powershell
  npm.cmd run dev
  ```

### Build Production
Untuk menghasilkan file statis siap rilis (di folder `dist`):
```bash
npm.cmd run build
```

## Fitur yang Tersedia
- Hero section dengan direct CTA ke WhatsApp dan lokasi Maps
- Katalog produk interaktif
- Galeri / Portofolio cetak dengan Lightbox popup
- Tabel daftar harga terperinci
- Accordion Tanya Jawab (FAQ)
- Testimoni pelanggan dengan rating bintang
- Formulir pesanan/konsultasi instan terintegrasi WhatsApp
- Modal Bagikan (Share) ke WhatsApp, Facebook, X (Twitter), dan Salin Tautan
- Sticky order bar pada scroll
