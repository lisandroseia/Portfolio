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
const popupContainer = document.createElement('section');
popupContainer.className = 'modal-container';
popupContainer.setAttribute('data-visible', 'false');

document.body.appendChild(popupContainer);

const closeBtn = document.createElement('button');
closeBtn.className = 'popup-btn';
popupContainer.appendChild(closeBtn);

const titles = [];

document.querySelectorAll('div.work-info > h2').forEach((item) => {
  titles.push(item.textContent);
});

const descriptions = [];

document.querySelectorAll('.work-text').forEach((item) => {
  descriptions.push(item.textContent);
});

const technologies = [];
const techs = [];
document.querySelectorAll('.framework').forEach((item) => {
  techs.push(item.textContent);
});
technologies.push(techs.slice(0, 3));
technologies.push(techs.slice(3, 7));
technologies.push(techs.slice(7, 11));
technologies.push(techs.slice(11, 15));

const dets = [];
const subDets = [];
document.querySelectorAll('.det').forEach((item) => {
  dets.push(item.textContent);
});
subDets.push(dets.slice(0, 3));
subDets.push(dets.slice(3, 6));
subDets.push(dets.slice(6, 9));
subDets.push(dets.slice(9, 12));

const images = [
  './assets/imgs/Snapshoot1.svg',
  './assets/imgs/Snapshoot2.svg',
  './assets/imgs/Snapshoot3.png',
  './assets/imgs/Snapshoot4.png',
];

const pages = {};
for (let i = 0; i < titles.length; i += 1) {
  pages[`project${i}`] = {};
  pages[`project${i}`].title = titles[i];
  pages[`project${i}`].description = descriptions[i];
  pages[`project${i}`].technology = technologies[i];
  pages[`project${i}`].details = subDets[i];
  pages[`project${i}`].liveproject = 'https://lisandroseia.github.io/Portfolio/';
  pages[`project${i}`].githubrepo = 'https://github.com/lisandroseia/Portfolio ';
  pages[`project${i}`].image = images[i];
}

const header = document.createElement('div');
header.className = 'popup-head';
popupContainer.appendChild(header);

const details = document.createElement('ul');
popupContainer.appendChild(details);
details.className = 'popup-details';

const imageContainer = document.createElement('div');
popupContainer.appendChild(imageContainer);
imageContainer.className = 'popupImg';

const popupFlex = document.createElement('div');
popupContainer.appendChild(popupFlex);
popupFlex.className = 'popupEnd';

const description = document.createElement('div');
popupFlex.appendChild(description);
description.className = 'popupDescription';

const footContainer = document.createElement('div');
popupFlex.appendChild(footContainer);
footContainer.className = 'btns-ul';

const tools = document.createElement('ul');
footContainer.appendChild(tools);
tools.className = 'popupTools';

const frame1 = document.createElement('li');
frame1.className = 'popupFrame';
const frame2 = document.createElement('li');
frame2.className = 'popupFrame';
const frame3 = document.createElement('li');
frame3.className = 'popupFrame';
const frame4 = document.createElement('li');
frame4.className = 'popupFrame';

const btn1 = document.createElement('a');
btn1.className = 'link-btn';
btn1.textContent = 'See  live  ';

const btn2 = document.createElement('a');
btn2.className = 'link-btn';
btn2.textContent = 'See  source  ';

btn1.innerHTML = `See live <img alt="github" src="./assets/imgs/live.png"
/>`;
btn2.innerHTML = `See source <img alt="github" src="./assets/imgs/github.png"
/>`;

const btnContainer = document.createElement('div');
btnContainer.className = 'popupBtns';
btnContainer.appendChild(btn1);
btnContainer.appendChild(btn2);
footContainer.appendChild(btnContainer);

function modalWindow(project) {
  header.innerHTML = pages[project].title;
  imageContainer.style.backgroundImage = `url(${pages[project].image})`;

  description.innerHTML = pages[project].description;

  if (project === 'project0') {
    tools.appendChild(frame1);
    tools.appendChild(frame2);
    tools.appendChild(frame3);
    [frame1.textContent, frame2.textContent, frame3.textContent] = pages[project].technology;
  } else {
    tools.appendChild(frame1);
    tools.appendChild(frame2);
    tools.appendChild(frame3);
    tools.appendChild(frame4);
    [
      frame1.textContent,
      frame2.textContent,
      frame3.textContent,
      frame4.textContent,
    ] = pages[project].technology;
  }
  btn1.target = 'blank';
  btn1.href = pages[project].liveproject;
  btn2.target = 'blank';
  btn2.href = pages[project].githubrepo;

  details.innerHTML = `<li class="first-detail">${pages[project].details[0]}</li>
                  <img alt="dot" src="./assets/imgs/Counter.png" />
                         <li class="second-detail">${pages[project].details[1]}</li>
                  <img alt="dot" src="./assets/imgs/Counter.png" />
                         <li class="third-detail">${pages[project].details[2]}</li>`;
}

popupBtn.forEach((item) => {
  item.addEventListener('click', () => {
    const project = item.getAttribute('data-value');
    modalWindow(project);
    popupContainer.setAttribute('data-visible', true);
  });
});

closeBtn.addEventListener('click', () => {
  popupContainer.setAttribute('data-visible', false);
});

/* validate form */

const email = document.getElementById('email');
const submit = document.getElementById('submit');
const errorMsg = document.querySelector('.error');

const pattern = /([A-Z])/g;

submit.addEventListener('click', (e) => {
  if (pattern.test(email.value)) {
    e.preventDefault();
    errorMsg.innerText = `Invalid email  \n Try with: ${email.value.toLowerCase()}`;
  } else {
    errorMsg.innerText = '';
  }
});

/* data storage */

const emailField = document.querySelector('#email');
const nameField = document.querySelector('#name');
const textField = document.querySelector('#text');
const storeds = document.querySelectorAll('.stored');
const obj = {};

storeds.forEach((item) => {
  item.addEventListener('input', () => {
    obj.email = emailField.value;

    obj.name = nameField.value;

    obj.textarea = textField.value;

    localStorage.setItem('form', JSON.stringify(obj));
  });
});

const data = JSON.parse(localStorage.getItem('form'));

window.onload = () => {
  if (data.name !== undefined) {
    nameField.value = data.name;
  }
  if (data.email !== undefined) {
    emailField.value = data.email;
  }
  if (data.textarea !== undefined) {
    textField.value = data.textarea;
  }
};
