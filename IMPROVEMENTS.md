# BARA - Daftar Improvement & Perbaikan

Dokumen ini berisi daftar ide perbaikan untuk website PT. Bara Sakti Ziwa Abadi.

---

## Tabel Improvement

| # | Kategori | Masalah / Ide | Penjelasan | Prioritas |
|---|----------|---------------|------------|-----------|
| 1 | **Bug - Fungsional** | Form contact tidak benar-benar mengirim pesan ⏳ **PENDING** | Saat ini form hanya menampilkan animasi "Message Sent!" palsu. Perlu diintegrasikan dengan EmailJS (gratis, connect langsung ke Gmail). Tidak perlu domain/email berbayar. Menunggu owner daftar di emailjs.com dan berikan Service ID, Template ID, Public Key. | Tinggi |
| 2 | **Bug - UX** | ~~Nomor telepon, WhatsApp, dan email tidak bisa diklik~~ ✅ **DONE** | Card kontak diubah dari `div` menjadi `<a>` dengan href `tel:`, `https://wa.me/`, dan `mailto:`. | Tinggi |
| 3 | **Konten** | ~~Section About dan Services menampilkan konten yang hampir sama~~ ✅ **DONE** | About diubah: card layanan dihapus, diganti dengan narasi perusahaan + 4 card nilai. | Sedang |
| 4 | **Konten** | ~~Tidak ada alamat fisik / lokasi perusahaan~~ ✅ **DONE** | Alamat ditambahkan ke section Contact: Jl. Permai 7 B II No. 26 RT/RW 04/14, Leuwigajah, Cimahi Selatan, Cimahi, Jawa Barat 40543. | Sedang |
| 5 | **Konten** | ~~Angka Stats tidak akurat dengan data nyata~~ ✅ **DONE** | Diubah dari "10+" menjadi "12+" sesuai jumlah customer nyata. | Rendah |
| 6 | **Kode** | ~~Penamaan variabel `services` di `About.jsx` membingungkan~~ ✅ **DONE** | Otomatis selesai saat #3 dikerjakan. | Rendah |
| 7 | **UX - Animasi** | ~~Tidak ada animasi scroll-reveal di sebagian besar section~~ ✅ **DONE** | Custom hook `useFadeIn` diterapkan ke semua section. | Sedang |
| 8 | **UX - Navigasi** | ~~Tidak ada indikator section aktif di Navbar~~ ✅ **DONE** | Custom hook `useScrollSpy` — Navbar menyala biru sesuai section aktif. | Sedang |
| 9 | **Konten** | ~~Tidak ada foto / gambar visual perusahaan~~ ✅ **DONE** | 8 foto dipilih dari folder Poto, dipasang di Hero (background), About, dan galeri Services. | Sedang |
| 10 | **UX** | ~~Tidak ada tombol "Back to Top"~~ ✅ **DONE** | Komponen `BackToTop.jsx` — tombol floating muncul setelah scroll 400px. | Rendah |
| 11 | **SEO & Aksesibilitas** | ~~Tidak ada meta tag SEO~~ ✅ **DONE** | Meta description, keywords, Open Graph, Twitter Card ditambahkan di `index.html`. | Sedang |
| 12 | **Konten** | Testimoni / Ulasan Klien — **SKIP** | Ditunda menunggu keputusan owner. | Rendah |
| 13 | **Fitur** | ~~Website hanya bahasa Inggris~~ ✅ **DONE** | Sistem bilingual ID/EN dibangun dengan `LangContext` + file `lang.js`. Default bahasa Indonesia. Tombol toggle EN/ID di Navbar. Semua teks di seluruh komponen sudah diterjemahkan. | Sedang |
| 14 | **Performance** | ~~Foto-foto belum dioptimasi ukurannya~~ ✅ **DONE** | Semua foto diconvert dari JPG ke WebP (quality 80) menggunakan sharp. Hero: 324KB→166KB, rata-rata hemat ~40%. Import di semua komponen diupdate ke `.webp`. | Sedang |
| 15 | **UX** | ~~Tidak ada lazy loading pada gambar~~ ✅ **DONE** | `loading="lazy"` + `decoding="async"` ditambahkan ke semua img. Hero pakai `loading="eager"`. Semua img punya `bg-[#1f2937]` sebagai placeholder warna saat loading. | Rendah |
| 16 | **SEO** | ~~Tidak ada favicon~~ ✅ **DONE** | File favicon diterima dari owner, ditempatkan di `public/favicon.svg` (atau `.ico`/`.png`), dan di-link di `index.html` dengan `<link rel="icon">`. | Rendah |
| 17 | **Deployment** | ~~Website belum punya URL publik~~ ✅ **DONE** | Deploy ke Vercel. Domain `barasakti.com` terhubung — live di https://www.barasakti.com/ dengan SSL otomatis. | Tinggi |
| 18 | **Konten** | ~~Footer copyright hardcoded 2025~~ ✅ **DONE** | Diganti dengan `new Date().getFullYear()` di `lang.js` untuk kedua bahasa — otomatis update setiap tahun. | Rendah |
| 19 | **Konten** | ~~Belum ada video company profile~~ ✅ **DONE** | File video diterima dari owner, ditempatkan di `src/assets/video/company-profile.mp4`. Dipasang di section About sebagai embedded player. | Sedang |
| 20 | **UX** | ~~Tidak ada Google Maps embed di section Contact~~ ✅ **DONE** | `<iframe>` embed Google Maps ditambahkan di kolom kiri Contact, di bawah info kontak. Tidak perlu API key. | Sedang |
| 21 | **UX - Mobile** | ~~Navbar mobile tidak close saat klik di luar menu~~ ✅ **DONE** | `useRef` + `mousedown` listener di `Navbar.jsx` — menu otomatis tutup saat klik di luar area navbar. | Rendah |
| 22 | **Performance** | Video company profile belum dioptimasi ⏳ **PENDING** | File MP4 bisa sangat besar. Rekomen: compress dengan HandBrake (gratis) ke max ~30MB, atau upload ke YouTube dan pakai `<iframe>` embed supaya tidak membebani hosting. | Sedang |
| 23 | **SEO** | ~~URL section tidak update saat scroll~~ ✅ **DONE** | `history.replaceState` ditambahkan di `useScrollSpy.js` — URL otomatis update ke `/#about`, `/#services`, dll saat scroll. | Rendah |
| 24 | **Aksesibilitas** | ~~Tidak ada `aria-label` di tombol hamburger & back-to-top~~ ✅ **DONE** | `aria-label="Buka menu navigasi"` + `aria-expanded` di hamburger `Navbar.jsx`. `BackToTop.jsx` sudah punya `aria-label="Back to top"`. | Rendah |
| 25 | **Email** | Belum ada email domain perusahaan ⏳ **PENDING** | Setup Zoho Mail gratis dengan domain `barasakti.com`. Tambah MX record di DNS registrar, buat akun `info@barasakti.com`. Setelah jadi, connect ke EmailJS untuk form contact. | Sedang |
| 26 | **Deployment** | ~~Auto deploy belum aktif~~ ✅ **DONE** | GitHub repo `nauvalZulfikar/barasakti` sudah connect ke Vercel. Setiap push ke `master` otomatis deploy ke `barasakti.com`. | Tinggi |

---

## Sisa Yang Belum Selesai

| # | Masalah | Yang Harus Dilakukan | Butuh Info | Prioritas |
|---|---------|----------------------|------------|-----------|
| 1 | Form contact tidak mengirim pesan | Daftar EmailJS → connect email domain → pasang Service ID, Template ID, Public Key ke `Contact.jsx` | 3 key dari emailjs.com | Tinggi |
| 22 | Video belum dioptimasi | Compress MP4 dengan HandBrake atau ganti ke YouTube embed | File/link YouTube dari owner | Sedang |
| 25 | Belum ada email domain perusahaan | Setup Zoho Mail gratis → verifikasi domain `barasakti.com` → tambah MX record → buat `info@barasakti.com` | — | Sedang |
