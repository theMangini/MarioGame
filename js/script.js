const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
let counter = 0;

let score = 0;

function incrementCounter(score) {

    document.getElementById('counter').innerText = score
}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {

    counter += 1;
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (counter %50 == 0) {
    
        score += 1
        incrementCounter(score);


    }

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;


        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'


        clearInterval(loop);
    }
}, 10);


document.addEventListener('keydown', jump);