const hardSkill = document.getElementById('hard-skill');
const softSkill = document.getElementById('soft-skill');
const otherSkill = document.getElementById('other-skill');

hardSkill.addEventListener('click', () => {
    window.location.href = 'hardskills/hskills.html';
});

softSkill.addEventListener('click', () => {
    window.location.href = 'softskills/sskills.html';
});

otherSkill.addEventListener('click', () => {
    window.location.href = 'otherskills/oskills.html';
});