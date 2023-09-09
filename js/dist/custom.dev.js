"use strict";

(function () {
  "use strict";

  AOS.init({
    duration: 800,
    easing: "slide",
    once: true
  });

  var preloader = function preloader() {
    var loader = document.querySelector(".loader");
    var overlay = document.getElementById("overlayer");

    function fadeOut(el) {
      el.style.opacity = 1;

      (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    }

    setTimeout(function () {
      fadeOut(loader);
      fadeOut(overlay);
    }, 200);
  };

  preloader();

  var tinyslier = function tinyslier() {
    var el = document.querySelectorAll(".wide-slider-testimonial");

    if (el.length > 0) {
      var slider = tns({
        container: ".wide-slider-testimonial",
        items: 1,
        axis: "horizontal",
        swipeAngle: false,
        speed: 400,
        nav: true,
        controls: false,
        controlsPosition: "bottom",
        autoHeight: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        autoplayButtonOutput: false,
        controlsContainer: false
      });
    }

    var destinationSlider = document.querySelectorAll(".destination-slider");

    if (destinationSlider.length > 0) {
      var desSlider = tns({
        container: ".destination-slider",
        items: 1,
        axis: "horizontal",
        swipeAngle: false,
        speed: 400,
        nav: true,
        gutter: 30,
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: "#destination-controls",
        responsive: {
          350: {
            items: 2
          },
          500: {
            items: 2
          },
          900: {
            items: 3
          }
        }
      });
    }
  };

  tinyslier();

  var lightbox = function lightbox() {
    var lightboxVideo = GLightbox({
      selector: ".glightbox3"
    });
  };

  lightbox();
})();

function more() {
  var moreBtn = document.getElementById('more');
  var text = document.querySelector('.text');

  if (text.style.display == 'inline') {
    text.style.display = "none";
    moreBtn.innerHTML = 'Read More';
  } else {
    text.style.display = "inline";
    moreBtn.innerHTML = 'Read Less';
  }
}