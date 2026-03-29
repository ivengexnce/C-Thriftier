// Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
menuToggle.addEventListener('click', () => { nav.classList.toggle('show'); });

// Fade-in elements
window.addEventListener('DOMContentLoaded', () => {
    const fadeElems = document.querySelectorAll('.fade');
    fadeElems.forEach((el, i) => {
        setTimeout(() => { el.classList.add('fade-in'); }, i * 200);
    });
});

// Form Validation
const loginForm = document.getElementById('authForm');
if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        if (!email && !phone) { alert("Please enter Email or Phone."); return; }
        if (!password) { alert("Please enter Password."); return; }
        alert("Login Successful!");
        loginForm.reset();
    });
}

// Ripple Effect on Buttons
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', e => {
        const circle = document.createElement('span');
        circle.classList.add('ripple');
        btn.appendChild(circle);
        circle.style.left = `${e.offsetX}px`;
        circle.style.top = `${e.offsetY}px`;
        setTimeout(() => { circle.remove(); }, 600);
    });
});
const toggleBtn = document.getElementById('toggleFormBtn');
const formTitle = document.getElementById('form-title');
const authForm = document.getElementById('authForm');
const actionInput = document.getElementById('action');
const signupFields = document.getElementById('signup-fields');
const confirmPasswordField = document.getElementById('confirm-password-field');
const submitBtn = document.getElementById('submitBtn');

let isLogin = true;

toggleBtn.addEventListener('click', () => {
    isLogin = !isLogin;

    if (isLogin) {
        formTitle.textContent = 'Login';
        actionInput.value = 'login';
        signupFields.classList.add('hidden');
        confirmPasswordField.classList.add('hidden');
        submitBtn.textContent = 'Login';
        toggleBtn.textContent = "Don't have an account? Sign Up";

        // Clear signup-only fields
        document.getElementById('fullname').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('confirmPassword').value = '';

        // Remove required attributes from signup fields
        document.getElementById('fullname').required = false;
        document.getElementById('phone').required = false;
        document.getElementById('confirmPassword').required = false;

    } else {
        formTitle.textContent = 'Sign Up';
        actionInput.value = 'signup';
        signupFields.classList.remove('hidden');
        confirmPasswordField.classList.remove('hidden');
        submitBtn.textContent = 'Sign Up';
        toggleBtn.textContent = "Already have an account? Login";

        // Add required attributes to signup fields
        document.getElementById('fullname').required = true;
        document.getElementById('phone').required = true;
        document.getElementById('confirmPassword').required = true;
    }
});

authForm.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(authForm);

    try {
        const response = await fetch('auth_process.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        alert(result.message);

        if (result.status === 'success') {
            if (isLogin) {
                // Redirect or do something after login
                window.location.href = '/dashboard/dashboard.html'; // Example
            } else {
                // After signup, switch to login mode automatically
                toggleBtn.click();
            }
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
});