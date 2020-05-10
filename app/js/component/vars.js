const nav = {
  item: $(".js_nav-item"),
  about: $(".js_nav-about"),
  works: $(".js_nav-works"),
  costs: $(".js_nav-costs"),
  contacts: $(".js_nav-contacts"),
};
const pages = {
  main: $(".js_main-page"),
  section: $(".js_main-section"),
  about: $(".js_page-about"),
  works: $(".js_page-works"),
  costs: $(".js_page-costs"),
  contacts: $(".js_page-contacts"),
};

function scrollToSection(count) {
  pages.main.css({
    transform: "translateX(-" + count * $(window).width() + "px)",
  });
}

function setHeight(section) {
  if ($(window).width() < 640) {
    $(document).scrollTop(0);
    $("#js_body, .js_wrapper-page").css({
      "max-height": section.outerHeight() + 30,
    });
  }
}
