const burgerMenu = document.querySelector('.burger-menu')
const nav = document.querySelector('.nav')
const searchMobile = document.querySelector('.search-mobile')
const formSearch = document.querySelector('.form-search')
const buttonClose = document.querySelector('.button-close')

burgerMenu.addEventListener('click', () => {
  nav.classList.add('nav--visible')
  burgerMenu.classList.toggle('hidden')
  searchMobile.classList.toggle('hidden')
  buttonClose.classList.toggle('button-close--visible')
})

searchMobile.addEventListener('click', () => {
  formSearch.classList.add('form-search--visible')
  burgerMenu.classList.toggle('hidden')
  searchMobile.classList.toggle('hidden')
  buttonClose.classList.toggle('button-close--visible')
})

buttonClose.addEventListener('click', () => {
  buttonClose.classList.toggle('button-close--visible')
  nav.classList.remove('nav--visible')
  formSearch.classList.remove('form-search--visible')
  burgerMenu.classList.toggle('hidden')
  searchMobile.classList.toggle('hidden')
})
