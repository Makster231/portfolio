const nav = {
  item: $(".js_nav-item"),
  about: $(".js_nav-about"),
  works: $(".js_nav-works"),
  costs: $(".js_nav-costs"),
  contacts: $(".js_nav-contacts"),
};
const pages = {
  wrapper: $(".js_wrapper-page"),
  main: $(".js_main-page"),
  section: $(".js_main-section"),
  about: $(".js_page-about"),
  works: $(".js_page-works"),
  costs: $(".js_page-costs"),
  contacts: $(".js_page-contacts"),
};

let $is_mobile_size = $(window).width() < 640;
let isIE = /*@cc_on!@*/ false || !!document.documentMode;
let isEdge = !isIE && !!window.StyleMedia;

function rotateToSection(count) {
  if ($is_mobile_size) {
    pages.main.css({
      transform: "translateZ(-50vw) rotateY(" + count * 90 + "deg)",
    });
  } else if (!isIE && !isEdge) {
    pages.main.css({
      transform: "translateZ(-50vh) rotateX(" + count * 90 + "deg)",
    });
  } else {
    pages.main.css({
      transform: "translateX(-" + (count / 2) * $(window).width() + "px)",
    });
  }
}

function setHeight(section, padding) {
  if ($is_mobile_size) {
    // $(document).scrollTop(0);
    pages.wrapper.css({
      "height": section.outerHeight() + padding + "px",
    });
  }
}
