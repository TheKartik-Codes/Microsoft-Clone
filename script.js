// script.js

// Handle form submission on the Contact Page
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      // Display the success message
      successMessage.style.display = 'block';

      // Optionally, clear the form fields
      contactForm.reset();

      // Hide the success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000); // 5000 milliseconds = 5 seconds
    });
  }
});