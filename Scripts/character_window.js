// BODY CONST

const body = document.querySelector('body');


// DIV CONSTS:
const char_showcase_window = document.querySelector('.char-showcase-window');
const close_window = document.querySelector('.close_window');

// DIV CLOSE WINDOW BUTTON:

close_window.addEventListener('click', () => {
    char_showcase_window.style.display = 'none';
    body.style.overflow = 'scroll';
    char_showcase_window.classList.remove('show');
})


// YUTA:
// NEEDS TO CHANGE THE CONTENT OF THE DIV EACH TIME THE BUTTON GETS PRESSED.

const yuta = document.querySelector('.yuta');

yuta.addEventListener('click', () => {
    char_showcase_window.style.display = 'block';
    body.style.overflow = 'hidden';
    char_showcase_window.classList.add('show');
})


// XXX