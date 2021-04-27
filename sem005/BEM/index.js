const menu = document.querySelector('.hed-menu');
const btn = document.querySelector('#btn-1');
const links = document.querySelectorAll('.hed-menu__nav-link');

btn.addEventListener('click', () => {
    menu.classList.toggle('hed-menu--bg-green');
    links.forEach((link) => {
        link.classList.toggle('hed-menu--color-w');
    })
})

