"use strict";

if ('objectFit' in document.documentElement.style === false) {
  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
      (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));
      image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
    });
  });
}

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

function scrollToSection(count) {
  pages.main.css({
    transform: "translateX(-" + count * $(window).width() + "px)"
  });
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
        scrollToSection(3);
        nav.about.removeClass("js_active");
        nav.contacts.addClass("js_active");
        pages.contacts.addClass("js_animation-contacts");
        return;
      }

      if (nav.works.hasClass("js_active")) {
        scrollToSection(0);
        nav.works.removeClass("js_active");
        nav.about.addClass("js_active");
        pages.about.addClass("js_animation-about");
        return;
      }

      if (nav.costs.hasClass("js_active")) {
        scrollToSection(1);
        nav.costs.removeClass("js_active");
        nav.works.addClass("js_active");
        pages.works.addClass("js_animation-works");
        return;
      }

      if (nav.contacts.hasClass("js_active")) {
        scrollToSection(2);
        nav.contacts.removeClass("js_active");
        nav.costs.addClass("js_active");
        pages.costs.addClass("js_animation-costs");
        return;
      }
    } else {
      if (nav.about.hasClass("js_active")) {
        scrollToSection(1);
        nav.about.removeClass("js_active");
        nav.works.addClass("js_active");
        pages.works.addClass("js_animation-works");
        return;
      }

      if (nav.works.hasClass("js_active")) {
        scrollToSection(2);
        nav.works.removeClass("js_active");
        nav.costs.addClass("js_active");
        pages.costs.addClass("js_animation-costs");
        return;
      }

      if (nav.costs.hasClass("js_active")) {
        scrollToSection(3);
        nav.costs.removeClass("js_active");
        nav.contacts.addClass("js_active");
        pages.contacts.addClass("js_animation-contacts");
        return;
      }

      if (nav.contacts.hasClass("js_active")) {
        scrollToSection(0);
        nav.contacts.removeClass("js_active");
        nav.about.addClass("js_active");
        pages.about.addClass("js_animation-about");
        return;
      }
    }

    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  $(function () {});
})(window.jQuery, window, document);

(function ($, window, document) {
  var ts;
  $(document).bind("touchstart", function (e) {
    ts = e.originalEvent.touches[0].clientX;
  });
  $(document).bind("touchend", function (e) {
    var te = e.originalEvent.changedTouches[0].clientX;
    ts = Math.floor(ts);
    te = Math.floor(te);

    if (ts === te) {
      return;
    } else if (ts < te) {
      if (nav.about.hasClass("js_active")) {
        scrollToSection(3);
        nav.about.removeClass("js_active");
        nav.contacts.addClass("js_active");
        pages.contacts.addClass("js_animation-contacts");
        return;
      }

      if (nav.works.hasClass("js_active")) {
        scrollToSection(0);
        nav.works.removeClass("js_active");
        nav.about.addClass("js_active");
        pages.about.addClass("js_animation-about");
        return;
      }

      if (nav.costs.hasClass("js_active")) {
        scrollToSection(1);
        nav.costs.removeClass("js_active");
        nav.works.addClass("js_active");
        pages.works.addClass("js_animation-works");
        return;
      }

      if (nav.contacts.hasClass("js_active")) {
        scrollToSection(2);
        nav.contacts.removeClass("js_active");
        nav.costs.addClass("js_active");
        pages.costs.addClass("js_animation-costs");
        return;
      }
    } else {
      if (nav.about.hasClass("js_active")) {
        scrollToSection(1);
        nav.about.removeClass("js_active");
        nav.works.addClass("js_active");
        pages.works.addClass("js_animation-works");
        return;
      }

      if (nav.works.hasClass("js_active")) {
        scrollToSection(2);
        nav.works.removeClass("js_active");
        nav.costs.addClass("js_active");
        pages.costs.addClass("js_animation-costs");
        return;
      }

      if (nav.costs.hasClass("js_active")) {
        scrollToSection(3);
        nav.costs.removeClass("js_active");
        nav.contacts.addClass("js_active");
        pages.contacts.addClass("js_animation-contacts");
        return;
      }

      if (nav.contacts.hasClass("js_active")) {
        scrollToSection(0);
        nav.contacts.removeClass("js_active");
        nav.about.addClass("js_active");
        pages.about.addClass("js_animation-about");
        return;
      }
    }
  });
  $(function () {});
})(window.jQuery, window, document);

(function ($, window, document) {
  function navPages() {
    nav.item.click(function () {
      var $this = $(this);
      nav.item.removeClass("js_active");
      $this.addClass("js_active");

      if ($this.is(nav.about)) {
        scrollToSection(0);
        pages.about.addClass("js_animation-about");
      } else {
        pages.about.removeClass("js_animation-about");
      }

      if ($this.is(nav.works)) {
        scrollToSection(1);
        pages.works.addClass("js_animation-works");
      } else {
        pages.works.removeClass("js_animation-works");
      }

      if ($this.is(nav.costs)) {
        scrollToSection(2);
        pages.costs.addClass("js_animation-costs");
      } else {
        pages.costs.removeClass("js_animation-costs");
      }

      if ($this.is(nav.contacts)) {
        scrollToSection(3);
      }
    });
  }

  $(function () {
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
    //show content after loaded page
    $("body").css("opacity", "1");
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
