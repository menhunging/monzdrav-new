$(document).ready(function () {

    MicroModal.init({
        openTrigger: 'data-custom-open',
        disableScroll: false,
        awaitCloseAnimation: true
    })

    if ($('.selectric').length > 0) {
        $('.selectric').selectric();
    }

    if ($('.sliderProjects').length > 0) {
        let slider = $('.sliderProjects')
        let countItem = $('.sliderProjects .item').length

        if (countItem <= 1) {
            slider.addClass('not-dots')
        }

        slider.slick({
            infinite: true,
            initialSlide: initialSlideSliders(countItem),
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });

        dotsSliderPosition(slider)

    }

    if ($('.sliderReviews').length > 0) {

        let slider = $('.sliderReviews')
        let countItem = $('.sliderReviews .item').length

        if (countItem <= 1) {
            slider.addClass('not-dots')
        }

        slider.slick({
            infinite: true,
            initialSlide: initialSlideSliders(countItem),
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });

        dotsSliderPosition(slider)
    }

    if ($('.sliderGallery').length > 0) {

        let slider = $('.sliderGallery')
        let countItem = $('.sliderGallery .item').length

        if (countItem <= 1) {
            slider.addClass('not-dots')
        }

        slider.slick({
            infinite: true,
            initialSlide: initialSlideSliders(countItem),
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });

        dotsSliderPosition(slider)
    }

    if ($('.steps').length > 0) {
        let slider = $('.steps')
        let countItem = $('.steps .item').length

        if ($(window).width() < 768) {

            if (countItem <= 1) {
                slider.addClass('not-dots')
            }

            stepSliderInit()

            slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                $('.stepsNumbers .num').removeClass('active')
                $('.stepsNumbers .num').map(function () {
                    if (nextSlide == $(this).attr('data-slide')) {
                        $(this).addClass('active')
                    }
                })
            });

            dotsSliderPosition(slider)
        }

        if ($('.stepsNumbers').length > 0) {
            $('.stepsNumbers .num').map(function () {
                $(this).click(function () {
                    $('.stepsNumbers .num').removeClass('active')
                    let slide = $(this).attr('data-slide');
                    slider.slick('slickGoTo', slide);
                    $(this).addClass('active')
                })
            })
        }

    }

    if ($('.cosmetics').length > 0) {

        $('.cosmeticsList .cosmetic').map(function () {

            let name = $(this).find('.name')
            let plus = $(this).find('.plus')

            name.on('click', function (e) {
                e.preventDefault()
                cosmeticsClickhandler($(this))
            })

            plus.on('click', function (e) {
                e.preventDefault()
                cosmeticsClickhandler($(this))

            })

        })

    }

    if ($('.recipesList').length > 0) {
        $('.recipesList .item').map(function () {
            let head = $(this).find('.title')
            let content = $(this).find('.text')



            if (head.hasClass('opened')) {
                content.stop().slideDown()
            }

            head.on('click', function () {

                $('.recipesList .item .title').removeClass('opened')
                $('.recipesList .item .text').stop().slideUp()

                if (head.hasClass('opened')) {
                    content.stop().slideUp()
                    head.removeClass('opened')
                } else {
                    content.stop().slideDown()
                    head.addClass('opened')
                }
            })
        })
    }

})

$(window).resize(function () {
    if ($('.steps').length > 0) {
        if ($(window).width() < 768) {
            let slider = $('.steps')
            // slider.not('.slick-initialized').slick('refresh');
            stepSliderInit()
            dotsSliderPosition(slider)
        }
    }
});


function cosmeticsClickhandler(event) {
    let nameCosmetic = $('.cosmetic .name')
    let plusCosmetic = $('.cosmetic .plus')
    let infoCosmetic = $('.cosmetic .info')
    let parents = event.parents('.cosmetic')

    if (event.hasClass('open')) {
        nameCosmetic.removeClass('open')
        plusCosmetic.removeClass('open')
        infoCosmetic.stop().slideUp()
    } else {
        nameCosmetic.removeClass('open')
        plusCosmetic.removeClass('open')
        infoCosmetic.stop().slideUp()

        event.stop().addClass('open')
        parents.find('.plus').stop().addClass('open')
        parents.find('.name').stop().addClass('open')
        parents.find('.info').stop().slideDown()
    }

}

function dotsSliderPosition(parents) {

    let prev = parents.find('.slick-prev')
    let next = parents.find('.slick-next')
    let dotsPosition = parents.find('.slick-dots li').width() * parents.find('.slick-dots li').length

    prev.css('margin-left', -dotsPosition - 50)
    next.css('margin-left', dotsPosition + 50)

}

function initialSlideSliders(count) {

    if (count <= 2) {
        count = 0
    } else {
        count = Math.floor(count / 2)
    }
    return count

}

function stepSliderInit() {
    $('.steps').not('.slick-initialized').slick({
        initialSlide: 0,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
}