/*  -------------------------------------------------------
  Javascript helper document insert any simple JS functions here.
------------------------------------------------------- */

/*  -------------------------------------------------------------
    DEFAULT JS FUNCTIONS BELOW THIS LINE
------------------------------------------------------------- */

/* SLIDE OUT MENU */
jQuery(function($) {
  // Slideout Menu
  "use strict";
  $("#menu-toggle").on("change", function(event) {
    event.preventDefault();
    // create menu variables
    var slideoutMenu = $(".header-tools");

    // toggle open class
    slideoutMenu.toggleClass("open");

    // slide menu
    if (slideoutMenu.hasClass("open")) {
      slideoutMenu.slideDown({
        start: function() {
          $(this).css({
            display: "flex",
          });
        },
      });
    } else {
      slideoutMenu.slideUp(300);
    }
  });

  $("#slideout-nav a").on("click", function() {
    var slideoutMenu = $(".header-tools");
    $("#menu-toggle").prop("checked", false);
    slideoutMenu.toggleClass("open");
    slideoutMenu.slideUp(300);
  });

  $("#menu-mobile-menu > li.menu-item-has-children > a").on("click", function(e) {
    if ($(this).hasClass("up")) {
      return;
    } else {
      e.preventDefault();
      $(this).toggleClass("up");
      $(this)
        .siblings("ul")
        .slideToggle("fast", function() {});
    }
  });
});

/* SLIDE OUT SEARCH */
jQuery(function($) {
  "use strict";
  $("#search-toggle").on("change", function(event) {
    event.preventDefault();
    var slideoutSearch = $(".site-search");
    slideoutSearch.toggleClass("open");

    if (slideoutSearch.hasClass("open")) {
      slideoutSearch.slideUp(300);
    } else {
      slideoutSearch.slideDown(300);
    }
  });

  $(".site-search a.search-close").on("click", function(event) {
    event.preventDefault();
    var slideoutSearch = $(".site-search");
    $("#search-toggle").prop("checked", false);
    slideoutSearch.toggleClass("open");
    slideoutSearch.slideUp(300);
  });
});

/* RECIPE FILTER */
jQuery(function($) {
  "use strict";
  $(".recipe-filter__dropdown > span").on("click", function() {
    var dropdown = $(this)
      .parent()
      .find(".facetwp-facet");
    dropdown.slideToggle(300);
    $(this).toggleClass("open");
  });

  $(".recipe-filter__reset").on("click", function() {
    $(".recipe-filter__dropdown .facetwp-facet").hide();
    $(".recipe-filter__dropdown > span").removeClass("open");
  });
});

// Scrolling Anchor Link
// var scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 500,
//   offset: 0,
// });

//Fancy Credits
jQuery(function($) {
  "use strict";
  $("#credit-trigger").on("click", function(e) {
    e.preventDefault();
    if ($("#credit-trigger").hasClass("credit-open") || $("#credit-close").hasClass("credit-open")) {
      $("#credit-trigger").removeClass("credit-open");
      $("#credit-close").removeClass("credit-open");
      $("#creditslide").removeClass("credit-open");
    } else {
      $("#credit-trigger").addClass("credit-open");
      $("#credit-close").addClass("credit-open");
      $("#creditslide").addClass("credit-open");
      $("#creditslide").show();
    }
  });

  $("#credit-close").on("click", function(e) {
    e.preventDefault();
    if ($("#credit-trigger").hasClass("credit-open") || $("#credit-close").hasClass("credit-open")) {
      $("#credit-trigger").removeClass("credit-open");
      $("#credit-close").removeClass("credit-open");
      $("#creditslide").removeClass("credit-open");
    } else {
      $("#credit-trigger").addClass("credit-open");
      $("#credit-close").addClass("credit-open");
      $("#creditslide").addClass("credit-open");
      $("#creditslide").show();
    }
  });
});

// Wrap first X words
jQuery(function($) {
  "use strict";
  $.fn.wrapStart = function(numWords) {
    var node = this.contents()
        .filter(function() {
          return this.nodeType == 3;
        })
        .first(),
      text = node.text(),
      first = text.split(" ", numWords).join(" ");

    if (!node.length) return;

    node[0].nodeValue = text.slice(first.length);
    node.before("<strong>" + first + "</strong>");
  };

  $("span.note").each(function() {
    $(this).wrapStart(1);
  });
});

// RELATED PRODUCTS
/* 
// Commented out by FD April 12 
jQuery(function($) {
  "use strict";
  $(".related-products__slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    prevArrow: $(".related-products__button--prev"),
    nextArrow: $(".related-products__button--next"),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});*/

// Small stuff
jQuery(function($) {
  "use strict";
  $(".woocommerce li.product img").wrap("<div class='woocommerce-loop-product__image'></div>");
  $(".newsletter--large").attr("id", "subscribe");
  // $(".entry-content iframe").wrap("<div class='iframe-container'></div>");
  // $(".iframe-container").wrap("<div class='iframe-container__wrap'></div>");
});

// Scroll Reveal
jQuery(function($) {
  $(window).on("load", function() {
    // Hack Scroll Reveal to add watch events
    // https://github.com/jlmakes/scrollreveal/issues/337#issuecomment-309657013
    ScrollReveal().watch = function(target, onEnter, onExit) {
      onExit = onExit || function() {};

      if (typeof onEnter === "function" && typeof onExit === "function") {
        var noEffect = {
          delay: 0,
          distance: 0,
          duration: 0,
          scale: 1,
          opacity: null,
          rotate: { x: 0, y: 0, z: 0 },

          reset: true,
          beforeReset: onExit,
          beforeReveal: onEnter,
        };
        this.reveal(target, noEffect);
      } else {
        throw new Error("Watch received invalid arguments.");
      }
    };

    // Watch homepage YT video for autoplay
    ScrollReveal().watch(".autoplay-video .arve-iframe", function onEnter(el) {
      var src = el.getAttribute("src");
      if (src.includes("autoplay=0")) {
        var newsrc = src.replace("autoplay=0", "autoplay=1");
        el.setAttribute("src", newsrc);
      }
    });
  });
});

(function($) {
  $(document).on("facetwp-refresh", function() {
    $(".recipe-filter__dropdown span").append(
      '<svg class="recipe-filter__loader" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="22px" height="22px" viewBox="0 0 128 128" xml:space="preserve"><g><circle cx="16" cy="64" r="16" fill="#000"/><circle cx="16" cy="64" r="14.344" fill="#000" transform="rotate(45 64 64)"/><circle cx="16" cy="64" r="12.531" fill="#000" transform="rotate(90 64 64)"/><circle cx="16" cy="64" r="10.75" fill="#000" transform="rotate(135 64 64)"/><circle cx="16" cy="64" r="10.063" fill="#000" transform="rotate(180 64 64)"/><circle cx="16" cy="64" r="8.063" fill="#000" transform="rotate(225 64 64)"/><circle cx="16" cy="64" r="6.438" fill="#000" transform="rotate(270 64 64)"/><circle cx="16" cy="64" r="5.375" fill="#000" transform="rotate(315 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="800ms" repeatCount="indefinite"></animateTransform></g></svg>'
    );
  });
  $(document).on("facetwp-loaded", function() {
    $(".recipe-filter__dropdown .recipe-filter__loader").remove();
  });
})(jQuery);
