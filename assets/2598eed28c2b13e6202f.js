"use strict";

$(document).ready(function () {
  function scrollToNextBlock(item) {
    var nextBlock = item.parents('.block').next('.block');
    var needScroll = nextBlock.offset().top - 75;
    $('html,body').animate({
      'scrollTop': needScroll
    }, 1000);
  }

  function scrollToPrevBlock(item) {
    var nextBlock = item.parents('.block').prev('.block');
    var needScroll = nextBlock.offset().top - 75;
    $('html,body').animate({
      'scrollTop': needScroll
    }, 1000);
  }

  $('#page').fullpage({
    // licenseKey: "`;iGf8P5qcp[ -`4NGHq8C=*8``KHNx#h9h8lI1sB*#4@qyyn|-fhBCUL~VsR)f'.Y:)&X|k2H\\",
    verticalCentered: false,
    navigation: false,
    navigationPosition: 'right',
    scrollBar: true,
    recordHistory: false,
    fitToSection: false,
    bigSectionsDestination: 'top',
    responsiveWidth: 813,
    anchors: [
      'main',
      'about',
      'structure',
      'engineering',
      'mechanical-engineering',
      'electrical-engineering',
      'production-of-parts',
      'laboratory',
      'inspection',
      'expertise',
      'staff',
      'contacts',
    ],
  });

  $('.arrow-down').on('click', function () {
    if (!$('.page').hasClass('fp-destroyed')) {
      fullpage_api.moveTo(2);
    } else {
      scrollToNextBlock($(this));
    }
  });

  $('.arrow-top').on('click', function () {
    var needScroll = $('[data-anchor="structure"]').offset().top - 75;
    $('html,body').animate({
      'scrollTop': needScroll
    }, 1000);
  });

  $('.header-mobile__button').on('click', function () {
    $('.header-mobile__span').toggleClass('header-mobile__span_active');
    $('.mobile-menu').toggleClass('mobile-menu_open');
  });

  $('.arrow-top_mobile-menu').on('click', function () {
    $('.header-mobile__span').toggleClass('header-mobile__span_active');
    $('.mobile-menu').toggleClass('mobile-menu_open');
  });

  $('.mobile-menu__list a').on('click', function () {
    var goBlock = $('.block-' + $(this).data('to'));
    var needScroll = goBlock.offset().top - 75;
    $('html,body').animate({
      'scrollTop': needScroll
    }, 1000);

    $('.header-mobile__span').toggleClass('header-mobile__span_active');
    $('.mobile-menu').toggleClass('mobile-menu_open');

    return false;
  });


  var buttonWidth = $('.nav__item.nav__item_center').outerWidth();
  var blockWidth = $('.nav').outerWidth();

  $('.nav').css({
    'backgroundSize': (Math.floor((blockWidth - buttonWidth) / 2) - 1) + 'px 1px, ' + (Math.round((blockWidth - buttonWidth) / 2) - 1) + 'px 1px'
  });
  $(window).on('resize', function () {
    setTimeout(function () {
      var buttonWidth = $('.nav__item.nav__item_center').outerWidth();
      var blockWidth = $('.nav').outerWidth();

      $('.nav').css({
        'backgroundSize': (Math.floor((blockWidth - buttonWidth) / 2) - 1) + 'px 1px, ' + (Math.round((blockWidth - buttonWidth) / 2) - 1) + 'px 1px'
      });
    }, 300);
  });
})


new Swiper('#photo-slider-1 .photo-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '#photo-slider-1 .swiper-button-next',
    prevEl: '#photo-slider-1 .swiper-button-prev',
  },
  pagination: {
    el: '#photo-slider-1 .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    813: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 14,
    }
  }
});

new Swiper('#photo-slider-2 .photo-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '#photo-slider-2 .swiper-button-next',
    prevEl: '#photo-slider-2 .swiper-button-prev',
  },
  pagination: {
    el: '#photo-slider-2 .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    813: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 14,
    }
  }
});

new Swiper('#photo-slider-3 .photo-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '#photo-slider-3 .swiper-button-next',
    prevEl: '#photo-slider-3 .swiper-button-prev',
  },
  pagination: {
    el: '#photo-slider-3 .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    813: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 14,
    }
  }
});

new Swiper('#photo-slider-4 .photo-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  // centerInsufficientSlides: true,
  // autoplay: {
  //   delay: 5000,
  // },
  // navigation: {
  //   nextEl: '#photo-slider-4 .swiper-button-next',
  //   prevEl: '#photo-slider-4 .swiper-button-prev',
  // },
  // pagination: {
  //   el: '#photo-slider-4 .swiper-pagination',
  //   type: 'bullets',
  //   clickable: true,
  // },
  // breakpoints: {
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 0,
  //   },
  //   813: {
  //     slidesPerView: 3,
  //     spaceBetween: 14,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 14,
  //   }
  // }
});

new Swiper('#photo-slider-5 .photo-slider', {
  slidesPerView: 2,
  spaceBetween: 15,
  // loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  // navigation: {
  //   nextEl: '#photo-slider-5 .swiper-button-next',
  //   prevEl: '#photo-slider-5 .swiper-button-prev',
  // },
  // pagination: {
  //   el: '#photo-slider-5 .swiper-pagination',
  //   type: 'bullets',
  //   clickable: true,
  // },
  // breakpoints: {
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 0,
  //   },
  //   813: {
  //     slidesPerView: 3,
  //     spaceBetween: 14,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 14,
  //   }
  // }
});

new Swiper('#photo-slider-6 .photo-slider', {
  slidesPerView: 2,
  spaceBetween: 15,
  // loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  // navigation: {
  //   nextEl: '#photo-slider-5 .swiper-button-next',
  //   prevEl: '#photo-slider-5 .swiper-button-prev',
  // },
  // pagination: {
  //   el: '#photo-slider-5 .swiper-pagination',
  //   type: 'bullets',
  //   clickable: true,
  // },
  // breakpoints: {
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 0,
  //   },
  //   813: {
  //     slidesPerView: 3,
  //     spaceBetween: 14,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 14,
  //   }
  // }
});

new Swiper('#photo-slider-7 .photo-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '#photo-slider-7 .swiper-button-next',
    prevEl: '#photo-slider-7 .swiper-button-prev',
  },
  pagination: {
    el: '#photo-slider-7 .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    813: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 14,
    }
  }
});

new Swiper('#photo-slider-8 .photo-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '#photo-slider-8 .swiper-button-next',
    prevEl: '#photo-slider-8 .swiper-button-prev',
  },
  pagination: {
    el: '#photo-slider-8 .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    813: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 14,
    }
  }
});

new Swiper('#photo-slider-9 .photo-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  // centerInsufficientSlides: true,
  // autoplay: {
  //   delay: 5000,
  // },
  // navigation: {
  //   nextEl: '#photo-slider-4 .swiper-button-next',
  //   prevEl: '#photo-slider-4 .swiper-button-prev',
  // },
  // pagination: {
  //   el: '#photo-slider-4 .swiper-pagination',
  //   type: 'bullets',
  //   clickable: true,
  // },
  // breakpoints: {
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 0,
  //   },
  //   813: {
  //     slidesPerView: 3,
  //     spaceBetween: 14,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 14,
  //   }
  // }
});

$('[data-fancybox="photo-slider"]').fancybox();

new WOW().init();

$('.swiper-slide-duplicate').removeAttr('data-fancybox');

$(window).on('resize', function () {
  $('.swiper-slide-duplicate').removeAttr('data-fancybox');
})

$('.swiper-slide-duplicate').on('click', function (event) {
  event.preventDefault();
  $('[data-swiper-slide-index="' + this.getAttribute('data-swiper-slide-index') + '"][data-slider="' + this.getAttribute('data-slider') + '"]:not(.swiper-slide-duplicate)')[0].click();
})

function download(url) {
  const a = document.createElement('a')
  a.href = url
  a.download = url.split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

window.download = download
