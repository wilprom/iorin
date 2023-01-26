// Splide carousel js
const splides = document.querySelectorAll('.splide')

// Hero splide
const heroSplide = new Splide(splides[0], {
  arrows: false,
  type: 'fade',
  rewind: true,
  speed: 300,
  autoplay: true,
  interval: 7000,
  // Add classes for custom elt
  classes: {
    pagination: 'splide__pagination hero-carousel__dots',
  }
})

heroSplide.mount()

// Best products splide
const bestProductSplide = new Splide(splides[1], {
  type: 'loop',
  perPage: 3,
  gap : '1rem',
  focus: 'center',
  pagination: false,
  // Add classes for custom elt
  classes: {
		arrow : 'splide__arrow best-product-carousel__arrow',
		prev  : 'splide__arrow--prev best-product-carousel__arrow__prev',
		next  : 'splide__arrow--next best-product-carousel__arrow__next',
  }
})

bestProductSplide.on('arrows:mounted')

bestProductSplide.mount()