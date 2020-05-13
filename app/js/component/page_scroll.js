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
  }

  // Это решение предусматривает поддержку IE8-
  function onWheel(e) {
    e = e || window.event;

    // deltaY, detail содержат пиксели
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

    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  }

  $(() => {});
})(window.jQuery, window, document);
