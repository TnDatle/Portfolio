/* ===== HERO ===== */
anime({
  targets: '.fade-up',
  translateY: [30, 0],
  opacity: [0, 1],
  duration: 800,
  easing: 'easeOutExpo'
});

anime({
  targets: '.fade-up-delay',
  translateY: [30, 0],
  opacity: [0, 1],
  delay: 300,
  duration: 800,
  easing: 'easeOutExpo'
});

/* ===== SCROLL ANIMATION FIX ===== */
function animateEach(selector, animationFn) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animationFn(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}

/* ===== SKILLS ===== */
animateEach('.skill-card', el => {
  anime({
    targets: el,
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutQuad'
  });
});

/* ===== PROJECTS ===== */
animateEach('.project-card', el => {
  anime({
    targets: el,
    translateX: [-40, 0],
    opacity: [0, 1],
    duration: 700,
    easing: 'easeOutExpo'
  });
});

/* ===== EXPERIENCE ===== */
animateEach('.timeline-item', el => {
  anime({
    targets: el,
    scale: [0.95, 1],
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutBack'
  });
});

/* ===== CONTACT ===== */
animateEach('.contact form', el => {
  anime({
    targets: el,
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutQuad'
  });
});
