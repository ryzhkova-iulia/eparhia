


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

});