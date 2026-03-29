 // ---------- Typewriter ----------
 document.addEventListener('DOMContentLoaded', () => {
     const typewriter = document.getElementById('typewriter');
     const text = "Join the Clothing Revolution 🌿";
     let index = 0;

     function type() {
         if (index < text.length) {
             typewriter.textContent += text.charAt(index);
             index++;
             setTimeout(type, 45);
         }
     }

     if (typewriter) {
         typewriter.textContent = '';
         setTimeout(type, 300);
     }
 });

 // ---------- Hamburger Menu ----------
 const toggleBtn = document.getElementById('menu-toggle');
 const nav = document.getElementById('nav');

 toggleBtn.addEventListener('click', () => {
     toggleBtn.classList.toggle('active');
     nav.classList.toggle('show');
 });