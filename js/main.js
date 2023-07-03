
$(document).ready(function () {

    // burger menu --------- //
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header__bottom-menu').toggleClass('active');
    });

    // mobile menu --------- //
    $('.header__bottom-menu a').on('click', function () {
        $('.header__bottom-menu').removeClass('active');
        $('.burger-btn').toggleClass('active');
    });

    $(".scrolllink").on("click", 'a', function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 130;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    // accordion --------- //
    $('.question__accordeon-header').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.question__accordeon-body').slideToggle();
    });



});