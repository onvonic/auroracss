// Add some interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle menggunakan onv-dark-mode di body
    const themeToggle = document.querySelector('.onv-theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('onv-dark-mode');
        this.textContent = document.body.classList.contains('onv-dark-mode') ? '☀️' : '🌙';
    });

    // Search functionality
    const searchInput = document.querySelector('.onv-search-input');
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            console.log('Search for:', this.value);
        }
    });

    // Navigation hover effects
    const navItems = document.querySelectorAll('.onv-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('onv-active'));
            this.classList.add('onv-active');
        });
    });
});

// Keyboard shortcut for search
document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('.onv-search-input').focus();
    }
});