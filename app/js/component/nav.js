(function ($, window, document) {
  function navPages() {
    nav.item.click(function () {
      let $this = $(this);
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

  $(() => {
    navPages();
  });
})(window.jQuery, window, document);
