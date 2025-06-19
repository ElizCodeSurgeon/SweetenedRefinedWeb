 // === Mobile Navbar Toggle ===
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// === Contact Form Submission ===
const callbackForm = document.getElementById('callbackForm');

callbackForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(callbackForm);

  try {
    const response = await fetch('contact.php', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert('Thank you! Your request has been sent.');
      callbackForm.reset();
    } else {
      alert('Sorry, there was a problem. Please try again later.');
    }

  } catch (error) {
    console.error(error);
    alert('Oops! Something went wrong. Please try again later.');
  }
});





// === contact.js ===

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const form = document.getElementById('callbackForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Optional: show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch('contact.php', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you! We have received your request and will get back to you soon.');
        form.reset();
      } else {
        alert('Oops: ' + result.message);
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
    }
  });
});


