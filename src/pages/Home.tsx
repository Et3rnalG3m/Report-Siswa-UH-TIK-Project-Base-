import { useEffect } from "react";
import { Link } from "wouter";

const nilaiData = [
  { no: 1, materi: "Pengenalan HTML Dasar", nilai: 95 },
  { no: 2, materi: "CSS & Styling Web", nilai: 88 },
  { no: 3, materi: "JavaScript Fundamental", nilai: 82 },
  { no: 4, materi: "Responsif Web Design", nilai: 90 },
  { no: 5, materi: "DOM Manipulation", nilai: 85 },
  { no: 6, materi: "Form & Validasi Input", nilai: 78 },
  { no: 7, materi: "Pengenalan Framework CSS", nilai: 92 },
];

function getNilaiBadge(nilai: number) {
  if (nilai >= 90) return "excellent";
  if (nilai >= 80) return "good";
  return "average";
}

function getNilaiLabel(nilai: number) {
  if (nilai >= 90) return "Sangat Baik";
  if (nilai >= 80) return "Baik";
  return "Cukup";
}

const projects = [
  {
    id: 1,
    icon: "🌐",
    name: "Website Portofolio",
    desc: "Website portofolio pribadi yang menampilkan profil, keahlian, pengalaman, dan proyek-proyek yang telah dikerjakan. Dibangun dengan HTML, CSS, dan JavaScript murni.",
    path: "/project1",
  },
  {
    id: 2,
    icon: "🛒",
    name: "Toko Online Sederhana",
    desc: "Halaman toko online sederhana dengan katalog produk, fitur keranjang belanja, dan tampilan yang responsif untuk berbagai ukuran layar.",
    path: "/project2",
  },
  {
    id: 3,
    icon: "📋",
    name: "Aplikasi To-Do List",
    desc: "Aplikasi manajemen tugas harian berbasis web yang memungkinkan pengguna menambahkan, menandai selesai, dan menghapus tugas secara interaktif.",
    path: "/project3",
  },
];

export default function Home() {
  useEffect(() => {
    console.log("✅ Website Report Siswa berhasil dimuat!");
    console.log("📚 Halaman: Halaman Utama");
    console.log("👤 Siswa: Budi Santoso | Kelas XI RPL 1");

    const timer = setTimeout(() => {
      const greeting = `Selamat datang di Website Report Siswa!\nHalaman ini berisi biodata, nilai, dan project yang telah dikerjakan.`;
      alert(greeting);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const rata =
    nilaiData.reduce((sum, d) => sum + d.nilai, 0) / nilaiData.length;

  return (
    <div style={{ minHeight: "100vh", background: "#f0f7ff" }}>
      {/* Header */}
      <header className="site-header">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1>📖 Report Siswa</h1>
          <p className="subtitle">Mata Pelajaran: Pemrograman Web (TIK)</p>
          <span className="kelas">Kelas XI RPL 1 — SMKN 1 Contoh</span>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>

        {/* Alert Info */}
        <div className="alert-bar" style={{ marginBottom: "2rem" }}>
          <span>ℹ️</span>
          <span>
            Ini adalah laporan hasil belajar semester 1 Tahun Ajaran 2025/2026.
          </span>
        </div>

        {/* Biodata Siswa */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">👤 Biodata Siswa</h2>
          <div className="biodata-card">
            <div
              className="profile-photo"
              style={{ fontSize: "3.5rem" }}
              title="Foto Profil"
            >
              🧑‍🎓
            </div>
            <div className="biodata-list">
              {[
                ["Nama Lengkap", "Budi Santoso"],
                ["Kelas", "XI RPL 1"],
                ["Sekolah", "SMKN 1 Contoh"],
                ["NISN", "0012345678"],
                ["Hobi", "Coding, Membaca, Gaming"],
                ["Cita-cita", "Software Engineer / Web Developer"],
              ].map(([label, value]) => (
                <div className="biodata-row" key={label}>
                  <span className="biodata-label">{label}</span>
                  <span style={{ color: "#475569" }}>: {value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deskripsi Singkat */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">📝 Deskripsi Singkat</h2>
          <div className="desc-card">
            <p>
              Halo! Nama saya <strong>Budi Santoso</strong>, seorang siswa kelas
              XI RPL 1 di SMKN 1 Contoh. Saya memiliki minat yang besar dalam
              dunia teknologi informasi, khususnya di bidang{" "}
              <strong>pengembangan web (web development)</strong>. Sejak duduk di
              bangku kelas X, saya mulai belajar dasar-dasar HTML dan CSS, dan
              kini saya semakin tertarik untuk mendalami JavaScript serta
              framework modern.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Pengalaman belajar TIK saya dimulai dari membuat halaman web
              sederhana, kemudian berkembang menjadi pembuatan aplikasi web yang
              lebih interaktif. Tujuan saya mempelajari pemrograman web adalah
              untuk dapat menciptakan aplikasi yang bermanfaat bagi masyarakat
              dan kelak bekerja sebagai <strong>Software Engineer</strong> di
              perusahaan teknologi terkemuka.
            </p>
          </div>
        </section>

        {/* Tabel Nilai */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">📊 Tabel Nilai Semester 1</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="nilai-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Materi</th>
                  <th>Nilai</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {nilaiData.map((item) => (
                  <tr key={item.no}>
                    <td
                      style={{
                        fontWeight: 600,
                        color: "#1e40af",
                        width: "50px",
                      }}
                    >
                      {item.no}
                    </td>
                    <td>{item.materi}</td>
                    <td>
                      <span
                        className={`nilai-badge ${getNilaiBadge(item.nilai)}`}
                      >
                        {item.nilai}
                      </span>
                    </td>
                    <td
                      style={{
                        fontSize: "0.88rem",
                        color: "#64748b",
                        fontStyle: "italic",
                      }}
                    >
                      {getNilaiLabel(item.nilai)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ background: "#eff6ff" }}>
                  <td
                    colSpan={2}
                    style={{
                      fontWeight: 700,
                      color: "#1e40af",
                      padding: "0.75rem 1rem",
                    }}
                  >
                    Rata-rata Nilai
                  </td>
                  <td colSpan={2} style={{ padding: "0.75rem 1rem" }}>
                    <span className={`nilai-badge ${getNilaiBadge(rata)}`}>
                      {rata.toFixed(1)}
                    </span>
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        fontSize: "0.85rem",
                        color: "#64748b",
                        fontStyle: "italic",
                      }}
                    >
                      — {getNilaiLabel(rata)}
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Project Cards */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">🚀 Project Website</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {projects.map((proj) => (
              <div className="project-card" key={proj.id}>
                <div className="project-card-header">
                  <div className="project-icon">{proj.icon}</div>
                  <h3>{proj.name}</h3>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      opacity: 0.8,
                      marginTop: "0.25rem",
                    }}
                  >
                    Project #{proj.id}
                  </div>
                </div>
                <div className="project-card-body">
                  <p>{proj.desc}</p>
                  <Link href={proj.path} className="btn-primary">
                    Lihat Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Budi Santoso — SMKN 1 Contoh | XI RPL 1</p>
        <p style={{ marginTop: "0.25rem", fontSize: "0.8rem" }}>
          Dibuat sebagai tugas Pemrograman Web Semester 1
        </p>
      </footer>
    </div>
  );
}
