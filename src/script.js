// ================================================
// REPORT SISWA — script.js
// Ananda Osho Manuel | XI-A4 | Kolese Kanisius
// ================================================

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'unknown';

  // Console logs untuk setiap halaman
  console.log(`%c📖 Report Siswa`, 'font-size:16px; font-weight:bold; color:#2563eb;');
  console.log(`%c👤 Ananda Osho Manuel | Kelas XI-A4 | Kolese Kanisius Jakarta`, 'color:#334155;');
  console.log(`%c📄 Halaman: ${page}`, 'color:#64748b;');

  // Halaman utama: alert sambutan
  if (page === 'home') {
    setTimeout(() => {
      alert('Selamat datang di Website Report Siswa!\n\nAnanda Osho Manuel — XI-A4\nKolese Kanisius Jakarta\n\nSemoga bermanfaat!');
    }, 600);

    // Animasi masuk pada setiap card
    const cards = document.querySelectorAll('.card, .project-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity .4s ease, transform .4s ease';
      observer.observe(card);
    });
  }

  // Halaman project: alert demo
  if (page === 'project1') {
    console.log('🌐 Project 1: Homepage HTML dibuka');
    document.getElementById('btn-demo')?.addEventListener('click', () => {
      alert('Demo Project 1: Homepage HTML\n\nHalaman ini merupakan tampilan homepage yang dibuat menggunakan HTML dan CSS. Menampilkan struktur navigasi, hero section, dan konten utama.');
    });
  }

  if (page === 'project2') {
    console.log('🃏 Project 2: Card Game dibuka');
    document.getElementById('btn-demo')?.addEventListener('click', () => {
      alert('Demo Project 2: Card Game\n\nPermainan kartu sederhana berbasis web menggunakan HTML, CSS, dan JavaScript. Pemain dapat membalik kartu dan mencocokkan pasangannya.');
    });
  }

  if (page === 'project3') {
    console.log('⚙️ Project 3: Mini Project dibuka');
    document.getElementById('btn-demo')?.addEventListener('click', () => {
      alert('Demo Project 3: Mini Project\n\nMini project web interaktif yang menggabungkan HTML, CSS, dan JavaScript untuk memberikan pengalaman pengguna yang menarik.');
    });
  }
});
