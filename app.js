

const header = document.querySelector('header');
const toggleMenu = document.querySelector('.toggle__menu');

toggleMenu.onclick = function () {
    header.classList.toggle('active');
}

// scroll reveal effect
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2500,
    delay: 40
})

ScrollReveal().reveal('.logo', {delay: 400, origin: 'top', interval: 300})
ScrollReveal().reveal('.hero__content', {delay: 800, origin: 'left'})
ScrollReveal().reveal('.image__container, .content, .head h2, .head button', {delay: 500, origin: 'bottom', interval: 300})
ScrollReveal().reveal('.card, .menus a', {delay: 700, origin: 'bottom', interval: 300})
ScrollReveal().reveal('.fa-brands', {delay: 700, origin: 'right', interval: 300})


