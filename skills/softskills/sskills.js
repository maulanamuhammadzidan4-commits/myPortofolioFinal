// Data deskripsi untuk masing-masing soft skill
const skillDescriptions = {
    "Critical Thinking": "Saya terbiasa berpikir kritis. Setiap ada informasi baru, saya selalu melakukan cek ulang supaya tidak termakan hoaks dan pengalihan isu. Berkat kebiasaan saya ini juga, saya mampu mencari kesalahan dalam setiap projek yang saya kerjakan.",
    "Problem Solving": "Berkat kebiasaan berpikir kritis saya, saya mampu menemukan masalah. Dan dengan kemampuan penyelesaian masalah saya, saya mampu menemukan cara menyelesaikan masalah tersebut dengan cara yang efisien. Berkat kemampuan ini, saya jadi dapat diandalkan dalam kerjasama tim.",
    "Creativity": "Saya punya pemikiran 'kelemahan adalah kekuatan', yang membuat saya mampu mengubah kelemahan jadi kekuatan. Contoh kasusnya, saat saya ditunjuk jadi seorang sutradara dalam sebuah projek drama, saya mampu mengubah setiap kesalahan kecil dari aktor menjadi sebuah komedi yang mengibur.",
    "Leadership": "Saya punya jiwa kepemimpinan yang bagus, terbukti jika saya diberi tugas kelompok, saya sering ditunjuk sebagai ketua kelompok itu, dan saya mampu mengarahkan semua anggota saya untuk mencapai keinginan kami.",
    "Teamwork": "Saya punya kemampuan kerjasama tim yang sangat baik. Saya mampu mengkoordinasikan dan di koordinasikan dengan baik. Jika ada orang yang berbeda pendapat, maka saya akan membuat voting untuk memilih mana pendapat yang paling banyak dipilih.",
    "Empathy": "Dari luar, saya terlihat tidak peduli pada orang lain. Itu bukan berarti saya tidak punya empati, saat saya akan memutuskan sesuatu, saya selalu membayangkan saya jadi orang lain. Jadi saya juga bisa merasakan apa yang dirasakan oleh orang lain. Saya hanya buruk dalam menyampaikannya.",
    "Public Speaking": "Saya peraih juara 2 pada lomba pidacil saat TK dulu, yang membuat saya punya kemampuan <i>public speaking</i> yang baik. Saya mampu menyampaikan aspirasi saya di hadapan orang banyak dengan jelas. Yang membuat saya bisa mengekspresikan diri lebih bebas.",
    "Active Listening": "Saya sebenarnya adalah seorang <i>introvert</i>, jadi saya lebih suka mendengarkan apa pendapat orang lain daripada harus menjelaskan apa pendapat saya sendiri. Tapi terkadang lingkungan memaksa saya untuk terus mengungkapkan apa yang saya pikirkan.",
    "Negotiation": "Meskipun saya seorang <i>introvert</i>, saya mampu berkomunikasi dengan baik. Saya mampu mencari solusi terbaik bagi kedua belah pihak.",
    "Time Management": "Saya selalu merencanakan suatu hal dengan sangat baik, meskipun di bagian implementasi banyak kendala, dalam penjadwalan dan efisiensi waktu saya bisa diandalkan.",
    "Adaptability": "Saya mampu beradaptasi dengan capat terhadap perubahan lingkungan, perubahan teknologi dan lainnya.",
    "EQ": "Saya ini orang cenderung mengedepankan logika daripada perasaan, jadi saya terkadang mengabaikan perasaan sendiri maupun orang lain demi solusi yang paling logis menurut saya. Meskipun begitu, saya punya <i>EQ</i> yang tinggi, saya mampu berpikir jernih saat diberi tekanan, dan mampu mengontrol emosi saya dengan baik."
};

// Mengambil elemen-elemen DOM yang diperlukan
const modal = document.getElementById("skill-modal");
const closeModalBtn = document.querySelector(".close-skill");
const skillTitle = document.getElementById("skill-title");
const skillDesc = document.getElementById("skill-desc");
const skillIcon = document.getElementById("skill-icon");

// Mengambil semua elemen list (li) di dalam container skill
const skillItems = document.querySelectorAll(".container li");

// Menambahkan event listener klik ke setiap item skill
skillItems.forEach(item => {
    item.addEventListener("click", () => {
        // Ambil nama skill (teks di dalam li selain teks icon)
        const name = item.textContent.trim();
        
        // Ambil class dari icon yang ada di dalam li tersebut
        const iconClass = item.querySelector("i").className;
        
        // Masukkan data ke dalam modal secara dinamis
        skillTitle.textContent = name;
        skillIcon.className = iconClass;
        skillDesc.innerHTML = skillDescriptions[name] || "Deskripsi belum ditambahkan.";
        
        // Tampilkan modal dengan efek flexbox agar posisinya di tengah layar
        modal.style.display = "flex";
    });
});

// Event listener untuk menutup modal saat tombol 'x' diklik
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Event listener untuk menutup modal saat area luar modal diklik
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});