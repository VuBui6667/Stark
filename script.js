let img = document.querySelector('.image-introduce');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

function deleteOld() {
    img.classList.remove('animate__animated', 'animate__fadeIn');
}

btn1.addEventListener('click', () => {
    img.src = 'https://www.getstark.co/figma-action-4.png';
    btn2.classList.remove('button')
    btn3.classList.remove('button')
    btn4.classList.remove('button')
    btn1.classList.add('button')
    img.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(deleteOld, 500);
})
btn2.addEventListener('click', () => {
    img.src = 'https://www.getstark.co/xd-action-1.png';
    btn1.classList.remove('button')
    btn3.classList.remove('button')
    btn4.classList.remove('button')
    btn2.classList.add('button')
    img.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(deleteOld, 500);
})
btn3.addEventListener('click', () => {
    img.src = 'https://www.getstark.co/sketch-action-2.png';
    btn2.classList.remove('button')
    btn1.classList.remove('button')
    btn4.classList.remove('button')
    btn3.classList.add('button')
    img.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(deleteOld, 500);
})
btn4.addEventListener('click', () => {
    img.src = 'https://www.getstark.co/chrome-action-1.png';
    btn2.classList.remove('button')
    btn3.classList.remove('button')
    btn1.classList.remove('button')
    btn4.classList.add('button')
    img.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(deleteOld, 500);
})

let modal = document.querySelector('.modal');
let openModal = document.querySelector('.sign-up');
let closeModal = document.querySelector('.close-btn');

function showModal() {
    modal.classList.add('open');
}


function hideModal() {
    modal.classList.remove('open');
}


openModal.addEventListener('click', showModal);
closeModal.addEventListener('click', hideModal);
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('open');
    }
}

let modal2 = document.querySelector('.modal2');
let openModal2 = document.querySelector('.log-in');
let closeModal2 = document.querySelector('.close-btn2');

function showModal2() {
    modal2.classList.add('open');
}

function hideModal2() {
    modal2.classList.remove('open');
}

openModal2.addEventListener('click', showModal2);
closeModal2.addEventListener('click', hideModal2);