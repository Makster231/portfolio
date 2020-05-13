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

let $is_mobile_size = $(window).width() < 640;

function rotateToSection(count) {
  if ($is_mobile_size) {
    pages.main.css({
      transform: "translateZ(-50vw) rotateY(" + count * 90 + "deg)",
    });
  } else {
    pages.main.css({
      transform: "translateZ(-50vh) rotateX(" + count * 90 + "deg)",
    });
  }
}

function setHeight(section) {
  if ($is_mobile_size) {
    $(document).scrollTop(0);
    $("#js_body, .js_wrapper-page, section").css({
      "max-height": section.outerHeight(),
    });
  }
}
