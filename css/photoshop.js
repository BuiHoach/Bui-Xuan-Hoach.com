





$('#list-product').slick({
  dots: false,               // Ẩn dấu chấm điều hướng
  infinite: true,            // Vòng lặp vô hạn
  speed: 300,                // Tốc độ chuyển slide (ms)
  slidesToShow: 4,           // Hiển thị 4 sản phẩm cùng lúc
  slidesToScroll: 1,         // Cuộn 1 sản phẩm mỗi lần
  autoplay: true,            // Tự động chuyển slide
  autoplaySpeed: 1000,       // Thời gian chuyển slide tự động (2 giây)
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,     // Hiển thị 3 sản phẩm với màn hình nhỏ hơn 1024px
        slidesToScroll: 3,   // Cuộn 3 sản phẩm mỗi lần
        infinite: true,      // Vòng lặp vô hạn
        dots: true           // Hiển thị dấu chấm điều hướng cho màn hình nhỏ
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,     // Hiển thị 2 sản phẩm với màn hình nhỏ hơn 600px
        slidesToScroll: 2    // Cuộn 2 sản phẩm mỗi lần
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,     // Hiển thị 1 sản phẩm với màn hình nhỏ hơn 480px
        slidesToScroll: 1    // Cuộn 1 sản phẩm mỗi lần
      }
    }
  ]
});

// 
$('#list-product  .slick-arrow').html("");
$('#list-product  .slick-arrow.slick-next').html("<span>></span>");
$('#list-product  .slick-arrow.slick-prev').html("<span><</span>");
$('#list-product  .slick-arrow.slick-prev').html("<span><</span>");
$(document).ready(function(){
  $('#lists-doi-tac').slick({
    dots: false,                // Ẩn các dấu chấm điều hướng
    infinite: true,             // Vòng lặp vô hạn
    speed: 300,                 // Tốc độ chuyển đổi (300ms)
    slidesToShow: 6,            // Hiển thị 7 đối tác cùng lúc
    slidesToScroll: 1,          // Cuộn 1 logo mỗi lần
    autoplay: true,             // Tự động lướt
    autoplaySpeed:1000,        // Chuyển mỗi 1 giây
    arrows: Animation,               // Hiển thị mũi tên điều hướng
    responsive: [
      {
        breakpoint: 1024,       // Với màn hình nhỏ hơn 1024px
        settings: {
          slidesToShow: 3,      // Hiển thị 3 đối tác
          slidesToScroll: 1     // Cuộn 1 logo mỗi lần
        }
      },
      {
        breakpoint: 600,        // Với màn hình nhỏ hơn 600px
        settings: {
          slidesToShow: 2,      // Hiển thị 2 đối tác
          slidesToScroll: 1     // Cuộn 1 logo mỗi lần
        }
      },
      {
        breakpoint: 480,        // Với màn hình nhỏ hơn 480px
        settings: {
          slidesToShow: 1,      // Hiển thị 1 đối tác
          slidesToScroll: 1     // Cuộn 1 logo mỗi lần
        }
      }
    ]
  });
});

