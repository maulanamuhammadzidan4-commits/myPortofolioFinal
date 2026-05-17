document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("gallery-modal");
    const modalImg = document.getElementById("img-expanded");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close-modal");

    // Tangkap semua gambar di dalam kelas kartu .img-gallery
    const images = document.querySelectorAll(".img-gallery img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            // Aktifkan display flex via class active
            modal.classList.add("active");
            // Masukkan sumber gambar yang diklik ke gambar modal
            modalImg.src = img.src;
            // Ambil text deskripsi dari atribut 'alt' gambar
            captionText.innerHTML = img.alt;
        });
    });

    // Fungsi menutup modal saat tombol X diklik
    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Fungsi menutup modal saat area luar gambar diklik
    modal.addEventListener("click", (e) => {
        // Jika yang diklik adalah background modal (bukan foto atau caption)
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});