import { useEffect } from "react";
import { Link } from "wouter";

export default function Project2() {
  useEffect(() => {
    console.log("📂 Project 2: Toko Online Sederhana dibuka");
    console.log("🛒 Teknologi: HTML, CSS, JavaScript (DOM Manipulation)");
  }, []);

  const handleDemo = () => {
    alert("Demo Project 2: Toko Online Sederhana\n\nProject ini mensimulasikan halaman toko online dengan fitur katalog produk dan keranjang belanja. Pengguna dapat menambah dan menghapus produk dari keranjang secara real-time menggunakan JavaScript.");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f0f7ff" }}>
      {/* Header */}
      <header className="project-page-header" style={{
        background: "linear-gradient(135deg, #065f46 0%, #059669 50%, #34d399 100%)"
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🛒</div>
          <h1>Toko Online Sederhana</h1>
          <p style={{ opacity: 0.9, fontSize: "1rem" }}>Project #2 — Pemrograman Web</p>
        </div>
      </header>

      <main style={{ maxWidth: 750, margin: "0 auto", padding: "2rem 1rem" }}>
        <div className="project-detail-card">

          {/* Deskripsi */}
          <h2 className="section-title">📋 Deskripsi Project</h2>
          <div className="desc-card" style={{ marginBottom: "1.5rem", borderLeftColor: "#059669" }}>
            <p>
              Toko Online Sederhana adalah aplikasi web e-commerce ringan yang dibuat untuk mensimulasikan
              pengalaman belanja online. Project ini merupakan implementasi lanjutan dari pemahaman HTML,
              CSS, dan JavaScript, dengan fokus pada manipulasi DOM dan event handling.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Pengguna dapat melihat katalog produk, menambahkan produk ke keranjang belanja,
              mengubah jumlah item, dan melihat total harga secara otomatis — semua dilakukan
              menggunakan JavaScript murni tanpa library tambahan.
            </p>
          </div>

          {/* Teknologi */}
          <h2 className="section-title">🛠️ Teknologi yang Digunakan</h2>
          <div style={{ marginBottom: "1.5rem" }}>
            {["HTML5", "CSS3", "JavaScript ES6", "DOM Manipulation", "LocalStorage", "CSS Flexbox"].map(t => (
              <span key={t} className="tech-tag" style={{ background: "#d1fae5", color: "#065f46" }}>{t}</span>
            ))}
          </div>

          {/* Fitur */}
          <h2 className="section-title">✨ Fitur Utama</h2>
          <div style={{ marginBottom: "1.5rem" }}>
            {[
              "Katalog produk dengan gambar, nama, dan harga",
              "Tombol 'Tambah ke Keranjang' pada setiap produk",
              "Keranjang belanja real-time dengan jumlah & subtotal",
              "Fitur hapus item dari keranjang",
              "Perhitungan total harga otomatis",
              "Filter produk berdasarkan kategori",
              "Penyimpanan keranjang dengan localStorage",
            ].map(f => (
              <div key={f} className="feature-item">
                <span className="feature-icon" style={{ color: "#059669" }}>✔</span>
                <span>{f}</span>
              </div>
            ))}
          </div>

          {/* Status */}
          <h2 className="section-title">📈 Status Project</h2>
          <div style={{
            background: "#f0fdf4",
            border: "1px solid #86efac",
            borderRadius: "0.75rem",
            padding: "1rem 1.25rem",
            marginBottom: "1.5rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "center"
          }}>
            <span style={{ fontSize: "1.5rem" }}>✅</span>
            <div>
              <div style={{ fontWeight: 700, color: "#065f46" }}>Selesai</div>
              <div style={{ fontSize: "0.88rem", color: "#047857" }}>Dikerjakan pada: Desember 2025</div>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn-primary" style={{
              background: "linear-gradient(135deg, #065f46, #059669)"
            }} onClick={handleDemo}>
              🔍 Lihat Demo
            </button>
            <Link href="/" className="btn-secondary" style={{ borderColor: "#059669", color: "#065f46" }}>
              ← Kembali ke Halaman Utama
            </Link>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Budi Santoso — SMKN 1 Contoh | XI RPL 1</p>
      </footer>
    </div>
  );
}
