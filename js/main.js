$(document).on('ready', function() {
    $('.slider-for').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       asNavFor: '.slider-nav'
     });
    
     $('.slider-nav').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       asNavFor: '.slider-for',
       dots: false,
       centerMode: true,
       focusOnSelect: true,
       prevArrow: '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="38.66px" style="margin: 0px 10px;" viewBox="0 0 14.769 38.66" enable-background="new 0 0 14.769 38.66" xml:space="preserve"><rect x="-54.982" y="136.746" fill="#9BCA64" width="107.188" height="107.188"/><path fill="#FFFFFF" d="M2.801,219.168c-3.288,0-5.963-2.674-5.963-5.963c0-3.287,2.675-5.961,5.963-5.961c3.286,0,5.959,2.674,5.959,5.961C8.76,216.495,6.087,219.168,2.801,219.168z M-23.357,219.168c-3.286,0-5.961-2.674-5.961-5.963c0-3.287,2.675-5.961,5.961-5.961c3.287,0,5.962,2.674,5.962,5.961C-17.395,216.495-20.07,219.168-23.357,219.168z M9.71,203.29h-38.467l-9.264-17.704h5.858l6.141,11.733l0.205,0.391l0.203,0.389h0.438h0.439H4.722h0.545h0.545l0.152-0.523l0.152-0.523l8.97-30.878h22.935v5.191H20.075H19.53h-0.544l-0.153,0.522l-0.151,0.523L9.71,203.29z M-20.498,190.98c-3.287,0-5.962-2.674-5.962-5.961c0-3.288,2.675-5.962,5.962-5.962c3.286,0,5.961,2.674,5.961,5.962C-14.537,188.306-17.211,190.98-20.498,190.98z M-0.652,190.405c-3.286,0-5.961-2.674-5.961-5.961c0-3.288,2.675-5.962,5.961-5.962c3.287,0,5.963,2.674,5.963,5.962C5.311,187.731,2.635,190.405-0.652,190.405z M-10.43,173.435c-3.288,0-5.962-2.674-5.962-5.961c0-3.287,2.674-5.961,5.962-5.961c3.287,0,5.96,2.674,5.96,5.961C-4.47,170.761-7.143,173.435-10.43,173.435z"/><polygon fill="#4C82AD" points="0,19.33 11.477,0 14.769,1.954 4.775,18.783 4.613,19.058 4.454,19.33 4.614,19.602 4.775,19.875 14.769,36.707 11.477,38.66 "/></svg>',
     });
     $('.lazy').slick({
       lazyLoad: 'ondemand', // ondemand progressive anticipated
       infinite: true,
       focusOnSelect: true,
       arrows: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       centerMode: true,
       dots: false,
       prevArrow: '<a style="display: block; position: relative; right: -15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-left"></i></a>',
       nextArrow: '<a style="display: block; position: relative; right: 15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-right"></i></a>',
       
     });
 
     $(".regular").slick({
       focusOnSelect: true,
       infinite: true,
       arrows: true,
       slidesToShow: 4,
       slidesToScroll: 4,
       centerMode: true,
       prevArrow: '<a style="display: block; position: relative; right: -15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-left"></i></a>',
       nextArrow: '<a style="display: block; position: relative; right: 15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-right"></i></a>',
       responsive: [
         {
           breakpoint: 1234,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: true,
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

     $(".promo-banner").slick({
      focusOnSelect: true,
      infinite: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      prevArrow: '<a style="display: block; position: relative; right: -15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-left"></i></a>',
      nextArrow: '<a style="display: block; position: relative; right: 15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-right"></i></a>',
      responsive: [
        {
          breakpoint: 1024,
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
 });
 
/* Hero Area Slider Active */
$('.hero-area').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  adaptiveHeight: true,
  dots: false,
  arrows: true,
  fade: true,
  easing: 'ease-in-out',
  speed: 1000,
  prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="icon-arrow-left"></i></span>',
  nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="icon-arrow-right"></i></span>',
});