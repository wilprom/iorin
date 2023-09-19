const burgerMenu = document.querySelector('.burger-menu')
const nav = document.querySelector('.nav')
const searchMobile = document.querySelector('.search-mobile')
const formSearch = document.querySelector('.form-search')
const buttonClose = document.querySelector('.button-close')

const toggleHiddenDomElement = (element) => {
  element.classList.toggle('hidden')
}
const toggleVisibilityButtonClose = (button) => {
  button.classList.toggle('button-close--visible')
}
const addVisibilityOnNavbar = (navBar) => {
  nav.classList.add('nav--visible')
}
const removeVisibilityOnNavbar = (navBar) => {
  nav.classList.remove('nav--visible')
}
const addVisibilityOnFormSearch = (form) => {
  formSearch.classList.add('form-search--visible')
}
const removeVisibilityOnFormSearch = (form) => {
  formSearch.classList.remove('form-search--visible')
}


burgerMenu.addEventListener('click', () => {
  addVisibilityOnNavbar(nav)
  toggleVisibilityButtonClose(buttonClose)
  toggleHiddenDomElement(burgerMenu)
  toggleHiddenDomElement(searchMobile)
})

searchMobile.addEventListener('click', () => {
  addVisibilityOnFormSearch(formSearch)
  toggleVisibilityButtonClose(buttonClose)
  toggleHiddenDomElement(burgerMenu)
  toggleHiddenDomElement(searchMobile)
})

buttonClose.addEventListener('click', () => {
  removeVisibilityOnNavbar(nav)
  removeVisibilityOnFormSearch(formSearch)
  toggleVisibilityButtonClose(buttonClose)
  toggleHiddenDomElement(burgerMenu)
  toggleHiddenDomElement(searchMobile)
})
