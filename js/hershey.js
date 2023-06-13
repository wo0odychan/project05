$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });


    $('.main_slide').on('init afterChange', function (e, s, c) {
        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on').siblings().removeClass('on');
    });


    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on');
    });


})