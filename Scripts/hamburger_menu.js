window.onload = () => {
    const menu_buttom = document.querySelector(".hamburger");
    const topnav = document.querySelector(".topnav");

    menu_buttom.addEventListener("click", () => {
        menu_buttom.classList.toggle("is-active");
        topnav.classList.toggle("is-active");
    })
    
};