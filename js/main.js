
$(document).ready(function () {

    // burger menu --------- //
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header__bottom-menu').toggleClass('active');
    });

    // accordion --------- //
    $('.question__accordeon-header').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.question__accordeon-body').slideToggle();
    });


    // scroll top
    $('.footer__btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

});