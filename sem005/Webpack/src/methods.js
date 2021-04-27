// btn.addEventListener('click', () => {
//     menu.classList.toggle('hed-menu--bg-green');
//     links.forEach((link) => {
//         link.classList.toggle('hed-menu--color-w');
//     })
// })

const menu = document.querySelector('.hed-menu');
const links = document.querySelectorAll('.hed-menu__nav-link');

export function colorView() {
    menu.classList.toggle('hed-menu--bg-green');
    links.forEach((link) => {
        link.classList.toggle('hed-menu--color-w');
    })
}

