/* navigation.js - Mobile Menu, Sticky Header & Link Highlights */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const menuToggleBtn = document.querySelector('.menu-toggle-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggleBtn && navLinks) {
    menuToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('mobile-active');
      
      const iconSpan = menuToggleBtn.querySelector('.material-symbols-outlined');
      if (iconSpan) {
        iconSpan.textContent = navLinks.classList.contains('mobile-active') ? 'close' : 'menu';
      }
    });
    
    // Close mobile menu when clicking anywhere outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggleBtn.contains(e.target)) {
        navLinks.classList.remove('mobile-active');
        const iconSpan = menuToggleBtn.querySelector('.material-symbols-outlined');
        if (iconSpan) iconSpan.textContent = 'menu';
      }
    });
    
    // Close mobile menu after clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
        const iconSpan = menuToggleBtn.querySelector('.material-symbols-outlined');
        if (iconSpan) iconSpan.textContent = 'menu';
      });
    });
  }

  // 2. Sticky Header elevation on scroll
  const header = document.querySelector('header.top-nav');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scroll-shadow');
      } else {
        header.classList.remove('scroll-shadow');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger immediately to handle loaded scrolled pages
  }

  // 3. Highlight current page link dynamically
  const currentPath = window.location.pathname;
  const navAnchors = document.querySelectorAll('.nav-links a');
  
  let matched = false;
  navAnchors.forEach(link => {
    link.classList.remove('active', 'active-dot');
    const href = link.getAttribute('href');
    
    // Exact mapping for relative URLs
    if (href && href !== '#' && (currentPath.endsWith('/' + href) || currentPath.endsWith(href))) {
      link.classList.add('active', 'active-dot');
      matched = true;
    }
  });

  // Fallback to home (index.html) if nothing matches
  if (!matched && navAnchors.length > 0) {
    const isHome = currentPath.endsWith('/') || currentPath.endsWith('index.html') || currentPath === '';
    if (isHome) {
      const homeLink = Array.from(navAnchors).find(a => a.getAttribute('href') === 'index.html');
      if (homeLink) {
        homeLink.classList.add('active', 'active-dot');
      }
    }
  }
});
