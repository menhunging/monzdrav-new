$(document).ready(function () {
  if ($(".titlePage-section").find("img").length > 0) {
    $(".titlePage-section").addClass("titlePage-section--img");
  }

  if ($("[data-custom-open]").length > 0) {
    $("a[data-custom-open]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }
});

$(window).resize(function () {});
