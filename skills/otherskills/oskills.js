document.addEventListener("DOMContentLoaded", () => {
    // Ambil semua elemen isi grafik (progress fill)
    const progressFills = document.querySelectorAll(".progress-fill");

    // Jalankan animasi pengisian setelah jeda singkat agar transisinya terlihat halus
    setTimeout(() => {
        progressFills.forEach(fill => {
            // Mengambil nilai target persen yang kita simpan di atribut data-progress pada HTML
            const targetProgress = fill.getAttribute("data-progress");
            
            // Terapkan nilai tersebut ke lebar CSS elemen
            fill.style.width = targetProgress;
        });
    }, 300);
});