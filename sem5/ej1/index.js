const btns = document.querySelectorAll('.main-cont__sec1-btns');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');


btn1.addEventListener('click', () => {
    btn1.classList.toggle('main-cont__sec1-btns--bg-p');
})

btn2.addEventListener('click', () => {
    btn2.classList.toggle('main-cont__sec1-btns--bg-r');
})

btn3.addEventListener('click', () => {
    btn3.classList.toggle('main-cont__sec1-btns--bg-y')
})

btn4.addEventListener('click', () => {
    btn4.classList.toggle('main-cont__sec1-btns--bg-r');
})

btn5.addEventListener('click', () => {
    btn5.classList.toggle('main-cont__sec1-btns--bg-p');
})

btn6.addEventListener('click', () => {
    btn6.classList.toggle('main-cont__sec1-btns--bg-y');
})