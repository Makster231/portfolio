(function ($, window, document) {
  function navPages() {
    nav.item.click(function () {
      let $this = $(this);
      nav.item.removeClass("js_active");
      $this.addClass("js_active");

      if ($this.is(nav.about)) {
        scrollToSection(0);
      }

      if ($this.is(nav.works)) {
        scrollToSection(1);
      }

      if ($this.is(nav.costs)) {
        scrollToSection(2);
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
