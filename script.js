const menuButton = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.nav-ul');

menuButton.addEventListener('click', ()=>{
  const visibility = menu.getAttribute('data-visible');
  if(visibility==="false"){
    menu.setAttribute('data-visible', true);
  } else {
    menu.setAttribute('data-visible', false);
  }
})