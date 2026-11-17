# YUDSTORE — Store Top Up Game

Website store top up game berbahasa Indonesia dengan tema gaming gelap dan aksen neon-lime. Dibuat sebagai **prototipe frontend statis**: seluruh alur top up dapat dicoba, tetapi pembayaran hanya disimulasikan dan tidak ada uang yang diproses.

## Menjalankan

Tidak perlu build step atau instalasi dependency.

```bash
cd /root/proyek
python3 -m http.server 8000
```

Buka `http://127.0.0.1:8000/`.

Cara lain: buka `index.html` langsung di browser. Namun menjalankan lewat local server lebih disarankan agar font dan aset termuat konsisten.

## Alur demo

1. Pilih salah satu dari 8 game di katalog.
2. Isi data akun sesuai game (misalnya User ID + Zone ID untuk Mobile Legends).
3. Pilih nominal top up dan metode pembayaran.
4. Gunakan voucher **`KILAT10`** untuk diskon 10% (maksimal Rp 20.000).
5. Centang konfirmasi, lalu klik **Lanjut ke Pembayaran**.
6. Di halaman pembayaran, klik **Simulasikan Pembayaran** untuk melihat struk berhasil.
7. Buka **Cek Pesanan** untuk melacak pesanan memakai ID `KLT-YYYYMMDD-XXXX` atau lewat daftar pesanan terakhir.

Pesanan hanya disimpan di `localStorage` browser pada key `kilat_orders_v1`. Untuk mengulang demo dari awal, hapus data situs lewat DevTools atau jalankan di jendela incognito.

## Fitur

- Landing page responsif: hero, katalog, promo, cara top up, metode pembayaran, ulasan, FAQ, CTA, dan footer.
- Pencarian dan filter kategori game.
- Modal order dengan validasi data akun, nominal, dan persetujuan.
- Voucher, ringkasan harga live, dan simulasi checkout.
- Halaman pembayaran dengan countdown 15 menit, QR simulasi, kode VA/e-wallet/toko, dan tombol simulasi.
- Struk pembayaran berhasil serta tampilan pesanan kedaluwarsa.
- Pelacakan pesanan dan riwayat pesanan lokal.
- Aset cover game berupa SVG lokal, tanpa gambar eksternal.

## Struktur file

```text
index.html                Markup halaman, dialog, dan icon sprite
app.js                    Data game, katalog, checkout, pembayaran, pelacakan
styles.css                Design system, header, hero, katalog
styles-sections.css       Promo, langkah, pembayaran, ulasan, FAQ, CTA, footer
styles-order.css          Modal order dan form
styles-payment.css        Halaman pembayaran, struk, cek pesanan, toast
styles-responsive.css     Breakpoint responsif dan animasi reveal
assets/covers/            Cover SVG tiap game
assets/favicon.svg        Favicon
```

## Catatan

- Pembayaran, QR, nomor VA, dan kode pembayaran **tidak nyata**.
- Tidak ada backend, autentikasi, atau integrasi payment gateway.
- Font dimuat dari Google Fonts; tanpa koneksi internet browser akan memakai font fallback.
- Harga, paket, dan ulasan di situs ini adalah data contoh untuk keperluan demo.
