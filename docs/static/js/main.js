
// slider
$(function () {
    $('.js-slider-church').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 908,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.js-slide-small').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
    });

    // form callback
    $('.js-popup-form').magnificPopup({
        items: {
            src: '#popup-form',
            type: 'inline'
        }
    });

     ymaps.ready(function() {
         var myMap = new ymaps.Map("map", {
                 center: [55.837025, 37.293038],
                 zoom: 16
             }, {
                 searchControlProvider: 'yandex#search'
             }),
             myPlacemark = new ymaps.Placemark([55.837025, 37.293038], {
                 // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                 iconCaption: ' ул. Ленина, 67а'
                 // balloonContentFooter: "Подвал",
             }, {
                 preset : 'islands#redDotIconWithCaption'
             });

         myMap.geoObjects.add(myPlacemark);
         myMap.behaviors.disable('scrollZoom');
         myMap.controls
             .remove('trafficControl')
             .remove('searchControl')
             .remove('typeSelector')
             .remove('geolocationControl')
             .remove('fullscreenControl')
             .remove('rulerControl');
     });

     $('input[name="phone"]').mask("+7 (999) 999-99-99",{placeholder:"_"});

});


//select2
$(function () {
    $(".js-box-select").each(function () {
        var $target = $(this);
        var $select = $target.find(".search__box-select");
        var $button = $target.find(".search-btn");
        var $customOptionsElement = $("<ul class='box-select'></ul>");
        $select.before($customOptionsElement);

        $target.on("click", ".search__select-btn", function () {
            $customOptionsElement.toggleClass("show");
        });

        $target.on("click", ".box-select__item", function () {
            var $option = $(this);
            $customOptionsElement.toggleClass("show");
            $button.html($option.html());
            $select.val($option.data("option"));
            $option.parent().find(".active").removeClass("active");
            $option.addClass("active");
        });

        $select.find("option").each(function () {
            var $optionTarget = $(this);
            $customOptionsElement.append("<li class='box-select__item" + (this.selected ? " active" : "") + "' data-option='" + $optionTarget.val() + "'>" + $optionTarget.html() + "</li>");
        });
    });
});


$(function () {
    $("#mapcontainer").css("width", "100%");
});
