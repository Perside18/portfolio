/* animations.js - Custom Scroll Reveals, Spotlight Effect, Counter & Slider Scripts */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll-Triggered Reveal Animations using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target); // Trigger animation once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 2. Spotlight Hover Effect (Frosted Glass Spotlight Light Follower)
  const spotlightCards = document.querySelectorAll('.glass-card');
  
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 3. Testimonial Slider Controls
  const slider = document.getElementById('testimonial-slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (slider && prevBtn && nextBtn) {
    let currentIdx = 0;
    
    const updateSlider = () => {
      const cardGap = 24; // Gutter in px
      const cardWidth = slider.firstElementChild.offsetWidth + cardGap;
      slider.style.transform = `translateX(-${currentIdx * cardWidth}px)`;
    };
    
    nextBtn.addEventListener('click', () => {
      const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      const maxIdx = slider.children.length - visibleCount;
      if (currentIdx < maxIdx) {
        currentIdx++;
        updateSlider();
      }
    });
    
    prevBtn.addEventListener('click', () => {
      if (currentIdx > 0) {
        currentIdx--;
        updateSlider();
      }
    });
    
    window.addEventListener('resize', () => {
      currentIdx = 0;
      updateSlider();
    });
  }

  // 4. Animated Skills Progress Bars & Count-up Animation
  const firstSkillBar = document.querySelector('.skill-bar');
  if (firstSkillBar) {
    const skillContainerSection = firstSkillBar.closest('section');
    
    const animateValue = (element, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start) + "%";
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skill-bar');
          bars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth; // Fills width
            
            // Look for progress bar value label text
            const labelWrapper = bar.parentElement.previousElementSibling;
            if (labelWrapper) {
              const valueSpan = labelWrapper.querySelector('span:last-child');
              if (valueSpan) {
                animateValue(valueSpan, 0, parseInt(targetWidth), 1200);
              }
            }
          });
          skillObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });
    
    if (skillContainerSection) {
      skillObserver.observe(skillContainerSection);
    }
  }

  // 5. Portfolio Filter Logic
  window.filterProjects = function(category) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    const projects = projectsGrid.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Toggle active classes on buttons
    buttons.forEach(btn => {
      btn.classList.remove('active');
      // Matching text for active style
      const btnText = btn.innerText.toLowerCase();
      if (category === 'all' && btnText.includes('all')) {
        btn.classList.add('active');
      } else if (category === 'cloud' && btnText.includes('cloud')) {
        btn.classList.add('active');
      } else if (category === 'fintech' && btnText.includes('fintech')) {
        btn.classList.add('active');
      } else if (category === 'ai' && btnText.includes('ai')) {
        btn.classList.add('active');
      }
    });

    // Animate display toggle
    projects.forEach(project => {
      const projectCat = project.getAttribute('data-category');
      if (category === 'all' || projectCat === category) {
        project.style.display = 'block';
        setTimeout(() => {
          project.style.opacity = '1';
          project.style.transform = 'translateY(0)';
        }, 50);
      } else {
        project.style.opacity = '0';
        project.style.transform = 'translateY(15px)';
        setTimeout(() => {
          project.style.display = 'none';
        }, 250);
      }
    });
  };
});
