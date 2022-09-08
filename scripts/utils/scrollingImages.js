const next = document.querySelector('.next')
const preview = document.querySelector('.preview')

next.addEventListener('click', () => {
  document.querySelector(
    '.categories-product__scrolling-images__wrapper'
  ).scrollLeft += 150
})

preview.addEventListener('click', () => {
  document.querySelector(
    '.categories-product__scrolling-images__wrapper'
  ).scrollLeft -= 150
})