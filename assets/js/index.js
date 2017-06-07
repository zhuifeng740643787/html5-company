(function($) {

  //banner
  var bannerSwiper = new Swiper('#banners .swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: 3000,
    speed: 2000,
    effect: 'fade',
    // If we need pagination
    pagination: '#banners .swiper-pagination',
    paginationClickable: true,
  });

  //service
  var serviceSwiper = new Swiper('#services .swiper-container', {
    // Optional parameters
    loop: true,
    // autoplay: 3000,
    // speed: 2000,
    effect: 'slide',
    // If we need pagination
    pagination: '#services .swiper-pagination',
    paginationBulletRender: function(swiper, index, className) {
      var title = $('#services .pagination-title li')[index];
      return '<span class="' + className + ' button">' + $(title).html() + '</span>';
    },
    paginationClickable: true,

  });

  //evaluate
  var evaluateSwiper = new Swiper('#evaluate .swiper-container', {
    // Optional parameters
    loop: true,
    // autoplay: 3000,
    // speed: 2000,
    effect: 'slide',

    prevButton: '#evaluate .swiper-button-prev',
    nextButton: '#evaluate .swiper-button-next',
    pagination: '#evaluate .swiper-pagination',
    paginationClickable: true,

  });


  var $window = $(window);
  var $body = $('body');
  var $header = $('#header');
  var $footer = $('#footer');
  var $banners = $('#banners');
  var $jumpTop = $('#jump-top');
  $body.removeClass('is-loading');

  $banners.scrollex({
    bottom: '99%',
    enter: function() {
      $header.addClass('initial');
    },
    leave: function() {
      $header.removeClass('initial');
    }
  });

  $footer.scrollex({
    top: '1%',
    enter: function() {
      $jumpTop.removeClass('hide').addClass('show')
    },
    leave: function() {
      $jumpTop.removeClass('show').addClass('hide')
    }
  })
  $jumpTop.click(function(event) {
    $body.animate({
      scrollTop: 0
    }, 1000, 'linear');
    $jumpTop.removeClass('show').addClass('hide')
  });

  $('.menu-icon').click(function(){
    $body.addClass('is-menus-side-show');
  });
  $('.menus .close-icon').click(function(){
    $body.removeClass('is-menus-side-show');
  });
  $body.on('click', ".menus a", function(event) {
    $body.removeClass('is-menus-side-show');
  }).on('keydown', function(event) {
    if(event.keyCode == 27) {
      $body.removeClass('is-menus-side-show');
    }
  });





})(jQuery);
