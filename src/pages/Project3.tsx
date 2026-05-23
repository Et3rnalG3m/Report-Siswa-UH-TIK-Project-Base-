import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Project3() {
  const [demoTasks, setDemoTasks] = useState([
    { id: 1, text: "Belajar HTML dasar", done: true },
    { id: 2, text: "Latihan CSS styling", done: true },
    { id: 3, text: "Buat project portofolio", done: false },
    { id: 4, text: "Pelajari JavaScript DOM", done: false },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("📂 Project 3: Aplikasi To-Do List dibuka");
    console.log("📋 Teknologi: HTML, CSS, JavaScript (State Management)");
  }, []);

  const handleAdd = () => {
    if (!input.trim()) {
      alert("⚠️ Tugas tidak boleh kosong!");
      return;
    }
    setDemoTasks(prev => [
      ...prev,
      { id: Date.now(), text: input.trim(), done: false }
    ]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setDemoTasks(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  };

  const deleteTask = (id: number) => {
    setDemoTasks(prev => prev.filter(t => t.id !== id));
  };

  const doneCount = demoTasks.filter(t => t.done).length;

  return (
    <div style={{ minHeight: "100vh", background: "#f0f7ff" }}>
      {/* Header */}
      <header className="project-page-header" style={{
        background: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #c084fc 100%)"
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>📋</div>
          <h1>Aplikasi To-Do List</h1>
          <p style={{ opacity: 0.9, fontSize: "1rem" }}>Project #3 — Pemrograman Web</p>
        </div>
      </header>

      <main style={{ maxWidth: 750, margin: "0 auto", padding: "2rem 1rem" }}>
        <div className="project-detail-card">

          {/* Deskripsi */}
          <h2 className="section-title">📋 Deskripsi Project</h2>
          <div className="desc-card" style={{ marginBottom: "1.5rem", borderLeftColor: "#8b5cf6" }}>
            <p>
              Aplikasi To-Do List adalah aplikasi manajemen tugas berbasis web yang memungkinkan
              pengguna mengelola daftar pekerjaan harian secara efisien. Project ini adalah
              implementasi nyata dari konsep manipulasi DOM, event handling, dan manajemen state
              menggunakan JavaScript.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Aplikasi ini menyimpan data tugas di localStorage sehingga data tetap tersimpan
              meski browser ditutup dan dibuka kembali — tanpa menggunakan database maupun server.
            </p>
          </div>

          {/* Teknologi */}
          <h2 className="section-title">🛠️ Teknologi yang Digunakan</h2>
          <div style={{ marginBottom: "1.5rem" }}>
            {["HTML5", "CSS3", "JavaScript ES6", "localStorage", "Event Handling", "Array Methods"].map(t => (
              <span key={t} className="tech-tag" style={{ background: "#ede9fe", color: "#6d28d9" }}>{t}</span>
            ))}
          </div>

          {/* Demo Interaktif */}
          <h2 className="section-title">🎮 Demo Interaktif</h2>
          <div style={{
            background: "#faf5ff",
            border: "1px solid #c4b5fd",
            borderRadius: "1rem",
            padding: "1.25rem",
            marginBottom: "1.5rem"
          }}>
            <p style={{ fontSize: "0.88rem", color: "#7c3aed", marginBottom: "1rem", fontWeight: 600 }}>
              Coba langsung demo mini aplikasi To-Do List:
            </p>

            {/* Input */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleAdd()}
                placeholder="Tambah tugas baru..."
                style={{
                  flex: 1,
                  padding: "0.6rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1.5px solid #c4b5fd",
                  fontSize: "0.93rem",
                  outline: "none",
                  fontFamily: "inherit"
                }}
              />
              <button
                className="btn-primary"
                onClick={handleAdd}
                style={{ background: "linear-gradient(135deg, #6d28d9, #8b5cf6)", whiteSpace: "nowrap" }}
              >
                + Tambah
              </button>
            </div>

            {/* Progress */}
            <div style={{ marginBottom: "0.75rem", fontSize: "0.88rem", color: "#7c3aed" }}>
              ✅ {doneCount} dari {demoTasks.length} tugas selesai
            </div>

            {/* Task list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {demoTasks.map(task => (
                <div key={task.id} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.6rem 0.75rem",
                  background: task.done ? "#f3f0ff" : "white",
                  borderRadius: "0.5rem",
                  border: "1px solid #e9d5ff",
                  transition: "all 0.15s"
                }}>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                    style={{ width: 16, height: 16, accentColor: "#8b5cf6", cursor: "pointer" }}
                  />
                  <span style={{
                    flex: 1,
                    fontSize: "0.92rem",
                    color: task.done ? "#a78bfa" : "#374151",
                    textDecoration: task.done ? "line-through" : "none"
                  }}>
                    {task.text}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ef4444",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      padding: "0.2rem 0.4rem",
                      borderRadius: "0.25rem",
                      transition: "background 0.15s"
                    }}
                    title="Hapus tugas"
                  >
                    🗑️
                  </button>
                </div>
              ))}
              {demoTasks.length === 0 && (
                <div style={{ textAlign: "center", color: "#a78bfa", padding: "1rem", fontSize: "0.9rem" }}>
                  Belum ada tugas. Tambahkan tugas di atas!
                </div>
              )}
            </div>
          </div>

          {/* Fitur */}
          <h2 className="section-title">✨ Fitur Utama</h2>
          <div style={{ marginBottom: "1.5rem" }}>
            {[
              "Tambah tugas baru dengan input teks",
              "Tandai tugas sebagai selesai / belum selesai",
              "Hapus tugas yang tidak diperlukan",
              "Counter progres tugas yang selesai",
              "Penyimpanan otomatis ke localStorage",
              "Filter tugas: Semua, Aktif, Selesai",
              "Animasi transisi saat tugas berubah status",
            ].map(f => (
              <div key={f} className="feature-item">
                <span className="feature-icon" style={{ color: "#8b5cf6" }}>✔</span>
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
              <div style={{ fontSize: "0.88rem", color: "#047857" }}>Dikerjakan pada: Januari 2026</div>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/" className="btn-secondary" style={{ borderColor: "#8b5cf6", color: "#6d28d9" }}>
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
