# METEORA Website v1

Landing page original untuk stasiun cuaca portabel METEORA, dengan login demo dan dashboard prototipe. Inspirasi visual dari referensi pengguna; copy, identitas, warna, dan struktur konten ditulis ulang untuk produk METEORA.

## Jalankan di Windows PowerShell

Buka terminal di folder yang memiliki `package.json`, lalu:

```powershell
npm install
npm run dev
```

Buka `http://localhost:3000`.

Jika terminal tidak mengenali `node`, jalankan ini terlebih dahulu (sesuaikan lokasi instalasi Node.js):
```powershell
$env:Path = "D:\node js;" + $env:Path
node -v
npm -v
```

## Halaman
- `/` landing page
- `/login` login demo
- `/dashboard` dashboard sensor, peta, grafik, riwayat CSV, prediksi ilustratif

## Akun demo
- Username: `Meteora1234`
- Password: `Meteora12345`

Akun ini hanya demo lokal. Login menggunakan sessionStorage dan nilai demo frontend, bukan autentikasi aman. Jangan deploy dengan kredensial ini sebagai mekanisme keamanan; sebelum publikasi, pindahkan autentikasi ke backend atau provider autentikasi.

## Status integrasi
Data sensor, koordinat GPS, klasifikasi, dan prediksi masih simulasi. Peta memakai komponen Leaflet yang sudah ada dari versi project sebelumnya. Belum ada koneksi ESP32, database, atau model AI terlatih. Prediksi yang tampil hanya ilustrasi tren, bukan prakiraan cuaca nyata.

## Identitas visual
- Navy: `#102D46`
- Hijau: `#15966A`
- Putih: `#FFFFFF`
- Biru muda: `#EAF3FF`
Logo ada di `public/images/meteora-logo.png`.
