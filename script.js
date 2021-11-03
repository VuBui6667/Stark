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