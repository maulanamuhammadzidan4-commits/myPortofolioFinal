const modal = document.getElementById("skill-modal");
const skillItems = document.querySelectorAll(".skills ul li");
const closeBtn = document.querySelector(".close-skill");

// Data tambahan untuk setiap skill
const skillDetails = {
    "HTML": "Saya mahir dalam membuat struktur dasar website yang rapih, dan efisien. Saya juga sudah terbiasa menggunakan semantic HTML untuk meningkatkan aksesibilitas dan memudahkan dalam pengambangan.",
    "CSS": "Saya sudah menguasai display flexbox, dan animasi yang membuat saya mampu membuat layout yang responsif dan menarik.",
    "JavaScript": "Saya mahir dalam membuat dan memahami logika pemrograman yang sederhana maupun kompleks. Yang membuat saya mampu membantu dalam pengembangan website yang interaktif dan dinamis.",
    "Python": "Saya dapat memahami logika pemrograman berkat pengalaman saya dalam menggunakan Python. Meskipun saya masih dalam tahap belajar, saya sudah terbiasa dengan sintaks Python dan konsep dasar pemrograman. Yang membuat saya jadi sangat berguna dalam pengembangan website, terutama untuk backend dan scripting.",
    "Git": "Saya sudah terbiasa menggunakan Git untuk version control, yang memungkinkan saya untuk bekerja secara kolaboratif dengan tim dan menjaga riwayat perubahan kode dengan baik.",
    "PHP": "Saya sudah menguasai dasar-dasar PHP, dan saya sedang belajar Laravel untuk meningkatkan kemampuan saya dalam pengambangan backend.",
};

skillItems.forEach(item => {
    item.addEventListener("click", () => {
        const skillName = item.innerText;
        const iconClass = item.querySelector("i").className;

        document.getElementById("skill-icon").className = iconClass;
        document.getElementById("skill-title").innerText = skillName;
        document.getElementById("skill-desc").innerText = skillDetails[skillName] || "Detail skill akan segera ditambahkan.";
        
        modal.style.display = "flex";
    });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};