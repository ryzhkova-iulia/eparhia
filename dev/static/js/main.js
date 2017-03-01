;
// Начинать писать отсюда!!!!
// ymaps.ready(function() {
//     var myMap = new ymaps.Map("map", {
//             center: [55.864005, 37.677292],
//             zoom: 16
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//         myPlacemark = new ymaps.Placemark([55.864005, 37.677292], {
//             // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
//             iconCaption: 'ул. Коминтерна, д.7, к.2'
//             // balloonContentFooter: "Подвал",
//         }, {
//             preset : 'islands#redDotIconWithCaption'
//         });
//
//     myMap.geoObjects.add(myPlacemark);
//     myMap.behaviors.disable('scrollZoom');
//     myMap.controls
//         .remove('trafficControl')
//         .remove('searchControl')
//         .remove('typeSelector')
//         .remove('geolocationControl')
//         .remove('fullscreenControl')
//         .remove('rulerControl');
// });


// slider
$(function () {
    $('.js-slider-cherch').slick({
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

    // form callback
    $('.js-popup-form').magnificPopup({
        items: {
            src: '#popup-form',
            type: 'inline'
        }
    });

});