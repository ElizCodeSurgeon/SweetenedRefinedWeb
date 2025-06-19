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





// Simple cookie consent banner script

document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookieConsent");
  const acceptBtn = document.getElementById("acceptCookies");

  // Check if consent is already given
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "flex";
  }

  // Accept button
  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
});



// Optional: You can add custom JS for dynamic features here
// For example, log when a user opens the privacy page

document.addEventListener("DOMContentLoaded", () => {
  console.log("Privacy Policy page loaded");
});



// Simple placeholder for any interactivity or tracking

document.addEventListener("DOMContentLoaded", () => {
  console.log("Disclaimer page loaded");
});



// Simple placeholder for future interactivity or tracking

document.addEventListener("DOMContentLoaded", () => {
  console.log("Terms & Conditions page loaded");
});







