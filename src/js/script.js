// Menu active
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Rating skills %
const counters = document.querySelectorAll('.rating-skills__counter'),
    lines = document.querySelectorAll('.rating-skills__line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
