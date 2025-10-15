// ========== Fade-in on scroll ==========
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ========== Smooth Scroll on Nav Click ==========
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // trừ chiều cao navbar
        behavior: 'smooth'
      });
    }
  });
});

// ========== Contact Form ==========
// ========== Contact Form via Formspree ==========
const form = document.querySelector("#contactForm");
const statusMsg = document.querySelector("#status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusMsg.textContent = "⏳ Sending...";
  statusMsg.style.color = "#00eaff";

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      statusMsg.textContent = "✅ Message sent successfully!";
      statusMsg.style.color = "lime";
      form.reset();
    } else {
      statusMsg.textContent = "❌ Failed to send. Please try again.";
      statusMsg.style.color = "red";
    }
  } catch (error) {
    statusMsg.textContent = "⚠️ Network error. Please try again later.";
    statusMsg.style.color = "orange";
  }
});

