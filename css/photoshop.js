
$(document).ready(function () {
  $('nav-icon').click(function () {
    $(this).toggleclass('fa-solid');
    $('nav-icon ').toggleclass('fa-solid')
  });
});




$('#list-product').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
// 
$('#list-product  .slick-arrow').html("");
$('#list-product  .slick-arrow.slick-next').html("<span>></span>");
$('#list-product  .slick-arrow.slick-prev').html("<span><</span>");
$('#list-product  .slick-arrow.slick-prev').html("<span><</span>");

$('#list-doi-tac').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});