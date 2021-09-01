const navigationUl = document.getElementById('nav-ul');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  navigationUl.classList.toggle('show');
});