const imagesCnt = 9;
const chosenImage = Math.floor(Math.random() * imagesCnt) + 1;
// const backgroundImgUrl = `imgs/img${chosenImage}.jpg`;
// document.body.style.backgroundImage = `url(${backgroundImgUrl})`;

const container = document.querySelector('#background');
const bgImg = document.createElement('img');
bgImg.src = `imgs/img${chosenImage}.jpg`;
bgImg.alt = `backgroundImg!`;

container.appendChild(bgImg);
