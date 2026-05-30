// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const metaThemeColor = document.querySelector('meta[name="theme-color"]');

function setTheme(theme) {
    html.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        metaThemeColor.setAttribute('content', '#1f2b3a');
    } else {
        themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        metaThemeColor.setAttribute('content', '#6366f1');
    }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button');
    const originalText = btn.textContent;
    
    btn.disabled = true;
    btn.innerHTML = 'Enviando <span class="spinner-border spinner-border-sm"></span>';
    
    setTimeout(() => {
        alert('✅ ¡Mensaje enviado con éxito! Gracias por contactarme.');
        contactForm.reset();
        btn.disabled = false;
        btn.textContent = originalText;
    }, 1200);
});