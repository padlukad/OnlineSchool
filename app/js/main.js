$(function() {

    $('.header__btn').on('click', function(){
        $('.phone-box').addClass('phone-active');
    });
    $('.close-btn').on('click', function(){
        $('.phone-box').removeClass('phone-active');
    });

    $(".phone-input").mask("+38 (099) 999 99 99");

    $('.sign-link').on('click', function(){
        $('.forms').addClass('forms-active');
    });

    $('.form__link').on('click', function(){
        $('.forms').removeClass('forms-active');
    });
    $('.form').submit(function(){
        $('.forms').removeClass('forms-active');
    });

    $('.up, .lock, .logo').on('click', function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });

    $('.course__toggle').on('click', function(){
        $(this).next().slideToggle();
        $(this).find('.course__toggle-imgbox').toggleClass('course__toggle-imgbox--active');
    });

    $('.newsboard__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM22 5.25L1 5.25V6.75L22 6.75V5.25Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5303 5.46967C21.8232 5.76256 21.8232 6.23744 21.5303 6.53033L16.7574 11.3033C16.4645 11.5962 15.9896 11.5962 15.6967 11.3033C15.4038 11.0104 15.4038 10.5355 15.6967 10.2426L19.9393 6L15.6967 1.75736C15.4038 1.46447 15.4038 0.989593 15.6967 0.696699C15.9896 0.403806 16.4645 0.403806 16.7574 0.696699L21.5303 5.46967ZM0 5.25L21 5.25V6.75L0 6.75L0 5.25Z" fill="white"/></svg></button>',
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false
    });
    
    $('.vacancy__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM22 5.25L1 5.25V6.75L22 6.75V5.25Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5303 5.46967C21.8232 5.76256 21.8232 6.23744 21.5303 6.53033L16.7574 11.3033C16.4645 11.5962 15.9896 11.5962 15.6967 11.3033C15.4038 11.0104 15.4038 10.5355 15.6967 10.2426L19.9393 6L15.6967 1.75736C15.4038 1.46447 15.4038 0.989593 15.6967 0.696699C15.9896 0.403806 16.4645 0.403806 16.7574 0.696699L21.5303 5.46967ZM0 5.25L21 5.25V6.75L0 6.75L0 5.25Z" fill="white"/></svg></button>',
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false
    });

    $('.form__select').styler();
});