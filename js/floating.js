const randomNumber = function (min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}

const floating = document.querySelector('.floating');
floating.style.left = `5%`;
floating.style.top = `70%`;

setInterval(() => {
const positionX = randomNumber(1, 100);
const positionY = randomNumber(1, 100);
const floating = document.querySelector('.floating');

floating.style.left = `${positionX}%`;
floating.style.top = `${positionY}%`;
}, 5000);
