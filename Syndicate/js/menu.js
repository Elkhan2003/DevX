$(document).ready(function () {
        $('.header__burger').click(function () {
                $('.header__burger,.header__menu').toggleClass('active')
                $('body').toggleClass('lock')
        });
});