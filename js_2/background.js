const imagesCnt = 9;

const chosenImage = Math.floor(Math.random() * imagesCnt) + 1;
// console.log(chosenImage);

const bgImage = document.createElement('img');
bgImage.src = `imgs/img${imagesCnt}.jpg`;
bgImage.alt = `backgroundImg!`;
// console.log(bgImage);

document.body.appendChild(bgImage);
