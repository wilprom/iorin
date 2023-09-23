// Splide carousel js
const splides = document.querySelectorAll('.splide')

// Hero splide
const heroSplide = new Splide(splides[0], {
  arrows: false,
  type: 'fade',
  rewind: true,
  // Add classes for custom elt
  classes: {
    pagination: 'splide__pagination hero-carousel__dots',
  },
})

heroSplide.mount()

// Best products splide
const bestProductSplide = new Splide(splides[1], {
  type: 'loop',
  perPage: 3,
  gap: '1rem',
  focus: 'center',
  pagination: false,
  // Add classes for custom elt
  classes: {
    arrow: 'splide__arrow best-product-carousel__arrow',
    prev: 'splide__arrow--prev best-product-carousel__arrow__prev',
    next: 'splide__arrow--next best-product-carousel__arrow__next',
  },
  breakpoints : {
    1390: {
      perPage: 1,
    },
    
    320: {
      width: '90vw',
    },
  },
})

bestProductSplide.on('arrows:mounted')

bestProductSplide.mount()

// Best products splide
const ourProductsSplide = new Splide(splides[2], {
  type: 'loop',
  padding: '2rem',
  perPage: 4,
  gap: '1rem',
  focus: 'center',
  pagination: false,
  // Add classes for custom elt
  classes: {
    arrow: 'splide__arrow our-products-carousel__arrow',
    prev: 'splide__arrow--prev our-products-carousel__arrow__prev',
    next: 'splide__arrow--next our-products-carousel__arrow__next',
  },
  breakpoints : {
    768: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
})

ourProductsSplide.on('arrows:mounted')

ourProductsSplide.mount()
