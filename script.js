// script.js

// Wait for full load
window.addEventListener('load', () => {
  const logoCircle = document.getElementById('logoCircle');
  const cornerLogo = document.getElementById('cornerLogo');
  const pageWrapper = document.querySelector('.page-wrapper');

  // Start 3-second loading phase
  setTimeout(() => {
    // Stop floating animation for precise movement
    logoCircle.querySelector('img').style.animation = 'none';

    // Temporarily show corner logo invisibly for correct coordinates
    cornerLogo.style.opacity = 0;
    cornerLogo.style.visibility = 'visible';

    const startRect = logoCircle.getBoundingClientRect();
    const endRect = cornerLogo.getBoundingClientRect();

    const deltaX = endRect.left + endRect.width / 2 - (startRect.left + startRect.width / 2);
    const deltaY = endRect.top + endRect.height / 2 - (startRect.top + startRect.height / 2);

    logoCircle.style.transition =
      'transform 0.8s ease, opacity 0.8s ease, filter 0.8s ease';
    logoCircle.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.38)`;
    logoCircle.style.filter = 'drop-shadow(0 10px 20px rgba(0,0,0,0.18))';

    // After slide completes, hide center circle, reveal final logo & content
    setTimeout(() => {
      logoCircle.style.opacity = 0;

      setTimeout(() => {
        logoCircle.style.display = 'none';
        cornerLogo.style.visibility = 'visible';
        cornerLogo.style.opacity = 1;
        pageWrapper.classList.add('visible');
      }, 250);
    }, 820);
  }, 3000);
});

/* Smooth scroll (native CSS already, but ensure inner links work in older browsers) */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const targetId = link.getAttribute('href').slice(1);
  const targetEl = document.getElementById(targetId);
  if (targetEl) {
    e.preventDefault();
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

/* Mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

/* Back to top button */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 280) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Scroll reveal using IntersectionObserver */
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback
  revealElements.forEach((el) => el.classList.add('visible'));
}

/* Mouse parallax effect */
const parallaxEls = document.querySelectorAll('.parallax');

document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
  const y = (e.clientY / innerHeight - 0.5) * 2;

  parallaxEls.forEach((el) => {
    const speed = parseFloat(el.dataset.speed || '2');
    const translateX = -x * speed * 4; // adjust multiplier for strength
    const translateY = -y * speed * 4;

    el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
  });
});

/* Contact form toast */
/* Contact form with EmailJS */
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

if (contactForm && toast) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("message").value.trim(),
      title: "New Message From Portfolio"  // REQUIRED
    };

    emailjs.send(
      "service_59uk6fj",
      "template_sd8ao7m",
      formData,
      "0B7ZjSoQX0Kszvd9R"
    )
      .then(() => {
        showToast("Message sent successfully! 🎉");
        contactForm.reset();
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        showToast("Failed to send. Try again!");
      });
  });
}




function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/* Dynamic year */
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
/* Theme Toggle */
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Load theme from storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

// Toggle Mode
themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeToggle.innerHTML =
    theme === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
}
