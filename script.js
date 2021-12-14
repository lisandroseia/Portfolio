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

/* modal windows */

const popupBtn = document.querySelectorAll('.link-btn');
const popupContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.popup-btn')

popupBtn.forEach((item) => {
  item.addEventListener('click', () => {
      let project = item.getAttribute('data-value')
      console.log(pages[project].title)
      popupContainer.setAttribute('data-visible', true)
  })
})

closeBtn.addEventListener('click', () => {
  popupContainer.setAttribute('data-visible', false)
})

const titles = [];

document.querySelectorAll('div.work-info > h2').forEach((item) => {
  titles.push(item.textContent);
});

const descriptions = [];

document.querySelectorAll('.work-text').forEach((item) => {
  descriptions.push(item.textContent);
})

const technologies = [];
const techs = []
document.querySelectorAll('.framework').forEach((item) => {
  techs.push(item.textContent)
});
technologies.push(techs.slice(0,3))
technologies.push(techs.slice(3,7))
technologies.push(techs.slice(7,11))
technologies.push(techs.slice(11,15))

const pages = {};
for(let i = 0; i < titles.length; i++){
  pages[`project${i}`] = {};
  pages[`project${i}`].title = titles[i];
  pages[`project${i}`].description = descriptions[i];
  pages[`project${i}`].technology = technologies[i];

}

console.log(pages)


