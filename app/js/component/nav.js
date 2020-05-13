(function ($, window, document) {
  function navPages() {
    nav.item.click(function () {
      let $this = $(this);
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

  $(() => {
    setHeight($(".js_page-about"));
    navPages();
  });
})(window.jQuery, window, document);
