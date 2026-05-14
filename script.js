// Mengambil elemen-elemen yang dibutuhkan
const modal = document.getElementById("gallery-modal");
const modalImg = document.getElementById("img-expanded");
const captionText = document.getElementById("caption");
const closeModal = document.getElementsByClassName("close-modal")[0];

// Mencari semua gambar di dalam gallery-item
const images = document.querySelectorAll(".gallery-item img");

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Mengambil sumber gambar yang diklik
        captionText.innerHTML = this.alt; // Mengambil teks alt sebagai caption
    }
});

// Menutup modal saat tanda (X) diklik
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Menutup modal saat pengguna mengklik di luar gambar
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Mengambil elemen formulir dan popup
const contactForm = document.querySelector('#contact');
const submitBtn = contactForm.querySelector('button');

// Fungsi untuk memunculkan popup
function showCustomPopup() {
    // Membuat elemen popup secara dinamis
    const popup = document.createElement('div');
    popup.className = 'custom-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <i class="fas fa-check-circle"></i>
            <p>Pesan Anda Berhasil Dikirim</p>
            <button id="close-popup">Tutup</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Menghapus popup saat tombol diklik
    document.getElementById('close-popup').onclick = function() {
        popup.remove();
        // Mengosongkan formulir setelah terkirim
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    };
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi sederhana: pastikan tidak ada yang kosong 
    if (name === "" || email === "" || message === "") {
        document.getElementById('alert').textContent = "Semua field harus diisi!";
        document.getElementById('alert').style.display = "block"; // Tampilkan pesan error
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Validasi format email
        document.getElementById('alert').textContent = "Format email tidak valid!";
        document.getElementById('alert').style.display = "block"; // Tampilkan pesan error
    } else if (message.length < 10) { // Validasi panjang pesan
        document.getElementById('alert').textContent = "Pesan harus minimal 10 karakter!";
        document.getElementById('alert').style.display = "block"; // Tampilkan pesan error
    } else if (message.length > 500) { // Validasi panjang pesan
        document.getElementById('alert').textContent = "Pesan tidak boleh lebih dari 500 karakter!";
        document.getElementById('alert').style.display = "block"; // Tampilkan pesan error
    } else if (name.length > 50) { // Validasi panjang nama
        document.getElementById('alert').textContent = "Nama tidak boleh lebih dari 50 karakter!";
        document.getElementById('alert').style.display = "block"; // Tampilkan pesan error
    } else if (email.length > 100) { // Validasi panjang email
        document.getElementById('alert').textContent = "Email tidak boleh lebih dari 100 karakter!";
        document.getElementById('alert').style.display = "block"; // Tampilkan pesan error
    } else if (/[<>]/.test(name) || /[<>]/.test(email) || /[<>]/.test(message)) { // Validasi karakter berbahaya
        document.getElementById('alert').textContent = "Input tidak boleh mengandung karakter < atau >!";
        document.getElementById('alert').style.display = "block"; // Tampilkan pesan error
    } else if (/(https?:\/\/[^\s]+)/.test(message)) { // Validasi link dalam pesan
        document.getElementById('alert').textContent = "Pesan tidak boleh mengandung link!";
        document.getElementById('alert').style.display = "block"; // Tampilkan pesan error
    } else if (/(script|onerror|onload|onclick|onmouseover|onfocus|onblur)/i.test(name) || /(script|onerror|onload|onclick|onmouseover|onfocus|onblur)/i.test(email) || /(script|onerror|onload|onclick|onmouseover|onfocus|onblur)/i.test(message)) { // Validasi script dalam input
        document.getElementById('alert').textContent = "Input tidak boleh mengandung kode berbahaya!";
        document.getElementById('alert').style.display = "block"; // Tampilkan pesan error
    } else {
        showCustomPopup();
    }
});

// --- 1. Efek Scroll Halus (Smooth Scroll) ---
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Menyesuaikan tinggi navbar
                behavior: 'smooth'
            });
        }
    });
});

// --- 2. Fitur Scroll to Top ---
// Menciptakan tombol secara dinamis
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollTopBtn.id = 'scrollToTop';
document.body.appendChild(scrollTopBtn);

// Menampilkan tombol saat di-scroll lebih dari 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Fungsi untuk kembali ke atas
scrollTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
