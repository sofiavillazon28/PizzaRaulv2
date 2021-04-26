
/*==================================================*/
/*3.-Palet Color....................................*/
/*==================================================*/

var pallete = document.querySelectorAll('.circle-palet');
for (var i = 0; i < pallete.length; i++) {
var value = pallete[i].getAttribute('data-color'); // = 9
pallete[i].style.backgroundColor = value;
}

/*==================================================*/
/*5.-Sidebar Mobile.................................*/
/*==================================================*/

$('.handlerSide2').on('click', function(){
  $('.bgSidebar').toggleClass('open');
});

$('.close-btn').on('click', function(){
$('.bgSidebar').toggleClass('open');
});


$(".regular").slick({
  focusOnSelect: true,
  infinite: true,
  arrows: true,
  slidesToShow: 8,
  slidesToScroll: 3,
  centerMode: false,
  prevArrow: '<a style="display: block; position: relative; right: 0px; z-index: 1; " class="btn-arrow"><img src="images/icons/arrow-left-simple.svg" alt=""></a>',
  nextArrow: '<a style="display: block; position: relative; right: 0px; z-index: 1; " class="btn-arrow"><img src="images/icons/arrow-right-simple.svg" alt=""></a>',
  responsive: [
    {
      breakpoint: 1234,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 3,
        infinite: false,
      }
    },
    {
     breakpoint: 900,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       infinite: true,
     }
   },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]

});

