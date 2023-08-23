$(document).ready(function () {
  if ($(".titlePage-section").find("img").length > 0) {
    $(".titlePage-section").addClass("titlePage-section--img");
  }

  if ($("[data-custom-open]").length > 0) {
    $("a[data-custom-open]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".filter").length > 0) {
    $(".range").map(function () {
      let range = $(this).find(".rangle-block input"),
        inputForm = $(this).find(".from"),
        inputTo = $(this).find(".to"),
        instance,
        min = 0,
        max = 126,
        from = 0,
        to = 0;

      range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 800,
        grid: false,
        onStart: updateInputs,
        onChange: updateInputs,
      });

      instance = range.data("ionRangeSlider");

      function updateInputs(data) {
        from = data.from;
        to = data.to;

        inputForm.prop("value", from);
        inputTo.prop("value", to);
      }

      inputForm.on("input", function () {
        let val = $(this).prop("value");

        if (val < min) {
          val = min;
        } else if (val > to) {
          val = to;
        }

        instance.update({
          from: val,
        });
      });

      inputTo.on("input", function () {
        let val = $(this).prop("value");

        if (val < from) {
          val = from;
        } else if (val > max) {
          val = max;
        }

        instance.update({
          to: val,
        });
      });
    });
  }

  if ($(".btn-filter").length > 0) {
    $(".btn-filter").on("click", function () {
      $(".filter").toggleClass("show");

      $(document).mouseup(function (e) {
        if (
          !$(".filter").is(e.target) &&
          $(".filter").has(e.target).length === 0 &&
          !$(".btn-filter").is(e.target)
        ) {
          $(".filter").removeClass("show");
          $(document).off("mouseup");
        }
      });
    });
  }

  if ($(".slider-card").length > 0) {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      arrows: false,
      focusOnSelect: true,

      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

$(window).resize(function () {});
