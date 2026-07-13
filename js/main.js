/* main.js - Theme Switcher & Global Setup */

/* IIFE to set theme class immediately before rendering, preventing page flashes */
(function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  
  // Set initial icon state on load
  themeToggleBtns.forEach(btn => {
    updateThemeIcon(btn);
    
    // Toggle click handler
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      // Update icons across all navigation instances (desktop / mobile)
      themeToggleBtns.forEach(b => updateThemeIcon(b));
    });
  });
  
  function updateThemeIcon(button) {
    const iconSpan = button.querySelector('.material-symbols-outlined');
    if (!iconSpan) return;
    
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      iconSpan.textContent = 'light_mode';
      iconSpan.setAttribute('title', 'Passer en mode clair');
    } else {
      iconSpan.textContent = 'dark_mode';
      iconSpan.setAttribute('title', 'Passer en mode sombre');
    }
  }
});
