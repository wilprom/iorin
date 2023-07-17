const burgerMenu = document.querySelector('.burger-menu')
const nav = document.querySelector('.nav')

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('nav--visible')
})