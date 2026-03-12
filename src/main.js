// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Initialize theme
if (currentTheme) {
    document.documentElement.classList.add(currentTheme + '-theme');
}

themeToggle?.addEventListener('click', () => {
    let theme = 'dark';
    if (document.documentElement.classList.contains('light-theme')) {
        document.documentElement.classList.remove('light-theme');
        document.documentElement.classList.add('dark-theme');
        theme = 'dark';
    } else if (document.documentElement.classList.contains('dark-theme')) {
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.add('light-theme');
        theme = 'light';
    } else {
        // Handle system preference case
        const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        if (isLight) {
            document.documentElement.classList.add('dark-theme');
            theme = 'dark';
        } else {
            document.documentElement.classList.add('light-theme');
            theme = 'light';
        }
    }
    localStorage.setItem('theme', theme);
});

console.log('First Axiom Studio website loaded.');
