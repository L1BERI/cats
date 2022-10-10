$(function () {
  $('.cats-slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    speed: 300,
    dots: false,
    waitForAnimate: false,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 1
      }
    }]
  })

  $('.arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.cats-slider').slick('slickNext')
  })
  $('.arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.cats-slider').slick('slickPrev')
  })

})