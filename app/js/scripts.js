"use strict";

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

    if (delta < 0) {
      if (nav.about.hasClass("js_active")) {
        return;
      }

      if (nav.works.hasClass("js_active")) {
        scrollToSection(0);
        nav.works.removeClass("js_active");
        nav.about.addClass("js_active");
        return;
      }

      if (nav.costs.hasClass("js_active")) {
        scrollToSection(1);
        nav.costs.removeClass("js_active");
        nav.works.addClass("js_active");
        return;
      }

      if (nav.contacts.hasClass("js_active")) {
        scrollToSection(2);
        nav.contacts.removeClass("js_active");
        nav.costs.addClass("js_active");
        return;
      }
    } else {
      if (nav.about.hasClass("js_active")) {
        scrollToSection(1);
        nav.about.removeClass("js_active");
        nav.works.addClass("js_active");
        return;
      }

      if (nav.works.hasClass("js_active")) {
        scrollToSection(2);
        nav.works.removeClass("js_active");
        nav.costs.addClass("js_active");
        return;
      }

      if (nav.costs.hasClass("js_active")) {
        scrollToSection(3);
        nav.costs.removeClass("js_active");
        nav.contacts.addClass("js_active");
        return;
      }

      if (nav.contacts.hasClass("js_active")) {
        return;
      }
    }

    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

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
  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1");
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
