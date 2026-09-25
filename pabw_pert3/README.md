# PABW — Aubrey kalea noah — 25523196

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: Daftar karakter game Honkai: Star Rail yang saya mainkan.

- Judul halaman: Koleksi Karakter Honkai: Star Rail
- Deskripsi: Daftar karakter yang saya miliki di game beserta form untuk mencatat perolehan karakter baru.
- Tautan navigasi: Daftar Karakter, Tambah Karakter, Tentang
- Dua bagian utama: Daftar Karakter, Tambah Karakter
- Kolom tabel: Nama Karakter, Path, Elemen
- Kolom form: Nama Karakter, Level, Tanggal Didapat
- Gambar: karakter-hsr.webp

## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #6366F1 (Indigo), dipilih karena memberikan kesan sci-fi yang cocok dengan tema Honkai: Star Rail, namun tetap nyaman dibaca dan lolos uji kontras.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #6366F1 | tombol, tautan, penanda utama |
| --color-fg | #0F172A | warna teks utama (terang) |
| --color-bg | #F8FAFC | latar halaman (terang) |
| --radius-md | 0.5rem | sudut membulat pada tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai saya: mengubah `--color-primary` di satu baris `tokens.css` harus otomatis mengubah warna tombol, tautan, dan elemen fokus di seluruh halaman tanpa menyentuh file lain.