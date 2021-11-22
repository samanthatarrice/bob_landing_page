const menu = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  const toggleDisplay = document.querySelector('.toggleDisplay');
  navLinks.classList.toggle(toggleDisplay);
}) //not werking...time to sleep