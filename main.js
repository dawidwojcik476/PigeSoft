const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.menu');
const menuHideBtn = document.querySelectorAll('.menu li')

let menuOpen = false;

const menu = () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        mainMenu.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        mainMenu.classList.remove('open');
        menuOpen = false;
    }
}


const scroll = new SmoothScroll('a[href*="#"]');


menuBtn.addEventListener('click', menu);
menuHideBtn.forEach(function (button) {

    button.addEventListener('click', function () {
        menuBtn.classList.remove('open');
        mainMenu.classList.remove('open');
    })
})