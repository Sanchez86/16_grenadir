/*кнопка на верх*/

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function () {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

/* конец кнопка на верх*/


/*menu*/
/*
    $(".dropdown").on('mouseenter', function () {
        $(this).children("i").toggleClass("fa-caret-up fa-caret-down")
    });
    $(".dropdown").on('mouseleave', function () {
        $(this).children("i").toggleClass("fa-caret-up fa-caret-down")
    });
*/

if (device.ipad() === true) {
    if (device.landscape()){
        $('.subVideo ').css('height', '576px');
    } else {
        $('.subVideo ').css('height', '432px');
    }
}

$(".dropdown").on('mouseenter', function () {
    $('.fa-caret-down',this).css({
        'transform': 'rotateZ(540deg)',
        'transition': 'transform 1s'
        })
});
$(".dropdown").on('mouseleave', function () {
    $('.fa-caret-down', this).css({
        'transform': 'rotateZ(0deg)',
        'transition': 'transform 1s'
    })
});

function get_random_color() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

$(".colorInfoblock").on('mouseenter', function () {
    $(this).css({
        'background-color': get_random_color(),
        'transition': 'background-color 0.5s'
    })
});

$(".colorInfoblock").on('mouseleave', function () {
    $(this).css({
        'background-color': get_random_color(),
        'transition': 'background-color 0.5s'
    })
});



$(".circle").on('mouseenter', function () {
    $(this).css({
        'background-color': get_random_color(),
        'transition': 'background-color 0.5s'
    })
});

$(".circle").on('mouseleave', function () {
    $(this).css({
        'background-color': get_random_color(),
        'transition': 'background-color 0.5s'
    })
});


/*end menu*/


$(document).ready(function () {
    var $video = $('#video_welcome');

    $('.play').click(function () {
        $video[0].play();
        $(this).css('display', 'none');
        $('.stop').css('display', 'block');
    });
    $('#video_welcome').click(function () {
        if ($video[0].paused) {
            $video[0].play();
            $('.play').css('display', 'none');
            $('.stop').css('display', 'block');
        } else {
            $video[0].pause();
        }
    });

 

    $('.stop').click(function () {
        $video[0].pause();
        $(this).css('display', 'none');
        $('.play').css('display', 'block');
    });

    //----

    var $video2 = $('#lastNewsVideo');
    
    $('.lastNewsPlay1').on('touch click', function () {
        if (!$video3.readyState) {
            $video2[0].pause();
            $video2[0].play();
            $(this).css('display', 'none');
            $('.contLastNewsVideo1 h2').css('display', 'none');
            $('.contLastNewsVideo1 h3').css('display', 'none');
        }
    });

    $('#lastNewsVideo').click(function () {
        $video2[0].play();
        $('.contLastNewsVideo1 h2').css('display', 'none');
        $('.contLastNewsVideo1 h3').css('display', 'none');
    });

    if (!$video2.readyState) {
        $('#lastNewsVideo').click(function () {
            $video2[0].pause();
            $('.lastNewsPlay1').css('display', 'block');
            $('.contLastNewsVideo1 h2').css('display', 'block');
            $('.contLastNewsVideo1 h3').css('display', 'block');
            $('.lastNewsPlay1').css('background-image', 'none');
            $('.lastNewsPlay1 .glyphicon').css({ 'font-size':'32px' });
            
            
        });
    }

    //----


    var $video3 = $('#lastNewsVideo2');

    $('.lastNewsPlay2').click(function () {
        if (!$video2.readyState) {
            $video2[0].pause();
            $video3[0].play();
            $(this).css('display', 'none');
            $('.contLastNewsVideo2 h2').css('display', 'none');
            $('.contLastNewsVideo2 h3').css('display', 'none');
        }
    });

    $('#lastNewsVideo2').click(function () {
        if (!$video2.readyState) {
            $video2[0].pause();
            $video3[0].play();
            $('.contLastNewsVideo2 h2').css('display', 'none');
            $('.contLastNewsVideo2 h3').css('display', 'none');
        }
    });
    
    if (!$video3.readyState) {
        $('#lastNewsVideo2').click(function () {
            $video3[0].pause();
            $('.lastNewsPlay2').css('display', 'block');
            $('.contLastNewsVideo2 h2').css('display', 'block');
            $('.contLastNewsVideo2 h3').css('display', 'block');
            $('.lastNewsPlay2').css('background-image', 'none');
            $('.lastNewsPlay2 .glyphicon').css({ 'font-size': '32px' });
        });
    }
 
    

});

$(document).ready(function () {
    $("#single_1").fancybox({
        helpers: {
            title: {
                type: 'float'
            }
        }
    });

    $("#single_2").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',

        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    $("#single_3").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            title: {
                type: 'outside'
            }
        }
    });

    $("#single_4").fancybox({
        helpers: {
            title: {
                type: 'over'
            }
        }
    });
});



/*-------------------------------------------------*/

var map;
var mapCoordinates = new google.maps.LatLng(50.447884, 30.529251);

var markers = [];
var image = new google.maps.MarkerImage('images/marker.png', // иконка
new google.maps.Size(38, 62), // размеры иконок
new google.maps.Point(0, 0),
new google.maps.Point(42, 56)
);

function addMarker() {
    markers.push(new google.maps.Marker({
        position: mapCoordinates,
        raiseOnDrag: false,
        icon: image,
        map: map,
        draggable: false
    }));
}


function initialize() {
    var mapOptions = {
        backgroundColor: "#ffffff", // цвет фона
        zoom: 8, // масштаб
        disableDefaultUI: true,
        draggable: true,
        scrollwheel: true,
        center: mapCoordinates,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        //----------- стили ----------
        styles: [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }]
        //------------конец --------------
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    addMarker(); // вызов функции
}
google.maps.event.addDomListener(window, 'load', initialize);




