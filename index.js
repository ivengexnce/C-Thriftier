// ===== MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('show');
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const p = item.querySelector('p');
        p.style.display = p.style.display === 'block' ? 'none' : 'block';
    });
});

// ===== NEWSLETTER FORM =====
document.getElementById('newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    alert("🎉 Thank you for subscribing to C-Thirftier!");
    e.target.reset();
});