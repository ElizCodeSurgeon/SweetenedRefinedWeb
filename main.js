 // Mobile menu toggle for navbar
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Optional: close menu when a nav link is clicked (for better UX on mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

 
 
 
 // Basic contact form validation
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', function (e) {
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#ccc';
      }
    });

    if (!allFilled) {
      e.preventDefault();
      alert('Please fill in all required fields.');
    }
  });
});
 
 
 

 
 
 
 
 // main.js - Interactivity & Validation

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Scroll to top
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Form validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = form.querySelector("input[name='name']");
      const email = form.querySelector("input[name='email']");
      const message = form.querySelector("textarea[name='message']");

      if (!name.value || !email.value || !message.value) {
        alert("Please fill in all fields.");
        e.preventDefault();
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
      }
    });
  }

  // Lightbox viewer for service images
  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.classList.add("lightbox-overlay");
  const lightboxImage = document.createElement("img");
  lightboxOverlay.appendChild(lightboxImage);
  document.body.appendChild(lightboxOverlay);

  document.querySelectorAll(".service-card img").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      lightboxImage.src = img.src;
      lightboxOverlay.style.display = "flex";
    });
  });

  lightboxOverlay.addEventListener("click", () => {
    lightboxOverlay.style.display = "none";
  });
});






// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
  scrollTopBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    ? 'block'
    : 'none';
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Form validation example for contact or apply forms
function validateForm(event) {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  
  if (!name || !email || !message) return; // Not a contact form

  if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill in all required fields.');
    event.preventDefault();
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert('Please enter a valid email address.');
    event.preventDefault();
    return false;
  }

  alert('Message sent! We’ll get back to you shortly.');
  return true;
}

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', validateForm);
}





// Simple animation on scroll (optional)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.info-box').forEach(box => {
  box.classList.add('hidden');
  observer.observe(box);
});





// JS placeholder for any future functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hiring page ready.");
});





document.addEventListener("DOMContentLoaded", () => {
  console.log("Contact page loaded with map.");
});





document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
