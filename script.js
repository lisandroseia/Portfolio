const menuButton = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.nav-ul');
const menuItem = document.querySelectorAll('.nav-li');

menuButton.addEventListener('click', () => {
  const visibility = menu.getAttribute('data-visible');
  if (visibility === 'false') {
    menu.setAttribute('data-visible', true);
    menuButton.setAttribute('aria-expanded', true);
  } else {
    menu.setAttribute('data-visible', false);
    menuButton.setAttribute('aria-expanded', false);
  }
});

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    const visibility = menu.getAttribute('data-visible');
    if (visibility === 'false') {
      menu.setAttribute('data-visible', true);
      menuButton.setAttribute('aria-expanded', true);
    } else {
      menu.setAttribute('data-visible', false);
      menuButton.setAttribute('aria-expanded', false);
    }
  });
});
