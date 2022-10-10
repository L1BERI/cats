$(function () {
  $('.cats-slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
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


$('.next').on('click', function(e){
  e.preventDefault();
  $('.container').toggleClass('container-visible')
  $('.text').toggleClass('text-visible')
  
})
$('.back').on('click', function(e){
  e.preventDefault();
  $('.container').removeClass('container-visible')
  $('.text').removeClass('text-visible')
  
})

})