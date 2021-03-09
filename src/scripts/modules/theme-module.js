AppName.Modules.ThemeModule = (function() {
  //Dependencies
  var core = AppName.Core;

  var _homeSwiper = function() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 15,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        575: {
          slidesPerView: 1,
          spaceBetween: 15,
        }
      },
    });
  }

  var _imgFullscreen = function() {
    $('.fullscreen').click(function(e){
      var src = $('img.swiper-img').attr('src');
      $('<div>').css({
          background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
          backgroundSize: 'contain',
          padding: '0 50px',
          width:'100%', 
          height:'100%',
          position:'fixed',
          zIndex:'10000',
          top:'0', left:'0',
          cursor: 'zoom-out'
        }).click(function(){
          $(this).remove();
        }).appendTo('body');
      e.preventDefault();
    });
  }

  var _showScroll = function() {
    var scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };
    var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

    function loop() {
      Array.prototype.forEach.call(elementsToShow, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
      scroll(loop);
    }

    loop();

    function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
      var rect = el.getBoundingClientRect();
      return (
      (rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
  }

  // var _headerDropdown = function() {
  //   $('.header-dropdown').on('click', function() {
  //     $(this).toggleClass('rotate');
  //     $('.header-dropdown-list').toggleClass('show');
  //   })
  // }

  var _headerDropdown = function() {
    $('.header-dropdown').on('click', function() {
      $(this).toggleClass('rotate');
      $('.header-dropdown-list').toggleClass('show');
    })
  }
  
  var _submenuDropdown = function() {
    $('.submenu').on('click', function() {
      // $(this).toggleClass('rotate');
      $('.header-dropdown--list').toggleClass('show');
    })
  }

  var _navbar_nav = function () {
    $('.close-icon').on('click', function() {
      // $('.navbar-collapse').removeClass('show');
      $('.navbar-collapse').collapse('hide');
      console.log('test');
    });
  }

  var _open_first_dropdown = function() {
    $('.js-open-first-dropdown').click(function(){
      console.log("OPEN FIRST LAYER");
      $('.header-dropdown-holder').show();
    });
  }

  var _open_second_dropdown = function() {
    $('.js-open-second-dropdown').click(function(){
      console.log("OPEN SECOND LAYER");
      // $('.header-dropdown-holder').show();
      $(".header-dropdown--list").show();
    });
  }

  var _close_second_dropdown = function() {
    $('.js-close-second-dropdown').click(function(){
      console.log("CLOSE SECOND LAYER");
      $(".header-dropdown--list").hide();
    });
  }

  var _close_first_dropdown = function() {
    $('.js-close-first-dropdown').click(function(){
      console.log("CLOSE FIRST LAYER");
      $(".header-dropdown-holder").hide();
    });
  }

  
  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    // _privateMethod();
    _homeSwiper();
    _imgFullscreen();
    _showScroll();
    // _headerDropdown();
    // _submenuDropdown();
    _navbar_nav();
    _open_first_dropdown();
    _open_second_dropdown();
    _close_second_dropdown();
    _close_first_dropdown();
  };

  return {
    init: init
  };
})();
