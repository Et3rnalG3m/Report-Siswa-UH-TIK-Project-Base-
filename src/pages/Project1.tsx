import { useEffect } from "react";
import { Link } from "wouter";

export default function Project1() {
  useEffect(() => {
    console.log("📂 Project 1: Website Portofolio dibuka");
    console.log("🔧 Teknologi: HTML, CSS, JavaScript");
  }, []);

  const handleDemo = () => {
    alert("Demo Project 1: Website Portofolio\n\nProject ini adalah website portofolio pribadi yang menampilkan biodata, keahlian, dan karya-karya saya. Dibangun menggunakan HTML5, CSS3, dan JavaScript vanilla.");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f0f7ff" }}>
      {/* Header */}
      <header className="project-page-header">
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌐</div>
          <h1>Website Portofolio</h1>
          <p style={{ opacity: 0.9, fontSize: "1rem" }}>Project #1 — Pemrograman Web</p>
        </div>
      </header>

      <main style={{ maxWidth: 750, margin: "0 auto", padding: "2rem 1rem" }}>
        <div className="project-detail-card">

          {/* Deskripsi */}
          <h2 className="section-title">📋 Deskripsi Project</h2>
          <div className="desc-card" style={{ marginBottom: "1.5rem" }}>
            <p>
              Website Portofolio Pribadi adalah proyek pertama saya dalam mata pelajaran Pemrograman Web.
              Website ini dirancang untuk menampilkan identitas diri, keahlian teknis, pengalaman belajar,
              serta kumpulan karya terbaik saya secara profesional dan menarik.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Tujuan utama project ini adalah menerapkan konsep HTML5 semantic, CSS Flexbox/Grid,
              dan JavaScript dasar untuk membuat halaman web yang responsif dan interaktif sesuai
              standar modern.
            </p>
          </div>

          {/* Teknologi */}
          <h2 className="section-title">🛠️ Teknologi yang Digunakan</h2>
          <div style={{ marginBottom: "1.5rem" }}>
            {["HTML5", "CSS3", "JavaScript ES6", "Flexbox", "CSS Grid", "Responsive Design"].map(t => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>

          {/* Fitur */}
          <h2 className="section-title">✨ Fitur Utama</h2>
          <div style={{ marginBottom: "1.5rem" }}>
            {[
              "Halaman Hero dengan animasi CSS",
              "Bagian Tentang Saya dengan foto profil",
              "Daftar keahlian dengan progress bar",
              "Galeri proyek yang sudah dikerjakan",
              "Formulir kontak interaktif",
              "Navigasi responsif untuk mobile",
              "Dark/Light mode toggle dengan JavaScript",
            ].map(f => (
              <div key={f} className="feature-item">
                <span className="feature-icon">✔</span>
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
              <div style={{ fontSize: "0.88rem", color: "#047857" }}>Dikerjakan pada: November 2025</div>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={handleDemo}>
              🔍 Lihat Demo
            </button>
            <Link href="/" className="btn-secondary">
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
