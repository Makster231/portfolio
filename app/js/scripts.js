"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

if ('objectFit' in document.documentElement.style === false) {
  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
      (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));
      image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
    });
  });
}

(function ($, window, document) {
  $(".js_fancybox-valio").click(function () {
    $.fancybox.open([{
      src: "../../images/works/valio/1.jpg"
    }, {
      src: "../../images/works/valio/2.jpg"
    }, {
      src: "../../images/works/valio/3.jpg"
    }, {
      src: "../../images/works/valio/4.jpg"
    }, {
      src: "../../images/works/valio/5.jpg"
    }, {
      src: "../../images/works/valio/6.jpg"
    }, {
      src: "../../images/works/valio/7.jpg"
    }, {
      src: "../../images/works/valio/8.jpg"
    }, {
      src: "../../images/works/valio/9.jpg"
    }, {
      src: "../../images/works/valio/10.jpg"
    }, {
      src: "../../images/works/valio/11.jpg"
    }, {
      src: "../../images/works/valio/12.jpg"
    }, {
      src: "../../images/works/valio/13.jpg"
    }, {
      src: "../../images/works/valio/14.jpg"
    }, {
      src: "../../images/works/valio/15.jpg"
    }, {
      src: "../../images/works/valio/16.jpg"
    }, {
      src: "../../images/works/valio/17.jpg"
    }, {
      src: "../../images/works/valio/18.jpg"
    }, {
      src: "../../images/works/valio/19.jpg"
    }, {
      src: "../../images/works/valio/20.jpg"
    }, {
      src: "../../images/works/valio/21.jpg"
    }, {
      src: "../../images/works/valio/22.jpg"
    }, {
      src: "../../images/works/valio/23.jpg"
    }, {
      src: "../../images/works/valio/24.jpg"
    }, {
      src: "../../images/works/valio/25.jpg"
    }, {
      src: "../../images/works/valio/26.jpg"
    }], {
      touch: false,
      loop: true
    });
  });
  $(".js_fancybox-sberbank").click(function () {
    $.fancybox.open([{
      src: "../../images/works/sberbank/1.jpg"
    }, {
      src: "../../images/works/sberbank/2.jpg"
    }, {
      src: "../../images/works/sberbank/3.jpg"
    }, {
      src: "../../images/works/sberbank/4.jpg"
    }, {
      src: "../../images/works/sberbank/5.jpg"
    }, {
      src: "../../images/works/sberbank/6.jpg"
    }, {
      src: "../../images/works/sberbank/7.jpg"
    }, {
      src: "../../images/works/sberbank/8.jpg"
    }, {
      src: "../../images/works/sberbank/9.jpg"
    }, {
      src: "../../images/works/sberbank/10.jpg"
    }, {
      src: "../../images/works/sberbank/11.jpg"
    }, {
      src: "../../images/works/sberbank/12.jpg"
    }, {
      src: "../../images/works/sberbank/13.jpg"
    }, {
      src: "../../images/works/sberbank/14.jpg"
    }, {
      src: "../../images/works/sberbank/15.jpg"
    }, {
      src: "../../images/works/sberbank/16.jpg"
    }, {
      src: "../../images/works/sberbank/17.jpg"
    }, {
      src: "../../images/works/sberbank/18.jpg"
    }, {
      src: "../../images/works/sberbank/19.jpg"
    }, {
      src: "../../images/works/sberbank/20.jpg"
    }, {
      src: "../../images/works/sberbank/21.jpg"
    }], {
      touch: false,
      loop: true
    });
  });
  $(".js_fancybox-bitbunch").click(function () {
    $.fancybox.open([{
      src: "../../images/works/bitbunch/full.jpg"
    }, {
      src: "../../images/works/bitbunch/full_tablet.jpg"
    }, {
      src: "../../images/works/bitbunch/full_mob.jpg"
    }], {
      loop: true,
      touch: false
    });
  });
})(window.jQuery, window, document);

var nav = {
  item: $(".js_nav-item"),
  about: $(".js_nav-about"),
  works: $(".js_nav-works"),
  costs: $(".js_nav-costs"),
  contacts: $(".js_nav-contacts")
};
var pages = {
  main: $(".js_main-page"),
  section: $(".js_main-section"),
  about: $(".js_page-about"),
  works: $(".js_page-works"),
  costs: $(".js_page-costs"),
  contacts: $(".js_page-contacts")
};
var $is_mobile_size = $(window).width() < 640;

function rotateToSection(count) {
  if ($is_mobile_size) {
    pages.main.css({
      transform: "translateZ(-50vw) rotateY(" + count * 90 + "deg)"
    });
  } else {
    pages.main.css({
      transform: "translateZ(-50vh) rotateX(" + count * 90 + "deg)"
    });
  }
}

function setHeight(section) {
  if ($is_mobile_size) {
    $(document).scrollTop(0);
    $("#js_body, .js_wrapper-page, section").css({
      "max-height": section.outerHeight()
    });
  }
}

(function ($, window, document) {
  var elem = document.getElementById("js_body");

  if (elem.addEventListener) {
    if ("onwheel" in document) {
      // IE9+, FF17+
      elem.addEventListener("wheel", onWheel);
    } else if ("onmousewheel" in document) {
      // устаревший вариант события
      elem.addEventListener("mousewheel", onWheel);
    } else {
      // Firefox < 17
      elem.addEventListener("MozMousePixelScroll", onWheel);
    }
  } else {
    // IE8-
    elem.attachEvent("onmousewheel", onWheel);
  } // Это решение предусматривает поддержку IE8-


  function onWheel(e) {
    e = e || window.event; // deltaY, detail содержат пиксели
    // wheelDelta не дает возможность узнать количество пикселей
    // onwheel || MozMousePixelScroll || onmousewheel

    var delta = e.deltaY || e.detail || e.wheelDelta;
    pages.about.removeClass("js_animation-about");
    pages.works.removeClass("js_animation-works");
    pages.costs.removeClass("js_animation-costs");
    pages.contacts.removeClass("js_animation-contacts");

    if (delta < 0) {
      if (nav.about.hasClass("js_active")) {
        rotateToSection(3);
        nav.about.removeClass("js_active");
        nav.contacts.addClass("js_active");
        pages.contacts.addClass("js_animation-contacts");
        return;
      }

      if (nav.works.hasClass("js_active")) {
        rotateToSection(0);
        nav.works.removeClass("js_active");
        nav.about.addClass("js_active");
        pages.about.addClass("js_animation-about");
        return;
      }

      if (nav.costs.hasClass("js_active")) {
        rotateToSection(1);
        nav.costs.removeClass("js_active");
        nav.works.addClass("js_active");
        pages.works.addClass("js_animation-works");
        return;
      }

      if (nav.contacts.hasClass("js_active")) {
        rotateToSection(2);
        nav.contacts.removeClass("js_active");
        nav.costs.addClass("js_active");
        pages.costs.addClass("js_animation-costs");
        return;
      }
    } else {
      if (nav.about.hasClass("js_active")) {
        rotateToSection(1);
        nav.about.removeClass("js_active");
        nav.works.addClass("js_active");
        pages.works.addClass("js_animation-works");
        return;
      }

      if (nav.works.hasClass("js_active")) {
        rotateToSection(2);
        nav.works.removeClass("js_active");
        nav.costs.addClass("js_active");
        pages.costs.addClass("js_animation-costs");
        return;
      }

      if (nav.costs.hasClass("js_active")) {
        rotateToSection(3);
        nav.costs.removeClass("js_active");
        nav.contacts.addClass("js_active");
        pages.contacts.addClass("js_animation-contacts");
        return;
      }

      if (nav.contacts.hasClass("js_active")) {
        rotateToSection(0);
        nav.contacts.removeClass("js_active");
        nav.about.addClass("js_active");
        pages.about.addClass("js_animation-about");
        return;
      }
    }

    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  $(function () {});
})(window.jQuery, window, document); // (function ($, window, document) {
//   var tsX;
//   var tsY;
//   $(document).bind("touchstart", function (e) {
//     console.log(e);
//     tsX = e.originalEvent.touches[0].clientX;
//     tsY = e.originalEvent.touches[0].clientY;
//   });
//   $(document).bind("touchend", function (e) {
//     var teX = e.originalEvent.changedTouches[0].clientX;
//     var teY = e.originalEvent.changedTouches[0].clientY;
//     // tsX = Math.floor(tsX);
//     // tsY = Math.floor(tsY);
//     // teX = Math.floor(teX);
//     // teY = Math.floor(teY);
//     pages.about.removeClass("js_animation-about");
//     pages.works.removeClass("js_animation-works");
//     pages.costs.removeClass("js_animation-costs");
//     pages.contacts.removeClass("js_animation-contacts");
//     console.log(e);
//     console.log("tsX: "+tsX);
//     console.log("tsY: "+tsY);
//     console.log("teX: "+teX);
//     console.log("teY: "+teY);
//     if (tsX < teX) {
//       if (nav.about.hasClass("js_active")) {
//         rotateToSection(3);
//         nav.about.removeClass("js_active");
//         nav.contacts.addClass("js_active");
//         pages.contacts.addClass("js_animation-contacts");
//         return;
//       }
//       if (nav.works.hasClass("js_active")) {
//         rotateToSection(0);
//         nav.works.removeClass("js_active");
//         nav.about.addClass("js_active");
//         pages.about.addClass("js_animation-about");
//         return;
//       }
//       if (nav.costs.hasClass("js_active")) {
//         rotateToSection(1);
//         nav.costs.removeClass("js_active");
//         nav.works.addClass("js_active");
//         pages.works.addClass("js_animation-works");
//         return;
//       }
//       if (nav.contacts.hasClass("js_active")) {
//         rotateToSection(2);
//         nav.contacts.removeClass("js_active");
//         nav.costs.addClass("js_active");
//         pages.costs.addClass("js_animation-costs");
//         return;
//       }
//     } else {
//       if (nav.about.hasClass("js_active")) {
//         rotateToSection(1);
//         nav.about.removeClass("js_active");
//         nav.works.addClass("js_active");
//         pages.works.addClass("js_animation-works");
//         return;
//       }
//       if (nav.works.hasClass("js_active")) {
//         rotateToSection(2);
//         nav.works.removeClass("js_active");
//         nav.costs.addClass("js_active");
//         pages.costs.addClass("js_animation-costs");
//         return;
//       }
//       if (nav.costs.hasClass("js_active")) {
//         rotateToSection(3);
//         nav.costs.removeClass("js_active");
//         nav.contacts.addClass("js_active");
//         pages.contacts.addClass("js_animation-contacts");
//         return;
//       }
//       if (nav.contacts.hasClass("js_active")) {
//         rotateToSection(0);
//         nav.contacts.removeClass("js_active");
//         nav.about.addClass("js_active");
//         pages.about.addClass("js_animation-about");
//         return;
//       }
//     }
//   });
//   $(() => {});
// })(window.jQuery, window, document);


(function ($, window, document) {
  function navPages() {
    nav.item.click(function () {
      var $this = $(this);
      nav.item.removeClass("js_active");
      $this.addClass("js_active");

      if ($this.is(nav.about)) {
        setHeight($(".js_page-about"));
        rotateToSection(0);
        pages.about.addClass("js_animation-about");
      } else {
        pages.about.removeClass("js_animation-about");
      }

      if ($this.is(nav.works)) {
        rotateToSection(1);
        pages.works.addClass("js_animation-works");
        setHeight($(".js_page-works"));
      } else {
        pages.works.removeClass("js_animation-works");
      }

      if ($this.is(nav.costs)) {
        setHeight($(".js_page-costs"));
        rotateToSection(2);
        pages.costs.addClass("js_animation-costs");
      } else {
        pages.costs.removeClass("js_animation-costs");
      }

      if ($this.is(nav.contacts)) {
        setHeight($(".js_page-contacts"));
        rotateToSection(3);
        pages.contacts.addClass("js_animation-contacts");
      } else {
        pages.contacts.removeClass("js_animation-contacts");
      }
    });
  }

  $(function () {
    setHeight($(".js_page-about"));
    navPages();
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function name(name) {
    return /^(([a-zA-ZÀ-ÿ`']{0,}([.]{1})?[ |.\s|`|'|-][a-zA-ZÀ-ÿ]{1,}){1,})([.]?|[']?|[`]?)[ ]?$/.test(name);
  }

  function email(email) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
  }

  jQuery.validator.setDefaults({
    errorElement: "label",
    errorClass: "error",
    focusInvalid: false,
    errorPlacement: function errorPlacement(error, element) {
      $(element).closest(".form-group").append(error);
    },
    highlight: function highlight(element, errorClass, validClass) {
      var fieldWrap = $(element).closest(".form-group");
      fieldWrap.addClass("has-error");
      $(element).addClass("error");
    },
    unhighlight: function unhighlight(element, errorClass, validClass) {
      $(element).closest(".form-group").removeClass("has-error");
      $(element).removeClass("error");
    }
  });

  function formValidate(form) {
    form.validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true
        },
        textarea: {
          required: false,
          minlength: 20
        }
      },
      messages: {
        name: {
          required: "Введите Ваше Имя"
        },
        email: {
          required: "Введите Валидный E-mail"
        },
        textarea: {
          minlength: "Введите Как Минимум 20 Знаков"
        }
      }
    });
  }

  function formSubmit() {
    $(".js_form").on("submit", function (e) {
      e.preventDefault();
      var $form = $(this);
      var $form_btn = $(this).find("button");
      formValidate($form);
      var isValid = $form.valid();

      if (!isValid) {
        return;
      }

      $form_btn.addClass("js_loader").attr("disabled", true);
      var data = $form.serialize();
      setTimeout(function () {
        $form.addClass("js_form-success");
      }, 1000);
      $.ajax({
        type: "POST",
        url: "./mail.php",
        data: data,
        success: function success(msg) {
          if (msg == "OK") {
            setTimeout(function () {
              $form.addClass("js_form-success");
              $form_btn.removeClass("js_loader").attr("disabled", false);
            }, 1000);
          } else {
            alert("Произошла какая-то ошибка, пожалуйста, попробуйте позже");
            $form_btn.removeClass("js_loader").attr("disabled", false);
          }
        }
      });
    });
  }

  $(function () {
    formSubmit();
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    $("head").prepend('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />');
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function gallery() {
    var _ref;

    $(".js_works-page--slider").slick({
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      lazyLoad: "ondemand",
      slidesToScroll: 1,
      responsive: [(_ref = {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      }, _defineProperty(_ref, "breakpoint", 640), _defineProperty(_ref, "settings", {
        slidesToShow: 1
      }), _ref)]
    });
  }

  $(function () {
    if (!$is_mobile_size) {
      gallery();
    } //show content after loaded page


    $("body").css("opacity", "1");
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
