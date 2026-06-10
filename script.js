const navLinks = document.querySelectorAll('.nav-links a');

const setActiveNavLink = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === currentPage);
  });
};

const validateContactForm = () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const message = document.getElementById('contact-message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      event.preventDefault();
      alert('Please complete all fields before sending your message.');
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
  validateContactForm();
});
