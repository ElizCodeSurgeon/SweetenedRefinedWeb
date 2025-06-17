 // === Toggle Mobile Menu ===
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// === Booking Form Validation (Optional Client-Side) ===
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function (e) {
  // Example: ensure service type is selected
  const type = bookingForm.querySelector('select[name="type"]').value;
  const service = bookingForm.querySelector('#service').value;

  if (!type || !service) {
    alert('Please select both type and service.');
    e.preventDefault(); // Stop form submission
  }
});




