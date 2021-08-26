
/* const menuNav = document.querySelector('.header__navBar') */

const toggleNav = () => {
    const el = document.querySelector('.header__navBar')
    const menuButton = document.querySelector('.header__menuBtn')
    menuButton.classList.toggle("open")
    el.classList.toggle("active")
}
